import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-YANIWAVR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/services/service-registry.service.ts
var USER_SERVICES_KEY = "dwsv_user_services";
var DELETED_DEFAULTS_KEY = "dwsv_deleted_service_defaults";
var ServiceRegistryService = class _ServiceRegistryService {
  _defaultServices = signal([], ...ngDevMode ? [{ debugName: "_defaultServices" }] : []);
  _userServices = signal([], ...ngDevMode ? [{ debugName: "_userServices" }] : []);
  _deletedDefaults = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "_deletedDefaults" }] : []);
  /** All available services (defaults with user overrides applied + purely custom) */
  allServices = computed(() => {
    const defaults = this._defaultServices();
    const userServices = this._userServices();
    const deleted = this._deletedDefaults();
    const userMap = new Map(userServices.map((s) => [s.id, s]));
    const merged = defaults.filter((d) => !deleted.has(d.id)).map((d) => userMap.get(d.id) || d);
    const defaultIds = new Set(defaults.map((d) => d.id));
    const custom = userServices.filter((s) => !defaultIds.has(s.id));
    return [...merged, ...custom];
  }, ...ngDevMode ? [{ debugName: "allServices" }] : []);
  constructor() {
    this.loadFromStorage();
  }
  /** Called by app initializer after loading defaults.json */
  loadDefaults(services) {
    this._defaultServices.set(services);
  }
  /** Get a service by ID */
  getService(id) {
    return this.allServices().find((s) => s.id === id);
  }
  /** Check if a service ID is from the defaults file */
  isDefault(id) {
    return this._defaultServices().some((s) => s.id === id);
  }
  /** Save/update a service definition to user storage */
  saveService(service) {
    this._userServices.update((services) => {
      const idx = services.findIndex((s) => s.id === service.id);
      if (idx >= 0) {
        const copy = [...services];
        copy[idx] = service;
        return copy;
      }
      return [...services, service];
    });
    this._deletedDefaults.update((set) => {
      const copy = new Set(set);
      copy.delete(service.id);
      return copy;
    });
    this.saveToStorage();
  }
  /** Add a service (backward-compatible — skips if ID exists) */
  addService(service) {
    if (this.allServices().some((s) => s.id === service.id))
      return;
    this.saveService(service);
  }
  /** Update a service definition (backward-compatible) */
  updateService(id, updates) {
    const existing = this.getService(id);
    if (!existing)
      return;
    this.saveService(__spreadProps(__spreadValues(__spreadValues({}, existing), updates), { id }));
  }
  /** Delete a service definition */
  deleteService(id) {
    this._userServices.update((services) => services.filter((s) => s.id !== id));
    if (this.isDefault(id)) {
      this._deletedDefaults.update((set) => new Set(set).add(id));
    }
    this.saveToStorage();
  }
  /** Remove a service (backward-compatible alias for deleteService) */
  removeService(id) {
    this.deleteService(id);
  }
  /** Reset a default service — remove user version and deleted marker */
  resetService(id) {
    this._userServices.update((services) => services.filter((s) => s.id !== id));
    this._deletedDefaults.update((set) => {
      const copy = new Set(set);
      copy.delete(id);
      return copy;
    });
    this.saveToStorage();
  }
  /** Reset everything — clear all user data, revert to pure defaults */
  resetAll() {
    this._userServices.set([]);
    this._deletedDefaults.set(/* @__PURE__ */ new Set());
    localStorage.removeItem(USER_SERVICES_KEY);
    localStorage.removeItem(DELETED_DEFAULTS_KEY);
    localStorage.removeItem("dwsv_service_registry");
  }
  /** Check if user has modified a default service */
  hasUserVersion(id) {
    return this._userServices().some((s) => s.id === id);
  }
  /** Export all service definitions as JSON */
  exportServices() {
    return JSON.stringify(this.allServices(), null, 2);
  }
  /** Import service definitions from JSON */
  importServices(json) {
    const services = JSON.parse(json);
    this._userServices.set(services);
    this._deletedDefaults.set(/* @__PURE__ */ new Set());
    this.saveToStorage();
    return { imported: services.length, skipped: 0 };
  }
  /** Replace all user services (for raw config editing) */
  replaceCustomServices(services) {
    this._userServices.set(services);
    this.saveToStorage();
  }
  loadFromStorage() {
    try {
      const stored = localStorage.getItem(USER_SERVICES_KEY);
      if (stored) {
        this._userServices.set(JSON.parse(stored));
      } else {
        const old = localStorage.getItem("dwsv_service_registry");
        if (old) {
          this._userServices.set(JSON.parse(old));
          this.saveToStorage();
          localStorage.removeItem("dwsv_service_registry");
        }
      }
    } catch {
    }
    try {
      const stored = localStorage.getItem(DELETED_DEFAULTS_KEY);
      if (stored) {
        this._deletedDefaults.set(new Set(JSON.parse(stored)));
      }
    } catch {
    }
  }
  saveToStorage() {
    localStorage.setItem(USER_SERVICES_KEY, JSON.stringify(this._userServices()));
    localStorage.setItem(DELETED_DEFAULTS_KEY, JSON.stringify([...this._deletedDefaults()]));
  }
  static \u0275fac = function ServiceRegistryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceRegistryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceRegistryService, factory: _ServiceRegistryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceRegistryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ServiceRegistryService
};
//# sourceMappingURL=chunk-ZPOP7CD7.js.map
