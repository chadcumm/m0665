import {
  CustomService,
  MPageService,
  ToastService
} from "./chunk-HDP72ZWW.js";
import {
  ServiceRegistryService
} from "./chunk-JO2ZN4L5.js";
import {
  Injectable,
  ParameterLibraryService,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-M5ONDEQN.js";

// src/app/services/dminfo-config.service.ts
var INFO_DOMAIN = "DWSV";
var INFO_NAME = "APP_CONFIG";
var TIMEOUT_MS = 5e3;
var DmInfoConfigService = class _DmInfoConfigService {
  customService = inject(CustomService);
  mPage = inject(MPageService);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /**
   * Save the provided configuration bundle to the Cerner database via DMInfo,
   * scoped to the given prsnlId.
   */
  async saveToDatabase(prsnlId, bundle) {
    this.saving.set(true);
    try {
      const dmInfo = this.customService.emptyDmInfo;
      dmInfo.infoDomain = INFO_DOMAIN;
      dmInfo.infoName = INFO_NAME;
      dmInfo.infoDomainId = prsnlId;
      dmInfo.infoLongText = JSON.stringify(bundle);
      const result = await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`Save timed out after ${TIMEOUT_MS / 1e3} seconds`)), TIMEOUT_MS);
        try {
          this.customService.executeDmInfoAction("dwsv_save", "w", [dmInfo], () => {
            clearTimeout(timer);
            resolve({ success: true, message: "Configuration saved to database" });
          });
        } catch (err) {
          clearTimeout(timer);
          reject(new Error(`DMInfo save failed: ${err.message}`));
        }
      });
      this.mPage.putLog("DmInfoConfigService: Configuration saved to database");
      return result;
    } catch (err) {
      this.mPage.putLog(`DmInfoConfigService: Save failed - ${err.message}`);
      throw err;
    } finally {
      this.saving.set(false);
    }
  }
  /**
   * Load configuration from the Cerner database via DMInfo for the given
   * prsnlId and return the raw bundle without importing into any services.
   */
  async loadFromDatabase(prsnlId) {
    this.loading.set(true);
    try {
      const dmInfo = this.customService.emptyDmInfo;
      dmInfo.infoDomain = INFO_DOMAIN;
      dmInfo.infoName = INFO_NAME;
      dmInfo.infoDomainId = prsnlId;
      const result = await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(`Load timed out after ${TIMEOUT_MS / 1e3} seconds`)), TIMEOUT_MS);
        try {
          this.customService.executeDmInfoAction("dwsv_load", "r", [dmInfo], () => {
            clearTimeout(timer);
            try {
              const response = this.customService.get("dwsv_load");
              const longText = response?.dmInfo?.[0]?.longText ?? response?.longText ?? response?.infoLongText;
              if (!longText) {
                resolve({ success: true, message: "No saved configuration found" });
                return;
              }
              const bundle = JSON.parse(longText);
              resolve({
                success: true,
                message: "Configuration loaded from database",
                bundle
              });
            } catch (err) {
              reject(new Error(`Failed to parse database configuration: ${err.message}`));
            }
          });
        } catch (err) {
          clearTimeout(timer);
          reject(new Error(`DMInfo load failed: ${err.message}`));
        }
      });
      this.mPage.putLog(`DmInfoConfigService: ${result.message}`);
      return result;
    } catch (err) {
      this.mPage.putLog(`DmInfoConfigService: Load failed - ${err.message}`);
      throw err;
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = function DmInfoConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DmInfoConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DmInfoConfigService, factory: _DmInfoConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DmInfoConfigService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/user-config.service.ts
var UserConfigService = class _UserConfigService {
  mPage = inject(MPageService);
  dmInfo = inject(DmInfoConfigService);
  paramLibrary = inject(ParameterLibraryService);
  registry = inject(ServiceRegistryService);
  toast = inject(ToastService);
  /** The current defaults.json version (set during app init) */
  _currentDefaultsVersion = signal("", ...ngDevMode ? [{ debugName: "_currentDefaultsVersion" }] : []);
  /** Whether user config has been loaded from the database */
  loaded = signal(false, ...ngDevMode ? [{ debugName: "loaded" }] : []);
  /** Whether user config is currently loading */
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** The prsnlId of the currently loaded user */
  prsnlId = signal(0, ...ngDevMode ? [{ debugName: "prsnlId" }] : []);
  /** Whether shipped defaults have changed since user's last acknowledgement */
  defaultsChanged = signal(false, ...ngDevMode ? [{ debugName: "defaultsChanged" }] : []);
  /** The version the user last acknowledged */
  lastAcknowledgedVersion = signal("", ...ngDevMode ? [{ debugName: "lastAcknowledgedVersion" }] : []);
  /** Current defaults version from defaults.json */
  currentDefaultsVersion = this._currentDefaultsVersion.asReadonly();
  /** Whether there are local changes not yet saved to the database */
  hasUnsavedChanges = signal(false, ...ngDevMode ? [{ debugName: "hasUnsavedChanges" }] : []);
  /** Snapshot of the last bundle saved/loaded from the database */
  _lastSavedSnapshot = "";
  /**
   * Called by app initializer to set the current defaults version
   * from the loaded defaults.json data.
   */
  setCurrentDefaultsVersion(version) {
    this._currentDefaultsVersion.set(version);
  }
  /**
   * Load user configuration from the database.
   * Called after Clinical Office is ready and prsnlId is available.
   */
  async loadUserConfig(prsnlId) {
    if (!prsnlId || prsnlId <= 0) {
      this.mPage.putLog("UserConfigService: No prsnlId available, using defaults only");
      this.loaded.set(true);
      return;
    }
    this.loading.set(true);
    this.prsnlId.set(prsnlId);
    try {
      const result = await this.dmInfo.loadFromDatabase(prsnlId);
      if (result.bundle) {
        this.applyBundle(result.bundle);
        this.checkDefaultsVersion(result.bundle.lastAcknowledgedDefaultsVersion);
        this._lastSavedSnapshot = JSON.stringify(this.buildBundle());
        this.hasUnsavedChanges.set(false);
        this.mPage.putLog(`UserConfigService: Loaded config for prsnlId=${prsnlId}`);
      } else {
        try {
          const globalResult = await this.dmInfo.loadFromDatabase(0);
          if (globalResult.bundle) {
            this.applyBundle(globalResult.bundle);
            this.mPage.putLog(`UserConfigService: Migrated global config to prsnlId=${prsnlId}`);
            await this.saveUserConfig();
            this.toast.show("Your configuration has been migrated to your personal account", "info");
          } else {
            this.mPage.putLog(`UserConfigService: No saved config found, using defaults`);
          }
        } catch {
          this.mPage.putLog(`UserConfigService: Global config migration failed, using defaults`);
        }
      }
    } catch (err) {
      this.mPage.putLog(`UserConfigService: Failed to load config - ${err.message}`);
      this.toast.show("Failed to load your saved configuration", "error", 5e3);
    } finally {
      this.loading.set(false);
      this.loaded.set(true);
    }
  }
  /**
   * Save the current configuration state to the database for the current user.
   */
  async saveUserConfig() {
    const id = this.prsnlId();
    if (!id || id <= 0) {
      return { success: false, message: "No user ID available" };
    }
    const bundle = this.buildBundle();
    try {
      const result = await this.dmInfo.saveToDatabase(id, bundle);
      this._lastSavedSnapshot = JSON.stringify(bundle);
      this.hasUnsavedChanges.set(false);
      this.toast.show("Configuration saved", "success");
      return result;
    } catch (err) {
      this.toast.show(`Save failed: ${err.message}`, "error", 5e3);
      throw err;
    }
  }
  /**
   * Acknowledge the current defaults version.
   * Called when user dismisses the "defaults changed" banner.
   */
  async acknowledgeDefaults() {
    this.lastAcknowledgedVersion.set(this._currentDefaultsVersion());
    this.defaultsChanged.set(false);
    await this.saveUserConfig();
  }
  /**
   * Check if the current config differs from the last saved version.
   * Call this after the user makes changes.
   */
  checkForUnsavedChanges() {
    if (!this._lastSavedSnapshot)
      return;
    const current = JSON.stringify(this.buildBundle());
    this.hasUnsavedChanges.set(current !== this._lastSavedSnapshot);
  }
  /**
   * Build a UserConfigBundle from the current in-memory state.
   * Stores only user deltas (custom/modified items), not the full merged set.
   */
  buildBundle() {
    return {
      version: 3,
      lastAcknowledgedDefaultsVersion: this.lastAcknowledgedVersion() || this._currentDefaultsVersion(),
      parameterTypes: this.paramLibrary.exportUserTypes(),
      services: this.registry.exportUserServices(),
      deletedServiceDefaults: this.registry.deletedDefaults,
      deletedParamDefaults: this.paramLibrary.deletedDefaults,
      uiPreferences: {}
    };
  }
  /**
   * Apply a loaded bundle into the parameter library and service registry.
   * Restores user customizations AND deleted-defaults tracking.
   */
  applyBundle(bundle) {
    if (bundle.parameterTypes?.length) {
      this.paramLibrary.importTypes(bundle.parameterTypes);
    }
    if (bundle.deletedParamDefaults?.length) {
      this.paramLibrary.restoreDeletedDefaults(bundle.deletedParamDefaults);
    }
    if (bundle.services?.length) {
      this.registry.importServices(JSON.stringify(bundle.services));
    }
    if (bundle.deletedServiceDefaults?.length) {
      this.registry.restoreDeletedDefaults(bundle.deletedServiceDefaults);
    }
    this.lastAcknowledgedVersion.set(bundle.lastAcknowledgedDefaultsVersion || "");
  }
  /**
   * Check if shipped defaults have changed since the user's last ack.
   */
  checkDefaultsVersion(userVersion) {
    const current = this._currentDefaultsVersion();
    if (!userVersion || !current)
      return;
    if (userVersion !== current) {
      this.defaultsChanged.set(true);
      this.mPage.putLog(`UserConfigService: Defaults changed (user acked ${userVersion}, current is ${current})`);
    }
  }
  static \u0275fac = function UserConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserConfigService, factory: _UserConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserConfigService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  UserConfigService
};
//# sourceMappingURL=chunk-5W6PGVRE.js.map
