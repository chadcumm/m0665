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
  computed,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZHUMCYTK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/pages/parameter-manager/parameter-manager.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.value;
function ParameterManager_For_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "built-in");
    \u0275\u0275elementEnd();
  }
}
function ParameterManager_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function ParameterManager_For_15_Template_div_click_0_listener() {
      const pt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectType(pt_r2.key));
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ParameterManager_For_15_Conditional_6_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedTypeKey() === pt_r2.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pt_r2.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pt_r2.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.paramLibrary.isBuiltIn(pt_r2.key) ? 6 : -1);
  }
}
function ParameterManager_Conditional_17_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "This key already exists. Keys must be unique.");
    \u0275\u0275elementEnd();
  }
}
function ParameterManager_Conditional_17_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r5 = ctx.$implicit;
    \u0275\u0275property("value", it_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r5.label);
  }
}
function ParameterManager_Conditional_17_Conditional_37_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 35);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Conditional_37_For_5_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_118_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateOption(\u0275$index_118_r8, "label", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 36);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Conditional_37_For_5_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_118_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateOption(\u0275$index_118_r8, "value", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function ParameterManager_Conditional_17_Conditional_37_For_5_Template_button_click_3_listener() {
      const \u0275$index_118_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeOption(\u0275$index_118_r8));
    });
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", opt_r9.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", opt_r9.value);
  }
}
function ParameterManager_Conditional_17_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275repeaterCreate(4, ParameterManager_Conditional_17_Conditional_37_For_5_Template, 6, 2, "div", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_17_Conditional_37_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addOption());
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Add Option ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.newType().options || \u0275\u0275pureFunction0(0, _c0));
  }
}
function ParameterManager_Conditional_17_Conditional_38_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "input", 35);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Conditional_38_For_9_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_151_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updatePreset(\u0275$index_151_r12, "label", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 41);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Conditional_38_For_9_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_151_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updatePreset(\u0275$index_151_r12, "preset", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function ParameterManager_Conditional_17_Conditional_38_For_9_Template_button_click_3_listener() {
      const \u0275$index_151_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removePreset(\u0275$index_151_r12));
    });
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const preset_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", preset_r13.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", preset_r13.preset);
  }
}
function ParameterManager_Conditional_17_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "CCL Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 38);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Conditional_38_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("cclFormat", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "label");
    \u0275\u0275text(6, "Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275repeaterCreate(8, ParameterManager_Conditional_17_Conditional_38_For_9_Template, 6, 2, "div", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(10, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_17_Conditional_38_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addPreset());
    });
    \u0275\u0275elementStart(11, "span", 5);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Preset ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.newType().cclFormat);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.newType().presets || \u0275\u0275pureFunction0(1, _c0));
  }
}
function ParameterManager_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h2");
    \u0275\u0275text(2, "Add New Parameter Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "label");
    \u0275\u0275text(5, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 19);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("label", $event));
    })("blur", function ParameterManager_Conditional_17_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newType().key ? null : ctx_r2.autoGenerateKey());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "label");
    \u0275\u0275text(9, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 20);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("key", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ParameterManager_Conditional_17_Conditional_11_Template, 2, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "label");
    \u0275\u0275text(14, "Input Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 22);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("inputType", $event));
    });
    \u0275\u0275repeaterCreate(16, ParameterManager_Conditional_17_For_17_Template, 2, 2, "option", 23, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "label");
    \u0275\u0275text(20, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 24);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 18)(23, "label");
    \u0275\u0275text(24, "Default Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 25);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("defaultValue", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18)(27, "label");
    \u0275\u0275text(28, "Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 26);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("placeholder", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 27)(31, "label")(32, "input", 28);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("allowEmpty", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Allow Empty ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label")(35, "input", 28);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_17_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateNewTypeField("unquoted", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Unquoted (numeric) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(37, ParameterManager_Conditional_17_Conditional_37_Template, 10, 1, "div", 18);
    \u0275\u0275conditionalCreate(38, ParameterManager_Conditional_17_Conditional_38_Template, 14, 2);
    \u0275\u0275elementStart(39, "div", 29)(40, "button", 30);
    \u0275\u0275listener("click", function ParameterManager_Conditional_17_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveNewType());
    });
    \u0275\u0275elementStart(41, "span", 5);
    \u0275\u0275text(42, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " Save Parameter Type ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 31);
    \u0275\u0275listener("click", function ParameterManager_Conditional_17_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelAddNew());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r2.newType().label);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.newType().key);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newType().key && !ctx_r2.isKeyUnique(ctx_r2.newType().key) ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.newType().inputType);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.inputTypes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.newType().description);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.newType().defaultValue);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.newType().placeholder);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.newType().allowEmpty);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.newType().unquoted);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.newType().inputType === "select" ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newType().inputType === "datetime" || ctx_r2.newType().inputType === "date" || ctx_r2.newType().inputType === "time" ? 38 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.newType().key || !ctx_r2.newType().label || !ctx_r2.isKeyUnique(ctx_r2.newType().key));
  }
}
function ParameterManager_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const type_r15 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeType(type_r15.key));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function ParameterManager_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 46);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " This built-in parameter has custom overrides applied. ");
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetBuiltInOverride());
    });
    \u0275\u0275text(5, " Reset to Default ");
    \u0275\u0275elementEnd()();
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_34_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r18.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", opt_r18.value, ")");
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275repeaterCreate(4, ParameterManager_Conditional_18_Conditional_6_Conditional_34_For_5_Template, 5, 2, "div", 52, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Options (", type_r15.options == null ? null : type_r15.options.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(type_r15.options);
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_35_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const preset_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(preset_r19.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", preset_r19.preset, ")");
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275repeaterCreate(4, ParameterManager_Conditional_18_Conditional_6_Conditional_35_For_5_Template, 5, 2, "div", 52, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Presets (", type_r15.presets == null ? null : type_r15.presets.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(type_r15.presets);
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "label");
    \u0275\u0275text(2, "CCL Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(type_r15.cclFormat);
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Allow Empty ");
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " , ");
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Unquoted (numeric) ");
  }
}
function ParameterManager_Conditional_18_Conditional_6_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " None ");
  }
}
function ParameterManager_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "label");
    \u0275\u0275text(2, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "label");
    \u0275\u0275text(7, "Input Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18)(11, "label");
    \u0275\u0275text(12, "Label ");
    \u0275\u0275elementStart(13, "span", 48);
    \u0275\u0275text(14, "(overridable)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 49);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_6_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateBuiltInOverride("label", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 18)(17, "label");
    \u0275\u0275text(18, "Description ");
    \u0275\u0275elementStart(19, "span", 48);
    \u0275\u0275text(20, "(overridable)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "textarea", 50);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_6_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateBuiltInOverride("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 18)(23, "label");
    \u0275\u0275text(24, "Default Value ");
    \u0275\u0275elementStart(25, "span", 48);
    \u0275\u0275text(26, "(overridable)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 49);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_6_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateBuiltInOverride("defaultValue", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "label");
    \u0275\u0275text(30, "Placeholder ");
    \u0275\u0275elementStart(31, "span", 48);
    \u0275\u0275text(32, "(overridable)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 49);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_6_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateBuiltInOverride("placeholder", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, ParameterManager_Conditional_18_Conditional_6_Conditional_34_Template, 6, 1, "div", 47);
    \u0275\u0275conditionalCreate(35, ParameterManager_Conditional_18_Conditional_6_Conditional_35_Template, 6, 1, "div", 47);
    \u0275\u0275conditionalCreate(36, ParameterManager_Conditional_18_Conditional_6_Conditional_36_Template, 5, 1, "div", 47);
    \u0275\u0275elementStart(37, "div", 47)(38, "label");
    \u0275\u0275text(39, "Flags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275conditionalCreate(41, ParameterManager_Conditional_18_Conditional_6_Conditional_41_Template, 1, 0);
    \u0275\u0275conditionalCreate(42, ParameterManager_Conditional_18_Conditional_6_Conditional_42_Template, 1, 0);
    \u0275\u0275conditionalCreate(43, ParameterManager_Conditional_18_Conditional_6_Conditional_43_Template, 1, 0);
    \u0275\u0275conditionalCreate(44, ParameterManager_Conditional_18_Conditional_6_Conditional_44_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(type_r15.key);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(type_r15.inputType);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", type_r15.label);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", type_r15.description);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", type_r15.defaultValue || "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", type_r15.placeholder || "");
    \u0275\u0275advance();
    \u0275\u0275conditional((type_r15.options == null ? null : type_r15.options.length) ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((type_r15.presets == null ? null : type_r15.presets.length) ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(type_r15.cclFormat ? 36 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(type_r15.allowEmpty ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(type_r15.allowEmpty && type_r15.unquoted ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(type_r15.unquoted ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!type_r15.allowEmpty && !type_r15.unquoted ? 44 : -1);
  }
}
function ParameterManager_Conditional_18_Conditional_7_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r21 = ctx.$implicit;
    \u0275\u0275property("value", it_r21.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r21.label);
  }
}
function ParameterManager_Conditional_18_Conditional_7_Conditional_35_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 35);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Conditional_35_For_5_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_390_r24 = \u0275\u0275restoreView(_r23).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateCustomOption(\u0275$index_390_r24, "label", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 36);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Conditional_35_For_5_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_390_r24 = \u0275\u0275restoreView(_r23).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateCustomOption(\u0275$index_390_r24, "value", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_7_Conditional_35_For_5_Template_button_click_3_listener() {
      const \u0275$index_390_r24 = \u0275\u0275restoreView(_r23).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeCustomOption(\u0275$index_390_r24));
    });
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", opt_r25.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", opt_r25.value);
  }
}
function ParameterManager_Conditional_18_Conditional_7_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275repeaterCreate(4, ParameterManager_Conditional_18_Conditional_7_Conditional_35_For_5_Template, 6, 2, "div", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_7_Conditional_35_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addCustomOption());
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Add Option ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(type_r15.options || \u0275\u0275pureFunction0(0, _c0));
  }
}
function ParameterManager_Conditional_18_Conditional_7_Conditional_36_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "input", 35);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Conditional_36_For_9_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_423_r28 = \u0275\u0275restoreView(_r27).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateCustomPreset(\u0275$index_423_r28, "label", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 41);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Conditional_36_For_9_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_423_r28 = \u0275\u0275restoreView(_r27).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateCustomPreset(\u0275$index_423_r28, "preset", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_7_Conditional_36_For_9_Template_button_click_3_listener() {
      const \u0275$index_423_r28 = \u0275\u0275restoreView(_r27).$index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeCustomPreset(\u0275$index_423_r28));
    });
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const preset_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", preset_r29.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", preset_r29.preset);
  }
}
function ParameterManager_Conditional_18_Conditional_7_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "CCL Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 38);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Conditional_36_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("cclFormat", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "label");
    \u0275\u0275text(6, "Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275repeaterCreate(8, ParameterManager_Conditional_18_Conditional_7_Conditional_36_For_9_Template, 6, 2, "div", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(10, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_7_Conditional_36_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addCustomPreset());
    });
    \u0275\u0275elementStart(11, "span", 5);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Preset ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", type_r15.cclFormat || "");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(type_r15.presets || \u0275\u0275pureFunction0(1, _c0));
  }
}
function ParameterManager_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 47)(2, "label");
    \u0275\u0275text(3, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "label");
    \u0275\u0275text(8, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 49);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("label", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18)(11, "label");
    \u0275\u0275text(12, "Input Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 22);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("inputType", $event));
    });
    \u0275\u0275repeaterCreate(14, ParameterManager_Conditional_18_Conditional_7_For_15_Template, 2, 2, "option", 23, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 18)(17, "label");
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 50);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "label");
    \u0275\u0275text(22, "Default Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 49);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("defaultValue", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18)(25, "label");
    \u0275\u0275text(26, "Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 49);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("placeholder", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 27)(29, "label")(30, "input", 28);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("allowEmpty", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Allow Empty ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label")(33, "input", 28);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_7_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateCustomField("unquoted", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Unquoted (numeric) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, ParameterManager_Conditional_18_Conditional_7_Conditional_35_Template, 10, 1, "div", 18);
    \u0275\u0275conditionalCreate(36, ParameterManager_Conditional_18_Conditional_7_Conditional_36_Template, 14, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(type_r15.key);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r15.label);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r15.inputType);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.inputTypes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", type_r15.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r15.defaultValue || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r15.placeholder || "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", type_r15.allowEmpty);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", type_r15.unquoted);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(type_r15.inputType === "select" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(type_r15.inputType === "datetime" || type_r15.inputType === "date" || type_r15.inputType === "time" ? 36 : -1);
  }
}
function ParameterManager_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 42)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ParameterManager_Conditional_18_Conditional_4_Template, 4, 0, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParameterManager_Conditional_18_Conditional_5_Template, 6, 0, "div", 44);
    \u0275\u0275conditionalCreate(6, ParameterManager_Conditional_18_Conditional_6_Template, 45, 13)(7, ParameterManager_Conditional_18_Conditional_7_Template, 37, 10, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isSelectedBuiltIn() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSelectedBuiltIn() && ctx_r2.hasOverride() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSelectedBuiltIn() ? 6 : 7);
  }
}
function ParameterManager_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 5);
    \u0275\u0275text(2, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Parameter Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, 'Select a parameter type to view or edit its configuration, or click "New" to create a custom parameter type.');
    \u0275\u0275elementEnd()();
  }
}
function ParameterManager_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-help-modal", 55);
    \u0275\u0275listener("closeRequested", function ParameterManager_Conditional_20_Template_app_help_modal_closeRequested_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.helpOpen.set(false));
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The Parameter Manager lets you view, create, and customize parameter type definitions. Parameter types are reusable input definitions that services reference by key.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Built-in vs Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul")(8, "li")(9, "strong");
    \u0275\u0275text(10, "Built-in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " parameter types ship with the application. Their core structure (key, input type, options) cannot be changed, but you can override the label, description, default value, and placeholder.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "strong");
    \u0275\u0275text(14, "Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " parameter types are created by you and stored in localStorage. All fields are fully editable.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "Parameter Type Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "table")(19, "thead")(20, "tr")(21, "th");
    \u0275\u0275text(22, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody")(26, "tr")(27, "td")(28, "strong");
    \u0275\u0275text(29, "Key");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31, "Unique identifier used by service definitions to reference this parameter type. Use lowercase with underscores (e.g., ");
    \u0275\u0275elementStart(32, "code");
    \u0275\u0275text(33, "nurse_unit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, ").");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "td")(37, "strong");
    \u0275\u0275text(38, "Label");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40, 'Human-readable name shown in forms (e.g., "Nurse Unit").');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "tr")(42, "td")(43, "strong");
    \u0275\u0275text(44, "Input Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "Controls the form control rendered: text, number, select (dropdown), datetime, date, time, or hidden.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tr")(48, "td")(49, "strong");
    \u0275\u0275text(50, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52, "Help text shown below the input field.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "tr")(54, "td")(55, "strong");
    \u0275\u0275text(56, "Default Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "td");
    \u0275\u0275text(58, "Pre-populated value when the parameter is used in a service.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "tr")(60, "td")(61, "strong");
    \u0275\u0275text(62, "Placeholder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "td");
    \u0275\u0275text(64, "Placeholder text shown in the input when empty.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "tr")(66, "td")(67, "strong");
    \u0275\u0275text(68, "Allow Empty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70, "Whether an empty string is a valid value (sends ");
    \u0275\u0275elementStart(71, "code");
    \u0275\u0275text(72, "^^");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " in the CCL parameter string).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "tr")(75, "td")(76, "strong");
    \u0275\u0275text(77, "Unquoted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79, "Send the value without ");
    \u0275\u0275elementStart(80, "code");
    \u0275\u0275text(81, "^caret^");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, " quoting. Used for numeric CCL prompts (i2, i4, f8).");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "h2");
    \u0275\u0275text(84, "Select Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p");
    \u0275\u0275text(86, 'When the input type is "Select", you define the dropdown options. Each option has a display ');
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, " and a ");
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91, "value");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " that gets sent to CCL.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "h2");
    \u0275\u0275text(94, "DateTime Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p");
    \u0275\u0275text(96, 'When the input type is "Date/Time", "Date", or "Time", you can define quick-select presets. Each preset has a ');
    \u0275\u0275elementStart(97, "strong");
    \u0275\u0275text(98, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, " shown on the button and a ");
    \u0275\u0275elementStart(100, "strong");
    \u0275\u0275text(101, "preset key");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " resolved at runtime (e.g., ");
    \u0275\u0275elementStart(103, "code");
    \u0275\u0275text(104, "today_start");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, ", ");
    \u0275\u0275elementStart(106, "code");
    \u0275\u0275text(107, "now");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, ", ");
    \u0275\u0275elementStart(109, "code");
    \u0275\u0275text(110, "yesterday_end");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, ").");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "h2");
    \u0275\u0275text(113, "How Parameters Connect to Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p");
    \u0275\u0275text(115, "Service definitions reference parameter types by key. When you select a service in the Executor, the parameter form is built by looking up each parameter's type from the library. This means changing a parameter type here affects all services that use it.");
    \u0275\u0275elementEnd()();
  }
}
var ParameterManager = class _ParameterManager {
  paramLibrary = inject(ParameterLibraryService);
  /** Currently selected parameter type key */
  selectedTypeKey = signal(null, ...ngDevMode ? [{ debugName: "selectedTypeKey" }] : []);
  /** Whether we're in "add new" mode */
  addingNew = signal(false, ...ngDevMode ? [{ debugName: "addingNew" }] : []);
  /** Whether the help modal is open */
  helpOpen = signal(false, ...ngDevMode ? [{ debugName: "helpOpen" }] : []);
  /** New parameter type form data */
  newType = signal({
    key: "",
    label: "",
    inputType: "text",
    description: ""
  }, ...ngDevMode ? [{ debugName: "newType" }] : []);
  /** Tracks field-level overrides when editing a built-in type */
  editOverrides = signal({}, ...ngDevMode ? [{ debugName: "editOverrides" }] : []);
  /** The resolved ParameterType for the current selection */
  selectedType = computed(() => {
    const key = this.selectedTypeKey();
    return key ? this.paramLibrary.getType(key) : void 0;
  }, ...ngDevMode ? [{ debugName: "selectedType" }] : []);
  /** Whether the selected type is built-in */
  isSelectedBuiltIn = computed(() => {
    const key = this.selectedTypeKey();
    return key ? this.paramLibrary.isBuiltIn(key) : false;
  }, ...ngDevMode ? [{ debugName: "isSelectedBuiltIn" }] : []);
  /** Whether the selected built-in type has an active override */
  hasOverride = computed(() => {
    const key = this.selectedTypeKey();
    return key ? this.paramLibrary.getBuiltInOverride(key) !== void 0 : false;
  }, ...ngDevMode ? [{ debugName: "hasOverride" }] : []);
  /** Available input types for the dropdown */
  inputTypes = [
    { label: "Text", value: "text" },
    { label: "Number", value: "number" },
    { label: "Select (Dropdown)", value: "select" },
    { label: "Date/Time", value: "datetime" },
    { label: "Date", value: "date" },
    { label: "Time", value: "time" },
    { label: "Hidden", value: "hidden" }
  ];
  selectType(key) {
    this.selectedTypeKey.set(key);
    this.addingNew.set(false);
    const override = this.paramLibrary.getBuiltInOverride(key);
    this.editOverrides.set(override ? __spreadValues({}, override) : {});
  }
  startAddNew() {
    this.addingNew.set(true);
    this.selectedTypeKey.set(null);
    this.newType.set({
      key: "",
      label: "",
      inputType: "text",
      description: ""
    });
  }
  cancelAddNew() {
    this.addingNew.set(false);
  }
  updateNewTypeField(field, value) {
    this.newType.update((t) => __spreadProps(__spreadValues({}, t), { [field]: value }));
  }
  /** Auto-generate a key from the label */
  autoGenerateKey() {
    const label = this.newType().label || "";
    const key = label.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
    this.newType.update((t) => __spreadProps(__spreadValues({}, t), { key }));
  }
  /** Check if a key is unique across all parameter types */
  isKeyUnique(key) {
    return !this.paramLibrary.allTypes().some((t) => t.key === key);
  }
  saveNewType() {
    const t = this.newType();
    if (!t.key || !t.label)
      return;
    if (!this.isKeyUnique(t.key))
      return;
    const paramType = {
      key: t.key,
      label: t.label,
      inputType: t.inputType || "text",
      description: t.description || "",
      defaultValue: t.defaultValue,
      placeholder: t.placeholder,
      allowEmpty: t.allowEmpty,
      unquoted: t.unquoted,
      options: t.options,
      presets: t.presets,
      cclFormat: t.cclFormat
    };
    this.paramLibrary.addCustomType(paramType);
    this.addingNew.set(false);
    this.selectedTypeKey.set(paramType.key);
  }
  /** Update a field override for a built-in type */
  updateBuiltInOverride(field, value) {
    this.editOverrides.update((o) => __spreadProps(__spreadValues({}, o), { [field]: value }));
    this.paramLibrary.setBuiltInOverride(this.selectedTypeKey(), this.editOverrides());
  }
  /** Reset all overrides for the selected built-in type */
  resetBuiltInOverride() {
    this.paramLibrary.clearBuiltInOverride(this.selectedTypeKey());
    this.editOverrides.set({});
  }
  /** Remove a custom parameter type */
  removeType(key) {
    this.paramLibrary.removeCustomType(key);
    if (this.selectedTypeKey() === key) {
      this.selectedTypeKey.set(null);
    }
  }
  /** Update a custom type field and persist */
  updateCustomField(field, value) {
    const key = this.selectedTypeKey();
    if (!key)
      return;
    this.paramLibrary.updateCustomType(key, { [field]: value });
  }
  // --- Options management for select types ---
  addOption() {
    const t = this.newType();
    const options = [...t.options || [], { label: "", value: "" }];
    this.newType.update((n) => __spreadProps(__spreadValues({}, n), { options }));
  }
  removeOption(index) {
    const options = [...this.newType().options || []];
    options.splice(index, 1);
    this.newType.update((n) => __spreadProps(__spreadValues({}, n), { options }));
  }
  updateOption(index, field, value) {
    const options = [...this.newType().options || []];
    options[index] = __spreadProps(__spreadValues({}, options[index]), { [field]: value });
    this.newType.update((n) => __spreadProps(__spreadValues({}, n), { options }));
  }
  // --- Options management for existing custom types ---
  addCustomOption() {
    const key = this.selectedTypeKey();
    const type = this.selectedType();
    if (!key || !type)
      return;
    const options = [...type.options || [], { label: "", value: "" }];
    this.paramLibrary.updateCustomType(key, { options });
  }
  removeCustomOption(index) {
    const key = this.selectedTypeKey();
    const type = this.selectedType();
    if (!key || !type)
      return;
    const options = [...type.options || []];
    options.splice(index, 1);
    this.paramLibrary.updateCustomType(key, { options });
  }
  updateCustomOption(index, field, value) {
    const key = this.selectedTypeKey();
    const type = this.selectedType();
    if (!key || !type)
      return;
    const options = [...type.options || []];
    options[index] = __spreadProps(__spreadValues({}, options[index]), { [field]: value });
    this.paramLibrary.updateCustomType(key, { options });
  }
  // --- Presets management for datetime types ---
  addPreset() {
    const t = this.newType();
    const presets = [...t.presets || [], { label: "", preset: "" }];
    this.newType.update((n) => __spreadProps(__spreadValues({}, n), { presets }));
  }
  removePreset(index) {
    const presets = [...this.newType().presets || []];
    presets.splice(index, 1);
    this.newType.update((n) => __spreadProps(__spreadValues({}, n), { presets }));
  }
  updatePreset(index, field, value) {
    const presets = [...this.newType().presets || []];
    presets[index] = __spreadProps(__spreadValues({}, presets[index]), { [field]: value });
    this.newType.update((n) => __spreadProps(__spreadValues({}, n), { presets }));
  }
  // --- Presets management for existing custom types ---
  addCustomPreset() {
    const key = this.selectedTypeKey();
    const type = this.selectedType();
    if (!key || !type)
      return;
    const presets = [...type.presets || [], { label: "", preset: "" }];
    this.paramLibrary.updateCustomType(key, { presets });
  }
  removeCustomPreset(index) {
    const key = this.selectedTypeKey();
    const type = this.selectedType();
    if (!key || !type)
      return;
    const presets = [...type.presets || []];
    presets.splice(index, 1);
    this.paramLibrary.updateCustomType(key, { presets });
  }
  updateCustomPreset(index, field, value) {
    const key = this.selectedTypeKey();
    const type = this.selectedType();
    if (!key || !type)
      return;
    const presets = [...type.presets || []];
    presets[index] = __spreadProps(__spreadValues({}, presets[index]), { [field]: value });
    this.paramLibrary.updateCustomType(key, { presets });
  }
  static \u0275fac = function ParameterManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParameterManager)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParameterManager, selectors: [["app-parameter-manager"]], decls: 21, vars: 2, consts: [[1, "service-manager-layout"], [1, "service-list-panel"], [1, "panel-header"], [1, "panel-header-actions"], ["title", "Help", 1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "material-icons"], [1, "btn", "btn-small", "btn-primary", 3, "click"], [1, "service-list"], [1, "service-item", 3, "active"], [1, "detail-panel"], [1, "add-new-form"], [1, "service-detail"], [1, "empty-state"], ["title", "Parameter Manager Help"], [1, "service-item", 3, "click"], [1, "service-item-name"], [1, "service-item-meta"], [1, "badge"], [1, "form-group"], ["type", "text", "placeholder", "e.g., Nurse Unit", 3, "ngModelChange", "blur", "ngModel"], ["type", "text", "placeholder", "e.g., nurse_unit", 3, "ngModelChange", "ngModel"], [1, "key-error"], [3, "ngModelChange", "ngModel"], [3, "value"], ["rows", "2", "placeholder", "What this parameter represents", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Default value (optional)", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Placeholder text (optional)", 3, "ngModelChange", "ngModel"], [1, "checkbox-row"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-secondary", 3, "click"], [1, "options-editor"], [1, "option-row"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], ["type", "text", "placeholder", "Label", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Value", 3, "ngModelChange", "ngModel"], [1, "btn-icon", 3, "click"], ["type", "text", "placeholder", "e.g., DD-MMM-YYYY HH:MM:SS", 3, "ngModelChange", "ngModel"], [1, "presets-editor"], [1, "preset-row"], ["type", "text", "placeholder", "Preset key", 3, "ngModelChange", "ngModel"], [1, "detail-header"], [1, "btn", "btn-small", "btn-warn"], [1, "override-banner"], [1, "btn", "btn-small", "btn-warn", 3, "click"], [1, "material-icons", 2, "font-size", "16px"], [1, "detail-field"], [1, "override-hint"], ["type", "text", 3, "ngModelChange", "ngModel"], ["rows", "2", 3, "ngModelChange", "ngModel"], [1, "param-list"], [1, "param-item"], [1, "param-name"], [1, "param-key"], ["title", "Parameter Manager Help", 3, "closeRequested"]], template: function ParameterManager_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Parameters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function ParameterManager_Template_button_click_6_listener() {
        return ctx.helpOpen.set(true);
      });
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "help_outline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function ParameterManager_Template_button_click_9_listener() {
        return ctx.startAddNew();
      });
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " New ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275repeaterCreate(14, ParameterManager_For_15_Template, 7, 5, "div", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275conditionalCreate(17, ParameterManager_Conditional_17_Template, 46, 12, "div", 10)(18, ParameterManager_Conditional_18_Template, 8, 4, "div", 11)(19, ParameterManager_Conditional_19_Template, 7, 0, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(20, ParameterManager_Conditional_20_Template, 116, 0, "app-help-modal", 13);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.paramLibrary.allTypes());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.addingNew() ? 17 : (tmp_1_0 = ctx.selectedType()) ? 18 : 19, tmp_1_0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.helpOpen() ? 20 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HelpModal], styles: ["\n\n.service-manager-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item.active[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.detail-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]   .param-position[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item[_ngcontent-%COMP%]   .param-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item[_ngcontent-%COMP%]   .param-key[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item[_ngcontent-%COMP%]   .param-default[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--fusion-color-error);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.add-new-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.add-new-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.service-detail[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.options-editor[_ngcontent-%COMP%], \n.presets-editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-tight);\n  margin-bottom: var(--fusion-space-base);\n}\n.option-row[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.option-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n}\n.option-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.preset-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.option-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.option-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.option-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover, \n.preset-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--fusion-color-error);\n}\n.checkbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-loose);\n  margin-bottom: var(--fusion-space-base);\n}\n.checkbox-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  cursor: pointer;\n}\n.checkbox-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: var(--fusion-color-primary);\n}\n.override-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #e8f4fd;\n  border-left: 4px solid var(--fusion-color-info);\n  border-radius: var(--fusion-border-radius);\n  margin-bottom: var(--fusion-space-base);\n  font-size: var(--fusion-text-sm);\n  color: #0a4d78;\n}\n.override-hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.key-error[_ngcontent-%COMP%] {\n  color: var(--fusion-color-error);\n  font-size: var(--fusion-text-sm);\n  margin-top: var(--fusion-space-very-tight);\n}\n/*# sourceMappingURL=parameter-manager.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParameterManager, [{
    type: Component,
    args: [{ selector: "app-parameter-manager", standalone: true, imports: [FormsModule, HelpModal], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="service-manager-layout">
  <!-- Left: Parameter Type List -->
  <div class="service-list-panel">
    <div class="panel-header">
      <h2>Parameters</h2>
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
      @for (pt of paramLibrary.allTypes(); track pt.key) {
        <div
          class="service-item"
          [class.active]="selectedTypeKey() === pt.key"
          (click)="selectType(pt.key)">
          <div class="service-item-name">{{ pt.label }}</div>
          <div class="service-item-meta">
            <code>{{ pt.key }}</code>
            @if (paramLibrary.isBuiltIn(pt.key)) {
              <span class="badge">built-in</span>
            }
          </div>
        </div>
      }
    </div>
  </div>

  <!-- Right: Detail / Add New -->
  <div class="detail-panel">
    @if (addingNew()) {
      <!-- Add New Parameter Type Form -->
      <div class="add-new-form">
        <h2>Add New Parameter Type</h2>

        <div class="form-group">
          <label>Label</label>
          <input type="text"
            [ngModel]="newType().label"
            (ngModelChange)="updateNewTypeField('label', $event)"
            (blur)="newType().key ? null : autoGenerateKey()"
            placeholder="e.g., Nurse Unit" />
        </div>

        <div class="form-group">
          <label>Key</label>
          <input type="text"
            [ngModel]="newType().key"
            (ngModelChange)="updateNewTypeField('key', $event)"
            placeholder="e.g., nurse_unit" />
          @if (newType().key && !isKeyUnique(newType().key!)) {
            <div class="key-error">This key already exists. Keys must be unique.</div>
          }
        </div>

        <div class="form-group">
          <label>Input Type</label>
          <select
            [ngModel]="newType().inputType"
            (ngModelChange)="updateNewTypeField('inputType', $event)">
            @for (it of inputTypes; track it.value) {
              <option [value]="it.value">{{ it.label }}</option>
            }
          </select>
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea
            [ngModel]="newType().description"
            (ngModelChange)="updateNewTypeField('description', $event)"
            rows="2"
            placeholder="What this parameter represents"></textarea>
        </div>

        <div class="form-group">
          <label>Default Value</label>
          <input type="text"
            [ngModel]="newType().defaultValue"
            (ngModelChange)="updateNewTypeField('defaultValue', $event)"
            placeholder="Default value (optional)" />
        </div>

        <div class="form-group">
          <label>Placeholder</label>
          <input type="text"
            [ngModel]="newType().placeholder"
            (ngModelChange)="updateNewTypeField('placeholder', $event)"
            placeholder="Placeholder text (optional)" />
        </div>

        <div class="checkbox-row">
          <label>
            <input type="checkbox"
              [ngModel]="newType().allowEmpty"
              (ngModelChange)="updateNewTypeField('allowEmpty', $event)" />
            Allow Empty
          </label>
          <label>
            <input type="checkbox"
              [ngModel]="newType().unquoted"
              (ngModelChange)="updateNewTypeField('unquoted', $event)" />
            Unquoted (numeric)
          </label>
        </div>

        <!-- Options editor for select type -->
        @if (newType().inputType === 'select') {
          <div class="form-group">
            <label>Options</label>
            <div class="options-editor">
              @for (opt of newType().options || []; track $index; let i = $index) {
                <div class="option-row">
                  <input type="text" [ngModel]="opt.label"
                    (ngModelChange)="updateOption(i, 'label', $event)"
                    placeholder="Label" />
                  <input type="text" [ngModel]="opt.value"
                    (ngModelChange)="updateOption(i, 'value', $event)"
                    placeholder="Value" />
                  <button class="btn-icon" (click)="removeOption(i)">
                    <span class="material-icons">close</span>
                  </button>
                </div>
              }
              <button class="btn btn-small btn-secondary" (click)="addOption()">
                <span class="material-icons">add</span> Add Option
              </button>
            </div>
          </div>
        }

        <!-- Presets editor for datetime/date/time types -->
        @if (newType().inputType === 'datetime' || newType().inputType === 'date' || newType().inputType === 'time') {
          <div class="form-group">
            <label>CCL Format</label>
            <input type="text"
              [ngModel]="newType().cclFormat"
              (ngModelChange)="updateNewTypeField('cclFormat', $event)"
              placeholder="e.g., DD-MMM-YYYY HH:MM:SS" />
          </div>

          <div class="form-group">
            <label>Presets</label>
            <div class="presets-editor">
              @for (preset of newType().presets || []; track $index; let i = $index) {
                <div class="preset-row">
                  <input type="text" [ngModel]="preset.label"
                    (ngModelChange)="updatePreset(i, 'label', $event)"
                    placeholder="Label" />
                  <input type="text" [ngModel]="preset.preset"
                    (ngModelChange)="updatePreset(i, 'preset', $event)"
                    placeholder="Preset key" />
                  <button class="btn-icon" (click)="removePreset(i)">
                    <span class="material-icons">close</span>
                  </button>
                </div>
              }
              <button class="btn btn-small btn-secondary" (click)="addPreset()">
                <span class="material-icons">add</span> Add Preset
              </button>
            </div>
          </div>
        }

        <div class="form-actions">
          <button class="btn btn-primary" (click)="saveNewType()"
            [disabled]="!newType().key || !newType().label || !isKeyUnique(newType().key!)">
            <span class="material-icons">save</span> Save Parameter Type
          </button>
          <button class="btn btn-secondary" (click)="cancelAddNew()">Cancel</button>
        </div>
      </div>

    } @else if (selectedType(); as type) {
      <!-- View/Edit Selected Parameter Type -->
      <div class="service-detail">
        <div class="detail-header">
          <h2>{{ type.label }}</h2>
          @if (!isSelectedBuiltIn()) {
            <button class="btn btn-small btn-warn" (click)="removeType(type.key)">
              <span class="material-icons">delete</span> Delete
            </button>
          }
        </div>

        @if (isSelectedBuiltIn() && hasOverride()) {
          <div class="override-banner">
            <span class="material-icons" style="font-size: 16px;">info</span>
            This built-in parameter has custom overrides applied.
            <button class="btn btn-small btn-secondary" (click)="resetBuiltInOverride()">
              Reset to Default
            </button>
          </div>
        }

        @if (isSelectedBuiltIn()) {
          <!-- Built-in type: read-only fields with overridable fields -->
          <div class="detail-field">
            <label>Key</label>
            <code>{{ type.key }}</code>
          </div>

          <div class="detail-field">
            <label>Input Type</label>
            <p>{{ type.inputType }}</p>
          </div>

          <div class="form-group">
            <label>Label <span class="override-hint">(overridable)</span></label>
            <input type="text"
              [ngModel]="type.label"
              (ngModelChange)="updateBuiltInOverride('label', $event)" />
          </div>

          <div class="form-group">
            <label>Description <span class="override-hint">(overridable)</span></label>
            <textarea
              [ngModel]="type.description"
              (ngModelChange)="updateBuiltInOverride('description', $event)"
              rows="2"></textarea>
          </div>

          <div class="form-group">
            <label>Default Value <span class="override-hint">(overridable)</span></label>
            <input type="text"
              [ngModel]="type.defaultValue || ''"
              (ngModelChange)="updateBuiltInOverride('defaultValue', $event)" />
          </div>

          <div class="form-group">
            <label>Placeholder <span class="override-hint">(overridable)</span></label>
            <input type="text"
              [ngModel]="type.placeholder || ''"
              (ngModelChange)="updateBuiltInOverride('placeholder', $event)" />
          </div>

          @if (type.options?.length) {
            <div class="detail-field">
              <label>Options ({{ type.options?.length }})</label>
              <div class="param-list">
                @for (opt of type.options; track $index) {
                  <div class="param-item">
                    <span class="param-name">{{ opt.label }}</span>
                    <span class="param-key">({{ opt.value }})</span>
                  </div>
                }
              </div>
            </div>
          }

          @if (type.presets?.length) {
            <div class="detail-field">
              <label>Presets ({{ type.presets?.length }})</label>
              <div class="param-list">
                @for (preset of type.presets; track $index) {
                  <div class="param-item">
                    <span class="param-name">{{ preset.label }}</span>
                    <span class="param-key">({{ preset.preset }})</span>
                  </div>
                }
              </div>
            </div>
          }

          @if (type.cclFormat) {
            <div class="detail-field">
              <label>CCL Format</label>
              <code>{{ type.cclFormat }}</code>
            </div>
          }

          <div class="detail-field">
            <label>Flags</label>
            <p>
              @if (type.allowEmpty) { Allow Empty }
              @if (type.allowEmpty && type.unquoted) { , }
              @if (type.unquoted) { Unquoted (numeric) }
              @if (!type.allowEmpty && !type.unquoted) { None }
            </p>
          </div>

        } @else {
          <!-- Custom type: full edit form -->
          <div class="add-new-form">
            <div class="detail-field">
              <label>Key</label>
              <code>{{ type.key }}</code>
            </div>

            <div class="form-group">
              <label>Label</label>
              <input type="text"
                [ngModel]="type.label"
                (ngModelChange)="updateCustomField('label', $event)" />
            </div>

            <div class="form-group">
              <label>Input Type</label>
              <select
                [ngModel]="type.inputType"
                (ngModelChange)="updateCustomField('inputType', $event)">
                @for (it of inputTypes; track it.value) {
                  <option [value]="it.value">{{ it.label }}</option>
                }
              </select>
            </div>

            <div class="form-group">
              <label>Description</label>
              <textarea
                [ngModel]="type.description"
                (ngModelChange)="updateCustomField('description', $event)"
                rows="2"></textarea>
            </div>

            <div class="form-group">
              <label>Default Value</label>
              <input type="text"
                [ngModel]="type.defaultValue || ''"
                (ngModelChange)="updateCustomField('defaultValue', $event)" />
            </div>

            <div class="form-group">
              <label>Placeholder</label>
              <input type="text"
                [ngModel]="type.placeholder || ''"
                (ngModelChange)="updateCustomField('placeholder', $event)" />
            </div>

            <div class="checkbox-row">
              <label>
                <input type="checkbox"
                  [ngModel]="type.allowEmpty"
                  (ngModelChange)="updateCustomField('allowEmpty', $event)" />
                Allow Empty
              </label>
              <label>
                <input type="checkbox"
                  [ngModel]="type.unquoted"
                  (ngModelChange)="updateCustomField('unquoted', $event)" />
                Unquoted (numeric)
              </label>
            </div>

            <!-- Options editor for custom select types -->
            @if (type.inputType === 'select') {
              <div class="form-group">
                <label>Options</label>
                <div class="options-editor">
                  @for (opt of type.options || []; track $index; let i = $index) {
                    <div class="option-row">
                      <input type="text" [ngModel]="opt.label"
                        (ngModelChange)="updateCustomOption(i, 'label', $event)"
                        placeholder="Label" />
                      <input type="text" [ngModel]="opt.value"
                        (ngModelChange)="updateCustomOption(i, 'value', $event)"
                        placeholder="Value" />
                      <button class="btn-icon" (click)="removeCustomOption(i)">
                        <span class="material-icons">close</span>
                      </button>
                    </div>
                  }
                  <button class="btn btn-small btn-secondary" (click)="addCustomOption()">
                    <span class="material-icons">add</span> Add Option
                  </button>
                </div>
              </div>
            }

            <!-- Presets editor for custom datetime types -->
            @if (type.inputType === 'datetime' || type.inputType === 'date' || type.inputType === 'time') {
              <div class="form-group">
                <label>CCL Format</label>
                <input type="text"
                  [ngModel]="type.cclFormat || ''"
                  (ngModelChange)="updateCustomField('cclFormat', $event)"
                  placeholder="e.g., DD-MMM-YYYY HH:MM:SS" />
              </div>

              <div class="form-group">
                <label>Presets</label>
                <div class="presets-editor">
                  @for (preset of type.presets || []; track $index; let i = $index) {
                    <div class="preset-row">
                      <input type="text" [ngModel]="preset.label"
                        (ngModelChange)="updateCustomPreset(i, 'label', $event)"
                        placeholder="Label" />
                      <input type="text" [ngModel]="preset.preset"
                        (ngModelChange)="updateCustomPreset(i, 'preset', $event)"
                        placeholder="Preset key" />
                      <button class="btn-icon" (click)="removeCustomPreset(i)">
                        <span class="material-icons">close</span>
                      </button>
                    </div>
                  }
                  <button class="btn btn-small btn-secondary" (click)="addCustomPreset()">
                    <span class="material-icons">add</span> Add Preset
                  </button>
                </div>
              </div>
            }
          </div>
        }
      </div>

    } @else {
      <!-- Empty state -->
      <div class="empty-state">
        <span class="material-icons">tune</span>
        <h3>Parameter Manager</h3>
        <p>Select a parameter type to view or edit its configuration, or click "New" to create a custom parameter type.</p>
      </div>
    }
  </div>
</div>

<!-- Help Modal -->
@if (helpOpen()) {
  <app-help-modal title="Parameter Manager Help" (closeRequested)="helpOpen.set(false)">
    <h2>Overview</h2>
    <p>The Parameter Manager lets you view, create, and customize parameter type definitions. Parameter types are reusable input definitions that services reference by key.</p>

    <h2>Built-in vs Custom</h2>
    <ul>
      <li><strong>Built-in</strong> parameter types ship with the application. Their core structure (key, input type, options) cannot be changed, but you can override the label, description, default value, and placeholder.</li>
      <li><strong>Custom</strong> parameter types are created by you and stored in localStorage. All fields are fully editable.</li>
    </ul>

    <h2>Parameter Type Fields</h2>
    <table>
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Key</strong></td><td>Unique identifier used by service definitions to reference this parameter type. Use lowercase with underscores (e.g., <code>nurse_unit</code>).</td></tr>
        <tr><td><strong>Label</strong></td><td>Human-readable name shown in forms (e.g., "Nurse Unit").</td></tr>
        <tr><td><strong>Input Type</strong></td><td>Controls the form control rendered: text, number, select (dropdown), datetime, date, time, or hidden.</td></tr>
        <tr><td><strong>Description</strong></td><td>Help text shown below the input field.</td></tr>
        <tr><td><strong>Default Value</strong></td><td>Pre-populated value when the parameter is used in a service.</td></tr>
        <tr><td><strong>Placeholder</strong></td><td>Placeholder text shown in the input when empty.</td></tr>
        <tr><td><strong>Allow Empty</strong></td><td>Whether an empty string is a valid value (sends <code>^^</code> in the CCL parameter string).</td></tr>
        <tr><td><strong>Unquoted</strong></td><td>Send the value without <code>^caret^</code> quoting. Used for numeric CCL prompts (i2, i4, f8).</td></tr>
      </tbody>
    </table>

    <h2>Select Options</h2>
    <p>When the input type is "Select", you define the dropdown options. Each option has a display <strong>label</strong> and a <strong>value</strong> that gets sent to CCL.</p>

    <h2>DateTime Presets</h2>
    <p>When the input type is "Date/Time", "Date", or "Time", you can define quick-select presets. Each preset has a <strong>label</strong> shown on the button and a <strong>preset key</strong> resolved at runtime (e.g., <code>today_start</code>, <code>now</code>, <code>yesterday_end</code>).</p>

    <h2>How Parameters Connect to Services</h2>
    <p>Service definitions reference parameter types by key. When you select a service in the Executor, the parameter form is built by looking up each parameter's type from the library. This means changing a parameter type here affects all services that use it.</p>
  </app-help-modal>
}
`, styles: ["/* src/app/pages/parameter-manager/parameter-manager.scss */\n.service-manager-layout {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel {\n  width: 320px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.service-list-panel .panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n}\n.service-list-panel .panel-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel .panel-header .panel-header-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel .service-list .service-item {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel .service-list .service-item:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel .service-list .service-item.active {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel .service-list .service-item .service-item-name {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel .service-list .service-item .service-item-meta {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list .service-item .service-item-meta code {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.detail-panel {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel .detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel .detail-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel .detail-field {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel .detail-field label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel .detail-field code {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel .detail-field p {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item .param-position {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item .param-name {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item .param-key {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item .param-default {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item .btn-icon {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item .btn-icon .material-icons {\n  font-size: 15px;\n}\n.param-item .btn-icon:hover {\n  color: var(--fusion-color-error);\n}\n.badge {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.add-new-form {\n  max-width: 600px;\n}\n.add-new-form h2 {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form .form-group {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form .form-group label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form .form-group input[type=text],\n.add-new-form .form-group textarea,\n.add-new-form .form-group select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form .form-group input[type=text]:focus,\n.add-new-form .form-group textarea:focus,\n.add-new-form .form-group select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form .form-actions {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.service-detail {\n  max-width: 600px;\n}\n.service-detail .form-group {\n  margin-bottom: var(--fusion-space-base);\n}\n.service-detail .form-group label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.service-detail .form-group input[type=text],\n.service-detail .form-group textarea,\n.service-detail .form-group select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.service-detail .form-group input[type=text]:focus,\n.service-detail .form-group textarea:focus,\n.service-detail .form-group select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.service-detail .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state h3 {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state p {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.options-editor,\n.presets-editor {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-tight);\n  margin-bottom: var(--fusion-space-base);\n}\n.option-row,\n.preset-row {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.option-row input,\n.preset-row input {\n  flex: 1;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n}\n.option-row input:focus,\n.preset-row input:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.option-row .btn-icon,\n.preset-row .btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.option-row .btn-icon .material-icons,\n.preset-row .btn-icon .material-icons {\n  font-size: 15px;\n}\n.option-row .btn-icon:hover,\n.preset-row .btn-icon:hover {\n  color: var(--fusion-color-error);\n}\n.checkbox-row {\n  display: flex;\n  gap: var(--fusion-space-loose);\n  margin-bottom: var(--fusion-space-base);\n}\n.checkbox-row label {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  cursor: pointer;\n}\n.checkbox-row label input[type=checkbox] {\n  accent-color: var(--fusion-color-primary);\n}\n.override-banner {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #e8f4fd;\n  border-left: 4px solid var(--fusion-color-info);\n  border-radius: var(--fusion-border-radius);\n  margin-bottom: var(--fusion-space-base);\n  font-size: var(--fusion-text-sm);\n  color: #0a4d78;\n}\n.override-hint {\n  font-weight: 400;\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.key-error {\n  color: var(--fusion-color-error);\n  font-size: var(--fusion-text-sm);\n  margin-top: var(--fusion-space-very-tight);\n}\n/*# sourceMappingURL=parameter-manager.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParameterManager, { className: "ParameterManager", filePath: "src/app/pages/parameter-manager/parameter-manager.ts", lineNumber: 15 });
})();
export {
  ParameterManager
};
//# sourceMappingURL=chunk-FUC3F6HC.js.map
