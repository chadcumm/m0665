import {
  ServiceRegistryService
} from "./chunk-ZPOP7CD7.js";
import {
  HelpModal
} from "./chunk-KHASGS2B.js";
import {
  ChangeDetectionStrategy,
  CheckboxControlValueAccessor,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ParameterLibraryService,
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
  ɵɵelement,
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
} from "./chunk-YANIWAVR.js";
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
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "default");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function ServiceManager_For_15_Template_div_click_0_listener() {
      const svc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectService(svc_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ServiceManager_For_15_Conditional_6_Template, 2, 0, "span", 17);
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
    \u0275\u0275conditional(ctx_r2.registry.isDefault(svc_r2.id) ? 6 : -1);
  }
}
function ServiceManager_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function ServiceManager_Conditional_18_Conditional_18_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_18_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ServiceManager_Conditional_18_Conditional_18_For_2_Conditional_7_Template, 2, 0, "span", 37);
    \u0275\u0275elementStart(8, "button", 38);
    \u0275\u0275listener("click", function ServiceManager_Conditional_18_Conditional_18_For_2_Template_button_click_8_listener() {
      const \u0275$index_81_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeParameterFromNew(\u0275$index_81_r6));
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
function ServiceManager_Conditional_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, ServiceManager_Conditional_18_Conditional_18_For_2_Template, 11, 4, "div", 33, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.newService().parameters);
  }
}
function ServiceManager_Conditional_18_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
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
function ServiceManager_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h2");
    \u0275\u0275text(2, "Add New Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "label");
    \u0275\u0275text(5, "Program Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 19);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("programName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "label");
    \u0275\u0275text(9, "Display Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 20);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_18_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("displayName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18)(12, "label");
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 21);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_18_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewServiceField("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "label");
    \u0275\u0275text(17, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ServiceManager_Conditional_18_Conditional_18_Template, 3, 0, "div", 22);
    \u0275\u0275elementStart(19, "div", 23)(20, "select", 24);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_18_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("parameterTypeKey", $event));
    });
    \u0275\u0275elementStart(21, "option", 25);
    \u0275\u0275text(22, "Select parameter type...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, ServiceManager_Conditional_18_For_24_Template, 2, 3, "option", 26, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 27)(26, "input", 28);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_18_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("required", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " Required ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 29);
    \u0275\u0275listener("click", function ServiceManager_Conditional_18_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addParameterToNew());
    });
    \u0275\u0275elementStart(29, "span", 5);
    \u0275\u0275text(30, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Add ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 30)(33, "button", 31);
    \u0275\u0275listener("click", function ServiceManager_Conditional_18_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNewService());
    });
    \u0275\u0275elementStart(34, "span", 5);
    \u0275\u0275text(35, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Save Service ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 32);
    \u0275\u0275listener("click", function ServiceManager_Conditional_18_Template_button_click_37_listener() {
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
function ServiceManager_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ServiceManager_Conditional_19_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const svc_r11 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetService(svc_r11.id));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reset ");
    \u0275\u0275elementEnd();
  }
}
function ServiceManager_Conditional_19_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 45);
    \u0275\u0275listener("click", function ServiceManager_Conditional_19_Conditional_25_For_2_Template_button_click_7_listener() {
      const \u0275$index_187_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleParameterRequired(\u0275$index_187_r13));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 46);
    \u0275\u0275listener("click", function ServiceManager_Conditional_19_Conditional_25_For_2_Template_button_click_9_listener() {
      const \u0275$index_187_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleParameterHidden(\u0275$index_187_r13));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 47);
    \u0275\u0275listener("change", function ServiceManager_Conditional_19_Conditional_25_For_2_Template_input_change_11_listener($event) {
      const \u0275$index_187_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateParameterDefault(\u0275$index_187_r13, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 38);
    \u0275\u0275listener("click", function ServiceManager_Conditional_19_Conditional_25_For_2_Template_button_click_12_listener() {
      const \u0275$index_187_r13 = \u0275\u0275restoreView(_r12).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeParameterFromService(\u0275$index_187_r13));
    });
    \u0275\u0275elementStart(13, "span", 5);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r14.position, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getParamTypeLabel(p_r14.parameterTypeKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", p_r14.parameterTypeKey, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("required", p_r14.required)("optional", !p_r14.required);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r14.required ? "required" : "optional", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden-badge", p_r14.hidden);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r14.hidden ? "hidden" : "visible", " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", p_r14.defaultValueOverride || "");
  }
}
function ServiceManager_Conditional_19_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, ServiceManager_Conditional_19_Conditional_25_For_2_Template, 15, 12, "div", 33, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(svc_r11.parameters);
  }
}
function ServiceManager_Conditional_19_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pt_r15 = ctx.$implicit;
    \u0275\u0275property("value", pt_r15.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", pt_r15.label, " (", pt_r15.key, ")");
  }
}
function ServiceManager_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 39)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275conditionalCreate(5, ServiceManager_Conditional_19_Conditional_5_Template, 4, 0, "button", 41);
    \u0275\u0275elementStart(6, "button", 42);
    \u0275\u0275listener("click", function ServiceManager_Conditional_19_Template_button_click_6_listener() {
      const svc_r11 = \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeService(svc_r11.id));
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Delete ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18)(11, "label");
    \u0275\u0275text(12, "Program Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 43);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_19_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateServiceField("programName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "label");
    \u0275\u0275text(16, "Display Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 44);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_19_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateServiceField("displayName", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "label");
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 21);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_19_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateServiceField("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 18)(23, "label");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, ServiceManager_Conditional_19_Conditional_25_Template, 3, 0, "div", 22);
    \u0275\u0275elementStart(26, "div", 23)(27, "select", 24);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_19_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("parameterTypeKey", $event));
    });
    \u0275\u0275elementStart(28, "option", 25);
    \u0275\u0275text(29, "Select parameter type...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, ServiceManager_Conditional_19_For_31_Template, 2, 3, "option", 26, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 27)(33, "input", 28);
    \u0275\u0275listener("ngModelChange", function ServiceManager_Conditional_19_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewParamField("required", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Required ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 29);
    \u0275\u0275listener("click", function ServiceManager_Conditional_19_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addParameterToService());
    });
    \u0275\u0275elementStart(36, "span", 5);
    \u0275\u0275text(37, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Add ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const svc_r11 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(svc_r11.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.registry.isDefault(svc_r11.id) && ctx_r2.registry.hasUserVersion(svc_r11.id) ? 5 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", svc_r11.programName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", svc_r11.displayName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", svc_r11.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Parameters (", svc_r11.parameters.length, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(svc_r11.parameters.length ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.newParam().parameterTypeKey);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.parameterTypes());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.newParam().required);
  }
}
function ServiceManager_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 5);
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
function ServiceManager_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-help-modal", 48);
    \u0275\u0275listener("closeRequested", function ServiceManager_Conditional_21_Template_app_help_modal_closeRequested_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.helpOpen.set(false));
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Process Flow");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 49);
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "The Service Manager lets you view, create, and manage CCL web service definitions. Each service definition maps a CCL program name to a set of typed parameters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9, "Service List");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11, "Default vs Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul")(13, "li")(14, "strong");
    \u0275\u0275text(15, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, ' services ship with the application. They can be customized or deleted. Use "Reset to Default" to restore a modified default service.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li")(18, "strong");
    \u0275\u0275text(19, "Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " services are created by you and stored in localStorage. They persist across sessions but are local to your browser.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "h2");
    \u0275\u0275text(22, "Adding a New Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24, "Click ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "+ New");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " to create a custom service definition.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h3");
    \u0275\u0275text(29, "Required Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "table")(31, "thead")(32, "tr")(33, "th");
    \u0275\u0275text(34, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody")(38, "tr")(39, "td")(40, "strong");
    \u0275\u0275text(41, "Program Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td");
    \u0275\u0275text(43, "The CCL program name. Must exactly match the CCL object (use lowercase by convention).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "tr")(45, "td")(46, "strong");
    \u0275\u0275text(47, "Display Name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49, "Human-readable name shown in the Executor dropdown.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "td")(52, "strong");
    \u0275\u0275text(53, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "What this service does. Shown below the service selector on the Executor page.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "h3");
    \u0275\u0275text(57, "Adding Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59, "Parameters define what inputs the service expects. Each parameter has:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "table")(61, "thead")(62, "tr")(63, "th");
    \u0275\u0275text(64, "Property");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "tbody")(68, "tr")(69, "td")(70, "strong");
    \u0275\u0275text(71, "Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73, "Ordinal position in the CCL parameter list (1-based). Determines send order.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "tr")(75, "td")(76, "strong");
    \u0275\u0275text(77, "Parameter Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79, "Reference to a type from the Parameter Library (e.g., ");
    \u0275\u0275elementStart(80, "code");
    \u0275\u0275text(81, "facility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, ", ");
    \u0275\u0275elementStart(83, "code");
    \u0275\u0275text(84, "fin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "). Controls the input type, options, and defaults.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "tr")(87, "td")(88, "strong");
    \u0275\u0275text(89, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "td");
    \u0275\u0275text(91, "Whether the parameter must have a value. Shows a red * in the form.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "h3");
    \u0275\u0275text(93, "Parameter Position Ordering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p")(95, "strong");
    \u0275\u0275text(96, "Position matters.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, " CCL scripts receive parameters in order. If your script expects the FIN as the 3rd parameter, set its position to 3.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p");
    \u0275\u0275text(99, "Example for a script expecting ");
    \u0275\u0275elementStart(100, "code");
    \u0275\u0275text(101, "outdev, event_set_name, fin, facility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "ol")(104, "li");
    \u0275\u0275text(105, "Output Device (position 1)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "li");
    \u0275\u0275text(107, "Event Set Name (position 2)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "li");
    \u0275\u0275text(109, "FIN (position 3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "li");
    \u0275\u0275text(111, "Facility (position 4)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "h3");
    \u0275\u0275text(113, "Common Parameter Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "table")(115, "thead")(116, "tr")(117, "th");
    \u0275\u0275text(118, "Type Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "th");
    \u0275\u0275text(120, "Input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "th");
    \u0275\u0275text(122, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "tbody")(124, "tr")(125, "td")(126, "code");
    \u0275\u0275text(127, "outdev");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "td");
    \u0275\u0275text(129, "Hidden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "td");
    \u0275\u0275text(131, "Output device \u2014 usually MINE or JSON");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "tr")(133, "td")(134, "code");
    \u0275\u0275text(135, "facility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "td");
    \u0275\u0275text(137, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "td");
    \u0275\u0275text(139, "Covenant Health facility dropdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "tr")(141, "td")(142, "code");
    \u0275\u0275text(143, "fin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(144, "td");
    \u0275\u0275text(145, "Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "td");
    \u0275\u0275text(147, "Patient Financial Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "tr")(149, "td")(150, "code");
    \u0275\u0275text(151, "event_set_name");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "td");
    \u0275\u0275text(153, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "td");
    \u0275\u0275text(155, "Clinical event set hierarchy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "tr")(157, "td")(158, "code");
    \u0275\u0275text(159, "start_dt_tm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "td");
    \u0275\u0275text(161, "DateTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "td");
    \u0275\u0275text(163, "Start date/time with presets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "tr")(165, "td")(166, "code");
    \u0275\u0275text(167, "end_dt_tm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td");
    \u0275\u0275text(169, "DateTime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "td");
    \u0275\u0275text(171, "End date/time with presets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "tr")(173, "td")(174, "code");
    \u0275\u0275text(175, "person_id");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "td");
    \u0275\u0275text(177, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "td");
    \u0275\u0275text(179, "Patient person ID (sent unquoted)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "tr")(181, "td")(182, "code");
    \u0275\u0275text(183, "encntr_id");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "td");
    \u0275\u0275text(185, "Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "td");
    \u0275\u0275text(187, "Encounter ID (sent unquoted)");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(188, "h2");
    \u0275\u0275text(189, "Import / Export");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "ul")(191, "li")(192, "strong");
    \u0275\u0275text(193, "Export");
    \u0275\u0275elementEnd();
    \u0275\u0275text(194, " \u2014 Downloads all service definitions as a JSON file. Use to back up or share.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "li")(196, "strong");
    \u0275\u0275text(197, "Import");
    \u0275\u0275elementEnd();
    \u0275\u0275text(198, " \u2014 Loads service definitions from a JSON file. Services are merged; existing IDs are skipped.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(199, "p")(200, "strong");
    \u0275\u0275text(201, "Tip:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(202, " Export from one browser, import in another to share custom service definitions between workstations.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "h2");
    \u0275\u0275text(204, "How Execution Works End-to-End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "ol")(206, "li")(207, "strong");
    \u0275\u0275text(208, "Service definition");
    \u0275\u0275elementEnd();
    \u0275\u0275text(209, " is looked up from the registry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "li")(211, "strong");
    \u0275\u0275text(212, "Parameter form");
    \u0275\u0275elementEnd();
    \u0275\u0275text(213, " values are collected (user input + defaults)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(214, "li")(215, "strong");
    \u0275\u0275text(216, "Parameter string");
    \u0275\u0275elementEnd();
    \u0275\u0275text(217, " is built by sorting parameters by position and encoding each value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "li")(219, "strong");
    \u0275\u0275text(220, "CCL call");
    \u0275\u0275elementEnd();
    \u0275\u0275text(221, " is made via XMLCclRequest (Raw) or CustomService (Clinical Office)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "li")(223, "strong");
    \u0275\u0275text(224, "JSON response");
    \u0275\u0275elementEnd();
    \u0275\u0275text(225, " is parsed (with trailing comma cleanup for Raw mode)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "li")(227, "strong");
    \u0275\u0275text(228, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275text(229, " is displayed in the JSON viewer and saved to execution history");
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
      parameters: svc.parameters || []
    };
    this.registry.saveService(service);
    this.addingNew.set(false);
    this.selectedServiceId.set(service.id);
  }
  removeService(id) {
    this.registry.deleteService(id);
    if (this.selectedServiceId() === id) {
      this.selectedServiceId.set(null);
    }
  }
  resetService(id) {
    this.registry.resetService(id);
  }
  exportServices() {
    const bundle = {
      version: 2,
      parameterTypes: this.paramLibrary.exportAllTypes(),
      services: this.registry.allServices()
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
  /** Update a field on the selected service and save */
  updateServiceField(field, value) {
    const svc = this.getSelectedService();
    if (!svc)
      return;
    const updated = __spreadProps(__spreadValues({}, svc), { [field]: value });
    this.registry.saveService(updated);
  }
  /** Add a parameter to the selected service */
  addParameterToService() {
    const svc = this.getSelectedService();
    const np = this.newParam();
    if (!svc || !np.parameterTypeKey)
      return;
    const updated = __spreadProps(__spreadValues({}, svc), {
      parameters: [
        ...svc.parameters,
        {
          position: svc.parameters.length + 1,
          parameterTypeKey: np.parameterTypeKey,
          required: np.required || false
        }
      ]
    });
    this.registry.saveService(updated);
    this.newParam.set({ position: 1, parameterTypeKey: "", required: false });
  }
  /** Remove a parameter from the selected service */
  removeParameterFromService(index) {
    const svc = this.getSelectedService();
    if (!svc)
      return;
    const updated = __spreadProps(__spreadValues({}, svc), {
      parameters: svc.parameters.filter((_, i) => i !== index).map((p, i) => __spreadProps(__spreadValues({}, p), { position: i + 1 }))
    });
    this.registry.saveService(updated);
  }
  /** Update the default value override on a parameter */
  updateParameterDefault(index, value) {
    const svc = this.getSelectedService();
    if (!svc)
      return;
    const params = [...svc.parameters];
    params[index] = __spreadProps(__spreadValues({}, params[index]), {
      defaultValueOverride: value || void 0
    });
    this.registry.saveService(__spreadProps(__spreadValues({}, svc), { parameters: params }));
  }
  /** Toggle hidden flag on a parameter */
  toggleParameterHidden(index) {
    const svc = this.getSelectedService();
    if (!svc)
      return;
    const params = [...svc.parameters];
    params[index] = __spreadProps(__spreadValues({}, params[index]), { hidden: !params[index].hidden });
    this.registry.saveService(__spreadProps(__spreadValues({}, svc), { parameters: params }));
  }
  /** Toggle required flag on a parameter */
  toggleParameterRequired(index) {
    const svc = this.getSelectedService();
    if (!svc)
      return;
    const params = [...svc.parameters];
    params[index] = __spreadProps(__spreadValues({}, params[index]), { required: !params[index].required });
    this.registry.saveService(__spreadProps(__spreadValues({}, svc), { parameters: params }));
  }
  static \u0275fac = function ServiceManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceManager)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceManager, selectors: [["app-service-manager"]], decls: 22, vars: 3, consts: [[1, "service-manager-layout"], [1, "service-list-panel"], [1, "panel-header"], [1, "panel-header-actions"], ["title", "Help", 1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "material-icons"], [1, "btn", "btn-small", "btn-primary", 3, "click"], [1, "service-list"], [1, "service-item", 3, "active"], [1, "import-message"], [1, "detail-panel"], [1, "add-new-form"], [1, "empty-state"], ["title", "Service Manager Help"], [1, "service-item", 3, "click"], [1, "service-item-name"], [1, "service-item-meta"], [1, "badge"], [1, "form-group"], ["type", "text", "placeholder", "e.g., cov_my_new_script", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., My New Script", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "What does this service do?", 3, "ngModelChange", "ngModel"], [1, "param-list"], [1, "add-param-row"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "param-item"], [1, "param-position"], [1, "param-name"], [1, "param-key"], [1, "badge", "required"], [1, "btn-icon", 3, "click"], [1, "detail-header"], [1, "detail-header-actions"], [1, "btn", "btn-small", "btn-secondary"], [1, "btn", "btn-small", "btn-warn", 3, "click"], ["type", "text", "placeholder", "CCL program name", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Human-readable name", 3, "ngModelChange", "ngModel"], ["title", "Click to toggle required", 1, "badge", 3, "click"], ["title", "Click to toggle visibility in executor form", 1, "badge", 3, "click"], ["type", "text", "placeholder", "default override", "title", "Override the parameter type default for this service", 1, "param-default-input", 3, "change", "value"], ["title", "Service Manager Help", 3, "closeRequested"], ["src", "https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IFNNIGFzIFNlcnZpY2UgTWFuYWdlcgogICAgcGFydGljaXBhbnQgU1IgYXMgU2VydmljZSBSZWdpc3RyeQogICAgcGFydGljaXBhbnQgTFMgYXMgbG9jYWxTdG9yYWdlCgogICAgTm90ZSBvdmVyIFUsTFM6IEVkaXQgU2VydmljZQogICAgVS0+PlNNOiBTZWxlY3Qgc2VydmljZQogICAgU00tPj5TUjogZ2V0U2VydmljZShpZCkKICAgIFNSLS0+PlNNOiBTZXJ2aWNlIGRlZmluaXRpb24KICAgIFNNLS0+PlU6IFNob3cgZWRpdGFibGUgZm9ybQogICAgVS0+PlNNOiBDaGFuZ2UgZmllbGQgdmFsdWUKICAgIFNNLT4+U1I6IHNhdmVTZXJ2aWNlKHVwZGF0ZWQpCiAgICBTUi0+PkxTOiBQZXJzaXN0IHRvIGxvY2FsU3RvcmFnZQoKICAgIE5vdGUgb3ZlciBVLExTOiBBZGQgTmV3IFNlcnZpY2UKICAgIFUtPj5TTTogQ2xpY2sgKyBOZXcKICAgIFNNLS0+PlU6IFNob3cgYmxhbmsgZm9ybQogICAgVS0+PlNNOiBGaWxsIGZpZWxkcyArIGFkZCBwYXJhbXMKICAgIFUtPj5TTTogQ2xpY2sgU2F2ZQogICAgU00tPj5TUjogc2F2ZVNlcnZpY2UobmV3KQogICAgU1ItPj5MUzogUGVyc2lzdCB0byBsb2NhbFN0b3JhZ2UKCiAgICBOb3RlIG92ZXIgVSxMUzogRGVsZXRlIFNlcnZpY2UKICAgIFUtPj5TTTogQ2xpY2sgRGVsZXRlCiAgICBTTS0+PlNSOiBkZWxldGVTZXJ2aWNlKGlkKQogICAgYWx0IERlZmF1bHQgc2VydmljZQogICAgICAgIFNSLT4+TFM6IFRyYWNrIGFzIGRlbGV0ZWQgZGVmYXVsdAogICAgZWxzZSBDdXN0b20gc2VydmljZQogICAgICAgIFNSLT4+TFM6IFJlbW92ZSBmcm9tIHN0b3JhZ2UKICAgIGVuZAoKICAgIE5vdGUgb3ZlciBVLExTOiBSZXNldCBEZWZhdWx0CiAgICBVLT4+U006IENsaWNrIFJlc2V0IHRvIERlZmF1bHQKICAgIFNNLT4+U1I6IHJlc2V0U2VydmljZShpZCkKICAgIFNSLT4+TFM6IFJlbW92ZSB1c2VyIHZlcnNpb24K", "alt", "Service Manager process flow diagram", 2, "max-width", "100%", "height", "auto", "margin-bottom", "15px"]], template: function ServiceManager_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(16, ServiceManager_Conditional_16_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275conditionalCreate(18, ServiceManager_Conditional_18_Template, 39, 6, "div", 11)(19, ServiceManager_Conditional_19_Template, 39, 9, "div", 11)(20, ServiceManager_Conditional_20_Template, 7, 0, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(21, ServiceManager_Conditional_21_Template, 230, 0, "app-help-modal", 13);
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.services());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.importMessage()) ? 16 : -1, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.addingNew() ? 18 : (tmp_2_0 = ctx.getSelectedService()) ? 19 : 20, tmp_2_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.helpOpen() ? 21 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HelpModal], styles: ["\n\n.service-manager-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  min-width: 200px;\n  max-width: 50vw;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n  resize: horizontal;\n  overflow: hidden;\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item.active[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-top: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  display: flex;\n  gap: var(--fusion-space-tight);\n  flex-shrink: 0;\n}\n.service-list-panel[_ngcontent-%COMP%]   .import-message[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-very-tight) var(--fusion-space-loose);\n  font-size: var(--fusion-text-sm);\n  color: #1e6e35;\n  background: #e6f4ea;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%]   .detail-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]   .param-position[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item[_ngcontent-%COMP%]   .param-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item[_ngcontent-%COMP%]   .param-key[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item[_ngcontent-%COMP%]   .param-default[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item[_ngcontent-%COMP%]   .param-default-input[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 120px;\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text);\n  background: var(--fusion-color-bg-canvas);\n}\n.param-item[_ngcontent-%COMP%]   .param-default-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--fusion-color-text-disabled);\n  font-style: italic;\n}\n.param-item[_ngcontent-%COMP%]   .param-default-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--fusion-color-error);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.badge.hidden-badge[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n  font-style: italic;\n}\n.add-new-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.add-new-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.add-new-form[_ngcontent-%COMP%]   .add-param-row[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  white-space: nowrap;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.import-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=service-manager.css.map */"], changeDetection: 0 });
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
            @if (registry.isDefault(svc.id)) {
              <span class="badge">default</span>
            }
          </div>
        </div>
      }
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
      <div class="add-new-form">
        <div class="detail-header">
          <h2>{{ svc.displayName }}</h2>
          <div class="detail-header-actions">
            @if (registry.isDefault(svc.id) && registry.hasUserVersion(svc.id)) {
              <button class="btn btn-small btn-secondary" (click)="resetService(svc.id)">
                <span class="material-icons">restart_alt</span> Reset
              </button>
            }
            <button class="btn btn-small btn-warn" (click)="removeService(svc.id)">
              <span class="material-icons">delete</span> Delete
            </button>
          </div>
        </div>

        <div class="form-group">
          <label>Program Name</label>
          <input type="text"
            [ngModel]="svc.programName"
            (ngModelChange)="updateServiceField('programName', $event)"
            placeholder="CCL program name" />
        </div>

        <div class="form-group">
          <label>Display Name</label>
          <input type="text"
            [ngModel]="svc.displayName"
            (ngModelChange)="updateServiceField('displayName', $event)"
            placeholder="Human-readable name" />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            [ngModel]="svc.description"
            (ngModelChange)="updateServiceField('description', $event)"
            rows="3"
            placeholder="What does this service do?"></textarea>
        </div>

        <div class="form-group">
          <label>Parameters ({{ svc.parameters.length }})</label>

          @if (svc.parameters.length) {
            <div class="param-list">
              @for (p of svc.parameters; track p.position; let i = $index) {
                <div class="param-item">
                  <span class="param-position">{{ p.position }}.</span>
                  <span class="param-name">{{ getParamTypeLabel(p.parameterTypeKey) }}</span>
                  <span class="param-key">({{ p.parameterTypeKey }})</span>
                  <button class="badge" [class.required]="p.required" [class.optional]="!p.required"
                    (click)="toggleParameterRequired(i)" title="Click to toggle required">
                    {{ p.required ? 'required' : 'optional' }}
                  </button>
                  <button class="badge" [class.hidden-badge]="p.hidden"
                    (click)="toggleParameterHidden(i)" title="Click to toggle visibility in executor form">
                    {{ p.hidden ? 'hidden' : 'visible' }}
                  </button>
                  <input type="text" class="param-default-input"
                    [value]="p.defaultValueOverride || ''"
                    (change)="updateParameterDefault(i, $any($event.target).value)"
                    placeholder="default override"
                    title="Override the parameter type default for this service" />
                  <button class="btn-icon" (click)="removeParameterFromService(i)">
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
            <button class="btn btn-small btn-secondary" (click)="addParameterToService()">
              <span class="material-icons">add</span> Add
            </button>
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
    <h2>Process Flow</h2>
    <img src="https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IFNNIGFzIFNlcnZpY2UgTWFuYWdlcgogICAgcGFydGljaXBhbnQgU1IgYXMgU2VydmljZSBSZWdpc3RyeQogICAgcGFydGljaXBhbnQgTFMgYXMgbG9jYWxTdG9yYWdlCgogICAgTm90ZSBvdmVyIFUsTFM6IEVkaXQgU2VydmljZQogICAgVS0+PlNNOiBTZWxlY3Qgc2VydmljZQogICAgU00tPj5TUjogZ2V0U2VydmljZShpZCkKICAgIFNSLS0+PlNNOiBTZXJ2aWNlIGRlZmluaXRpb24KICAgIFNNLS0+PlU6IFNob3cgZWRpdGFibGUgZm9ybQogICAgVS0+PlNNOiBDaGFuZ2UgZmllbGQgdmFsdWUKICAgIFNNLT4+U1I6IHNhdmVTZXJ2aWNlKHVwZGF0ZWQpCiAgICBTUi0+PkxTOiBQZXJzaXN0IHRvIGxvY2FsU3RvcmFnZQoKICAgIE5vdGUgb3ZlciBVLExTOiBBZGQgTmV3IFNlcnZpY2UKICAgIFUtPj5TTTogQ2xpY2sgKyBOZXcKICAgIFNNLS0+PlU6IFNob3cgYmxhbmsgZm9ybQogICAgVS0+PlNNOiBGaWxsIGZpZWxkcyArIGFkZCBwYXJhbXMKICAgIFUtPj5TTTogQ2xpY2sgU2F2ZQogICAgU00tPj5TUjogc2F2ZVNlcnZpY2UobmV3KQogICAgU1ItPj5MUzogUGVyc2lzdCB0byBsb2NhbFN0b3JhZ2UKCiAgICBOb3RlIG92ZXIgVSxMUzogRGVsZXRlIFNlcnZpY2UKICAgIFUtPj5TTTogQ2xpY2sgRGVsZXRlCiAgICBTTS0+PlNSOiBkZWxldGVTZXJ2aWNlKGlkKQogICAgYWx0IERlZmF1bHQgc2VydmljZQogICAgICAgIFNSLT4+TFM6IFRyYWNrIGFzIGRlbGV0ZWQgZGVmYXVsdAogICAgZWxzZSBDdXN0b20gc2VydmljZQogICAgICAgIFNSLT4+TFM6IFJlbW92ZSBmcm9tIHN0b3JhZ2UKICAgIGVuZAoKICAgIE5vdGUgb3ZlciBVLExTOiBSZXNldCBEZWZhdWx0CiAgICBVLT4+U006IENsaWNrIFJlc2V0IHRvIERlZmF1bHQKICAgIFNNLT4+U1I6IHJlc2V0U2VydmljZShpZCkKICAgIFNSLT4+TFM6IFJlbW92ZSB1c2VyIHZlcnNpb24K" alt="Service Manager process flow diagram" style="max-width: 100%; height: auto; margin-bottom: 15px;" />

    <h2>Overview</h2>
    <p>The Service Manager lets you view, create, and manage CCL web service definitions. Each service definition maps a CCL program name to a set of typed parameters.</p>

    <h2>Service List</h2>

    <h3>Default vs Custom</h3>
    <ul>
      <li><strong>Default</strong> services ship with the application. They can be customized or deleted. Use "Reset to Default" to restore a modified default service.</li>
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
      <li><strong>Import</strong> \u2014 Loads service definitions from a JSON file. Services are merged; existing IDs are skipped.</li>
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
`, styles: ["/* src/app/pages/service-manager/service-manager.scss */\n.service-manager-layout {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel {\n  width: 320px;\n  min-width: 200px;\n  max-width: 50vw;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n  resize: horizontal;\n  overflow: hidden;\n}\n.service-list-panel .panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.service-list-panel .panel-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel .panel-header .panel-header-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel .service-list .service-item {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel .service-list .service-item:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel .service-list .service-item.active {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel .service-list .service-item .service-item-name {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel .service-list .service-item .service-item-meta {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list .service-item .service-item-meta code {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.service-list-panel .panel-footer {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-top: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  display: flex;\n  gap: var(--fusion-space-tight);\n  flex-shrink: 0;\n}\n.service-list-panel .import-message {\n  padding: var(--fusion-space-very-tight) var(--fusion-space-loose);\n  font-size: var(--fusion-text-sm);\n  color: #1e6e35;\n  background: #e6f4ea;\n}\n.detail-panel {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel .detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel .detail-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel .detail-header .detail-header-actions {\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.detail-panel .detail-field {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel .detail-field label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel .detail-field code {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel .detail-field p {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item .param-position {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item .param-name {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item .param-key {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item .param-default {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item .param-default-input {\n  margin-left: auto;\n  width: 120px;\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text);\n  background: var(--fusion-color-bg-canvas);\n}\n.param-item .param-default-input::placeholder {\n  color: var(--fusion-color-text-disabled);\n  font-style: italic;\n}\n.param-item .param-default-input:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.param-item .btn-icon {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item .btn-icon .material-icons {\n  font-size: 15px;\n}\n.param-item .btn-icon:hover {\n  color: var(--fusion-color-error);\n}\n.badge {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.badge.hidden-badge {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n  font-style: italic;\n}\n.add-new-form {\n  max-width: 600px;\n}\n.add-new-form h2 {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form .form-group {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form .form-group label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form .form-group input[type=text],\n.add-new-form .form-group textarea,\n.add-new-form .form-group select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form .form-group input[type=text]:focus,\n.add-new-form .form-group textarea:focus,\n.add-new-form .form-group select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form .add-param-row {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.add-new-form .add-param-row select {\n  flex: 1;\n}\n.add-new-form .add-param-row .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  white-space: nowrap;\n}\n.add-new-form .form-actions {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state h3 {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state p {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.import-btn {\n  cursor: pointer;\n}\n/*# sourceMappingURL=service-manager.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceManager, { className: "ServiceManager", filePath: "src/app/pages/service-manager/service-manager.ts", lineNumber: 16 });
})();
export {
  ServiceManager
};
//# sourceMappingURL=chunk-GWAOEBWJ.js.map
