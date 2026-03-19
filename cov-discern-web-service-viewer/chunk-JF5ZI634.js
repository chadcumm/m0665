import {
  ServiceRegistryService
} from "./chunk-VT7PEVIO.js";
import {
  HelpModal,
  ParameterLibraryService
} from "./chunk-KKOUQKWE.js";
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
function ServiceManager_For_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "built-in");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ServiceManager_For_15_Template_div_click_0_listener() {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectService(svc_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ServiceManager_For_15_Conditional_6_Template, 2, 0, "span", 22);
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
function ServiceManager_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ServiceManager_Conditional_28_Conditional_18_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_28_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ServiceManager_Conditional_28_Conditional_18_For_2_Conditional_7_Template, 2, 0, "span", 41);
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function ServiceManager_Conditional_28_Conditional_18_For_2_Template_button_click_8_listener() {
      const \u0275$index_97_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeParameterFromNew(\u0275$index_97_r6));
    });
    \u0275\u0275elementStart(9, "span", 5);
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
function ServiceManager_Conditional_28_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, ServiceManager_Conditional_28_Conditional_18_For_2_Template, 11, 4, "div", 37, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.newService().parameters);
  }
}
function ServiceManager_Conditional_28_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
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
function ServiceManager_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "h2");
    \u0275\u0275text(2, "Add New Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "label");
    \u0275\u0275text(5, "Program Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 24);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_28_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("programName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "label");
    \u0275\u0275text(9, "Display Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 25);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_28_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("displayName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "label");
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 26);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_28_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "label");
    \u0275\u0275text(17, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ServiceManager_Conditional_28_Conditional_18_Template, 3, 0, "div", 27);
    \u0275\u0275elementStart(19, "div", 28)(20, "select", 29);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_28_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("parameterTypeKey", $event));
    });
    \u0275\u0275elementStart(21, "option", 30);
    \u0275\u0275text(22, "Select parameter type...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, ServiceManager_Conditional_28_For_24_Template, 2, 3, "option", 31, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 32)(26, "input", 33);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_28_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("required", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Required ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 10);
    \u0275\u0275listener("click", function ServiceManager_Conditional_28_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addParameterToNew());
    });
    \u0275\u0275elementStart(29, "span", 5);
    \u0275\u0275text(30, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Add ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 34)(33, "button", 35);
    \u0275\u0275listener("click", function ServiceManager_Conditional_28_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNewService());
    });
    \u0275\u0275elementStart(34, "span", 5);
    \u0275\u0275text(35, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Save Service ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 36);
    \u0275\u0275listener("click", function ServiceManager_Conditional_28_Template_button_click_37_listener() {
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
function ServiceManager_Conditional_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ServiceManager_Conditional_29_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const svc_r10 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeService(svc_r10.id));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_29_For_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_29_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "optional");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_29_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("default: ", p_r11.defaultValueOverride);
  }
}
function ServiceManager_Conditional_29_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ServiceManager_Conditional_29_For_20_Conditional_7_Template, 2, 0, "span", 41)(8, ServiceManager_Conditional_29_For_20_Conditional_8_Template, 2, 0, "span", 47);
    \u0275\u0275conditionalCreate(9, ServiceManager_Conditional_29_For_20_Conditional_9_Template, 2, 1, "span", 48);
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
function ServiceManager_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 43)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ServiceManager_Conditional_29_Conditional_4_Template, 4, 0, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "label");
    \u0275\u0275text(7, "Program Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "code");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 45)(11, "label");
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 45)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 27);
    \u0275\u0275repeaterCreate(19, ServiceManager_Conditional_29_For_20_Template, 10, 5, "div", 37, _forTrack2);
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
function ServiceManager_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 5);
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
function ServiceManager_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-help-modal", 49);
    \u0275\u0275listener("closeRequested", function ServiceManager_Conditional_31_Template_app_help_modal_closeRequested_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.helpOpen.set(false));
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The Service Manager lets you view, create, and manage CCL web service definitions. Each service definition maps a CCL program name to a set of typed parameters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Service List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Built-in vs Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul")(10, "li")(11, "strong");
    \u0275\u0275text(12, "Built-in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " services ship with the application and cannot be deleted or modified.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li")(15, "strong");
    \u0275\u0275text(16, "Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " services are created by you and stored in localStorage. They persist across sessions but are local to your browser.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "h2");
    \u0275\u0275text(19, "Adding a New Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Click ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "+ New");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " to create a custom service definition.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h3");
    \u0275\u0275text(26, "Required Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "table")(28, "thead")(29, "tr")(30, "th");
    \u0275\u0275text(31, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "tbody")(35, "tr")(36, "td")(37, "strong");
    \u0275\u0275text(38, "Program Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40, "The CCL program name. Must exactly match the CCL object (use lowercase by convention).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "tr")(42, "td")(43, "strong");
    \u0275\u0275text(44, "Display Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "Human-readable name shown in the Executor dropdown.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td")(49, "strong");
    \u0275\u0275text(50, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52, "What this service does. Shown below the service selector on the Executor page.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "h3");
    \u0275\u0275text(54, "Adding Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, "Parameters define what inputs the service expects. Each parameter has:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "table")(58, "thead")(59, "tr")(60, "th");
    \u0275\u0275text(61, "Property");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th");
    \u0275\u0275text(63, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "tbody")(65, "tr")(66, "td")(67, "strong");
    \u0275\u0275text(68, "Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70, "Ordinal position in the CCL parameter list (1-based). Determines send order.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "tr")(72, "td")(73, "strong");
    \u0275\u0275text(74, "Parameter Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "td");
    \u0275\u0275text(76, "Reference to a type from the Parameter Library (e.g., ");
    \u0275\u0275elementStart(77, "code");
    \u0275\u0275text(78, "facility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, ", ");
    \u0275\u0275elementStart(80, "code");
    \u0275\u0275text(81, "fin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, "). Controls the input type, options, and defaults.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "tr")(84, "td")(85, "strong");
    \u0275\u0275text(86, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "td");
    \u0275\u0275text(88, "Whether the parameter must have a value. Shows a red * in the form.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(89, "h3");
    \u0275\u0275text(90, "Parameter Position Ordering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p")(92, "strong");
    \u0275\u0275text(93, "Position matters.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, " CCL scripts receive parameters in order. If your script expects the FIN as the 3rd parameter, set its position to 3.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p");
    \u0275\u0275text(96, "Example for a script expecting ");
    \u0275\u0275elementStart(97, "code");
    \u0275\u0275text(98, "outdev, event_set_name, fin, facility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "ol")(101, "li");
    \u0275\u0275text(102, "Output Device (position 1)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "li");
    \u0275\u0275text(104, "Event Set Name (position 2)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "li");
    \u0275\u0275text(106, "FIN (position 3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "li");
    \u0275\u0275text(108, "Facility (position 4)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "h3");
    \u0275\u0275text(110, "Common Parameter Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "table")(112, "thead")(113, "tr")(114, "th");
    \u0275\u0275text(115, "Type Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "th");
    \u0275\u0275text(117, "Input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "th");
    \u0275\u0275text(119, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "tbody")(121, "tr")(122, "td")(123, "code");
    \u0275\u0275text(124, "outdev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "td");
    \u0275\u0275text(126, "Hidden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "td");
    \u0275\u0275text(128, "Output device \u2014 usually MINE or JSON");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "tr")(130, "td")(131, "code");
    \u0275\u0275text(132, "facility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "td");
    \u0275\u0275text(134, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "td");
    \u0275\u0275text(136, "Covenant Health facility dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "tr")(138, "td")(139, "code");
    \u0275\u0275text(140, "fin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "td");
    \u0275\u0275text(142, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "td");
    \u0275\u0275text(144, "Patient Financial Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "tr")(146, "td")(147, "code");
    \u0275\u0275text(148, "event_set_name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "td");
    \u0275\u0275text(150, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "td");
    \u0275\u0275text(152, "Clinical event set hierarchy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "tr")(154, "td")(155, "code");
    \u0275\u0275text(156, "start_dt_tm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "td");
    \u0275\u0275text(158, "DateTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "td");
    \u0275\u0275text(160, "Start date/time with presets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "tr")(162, "td")(163, "code");
    \u0275\u0275text(164, "end_dt_tm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "td");
    \u0275\u0275text(166, "DateTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "td");
    \u0275\u0275text(168, "End date/time with presets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "tr")(170, "td")(171, "code");
    \u0275\u0275text(172, "person_id");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "td");
    \u0275\u0275text(174, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "td");
    \u0275\u0275text(176, "Patient person ID (sent unquoted)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(177, "tr")(178, "td")(179, "code");
    \u0275\u0275text(180, "encntr_id");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "td");
    \u0275\u0275text(182, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "td");
    \u0275\u0275text(184, "Encounter ID (sent unquoted)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(185, "h2");
    \u0275\u0275text(186, "Import / Export");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "ul")(188, "li")(189, "strong");
    \u0275\u0275text(190, "Export");
    \u0275\u0275elementEnd();
    \u0275\u0275text(191, " \u2014 Downloads all service definitions as a JSON file. Use to back up or share.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "li")(193, "strong");
    \u0275\u0275text(194, "Import");
    \u0275\u0275elementEnd();
    \u0275\u0275text(195, " \u2014 Loads service definitions from a JSON file. Custom services are merged; built-in services are not affected.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "p")(197, "strong");
    \u0275\u0275text(198, "Tip:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(199, " Export from one browser, import in another to share custom service definitions between workstations.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "h2");
    \u0275\u0275text(201, "How Execution Works End-to-End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "ol")(203, "li")(204, "strong");
    \u0275\u0275text(205, "Service definition");
    \u0275\u0275elementEnd();
    \u0275\u0275text(206, " is looked up from the registry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "li")(208, "strong");
    \u0275\u0275text(209, "Parameter form");
    \u0275\u0275elementEnd();
    \u0275\u0275text(210, " values are collected (user input + defaults)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "li")(212, "strong");
    \u0275\u0275text(213, "Parameter string");
    \u0275\u0275elementEnd();
    \u0275\u0275text(214, " is built by sorting parameters by position and encoding each value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "li")(216, "strong");
    \u0275\u0275text(217, "CCL call");
    \u0275\u0275elementEnd();
    \u0275\u0275text(218, " is made via XMLCclRequest (Raw) or CustomService (Clinical Office)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "li")(220, "strong");
    \u0275\u0275text(221, "JSON response");
    \u0275\u0275elementEnd();
    \u0275\u0275text(222, " is parsed (with trailing comma cleanup for Raw mode)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "li")(224, "strong");
    \u0275\u0275text(225, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275text(226, " is displayed in the JSON viewer and saved to execution history");
    \u0275\u0275elementEnd()()();
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
  importServices(event) {
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
          this.importMessage.set(`Imported ${result.imported}, skipped ${result.skipped} (duplicate IDs)`);
        } else {
          this.importMessage.set("Error: Unrecognized file format");
        }
        setTimeout(() => this.importMessage.set(null), 3e3);
      } catch {
        this.importMessage.set("Error: Invalid JSON file");
        setTimeout(() => this.importMessage.set(null), 3e3);
      }
    };
    reader.readAsText(file);
  }
  importMessage = signal(null, ...ngDevMode ? [{ debugName: "importMessage" }] : []);
  /** Whether the help modal is open */
  helpOpen = signal(false, ...ngDevMode ? [{ debugName: "helpOpen" }] : []);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceManager, selectors: [["app-service-manager"]], decls: 32, vars: 3, consts: [[1, "service-manager-layout"], [1, "service-list-panel"], [1, "panel-header"], [1, "panel-header-actions"], ["title", "Help", 1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "material-icons"], [1, "btn", "btn-small", "btn-primary", 3, "click"], [1, "service-list"], [1, "service-item", 3, "active"], [1, "panel-footer"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "btn", "btn-small", "btn-secondary", "import-btn"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], [1, "import-message"], [1, "detail-panel"], [1, "add-new-form"], [1, "service-detail"], [1, "empty-state"], ["title", "Service Manager Help"], [1, "service-item", 3, "click"], [1, "service-item-name"], [1, "service-item-meta"], [1, "badge"], [1, "form-group"], ["type", "text", "placeholder", "e.g., cov_my_new_script", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., My New Script", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "What does this service do?", 3, "ngModelChange", "ngModel"], [1, "param-list"], [1, "add-param-row"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "param-item"], [1, "param-position"], [1, "param-name"], [1, "param-key"], [1, "badge", "required"], [1, "btn-icon", 3, "click"], [1, "detail-header"], [1, "btn", "btn-small", "btn-warn"], [1, "detail-field"], [1, "btn", "btn-small", "btn-warn", 3, "click"], [1, "badge", "optional"], [1, "param-default"], ["title", "Service Manager Help", 3, "closeRequested"]], template: function ServiceManager_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function ServiceManager_Template_button_click_6_listener() {
        return ctx.helpOpen.set(true);
      });
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "help_outline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function ServiceManager_Template_button_click_9_listener() {
        return ctx.startAddNew();
      });
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " New ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275repeaterCreate(14, ServiceManager_For_15_Template, 7, 5, "div", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "button", 10);
      \u0275\u0275listener("click", function ServiceManager_Template_button_click_17_listener() {
        return ctx.exportServices();
      });
      \u0275\u0275elementStart(18, "span", 5);
      \u0275\u0275text(19, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "label", 11)(22, "span", 5);
      \u0275\u0275text(23, "upload");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Import ");
      \u0275\u0275elementStart(25, "input", 12);
      \u0275\u0275listener("change", function ServiceManager_Template_input_change_25_listener($event) {
        return ctx.importServices($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(26, ServiceManager_Conditional_26_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 14);
      \u0275\u0275conditionalCreate(28, ServiceManager_Conditional_28_Template, 39, 6, "div", 15)(29, ServiceManager_Conditional_29_Template, 21, 5, "div", 16)(30, ServiceManager_Conditional_30_Template, 7, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(31, ServiceManager_Conditional_31_Template, 227, 0, "app-help-modal", 18);
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.services());
      \u0275\u0275advance(12);
      \u0275\u0275conditional((tmp_1_0 = ctx.importMessage()) ? 26 : -1, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.addingNew() ? 28 : (tmp_2_0 = ctx.getSelectedService()) ? 29 : 30, tmp_2_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.helpOpen() ? 31 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HelpModal], styles: ["\n\n.service-manager-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item.active[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-top: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .import-message[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-very-tight) var(--fusion-space-loose);\n  font-size: var(--fusion-text-sm);\n  color: #1e6e35;\n  background: #e6f4ea;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]   .param-position[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item[_ngcontent-%COMP%]   .param-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item[_ngcontent-%COMP%]   .param-key[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item[_ngcontent-%COMP%]   .param-default[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--fusion-color-error);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.add-new-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.add-new-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  white-space: nowrap;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.import-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=service-manager.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceManager, [{
    type: Component,
    args: [{ selector: "app-service-manager", standalone: true, imports: [FormsModule, HelpModal], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="service-manager-layout">
  <!-- Left: Service List -->
  <div class="service-list-panel">
    <div class="panel-header">
      <h2>Services</h2>
      <div class="panel-header-actions">
        <button class="btn btn-ghost btn-small" (click)="helpOpen.set(true)" title="Help">
          <span class="material-icons">help_outline</span>
        </button>
        <button class="btn btn-small btn-primary" (click)="startAddNew()">
          <span class="material-icons">add</span> New
        </button>
      </div>
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

<!-- Help Modal -->
@if (helpOpen()) {
  <app-help-modal title="Service Manager Help" (closeRequested)="helpOpen.set(false)">
    <h2>Overview</h2>
    <p>The Service Manager lets you view, create, and manage CCL web service definitions. Each service definition maps a CCL program name to a set of typed parameters.</p>

    <h2>Service List</h2>

    <h3>Built-in vs Custom</h3>
    <ul>
      <li><strong>Built-in</strong> services ship with the application and cannot be deleted or modified.</li>
      <li><strong>Custom</strong> services are created by you and stored in localStorage. They persist across sessions but are local to your browser.</li>
    </ul>

    <h2>Adding a New Service</h2>
    <p>Click <strong>+ New</strong> to create a custom service definition.</p>

    <h3>Required Fields</h3>
    <table>
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Program Name</strong></td><td>The CCL program name. Must exactly match the CCL object (use lowercase by convention).</td></tr>
        <tr><td><strong>Display Name</strong></td><td>Human-readable name shown in the Executor dropdown.</td></tr>
        <tr><td><strong>Description</strong></td><td>What this service does. Shown below the service selector on the Executor page.</td></tr>
      </tbody>
    </table>

    <h3>Adding Parameters</h3>
    <p>Parameters define what inputs the service expects. Each parameter has:</p>
    <table>
      <thead><tr><th>Property</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Position</strong></td><td>Ordinal position in the CCL parameter list (1-based). Determines send order.</td></tr>
        <tr><td><strong>Parameter Type</strong></td><td>Reference to a type from the Parameter Library (e.g., <code>facility</code>, <code>fin</code>). Controls the input type, options, and defaults.</td></tr>
        <tr><td><strong>Required</strong></td><td>Whether the parameter must have a value. Shows a red * in the form.</td></tr>
      </tbody>
    </table>

    <h3>Parameter Position Ordering</h3>
    <p><strong>Position matters.</strong> CCL scripts receive parameters in order. If your script expects the FIN as the 3rd parameter, set its position to 3.</p>
    <p>Example for a script expecting <code>outdev, event_set_name, fin, facility</code>:</p>
    <ol>
      <li>Output Device (position 1)</li>
      <li>Event Set Name (position 2)</li>
      <li>FIN (position 3)</li>
      <li>Facility (position 4)</li>
    </ol>

    <h3>Common Parameter Types</h3>
    <table>
      <thead><tr><th>Type Key</th><th>Input</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><code>outdev</code></td><td>Hidden</td><td>Output device \u2014 usually MINE or JSON</td></tr>
        <tr><td><code>facility</code></td><td>Select</td><td>Covenant Health facility dropdown</td></tr>
        <tr><td><code>fin</code></td><td>Text</td><td>Patient Financial Number</td></tr>
        <tr><td><code>event_set_name</code></td><td>Select</td><td>Clinical event set hierarchy</td></tr>
        <tr><td><code>start_dt_tm</code></td><td>DateTime</td><td>Start date/time with presets</td></tr>
        <tr><td><code>end_dt_tm</code></td><td>DateTime</td><td>End date/time with presets</td></tr>
        <tr><td><code>person_id</code></td><td>Number</td><td>Patient person ID (sent unquoted)</td></tr>
        <tr><td><code>encntr_id</code></td><td>Number</td><td>Encounter ID (sent unquoted)</td></tr>
      </tbody>
    </table>

    <h2>Import / Export</h2>
    <ul>
      <li><strong>Export</strong> \u2014 Downloads all service definitions as a JSON file. Use to back up or share.</li>
      <li><strong>Import</strong> \u2014 Loads service definitions from a JSON file. Custom services are merged; built-in services are not affected.</li>
    </ul>
    <p><strong>Tip:</strong> Export from one browser, import in another to share custom service definitions between workstations.</p>

    <h2>How Execution Works End-to-End</h2>
    <ol>
      <li><strong>Service definition</strong> is looked up from the registry</li>
      <li><strong>Parameter form</strong> values are collected (user input + defaults)</li>
      <li><strong>Parameter string</strong> is built by sorting parameters by position and encoding each value</li>
      <li><strong>CCL call</strong> is made via XMLCclRequest (Raw) or CustomService (Clinical Office)</li>
      <li><strong>JSON response</strong> is parsed (with trailing comma cleanup for Raw mode)</li>
      <li><strong>Result</strong> is displayed in the JSON viewer and saved to execution history</li>
    </ol>
  </app-help-modal>
}
`, styles: ["/* src/app/pages/service-manager/service-manager.scss */\n.service-manager-layout {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel {\n  width: 320px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.service-list-panel .panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n}\n.service-list-panel .panel-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel .panel-header .panel-header-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel .service-list .service-item {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel .service-list .service-item:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel .service-list .service-item.active {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel .service-list .service-item .service-item-name {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel .service-list .service-item .service-item-meta {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list .service-item .service-item-meta code {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.service-list-panel .panel-footer {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-top: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.service-list-panel .import-message {\n  padding: var(--fusion-space-very-tight) var(--fusion-space-loose);\n  font-size: var(--fusion-text-sm);\n  color: #1e6e35;\n  background: #e6f4ea;\n}\n.detail-panel {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel .detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel .detail-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel .detail-field {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel .detail-field label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel .detail-field code {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel .detail-field p {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item .param-position {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item .param-name {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item .param-key {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item .param-default {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item .btn-icon {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item .btn-icon .material-icons {\n  font-size: 15px;\n}\n.param-item .btn-icon:hover {\n  color: var(--fusion-color-error);\n}\n.badge {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.add-new-form {\n  max-width: 600px;\n}\n.add-new-form h2 {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form .form-group {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form .form-group label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form .form-group input[type=text],\n.add-new-form .form-group textarea,\n.add-new-form .form-group select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form .form-group input[type=text]:focus,\n.add-new-form .form-group textarea:focus,\n.add-new-form .form-group select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form .add-param-row {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.add-new-form .add-param-row select {\n  flex: 1;\n}\n.add-new-form .add-param-row .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  white-space: nowrap;\n}\n.add-new-form .form-actions {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state h3 {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state p {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.import-btn {\n  cursor: pointer;\n}\n/*# sourceMappingURL=service-manager.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceManager, { className: "ServiceManager", filePath: "src/app/pages/service-manager/service-manager.ts", lineNumber: 16 });
})();
export {
  ServiceManager
};
//# sourceMappingURL=chunk-JF5ZI634.js.map
