import {
  CustomService,
  MPageService
} from "./chunk-STV2LTN5.js";
import {
  ServiceRegistryService
} from "./chunk-4WBWXEOH.js";
import {
  HelpModal,
  ParameterLibraryService
} from "./chunk-LEU7KL6O.js";
import {
  ChangeDetectionStrategy,
  Component,
  DefaultValueAccessor,
  FormsModule,
  Injectable,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-ZHUMCYTK.js";
import "./chunk-KWSTWQNB.js";

// src/app/services/dminfo-config.service.ts
var INFO_DOMAIN = "DWSV";
var INFO_NAME = "APP_CONFIG";
var TIMEOUT_MS = 5e3;
var DmInfoConfigService = class _DmInfoConfigService {
  customService = inject(CustomService);
  mPage = inject(MPageService);
  paramLibrary = inject(ParameterLibraryService);
  registry = inject(ServiceRegistryService);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /**
   * Save the current custom configuration to the Cerner database via DMInfo.
   * Bundles custom parameter types and custom service definitions into a single
   * JSON payload stored as infoLongText.
   */
  async saveToDatabase() {
    this.saving.set(true);
    try {
      const bundle = {
        version: 1,
        parameterTypes: this.paramLibrary.exportAllTypes(),
        services: this.registry.allServices().filter((s) => !s.builtIn)
      };
      const dmInfo = this.customService.emptyDmInfo;
      dmInfo.infoDomain = INFO_DOMAIN;
      dmInfo.infoName = INFO_NAME;
      dmInfo.infoDomainId = 0;
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
   * Load configuration from the Cerner database via DMInfo and import into
   * the parameter library and service registry.
   */
  async loadFromDatabase() {
    this.loading.set(true);
    try {
      const dmInfo = this.customService.emptyDmInfo;
      dmInfo.infoDomain = INFO_DOMAIN;
      dmInfo.infoName = INFO_NAME;
      dmInfo.infoDomainId = 0;
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
              const paramResult = this.paramLibrary.importTypes(bundle.parameterTypes || []);
              const serviceResult = this.registry.importServices(JSON.stringify(bundle.services || []));
              const totalImported = paramResult.imported + serviceResult.imported;
              const totalSkipped = paramResult.skipped + serviceResult.skipped;
              resolve({
                success: true,
                message: `Loaded ${totalImported} items from database, skipped ${totalSkipped} duplicates`,
                imported: totalImported,
                skipped: totalSkipped
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

// src/app/pages/config-editor/config-editor.ts
var _c0 = ["treeContainer"];
var _forTrack0 = ($index, $item) => $item.value;
function ConfigEditor_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function ConfigEditor_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.importMessage());
  }
}
function ConfigEditor_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.parseError(), " ");
  }
}
function ConfigEditor_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusMessage());
  }
}
function ConfigEditor_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 30);
    \u0275\u0275listener("ngModelChange", function ConfigEditor_Conditional_55_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditorChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.editorContent());
  }
}
function ConfigEditor_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25, 0);
  }
}
function ConfigEditor_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Modified");
    \u0275\u0275elementEnd();
  }
}
function ConfigEditor_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-help-modal", 31);
    \u0275\u0275listener("closeRequested", function ConfigEditor_Conditional_63_Template_app_help_modal_closeRequested_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.helpOpen.set(false));
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Edit the app's configuration as raw JSON. Changes are applied to localStorage when you click Apply.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "table")(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody")(15, "tr")(16, "td")(17, "strong");
    \u0275\u0275text(18, "Parameter Library");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20, "Custom parameter types (localStorage key: dwsv_parameter_library)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tr")(22, "td")(23, "strong");
    \u0275\u0275text(24, "Parameter Overrides");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, "Overrides applied to built-in parameter types (dwsv_parameter_overrides)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr")(28, "td")(29, "strong");
    \u0275\u0275text(30, "Service Registry");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "Custom service definitions (dwsv_service_registry)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "tr")(34, "td")(35, "strong");
    \u0275\u0275text(36, "Full Bundle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38, "Combined export of all custom types, overrides, and services");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "h2");
    \u0275\u0275text(40, "Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul")(42, "li")(43, "strong");
    \u0275\u0275text(44, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " -- Raw JSON text editor. Edit directly, format with the Format button.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li")(47, "strong");
    \u0275\u0275text(48, "Tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " -- Interactive tree view. Expand/collapse nodes, edit values inline.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "h2");
    \u0275\u0275text(51, "Applying Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53, "Click ");
    \u0275\u0275elementStart(54, "strong");
    \u0275\u0275text(55, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " to write changes to localStorage. The app will reload the affected data immediately. For Full Bundle mode, both parameter types and services are updated.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p")(58, "strong");
    \u0275\u0275text(59, "Warning:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Invalid JSON cannot be applied. Fix syntax errors first.");
    \u0275\u0275elementEnd()();
  }
}
var ConfigEditor = class _ConfigEditor {
  paramLibrary = inject(ParameterLibraryService);
  registry = inject(ServiceRegistryService);
  dmInfoConfig = inject(DmInfoConfigService);
  MPage = inject(MPageService);
  importMessage = signal(null, ...ngDevMode ? [{ debugName: "importMessage" }] : []);
  dbSaving = signal(false, ...ngDevMode ? [{ debugName: "dbSaving" }] : []);
  dbLoading = signal(false, ...ngDevMode ? [{ debugName: "dbLoading" }] : []);
  selectedSection = signal("bundle", ...ngDevMode ? [{ debugName: "selectedSection" }] : []);
  viewMode = signal("code", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  editorContent = signal("", ...ngDevMode ? [{ debugName: "editorContent" }] : []);
  originalContent = signal("", ...ngDevMode ? [{ debugName: "originalContent" }] : []);
  parseError = signal(null, ...ngDevMode ? [{ debugName: "parseError" }] : []);
  hasChanges = computed(() => this.editorContent() !== this.originalContent(), ...ngDevMode ? [{ debugName: "hasChanges" }] : []);
  statusMessage = signal(null, ...ngDevMode ? [{ debugName: "statusMessage" }] : []);
  helpOpen = signal(false, ...ngDevMode ? [{ debugName: "helpOpen" }] : []);
  sectionLabel = computed(() => this.sections.find((s) => s.value === this.selectedSection())?.label ?? "", ...ngDevMode ? [{ debugName: "sectionLabel" }] : []);
  treeContainer = viewChild("treeContainer", ...ngDevMode ? [{ debugName: "treeContainer" }] : []);
  editorInstance = null;
  sections = [
    { label: "Parameter Library (Custom)", value: "parameters" },
    { label: "Parameter Overrides", value: "overrides" },
    { label: "Service Registry (Custom)", value: "services" },
    { label: "Full Bundle", value: "bundle" }
  ];
  constructor() {
    effect(() => {
      const mode = this.viewMode();
      const content = this.editorContent();
      if (mode === "tree") {
        setTimeout(() => this.initTreeEditor(), 0);
      }
    });
  }
  ngAfterViewInit() {
    this.loadSection("bundle");
  }
  ngOnDestroy() {
    if (this.editorInstance) {
      this.editorInstance.destroy();
    }
  }
  loadSection(section) {
    this.selectedSection.set(section);
    this.statusMessage.set(null);
    this.parseError.set(null);
    let content = "";
    switch (section) {
      case "parameters": {
        const stored = localStorage.getItem("dwsv_parameter_library");
        content = stored ? this.tryFormat(stored) : "[]";
        break;
      }
      case "overrides": {
        const stored = localStorage.getItem("dwsv_parameter_overrides");
        content = stored ? this.tryFormat(stored) : "{}";
        break;
      }
      case "services": {
        const stored = localStorage.getItem("dwsv_service_registry");
        content = stored ? this.tryFormat(stored) : "[]";
        break;
      }
      case "bundle": {
        const bundle = {
          version: 1,
          parameterTypes: this.paramLibrary.exportAllTypes(),
          overrides: JSON.parse(localStorage.getItem("dwsv_parameter_overrides") || "{}"),
          services: this.registry.allServices().filter((s) => !s.builtIn)
        };
        content = JSON.stringify(bundle, null, 2);
        break;
      }
    }
    this.editorContent.set(content);
    this.originalContent.set(content);
  }
  onEditorChange(content) {
    this.editorContent.set(content);
    this.statusMessage.set(null);
    try {
      JSON.parse(content);
      this.parseError.set(null);
    } catch (e) {
      this.parseError.set(e.message || "Invalid JSON");
    }
  }
  formatJson() {
    try {
      const parsed = JSON.parse(this.editorContent());
      this.editorContent.set(JSON.stringify(parsed, null, 2));
      this.parseError.set(null);
    } catch (e) {
      this.parseError.set(e.message || "Invalid JSON");
    }
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.editorContent());
    this.statusMessage.set("Copied to clipboard");
    setTimeout(() => this.statusMessage.set(null), 2e3);
  }
  applyChanges() {
    let parsed;
    try {
      parsed = JSON.parse(this.editorContent());
    } catch (e) {
      this.parseError.set(e.message || "Invalid JSON");
      return;
    }
    const section = this.selectedSection();
    switch (section) {
      case "parameters":
        this.paramLibrary.replaceCustomTypes(parsed);
        break;
      case "overrides":
        this.paramLibrary.replaceOverrides(parsed);
        break;
      case "services":
        this.registry.replaceCustomServices(parsed);
        break;
      case "bundle":
        if (parsed.parameterTypes) {
          this.paramLibrary.importTypes(parsed.parameterTypes);
        }
        if (parsed.overrides) {
          this.paramLibrary.replaceOverrides(parsed.overrides);
        }
        if (parsed.services) {
          this.registry.replaceCustomServices(parsed.services);
        }
        break;
    }
    this.originalContent.set(this.editorContent());
    this.statusMessage.set("Changes applied successfully");
    setTimeout(() => this.statusMessage.set(null), 3e3);
  }
  exportBundle() {
    const bundle = {
      version: 1,
      parameterTypes: this.paramLibrary.exportAllTypes(),
      services: this.registry.allServices().filter((s) => !s.builtIn)
    };
    const json = JSON.stringify(bundle, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dwsv-bundle.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  importBundle(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (data.version) {
          const paramResult = this.paramLibrary.importTypes(data.parameterTypes || []);
          const serviceResult = this.registry.importServices(JSON.stringify(data.services || []));
          this.importMessage.set(`Imported ${serviceResult.imported} services, ${paramResult.imported} parameters, skipped ${serviceResult.skipped + paramResult.skipped}`);
        } else if (Array.isArray(data)) {
          const result = this.registry.importServices(JSON.stringify(data));
          this.importMessage.set(`Imported ${result.imported}, skipped ${result.skipped}`);
        } else {
          this.importMessage.set("Error: Unrecognized format");
        }
        this.loadSection(this.selectedSection());
        setTimeout(() => this.importMessage.set(null), 3e3);
      } catch {
        this.importMessage.set("Error: Invalid JSON file");
        setTimeout(() => this.importMessage.set(null), 3e3);
      }
    };
    reader.readAsText(file);
  }
  async saveToDatabase() {
    this.dbSaving.set(true);
    try {
      const result = await this.dmInfoConfig.saveToDatabase();
      this.importMessage.set(result.message);
      setTimeout(() => this.importMessage.set(null), 3e3);
    } catch (err) {
      this.importMessage.set("Error: " + err.message);
      setTimeout(() => this.importMessage.set(null), 3e3);
    } finally {
      this.dbSaving.set(false);
    }
  }
  async loadFromDatabase() {
    this.dbLoading.set(true);
    try {
      const result = await this.dmInfoConfig.loadFromDatabase();
      this.importMessage.set(result.message);
      this.loadSection(this.selectedSection());
      setTimeout(() => this.importMessage.set(null), 3e3);
    } catch (err) {
      this.importMessage.set("Error: " + err.message);
      setTimeout(() => this.importMessage.set(null), 3e3);
    } finally {
      this.dbLoading.set(false);
    }
  }
  tryFormat(json) {
    try {
      return JSON.stringify(JSON.parse(json), null, 2);
    } catch {
      return json;
    }
  }
  async initTreeEditor() {
    const container = this.treeContainer()?.nativeElement;
    if (!container)
      return;
    if (this.editorInstance) {
      this.editorInstance.destroy();
      this.editorInstance = null;
    }
    let parsed;
    try {
      parsed = JSON.parse(this.editorContent());
    } catch {
      return;
    }
    try {
      const vje = await import("./chunk-TDAIRDCY.js");
      const EditorClass = vje.JSONEditor;
      this.editorInstance = new EditorClass({
        target: container,
        props: {
          content: { json: parsed },
          mode: "tree",
          readOnly: false,
          mainMenuBar: true,
          navigationBar: true,
          onChange: (updatedContent) => {
            try {
              if (updatedContent.json !== void 0) {
                const text = JSON.stringify(updatedContent.json, null, 2);
                this.editorContent.set(text);
                this.parseError.set(null);
              } else if (updatedContent.text !== void 0) {
                this.editorContent.set(updatedContent.text);
                try {
                  JSON.parse(updatedContent.text);
                  this.parseError.set(null);
                } catch (e) {
                  this.parseError.set(e.message);
                }
              }
            } catch {
            }
          }
        }
      });
    } catch {
      container.innerHTML = `<pre style="padding:12px;overflow:auto;max-height:100%">${this.editorContent()}</pre>`;
    }
  }
  static \u0275fac = function ConfigEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigEditor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigEditor, selectors: [["app-config-editor"]], viewQuery: function ConfigEditor_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.treeContainer, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 64, vars: 20, consts: [["treeContainer", ""], [1, "config-editor-layout"], [1, "config-toolbar"], [1, "toolbar-left"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "mode-toggle"], [1, "btn", "btn-small", 3, "click"], [1, "material-icons"], [1, "btn", "btn-small", 3, "click", "disabled"], [1, "toolbar-right"], [1, "btn", "btn-small", "btn-ghost", 3, "click"], [1, "btn", "btn-small", "btn-primary", 3, "click", "disabled"], [1, "config-actions-bar"], [1, "actions-left"], ["title", "Export bundle to file", 1, "btn", "btn-small", 3, "click"], ["title", "Import bundle from file", 1, "btn", "btn-small", "import-btn"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], [1, "actions-right"], [1, "btn", "btn-small", 3, "click", "disabled", "title"], [1, "action-message"], [1, "error-banner"], [1, "status-banner"], [1, "editor-area"], ["spellcheck", "false", 1, "code-editor", 3, "ngModel"], [1, "tree-container"], [1, "status-bar"], [1, "modified-badge"], [1, "char-count"], ["title", "Config Editor Help"], ["spellcheck", "false", 1, "code-editor", 3, "ngModelChange", "ngModel"], ["title", "Config Editor Help", 3, "closeRequested"]], template: function ConfigEditor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "select", 4);
      \u0275\u0275listener("ngModelChange", function ConfigEditor_Template_select_ngModelChange_3_listener($event) {
        return ctx.loadSection($event);
      });
      \u0275\u0275repeaterCreate(4, ConfigEditor_For_5_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_7_listener() {
        return ctx.viewMode.set("code");
      });
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9, "code");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_11_listener() {
        return ctx.viewMode.set("tree");
      });
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13, "account_tree");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Tree ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_16_listener() {
        return ctx.helpOpen.set(true);
      });
      \u0275\u0275elementStart(17, "span", 8);
      \u0275\u0275text(18, "help_outline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 9);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_19_listener() {
        return ctx.formatJson();
      });
      \u0275\u0275elementStart(20, "span", 8);
      \u0275\u0275text(21, "format_align_left");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Format ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 7);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_23_listener() {
        return ctx.copyToClipboard();
      });
      \u0275\u0275elementStart(24, "span", 8);
      \u0275\u0275text(25, "content_copy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Copy ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 12);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_27_listener() {
        return ctx.applyChanges();
      });
      \u0275\u0275elementStart(28, "span", 8);
      \u0275\u0275text(29, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Apply ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 13)(32, "div", 14)(33, "button", 15);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_33_listener() {
        return ctx.exportBundle();
      });
      \u0275\u0275elementStart(34, "span", 8);
      \u0275\u0275text(35, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "label", 16)(38, "span", 8);
      \u0275\u0275text(39, "upload");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " Import ");
      \u0275\u0275elementStart(41, "input", 17);
      \u0275\u0275listener("change", function ConfigEditor_Template_input_change_41_listener($event) {
        return ctx.importBundle($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 18)(43, "button", 19);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_43_listener() {
        return ctx.saveToDatabase();
      });
      \u0275\u0275elementStart(44, "span", 8);
      \u0275\u0275text(45, "cloud_upload");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Save ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 19);
      \u0275\u0275listener("click", function ConfigEditor_Template_button_click_47_listener() {
        return ctx.loadFromDatabase();
      });
      \u0275\u0275elementStart(48, "span", 8);
      \u0275\u0275text(49, "cloud_download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Load ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(51, ConfigEditor_Conditional_51_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(52, ConfigEditor_Conditional_52_Template, 4, 1, "div", 21);
      \u0275\u0275conditionalCreate(53, ConfigEditor_Conditional_53_Template, 2, 1, "div", 22);
      \u0275\u0275elementStart(54, "div", 23);
      \u0275\u0275conditionalCreate(55, ConfigEditor_Conditional_55_Template, 1, 1, "textarea", 24)(56, ConfigEditor_Conditional_56_Template, 2, 0, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 26)(58, "span");
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(60, ConfigEditor_Conditional_60_Template, 2, 0, "span", 27);
      \u0275\u0275elementStart(61, "span", 28);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(63, ConfigEditor_Conditional_63_Template, 61, 0, "app-help-modal", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.selectedSection());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.sections);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-selected", ctx.viewMode() === "code");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-selected", ctx.viewMode() === "tree");
      \u0275\u0275property("disabled", ctx.parseError());
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !!ctx.parseError());
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", !ctx.hasChanges() || !!ctx.parseError());
      \u0275\u0275advance(16);
      \u0275\u0275property("disabled", !ctx.MPage.serviceReady || ctx.dbSaving())("title", ctx.MPage.serviceReady ? "Save to Cerner database" : "Clinical Office not available");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.MPage.serviceReady || ctx.dbLoading())("title", ctx.MPage.serviceReady ? "Load from Cerner database" : "Clinical Office not available");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.importMessage() ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.parseError() ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.statusMessage() ? 53 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.viewMode() === "code" ? 55 : 56);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.sectionLabel());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasChanges() ? 60 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.editorContent().length, " chars");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.helpOpen() ? 63 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HelpModal], styles: ["\n\n.config-editor-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 40px);\n}\n.config-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-anchor);\n  border-bottom: 1px solid var(--fusion-color-border);\n  flex-shrink: 0;\n  gap: var(--fusion-space-tight);\n}\n.config-toolbar[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%], \n.config-toolbar[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.config-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n}\n.config-toolbar[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.config-toolbar[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--fusion-border-radius) 0 0 var(--fusion-border-radius);\n}\n.config-toolbar[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 var(--fusion-border-radius) var(--fusion-border-radius) 0;\n  border-left: none;\n}\n.config-toolbar[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .btn.is-selected[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n  border-color: var(--fusion-color-primary);\n  color: var(--fusion-color-primary);\n}\n.config-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border-bottom: 1px solid var(--fusion-color-border);\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.config-actions-bar[_ngcontent-%COMP%]   .actions-left[_ngcontent-%COMP%], \n.config-actions-bar[_ngcontent-%COMP%]   .actions-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.config-actions-bar[_ngcontent-%COMP%]   .actions-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.config-actions-bar[_ngcontent-%COMP%]   .import-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.config-actions-bar[_ngcontent-%COMP%]   .action-message[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-primary);\n  padding-top: var(--fusion-space-very-tight);\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #fde8ea;\n  border-left: 4px solid var(--fusion-color-error);\n  color: #8b0013;\n  font-size: var(--fusion-text-sm);\n  flex-shrink: 0;\n}\n.error-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.status-banner[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #e6f4ea;\n  color: #1e6e35;\n  font-size: var(--fusion-text-sm);\n  flex-shrink: 0;\n}\n.editor-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.editor-area[_ngcontent-%COMP%]   .code-editor[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  resize: none;\n  border: none;\n  padding: var(--fusion-space-base);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  line-height: 1.5;\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  outline: none;\n  tab-size: 2;\n}\n.editor-area[_ngcontent-%COMP%]   .tree-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-base);\n  padding: var(--fusion-space-very-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-anchor);\n  border-top: 1px solid var(--fusion-color-border);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  flex-shrink: 0;\n}\n.status-bar[_ngcontent-%COMP%]   .modified-badge[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n  padding: 1px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-weight: 600;\n}\n.status-bar[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-family: var(--fusion-font-mono);\n}\n/*# sourceMappingURL=config-editor.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigEditor, [{
    type: Component,
    args: [{ selector: "app-config-editor", standalone: true, imports: [FormsModule, HelpModal], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="config-editor-layout">
  <!-- Toolbar -->
  <div class="config-toolbar">
    <div class="toolbar-left">
      <select [ngModel]="selectedSection()" (ngModelChange)="loadSection($event)">
        @for (s of sections; track s.value) {
          <option [value]="s.value">{{ s.label }}</option>
        }
      </select>
      <div class="mode-toggle">
        <button class="btn btn-small" [class.is-selected]="viewMode() === 'code'" (click)="viewMode.set('code')">
          <span class="material-icons">code</span> Code
        </button>
        <button class="btn btn-small" [class.is-selected]="viewMode() === 'tree'" (click)="viewMode.set('tree')" [disabled]="parseError()">
          <span class="material-icons">account_tree</span> Tree
        </button>
      </div>
    </div>
    <div class="toolbar-right">
      <button class="btn btn-small btn-ghost" (click)="helpOpen.set(true)">
        <span class="material-icons">help_outline</span>
      </button>
      <button class="btn btn-small" (click)="formatJson()" [disabled]="!!parseError()">
        <span class="material-icons">format_align_left</span> Format
      </button>
      <button class="btn btn-small" (click)="copyToClipboard()">
        <span class="material-icons">content_copy</span> Copy
      </button>
      <button class="btn btn-small btn-primary" (click)="applyChanges()" [disabled]="!hasChanges() || !!parseError()">
        <span class="material-icons">check</span> Apply
      </button>
    </div>
  </div>

  <!-- Import/Export/DB bar -->
  <div class="config-actions-bar">
    <div class="actions-left">
      <button class="btn btn-small" (click)="exportBundle()" title="Export bundle to file">
        <span class="material-icons">download</span> Export
      </button>
      <label class="btn btn-small import-btn" title="Import bundle from file">
        <span class="material-icons">upload</span> Import
        <input type="file" accept=".json" (change)="importBundle($event)" hidden />
      </label>
    </div>
    <div class="actions-right">
      <button class="btn btn-small"
        [disabled]="!MPage.serviceReady || dbSaving()"
        [title]="MPage.serviceReady ? 'Save to Cerner database' : 'Clinical Office not available'"
        (click)="saveToDatabase()">
        <span class="material-icons">cloud_upload</span> Save
      </button>
      <button class="btn btn-small"
        [disabled]="!MPage.serviceReady || dbLoading()"
        [title]="MPage.serviceReady ? 'Load from Cerner database' : 'Clinical Office not available'"
        (click)="loadFromDatabase()">
        <span class="material-icons">cloud_download</span> Load
      </button>
    </div>
    @if (importMessage()) {
      <div class="action-message">{{ importMessage() }}</div>
    }
  </div>

  @if (parseError()) {
    <div class="error-banner">
      <span class="material-icons">error</span>
      {{ parseError() }}
    </div>
  }

  @if (statusMessage()) {
    <div class="status-banner">{{ statusMessage() }}</div>
  }

  <!-- Editor -->
  <div class="editor-area">
    @if (viewMode() === 'code') {
      <textarea class="code-editor"
        [ngModel]="editorContent()"
        (ngModelChange)="onEditorChange($event)"
        spellcheck="false"></textarea>
    } @else {
      <div class="tree-container" #treeContainer></div>
    }
  </div>

  <!-- Status bar -->
  <div class="status-bar">
    <span>{{ sectionLabel() }}</span>
    @if (hasChanges()) {
      <span class="modified-badge">Modified</span>
    }
    <span class="char-count">{{ editorContent().length }} chars</span>
  </div>
</div>

<!-- Help Modal -->
@if (helpOpen()) {
  <app-help-modal title="Config Editor Help" (closeRequested)="helpOpen.set(false)">
    <h2>Overview</h2>
    <p>Edit the app's configuration as raw JSON. Changes are applied to localStorage when you click Apply.</p>
    <h2>Sections</h2>
    <table>
      <thead><tr><th>Section</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Parameter Library</strong></td><td>Custom parameter types (localStorage key: dwsv_parameter_library)</td></tr>
        <tr><td><strong>Parameter Overrides</strong></td><td>Overrides applied to built-in parameter types (dwsv_parameter_overrides)</td></tr>
        <tr><td><strong>Service Registry</strong></td><td>Custom service definitions (dwsv_service_registry)</td></tr>
        <tr><td><strong>Full Bundle</strong></td><td>Combined export of all custom types, overrides, and services</td></tr>
      </tbody>
    </table>
    <h2>Views</h2>
    <ul>
      <li><strong>Code</strong> -- Raw JSON text editor. Edit directly, format with the Format button.</li>
      <li><strong>Tree</strong> -- Interactive tree view. Expand/collapse nodes, edit values inline.</li>
    </ul>
    <h2>Applying Changes</h2>
    <p>Click <strong>Apply</strong> to write changes to localStorage. The app will reload the affected data immediately. For Full Bundle mode, both parameter types and services are updated.</p>
    <p><strong>Warning:</strong> Invalid JSON cannot be applied. Fix syntax errors first.</p>
  </app-help-modal>
}
`, styles: ["/* src/app/pages/config-editor/config-editor.scss */\n.config-editor-layout {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 40px);\n}\n.config-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-anchor);\n  border-bottom: 1px solid var(--fusion-color-border);\n  flex-shrink: 0;\n  gap: var(--fusion-space-tight);\n}\n.config-toolbar .toolbar-left,\n.config-toolbar .toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.config-toolbar select {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n}\n.config-toolbar .mode-toggle {\n  display: flex;\n  gap: 0;\n}\n.config-toolbar .mode-toggle .btn:first-child {\n  border-radius: var(--fusion-border-radius) 0 0 var(--fusion-border-radius);\n}\n.config-toolbar .mode-toggle .btn:last-child {\n  border-radius: 0 var(--fusion-border-radius) var(--fusion-border-radius) 0;\n  border-left: none;\n}\n.config-toolbar .mode-toggle .btn.is-selected {\n  background: var(--fusion-color-bg-selected);\n  border-color: var(--fusion-color-primary);\n  color: var(--fusion-color-primary);\n}\n.config-actions-bar {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border-bottom: 1px solid var(--fusion-color-border);\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.config-actions-bar .actions-left,\n.config-actions-bar .actions-right {\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.config-actions-bar .actions-right {\n  margin-left: auto;\n}\n.config-actions-bar .import-btn {\n  cursor: pointer;\n}\n.config-actions-bar .action-message {\n  width: 100%;\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-primary);\n  padding-top: var(--fusion-space-very-tight);\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #fde8ea;\n  border-left: 4px solid var(--fusion-color-error);\n  color: #8b0013;\n  font-size: var(--fusion-text-sm);\n  flex-shrink: 0;\n}\n.error-banner .material-icons {\n  font-size: 16px;\n}\n.status-banner {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #e6f4ea;\n  color: #1e6e35;\n  font-size: var(--fusion-text-sm);\n  flex-shrink: 0;\n}\n.editor-area {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.editor-area .code-editor {\n  width: 100%;\n  height: 100%;\n  resize: none;\n  border: none;\n  padding: var(--fusion-space-base);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  line-height: 1.5;\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  outline: none;\n  tab-size: 2;\n}\n.editor-area .tree-container {\n  height: 100%;\n  width: 100%;\n}\n.status-bar {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-base);\n  padding: var(--fusion-space-very-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-anchor);\n  border-top: 1px solid var(--fusion-color-border);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  flex-shrink: 0;\n}\n.status-bar .modified-badge {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n  padding: 1px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-weight: 600;\n}\n.status-bar .char-count {\n  margin-left: auto;\n  font-family: var(--fusion-font-mono);\n}\n/*# sourceMappingURL=config-editor.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigEditor, { className: "ConfigEditor", filePath: "src/app/pages/config-editor/config-editor.ts", lineNumber: 28 });
})();
export {
  ConfigEditor
};
//# sourceMappingURL=chunk-WXI6HI3E.js.map
