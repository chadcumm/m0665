import {
  ParameterLibraryService,
  ServiceRegistryService
} from "./chunk-QNOSEG5I.js";
import {
  ChangeDetectionStrategy,
  CheckboxControlValueAccessor,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  inject,
  setClassMetadata,
  signal,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZHUMCYTK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/pages/service-manager/service-manager.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.position;
function ServiceManager_For_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "built-in");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ServiceManager_For_11_Template_div_click_0_listener() {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectService(svc_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ServiceManager_For_11_Conditional_6_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const svc_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedServiceId() === svc_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r2.displayName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(svc_r2.programName);
    \u0275\u0275advance();
    \u0275\u0275conditional(svc_r2.builtIn ? 6 : -1);
  }
}
function ServiceManager_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ServiceManager_Conditional_24_Conditional_18_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_24_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ServiceManager_Conditional_24_Conditional_18_For_2_Conditional_7_Template, 2, 0, "span", 38);
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function ServiceManager_Conditional_24_Conditional_18_For_2_Template_button_click_8_listener() {
      const \u0275$index_90_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeParameterFromNew(\u0275$index_90_r6));
    });
    \u0275\u0275elementStart(9, "span", 4);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r7.position, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getParamTypeLabel(p_r7.parameterTypeKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", p_r7.parameterTypeKey, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r7.required ? 7 : -1);
  }
}
function ServiceManager_Conditional_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, ServiceManager_Conditional_24_Conditional_18_For_2_Template, 11, 4, "div", 34, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.newService().parameters);
  }
}
function ServiceManager_Conditional_24_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pt_r8 = ctx.$implicit;
    \u0275\u0275property("value", pt_r8.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", pt_r8.label, " (", pt_r8.key, ")");
  }
}
function ServiceManager_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h2");
    \u0275\u0275text(2, "Add New Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "label");
    \u0275\u0275text(5, "Program Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 21);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_24_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("programName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20)(8, "label");
    \u0275\u0275text(9, "Display Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 22);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_24_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("displayName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "label");
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 23);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_24_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "label");
    \u0275\u0275text(17, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ServiceManager_Conditional_24_Conditional_18_Template, 3, 0, "div", 24);
    \u0275\u0275elementStart(19, "div", 25)(20, "select", 26);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_24_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("parameterTypeKey", $event));
    });
    \u0275\u0275elementStart(21, "option", 27);
    \u0275\u0275text(22, "Select parameter type...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, ServiceManager_Conditional_24_For_24_Template, 2, 3, "option", 28, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 29)(26, "input", 30);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_24_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("required", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Required ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 8);
    \u0275\u0275listener("click", function ServiceManager_Conditional_24_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addParameterToNew());
    });
    \u0275\u0275elementStart(29, "span", 4);
    \u0275\u0275text(30, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Add ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 31)(33, "button", 32);
    \u0275\u0275listener("click", function ServiceManager_Conditional_24_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNewService());
    });
    \u0275\u0275elementStart(34, "span", 4);
    \u0275\u0275text(35, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Save Service ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 33);
    \u0275\u0275listener("click", function ServiceManager_Conditional_24_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelAddNew());
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r2.newService().programName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.newService().displayName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.newService().description);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r2.newService().parameters) == null ? null : tmp_4_0.length) ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.newParam().parameterTypeKey);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.parameterTypes());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.newParam().required);
  }
}
function ServiceManager_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ServiceManager_Conditional_25_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const svc_r10 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeService(svc_r10.id));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_25_For_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_25_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "optional");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_25_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("default: ", p_r11.defaultValueOverride);
  }
}
function ServiceManager_Conditional_25_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ServiceManager_Conditional_25_For_20_Conditional_7_Template, 2, 0, "span", 38)(8, ServiceManager_Conditional_25_For_20_Conditional_8_Template, 2, 0, "span", 44);
    \u0275\u0275conditionalCreate(9, ServiceManager_Conditional_25_For_20_Conditional_9_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r11.position, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getParamTypeLabel(p_r11.parameterTypeKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", p_r11.parameterTypeKey, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r11.required ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r11.defaultValueOverride ? 9 : -1);
  }
}
function ServiceManager_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 40)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ServiceManager_Conditional_25_Conditional_4_Template, 4, 0, "button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "label");
    \u0275\u0275text(7, "Program Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "code");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 42)(11, "label");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 42)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 24);
    \u0275\u0275repeaterCreate(19, ServiceManager_Conditional_25_For_20_Template, 10, 5, "div", 34, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r10 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(svc_r10.displayName);
    \u0275\u0275advance();
    \u0275\u0275conditional(!svc_r10.builtIn ? 4 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(svc_r10.programName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(svc_r10.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Parameters (", svc_r10.parameters.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(svc_r10.parameters);
  }
}
function ServiceManager_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Service Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, 'Select a service to view its configuration, or click "New" to add a custom service definition.');
    \u0275\u0275elementEnd()();
  }
}
var ServiceManager = class _ServiceManager {
  registry = inject(ServiceRegistryService);
  paramLibrary = inject(ParameterLibraryService);
  services = this.registry.allServices;
  parameterTypes = this.paramLibrary.allTypes;
  /** Currently selected service for viewing/editing */
  selectedServiceId = signal(null, ...ngDevMode ? [{ debugName: "selectedServiceId" }] : []);
  /** Whether we're in "add new" mode */
  addingNew = signal(false, ...ngDevMode ? [{ debugName: "addingNew" }] : []);
  /** New service form data */
  newService = signal({
    programName: "",
    displayName: "",
    description: "",
    parameters: []
  }, ...ngDevMode ? [{ debugName: "newService" }] : []);
  /** New parameter being added */
  newParam = signal({
    position: 1,
    parameterTypeKey: "",
    required: false
  }, ...ngDevMode ? [{ debugName: "newParam" }] : []);
  selectService(id) {
    this.selectedServiceId.set(id);
    this.addingNew.set(false);
  }
  getSelectedService() {
    const id = this.selectedServiceId();
    return id ? this.registry.getService(id) : void 0;
  }
  startAddNew() {
    this.addingNew.set(true);
    this.selectedServiceId.set(null);
    this.newService.set({
      programName: "",
      displayName: "",
      description: "",
      parameters: []
    });
  }
  cancelAddNew() {
    this.addingNew.set(false);
  }
  addParameterToNew() {
    const np = this.newParam();
    if (!np.parameterTypeKey)
      return;
    this.newService.update((svc) => __spreadProps(__spreadValues({}, svc), {
      parameters: [
        ...svc.parameters || [],
        {
          position: (svc.parameters?.length || 0) + 1,
          parameterTypeKey: np.parameterTypeKey,
          required: np.required || false
        }
      ]
    }));
    this.newParam.set({ position: 1, parameterTypeKey: "", required: false });
  }
  removeParameterFromNew(index) {
    this.newService.update((svc) => __spreadProps(__spreadValues({}, svc), {
      parameters: (svc.parameters || []).filter((_, i) => i !== index).map((p, i) => __spreadProps(__spreadValues({}, p), { position: i + 1 }))
    }));
  }
  saveNewService() {
    const svc = this.newService();
    if (!svc.programName || !svc.displayName)
      return;
    const service = {
      id: svc.programName.toLowerCase().replace(/\s+/g, "_"),
      programName: svc.programName,
      displayName: svc.displayName,
      description: svc.description || "",
      parameters: svc.parameters || [],
      builtIn: false
    };
    this.registry.addService(service);
    this.addingNew.set(false);
    this.selectedServiceId.set(service.id);
  }
  removeService(id) {
    this.registry.removeService(id);
    if (this.selectedServiceId() === id) {
      this.selectedServiceId.set(null);
    }
  }
  exportServices() {
    const json = this.registry.exportServices();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dwsv-services.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  importServices(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const result = this.registry.importServices(reader.result);
        this.importMessage.set(`Imported ${result.imported}, skipped ${result.skipped} (duplicate IDs)`);
        setTimeout(() => this.importMessage.set(null), 3e3);
      } catch {
        this.importMessage.set("Error: Invalid JSON file");
        setTimeout(() => this.importMessage.set(null), 3e3);
      }
    };
    reader.readAsText(file);
  }
  importMessage = signal(null, ...ngDevMode ? [{ debugName: "importMessage" }] : []);
  /** Update a field on the new service form */
  updateNewServiceField(field, value) {
    this.newService.update((s) => __spreadProps(__spreadValues({}, s), { [field]: value }));
  }
  /** Update a field on the new parameter form */
  updateNewParamField(field, value) {
    this.newParam.update((p) => __spreadProps(__spreadValues({}, p), { [field]: value }));
  }
  /** Get the label for a parameter type key */
  getParamTypeLabel(key) {
    return this.paramLibrary.getType(key)?.label || key;
  }
  static \u0275fac = function ServiceManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceManager)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceManager, selectors: [["app-service-manager"]], decls: 27, vars: 2, consts: [[1, "service-manager-layout"], [1, "service-list-panel"], [1, "panel-header"], [1, "btn", "btn-small", "btn-primary", 3, "click"], [1, "material-icons"], [1, "service-list"], [1, "service-item", 3, "active"], [1, "panel-footer"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "btn", "btn-small", "btn-secondary", "import-btn"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], [1, "import-message"], [1, "detail-panel"], [1, "add-new-form"], [1, "service-detail"], [1, "empty-state"], [1, "service-item", 3, "click"], [1, "service-item-name"], [1, "service-item-meta"], [1, "badge"], [1, "form-group"], ["type", "text", "placeholder", "e.g., cov_my_new_script", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., My New Script", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "What does this service do?", 3, "ngModelChange", "ngModel"], [1, "param-list"], [1, "add-param-row"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "param-item"], [1, "param-position"], [1, "param-name"], [1, "param-key"], [1, "badge", "required"], [1, "btn-icon", 3, "click"], [1, "detail-header"], [1, "btn", "btn-small", "btn-warn"], [1, "detail-field"], [1, "btn", "btn-small", "btn-warn", 3, "click"], [1, "badge", "optional"], [1, "param-default"]], template: function ServiceManager_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ServiceManager_Template_button_click_5_listener() {
        return ctx.startAddNew();
      });
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " New ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275repeaterCreate(10, ServiceManager_For_11_Template, 7, 5, "div", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function ServiceManager_Template_button_click_13_listener() {
        return ctx.exportServices();
      });
      \u0275\u0275elementStart(14, "span", 4);
      \u0275\u0275text(15, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "label", 9)(18, "span", 4);
      \u0275\u0275text(19, "upload");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Import ");
      \u0275\u0275elementStart(21, "input", 10);
      \u0275\u0275listener("change", function ServiceManager_Template_input_change_21_listener($event) {
        return ctx.importServices($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(22, ServiceManager_Conditional_22_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12);
      \u0275\u0275conditionalCreate(24, ServiceManager_Conditional_24_Template, 39, 6, "div", 13)(25, ServiceManager_Conditional_25_Template, 21, 5, "div", 14)(26, ServiceManager_Conditional_26_Template, 7, 0, "div", 15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.services());
      \u0275\u0275advance(12);
      \u0275\u0275conditional((tmp_1_0 = ctx.importMessage()) ? 22 : -1, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.addingNew() ? 24 : (tmp_2_0 = ctx.getSelectedService()) ? 25 : 26, tmp_2_0);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.service-manager-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 50px);\n}\n.service-list-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  border-right: 1px solid #ddd;\n  display: flex;\n  flex-direction: column;\n  background: #fafafa;\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #eee;\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-bottom: 4px;\n  border: 1px solid transparent;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item.active[_ngcontent-%COMP%] {\n  background: #e0ecff;\n  border-color: var(--primary-color, #5783db);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: #333;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #888;\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 8px;\n}\n.service-list-panel[_ngcontent-%COMP%]   .import-message[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  font-size: 0.8rem;\n  color: #155724;\n  background: #d4edda;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  color: #d73a49;\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #444;\n  line-height: 1.5;\n}\n.param-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.param-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 3px;\n  font-size: 0.85rem;\n}\n.param-item[_ngcontent-%COMP%]   .param-position[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #888;\n  min-width: 20px;\n}\n.param-item[_ngcontent-%COMP%]   .param-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.param-item[_ngcontent-%COMP%]   .param-key[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.8rem;\n}\n.param-item[_ngcontent-%COMP%]   .param-default[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.75rem;\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #999;\n  padding: 2px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.badge.required[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge.optional[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  color: #666;\n}\n.add-new-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.add-new-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 4px;\n  color: #444;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: inherit;\n  background: white;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color, #5783db);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #888;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #ccc;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 400px;\n  line-height: 1.5;\n}\n.import-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color, #5783db);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color-alternate, darkblue);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.btn.btn-warn[_ngcontent-%COMP%] {\n  background-color: var(--warn-color, #ed0800);\n  color: white;\n}\n.btn.btn-warn[_ngcontent-%COMP%]:hover {\n  background-color: var(--warn-color-alternate, darkred);\n}\n.btn.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=service-manager.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceManager, [{
    type: Component,
    args: [{ selector: "app-service-manager", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="service-manager-layout">
  <!-- Left: Service List -->
  <div class="service-list-panel">
    <div class="panel-header">
      <h2>Services</h2>
      <button class="btn btn-small btn-primary" (click)="startAddNew()">
        <span class="material-icons">add</span> New
      </button>
    </div>

    <div class="service-list">
      @for (svc of services(); track svc.id) {
        <div
          class="service-item"
          [class.active]="selectedServiceId() === svc.id"
          (click)="selectService(svc.id)">
          <div class="service-item-name">{{ svc.displayName }}</div>
          <div class="service-item-meta">
            <code>{{ svc.programName }}</code>
            @if (svc.builtIn) {
              <span class="badge">built-in</span>
            }
          </div>
        </div>
      }
    </div>

    <div class="panel-footer">
      <button class="btn btn-small btn-secondary" (click)="exportServices()">
        <span class="material-icons">download</span> Export
      </button>
      <label class="btn btn-small btn-secondary import-btn">
        <span class="material-icons">upload</span> Import
        <input type="file" accept=".json" (change)="importServices($event)" hidden />
      </label>
    </div>

    @if (importMessage(); as msg) {
      <div class="import-message">{{ msg }}</div>
    }
  </div>

  <!-- Right: Service Detail / Add New -->
  <div class="detail-panel">
    @if (addingNew()) {
      <div class="add-new-form">
        <h2>Add New Service</h2>

        <div class="form-group">
          <label>Program Name</label>
          <input type="text"
            [ngModel]="newService().programName"
            (ngModelChange)="updateNewServiceField('programName', $event)"
            placeholder="e.g., cov_my_new_script" />
        </div>

        <div class="form-group">
          <label>Display Name</label>
          <input type="text"
            [ngModel]="newService().displayName"
            (ngModelChange)="updateNewServiceField('displayName', $event)"
            placeholder="e.g., My New Script" />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            [ngModel]="newService().description"
            (ngModelChange)="updateNewServiceField('description', $event)"
            rows="3"
            placeholder="What does this service do?"></textarea>
        </div>

        <div class="form-group">
          <label>Parameters</label>

          @if (newService().parameters?.length) {
            <div class="param-list">
              @for (p of newService().parameters; track p.position; let i = $index) {
                <div class="param-item">
                  <span class="param-position">{{ p.position }}.</span>
                  <span class="param-name">{{ getParamTypeLabel(p.parameterTypeKey) }}</span>
                  <span class="param-key">({{ p.parameterTypeKey }})</span>
                  @if (p.required) {
                    <span class="badge required">required</span>
                  }
                  <button class="btn-icon" (click)="removeParameterFromNew(i)">
                    <span class="material-icons">close</span>
                  </button>
                </div>
              }
            </div>
          }

          <div class="add-param-row">
            <select
              [ngModel]="newParam().parameterTypeKey"
              (ngModelChange)="updateNewParamField('parameterTypeKey', $event)">
              <option value="">Select parameter type...</option>
              @for (pt of parameterTypes(); track pt.key) {
                <option [value]="pt.key">{{ pt.label }} ({{ pt.key }})</option>
              }
            </select>
            <label class="checkbox-label">
              <input type="checkbox"
                [ngModel]="newParam().required"
                (ngModelChange)="updateNewParamField('required', $event)" />
              Required
            </label>
            <button class="btn btn-small btn-secondary" (click)="addParameterToNew()">
              <span class="material-icons">add</span> Add
            </button>
          </div>
        </div>

        <div class="form-actions">
          <button class="btn btn-primary" (click)="saveNewService()">
            <span class="material-icons">save</span> Save Service
          </button>
          <button class="btn btn-secondary" (click)="cancelAddNew()">Cancel</button>
        </div>
      </div>
    } @else if (getSelectedService(); as svc) {
      <div class="service-detail">
        <div class="detail-header">
          <h2>{{ svc.displayName }}</h2>
          @if (!svc.builtIn) {
            <button class="btn btn-small btn-warn" (click)="removeService(svc.id)">
              <span class="material-icons">delete</span> Delete
            </button>
          }
        </div>

        <div class="detail-field">
          <label>Program Name</label>
          <code>{{ svc.programName }}</code>
        </div>

        <div class="detail-field">
          <label>Description</label>
          <p>{{ svc.description }}</p>
        </div>

        <div class="detail-field">
          <label>Parameters ({{ svc.parameters.length }})</label>
          <div class="param-list">
            @for (p of svc.parameters; track p.position) {
              <div class="param-item">
                <span class="param-position">{{ p.position }}.</span>
                <span class="param-name">{{ getParamTypeLabel(p.parameterTypeKey) }}</span>
                <span class="param-key">({{ p.parameterTypeKey }})</span>
                @if (p.required) {
                  <span class="badge required">required</span>
                } @else {
                  <span class="badge optional">optional</span>
                }
                @if (p.defaultValueOverride) {
                  <span class="param-default">default: {{ p.defaultValueOverride }}</span>
                }
              </div>
            }
          </div>
        </div>
      </div>
    } @else {
      <div class="empty-state">
        <span class="material-icons">settings</span>
        <h3>Service Manager</h3>
        <p>Select a service to view its configuration, or click "New" to add a custom service definition.</p>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/pages/service-manager/service-manager.scss */\n.service-manager-layout {\n  display: flex;\n  height: calc(100vh - 50px);\n}\n.service-list-panel {\n  width: 320px;\n  border-right: 1px solid #ddd;\n  display: flex;\n  flex-direction: column;\n  background: #fafafa;\n}\n.service-list-panel .panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #eee;\n}\n.service-list-panel .panel-header h2 {\n  margin: 0;\n  font-size: 1rem;\n}\n.service-list-panel .service-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px;\n}\n.service-list-panel .service-list .service-item {\n  padding: 10px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-bottom: 4px;\n  border: 1px solid transparent;\n}\n.service-list-panel .service-list .service-item:hover {\n  background: #eee;\n}\n.service-list-panel .service-list .service-item.active {\n  background: #e0ecff;\n  border-color: var(--primary-color, #5783db);\n}\n.service-list-panel .service-list .service-item .service-item-name {\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: #333;\n}\n.service-list-panel .service-list .service-item .service-item-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n}\n.service-list-panel .service-list .service-item .service-item-meta code {\n  font-size: 0.75rem;\n  color: #888;\n}\n.service-list-panel .panel-footer {\n  padding: 12px 16px;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 8px;\n}\n.service-list-panel .import-message {\n  padding: 6px 16px;\n  font-size: 0.8rem;\n  color: #155724;\n  background: #d4edda;\n}\n.detail-panel {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n.detail-panel .detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.detail-panel .detail-header h2 {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.detail-panel .detail-field {\n  margin-bottom: 16px;\n}\n.detail-panel .detail-field label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-panel .detail-field code {\n  background: #f0f0f0;\n  padding: 4px 8px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  color: #d73a49;\n}\n.detail-panel .detail-field p {\n  margin: 0;\n  color: #444;\n  line-height: 1.5;\n}\n.param-list {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.param-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 3px;\n  font-size: 0.85rem;\n}\n.param-item .param-position {\n  font-weight: 600;\n  color: #888;\n  min-width: 20px;\n}\n.param-item .param-name {\n  font-weight: 500;\n  color: #333;\n}\n.param-item .param-key {\n  color: #888;\n  font-size: 0.8rem;\n}\n.param-item .param-default {\n  color: #666;\n  font-size: 0.75rem;\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item .btn-icon {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #999;\n  padding: 2px;\n}\n.param-item .btn-icon .material-icons {\n  font-size: 16px;\n}\n.param-item .btn-icon:hover {\n  color: #dc3545;\n}\n.badge {\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.badge.required {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge.optional {\n  background: #e8e8e8;\n  color: #666;\n}\n.add-new-form {\n  max-width: 600px;\n}\n.add-new-form h2 {\n  margin: 0 0 20px;\n}\n.add-new-form .form-group {\n  margin-bottom: 16px;\n}\n.add-new-form .form-group label {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 4px;\n  color: #444;\n}\n.add-new-form .form-group input[type=text],\n.add-new-form .form-group textarea,\n.add-new-form .form-group select {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: inherit;\n  background: white;\n}\n.add-new-form .form-group input[type=text]:focus,\n.add-new-form .form-group textarea:focus,\n.add-new-form .form-group select:focus {\n  outline: none;\n  border-color: var(--primary-color, #5783db);\n}\n.add-new-form .form-group textarea {\n  resize: vertical;\n}\n.add-new-form .add-param-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.add-new-form .add-param-row select {\n  flex: 1;\n}\n.add-new-form .add-param-row .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.add-new-form .form-actions {\n  margin-top: 24px;\n  display: flex;\n  gap: 8px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #888;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 64px;\n  color: #ccc;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  margin: 0 0 8px;\n  color: #666;\n}\n.empty-state p {\n  max-width: 400px;\n  line-height: 1.5;\n}\n.import-btn {\n  cursor: pointer;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.btn.btn-primary {\n  background-color: var(--primary-color, #5783db);\n  color: white;\n}\n.btn.btn-primary:hover {\n  background-color: var(--primary-color-alternate, darkblue);\n}\n.btn.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary:hover {\n  background-color: #5a6268;\n}\n.btn.btn-warn {\n  background-color: var(--warn-color, #ed0800);\n  color: white;\n}\n.btn.btn-warn:hover {\n  background-color: var(--warn-color-alternate, darkred);\n}\n.btn.btn-small {\n  padding: 4px 10px;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=service-manager.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceManager, { className: "ServiceManager", filePath: "src/app/pages/service-manager/service-manager.ts", lineNumber: 15 });
})();
export {
  ServiceManager
};
//# sourceMappingURL=chunk-KRM2MVRW.js.map
