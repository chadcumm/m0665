import {
  HelpModal
} from "./chunk-X3TRQ2YT.js";
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
  ɵɵelement,
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
  ɵɵtextInterpolate
} from "./chunk-M5ONDEQN.js";
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
    \u0275\u0275text(1, "default");
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
    \u0275\u0275conditional(ctx_r2.paramLibrary.isDefault(pt_r2.key) ? 6 : -1);
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
function ParameterManager_Conditional_18_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_4_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetToDefault());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reset to Default ");
    \u0275\u0275elementEnd();
  }
}
function ParameterManager_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ParameterManager_Conditional_18_Conditional_4_Conditional_0_Template, 4, 0, "button", 48);
    \u0275\u0275elementStart(1, "button", 49);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const type_r17 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeType(type_r17.key));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Delete ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.hasUserVersion() ? 0 : -1);
  }
}
function ParameterManager_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const type_r17 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeType(type_r17.key));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function ParameterManager_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 50);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " This default parameter has been customized. ");
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetToDefault());
    });
    \u0275\u0275text(5, " Reset to Default ");
    \u0275\u0275elementEnd()();
  }
}
function ParameterManager_Conditional_18_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r20 = ctx.$implicit;
    \u0275\u0275property("value", it_r20.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r20.label);
  }
}
function ParameterManager_Conditional_18_Conditional_42_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 35);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_42_For_5_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_288_r23 = \u0275\u0275restoreView(_r22).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateExistingOption(\u0275$index_288_r23, "label", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 36);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_42_For_5_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_288_r23 = \u0275\u0275restoreView(_r22).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateExistingOption(\u0275$index_288_r23, "value", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_42_For_5_Template_button_click_3_listener() {
      const \u0275$index_288_r23 = \u0275\u0275restoreView(_r22).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeExistingOption(\u0275$index_288_r23));
    });
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", opt_r24.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", opt_r24.value);
  }
}
function ParameterManager_Conditional_18_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275repeaterCreate(4, ParameterManager_Conditional_18_Conditional_42_For_5_Template, 6, 2, "div", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_42_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addExistingOption());
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Add Option ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(type_r17.options || \u0275\u0275pureFunction0(0, _c0));
  }
}
function ParameterManager_Conditional_18_Conditional_43_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "input", 35);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_43_For_9_Template_input_ngModelChange_1_listener($event) {
      const \u0275$index_321_r27 = \u0275\u0275restoreView(_r26).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateExistingPreset(\u0275$index_321_r27, "label", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 41);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_43_For_9_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_321_r27 = \u0275\u0275restoreView(_r26).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateExistingPreset(\u0275$index_321_r27, "preset", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_43_For_9_Template_button_click_3_listener() {
      const \u0275$index_321_r27 = \u0275\u0275restoreView(_r26).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeExistingPreset(\u0275$index_321_r27));
    });
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const preset_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", preset_r28.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", preset_r28.preset);
  }
}
function ParameterManager_Conditional_18_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "CCL Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 38);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Conditional_43_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateField("cclFormat", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "label");
    \u0275\u0275text(6, "Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39);
    \u0275\u0275repeaterCreate(8, ParameterManager_Conditional_18_Conditional_43_For_9_Template, 6, 2, "div", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(10, "button", 34);
    \u0275\u0275listener("click", function ParameterManager_Conditional_18_Conditional_43_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addExistingPreset());
    });
    \u0275\u0275elementStart(11, "span", 5);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Preset ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", type_r17.cclFormat || "");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(type_r17.presets || \u0275\u0275pureFunction0(1, _c0));
  }
}
function ParameterManager_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 42)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ParameterManager_Conditional_18_Conditional_4_Template, 5, 1)(5, ParameterManager_Conditional_18_Conditional_5_Template, 4, 0, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ParameterManager_Conditional_18_Conditional_6_Template, 6, 0, "div", 44);
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 45)(9, "label");
    \u0275\u0275text(10, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "code");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18)(14, "label");
    \u0275\u0275text(15, "Input Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 22);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField("inputType", $event));
    });
    \u0275\u0275repeaterCreate(17, ParameterManager_Conditional_18_For_18_Template, 2, 2, "option", 23, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "label");
    \u0275\u0275text(21, "Label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 46);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField("label", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 18)(24, "label");
    \u0275\u0275text(25, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "textarea", 47);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField("description", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 18)(28, "label");
    \u0275\u0275text(29, "Default Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 46);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField("defaultValue", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 18)(32, "label");
    \u0275\u0275text(33, "Placeholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 46);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField("placeholder", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 27)(36, "label")(37, "input", 28);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField("allowEmpty", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Allow Empty ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label")(40, "input", 28);
    \u0275\u0275listener("ngModelChange", function ParameterManager_Conditional_18_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateField("unquoted", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Unquoted (numeric) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(42, ParameterManager_Conditional_18_Conditional_42_Template, 10, 1, "div", 18);
    \u0275\u0275conditionalCreate(43, ParameterManager_Conditional_18_Conditional_43_Template, 14, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r17 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(type_r17.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSelectedDefault() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isSelectedDefault() && ctx_r2.hasUserVersion() ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(type_r17.key);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r17.inputType);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.inputTypes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", type_r17.label);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r17.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r17.defaultValue || "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", type_r17.placeholder || "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", type_r17.allowEmpty);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", type_r17.unquoted);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(type_r17.inputType === "select" ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(type_r17.inputType === "datetime" || type_r17.inputType === "date" || type_r17.inputType === "time" ? 43 : -1);
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
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-help-modal", 51);
    \u0275\u0275listener("closeRequested", function ParameterManager_Conditional_20_Template_app_help_modal_closeRequested_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.helpOpen.set(false));
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Process Flow");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 52);
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "The Parameter Manager lets you view, create, and customize parameter type definitions. Parameter types are reusable input definitions that services reference by key.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9, "Default vs Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
    \u0275\u0275text(13, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, ' parameter types ship with the application. All fields are fully editable. Use "Reset to Default" to restore the original definition.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "strong");
    \u0275\u0275text(17, "Custom");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " parameter types are created by you and stored in localStorage. All fields are fully editable.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h2");
    \u0275\u0275text(20, "Parameter Type Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "table")(22, "thead")(23, "tr")(24, "th");
    \u0275\u0275text(25, "Field");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody")(29, "tr")(30, "td")(31, "strong");
    \u0275\u0275text(32, "Key");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34, "Unique identifier used by service definitions to reference this parameter type. Use lowercase with underscores (e.g., ");
    \u0275\u0275elementStart(35, "code");
    \u0275\u0275text(36, "nurse_unit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "). Read-only on default types to prevent breaking references.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "tr")(39, "td")(40, "strong");
    \u0275\u0275text(41, "Label");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "td");
    \u0275\u0275text(43, 'Human-readable name shown in forms (e.g., "Nurse Unit").');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "tr")(45, "td")(46, "strong");
    \u0275\u0275text(47, "Input Type");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49, "Controls the form control rendered: text, number, select (dropdown), datetime, date, time, or hidden.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "td")(52, "strong");
    \u0275\u0275text(53, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55, "Help text shown below the input field.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "tr")(57, "td")(58, "strong");
    \u0275\u0275text(59, "Default Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61, "Pre-populated value when the parameter is used in a service.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "tr")(63, "td")(64, "strong");
    \u0275\u0275text(65, "Placeholder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "td");
    \u0275\u0275text(67, "Placeholder text shown in the input when empty.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "tr")(69, "td")(70, "strong");
    \u0275\u0275text(71, "Allow Empty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73, "Whether an empty string is a valid value (sends ");
    \u0275\u0275elementStart(74, "code");
    \u0275\u0275text(75, "^^");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " in the CCL parameter string).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "tr")(78, "td")(79, "strong");
    \u0275\u0275text(80, "Unquoted");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "td");
    \u0275\u0275text(82, "Send the value without ");
    \u0275\u0275elementStart(83, "code");
    \u0275\u0275text(84, "^caret^");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " quoting. Used for numeric CCL prompts (i2, i4, f8).");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "h2");
    \u0275\u0275text(87, "Select Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p");
    \u0275\u0275text(89, 'When the input type is "Select", you define the dropdown options. Each option has a display ');
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " and a ");
    \u0275\u0275elementStart(93, "strong");
    \u0275\u0275text(94, "value");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, " that gets sent to CCL.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "h2");
    \u0275\u0275text(97, "DateTime Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p");
    \u0275\u0275text(99, 'When the input type is "Date/Time", "Date", or "Time", you can define quick-select presets. Each preset has a ');
    \u0275\u0275elementStart(100, "strong");
    \u0275\u0275text(101, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, " shown on the button and a ");
    \u0275\u0275elementStart(103, "strong");
    \u0275\u0275text(104, "preset key");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, " resolved at runtime (e.g., ");
    \u0275\u0275elementStart(106, "code");
    \u0275\u0275text(107, "today_start");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, ", ");
    \u0275\u0275elementStart(109, "code");
    \u0275\u0275text(110, "now");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, ", ");
    \u0275\u0275elementStart(112, "code");
    \u0275\u0275text(113, "yesterday_end");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114, ").");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "h2");
    \u0275\u0275text(116, "How Parameters Connect to Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "p");
    \u0275\u0275text(118, "Service definitions reference parameter types by key. When you select a service in the Executor, the parameter form is built by looking up each parameter's type from the library. This means changing a parameter type here affects all services that use it.");
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
  /** The resolved ParameterType for the current selection */
  selectedType = computed(() => {
    const key = this.selectedTypeKey();
    return key ? this.paramLibrary.getType(key) : void 0;
  }, ...ngDevMode ? [{ debugName: "selectedType" }] : []);
  /** Whether the selected type is a default type */
  isSelectedDefault = computed(() => {
    const key = this.selectedTypeKey();
    return key ? this.paramLibrary.isDefault(key) : false;
  }, ...ngDevMode ? [{ debugName: "isSelectedDefault" }] : []);
  /** Whether the selected default type has a user version (customized) */
  hasUserVersion = computed(() => {
    const key = this.selectedTypeKey();
    return key ? this.paramLibrary.hasUserVersion(key) : false;
  }, ...ngDevMode ? [{ debugName: "hasUserVersion" }] : []);
  /** Available input types for the dropdown */
  inputTypes = [
    { label: "Text", value: "text" },
    { label: "Number", value: "number" },
    { label: "Select (Dropdown)", value: "select" },
    { label: "Date/Time", value: "datetime" },
    { label: "Date", value: "date" },
    { label: "Time", value: "time" }
  ];
  selectType(key) {
    this.selectedTypeKey.set(key);
    this.addingNew.set(false);
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
    this.paramLibrary.saveType(paramType);
    this.addingNew.set(false);
    this.selectedTypeKey.set(paramType.key);
  }
  /** Update a field on the selected type and persist */
  updateField(field, value) {
    const key = this.selectedTypeKey();
    const type = this.selectedType();
    if (!key || !type)
      return;
    const updatedType = __spreadProps(__spreadValues({}, type), { [field]: value });
    this.paramLibrary.saveType(updatedType);
  }
  /** Reset the selected default type to its original definition */
  resetToDefault() {
    const key = this.selectedTypeKey();
    if (!key)
      return;
    this.paramLibrary.resetType(key);
  }
  /** Delete a parameter type */
  removeType(key) {
    this.paramLibrary.deleteType(key);
    if (this.selectedTypeKey() === key) {
      this.selectedTypeKey.set(null);
    }
  }
  // --- Options management for new types ---
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
  // --- Options management for existing types ---
  addExistingOption() {
    const type = this.selectedType();
    if (!type)
      return;
    const options = [...type.options || [], { label: "", value: "" }];
    this.updateField("options", options);
  }
  removeExistingOption(index) {
    const type = this.selectedType();
    if (!type)
      return;
    const options = [...type.options || []];
    options.splice(index, 1);
    this.updateField("options", options);
  }
  updateExistingOption(index, field, value) {
    const type = this.selectedType();
    if (!type)
      return;
    const options = [...type.options || []];
    options[index] = __spreadProps(__spreadValues({}, options[index]), { [field]: value });
    this.updateField("options", options);
  }
  // --- Presets management for new types ---
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
  // --- Presets management for existing types ---
  addExistingPreset() {
    const type = this.selectedType();
    if (!type)
      return;
    const presets = [...type.presets || [], { label: "", preset: "" }];
    this.updateField("presets", presets);
  }
  removeExistingPreset(index) {
    const type = this.selectedType();
    if (!type)
      return;
    const presets = [...type.presets || []];
    presets.splice(index, 1);
    this.updateField("presets", presets);
  }
  updateExistingPreset(index, field, value) {
    const type = this.selectedType();
    if (!type)
      return;
    const presets = [...type.presets || []];
    presets[index] = __spreadProps(__spreadValues({}, presets[index]), { [field]: value });
    this.updateField("presets", presets);
  }
  static \u0275fac = function ParameterManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParameterManager)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParameterManager, selectors: [["app-parameter-manager"]], decls: 21, vars: 2, consts: [[1, "service-manager-layout"], [1, "service-list-panel"], [1, "panel-header"], [1, "panel-header-actions"], ["title", "Help", 1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "material-icons"], [1, "btn", "btn-small", "btn-primary", 3, "click"], [1, "service-list"], [1, "service-item", 3, "active"], [1, "detail-panel"], [1, "add-new-form"], [1, "service-detail"], [1, "empty-state"], ["title", "Parameter Manager Help"], [1, "service-item", 3, "click"], [1, "service-item-name"], [1, "service-item-meta"], [1, "badge"], [1, "form-group"], ["type", "text", "placeholder", "e.g., Nurse Unit", 3, "ngModelChange", "blur", "ngModel"], ["type", "text", "placeholder", "e.g., nurse_unit", 3, "ngModelChange", "ngModel"], [1, "key-error"], [3, "ngModelChange", "ngModel"], [3, "value"], ["rows", "2", "placeholder", "What this parameter represents", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Default value (optional)", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Placeholder text (optional)", 3, "ngModelChange", "ngModel"], [1, "checkbox-row"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-secondary", 3, "click"], [1, "options-editor"], [1, "option-row"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], ["type", "text", "placeholder", "Label", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Value", 3, "ngModelChange", "ngModel"], [1, "btn-icon", 3, "click"], ["type", "text", "placeholder", "e.g., DD-MMM-YYYY HH:MM:SS", 3, "ngModelChange", "ngModel"], [1, "presets-editor"], [1, "preset-row"], ["type", "text", "placeholder", "Preset key", 3, "ngModelChange", "ngModel"], [1, "detail-header"], [1, "btn", "btn-small", "btn-warn"], [1, "override-banner"], [1, "detail-field"], ["type", "text", 3, "ngModelChange", "ngModel"], ["rows", "2", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-small", "btn-secondary"], [1, "btn", "btn-small", "btn-warn", 3, "click"], [1, "material-icons", 2, "font-size", "16px"], ["title", "Parameter Manager Help", 3, "closeRequested"], ["src", "https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IFBNIGFzIFBhcmFtZXRlciBNYW5hZ2VyCiAgICBwYXJ0aWNpcGFudCBQTCBhcyBQYXJhbWV0ZXIgTGlicmFyeQogICAgcGFydGljaXBhbnQgTFMgYXMgbG9jYWxTdG9yYWdlCgogICAgTm90ZSBvdmVyIFUsTFM6IEVkaXQgUGFyYW1ldGVyIFR5cGUKICAgIFUtPj5QTTogU2VsZWN0IHBhcmFtZXRlcgogICAgUE0tPj5QTDogZ2V0VHlwZShrZXkpCiAgICBQTC0tPj5QTTogUGFyYW1ldGVyIHR5cGUKICAgIFBNLS0+PlU6IFNob3cgZWRpdGFibGUgZm9ybQogICAgVS0+PlBNOiBDaGFuZ2UgZmllbGQKICAgIFBNLT4+UEw6IHNhdmVUeXBlKHVwZGF0ZWQpCiAgICBQTC0+PkxTOiBQZXJzaXN0IHRvIGxvY2FsU3RvcmFnZQoKICAgIE5vdGUgb3ZlciBVLExTOiBBZGQgTmV3IFR5cGUKICAgIFUtPj5QTTogQ2xpY2sgKyBOZXcKICAgIFBNLS0+PlU6IFNob3cgYmxhbmsgZm9ybQogICAgVS0+PlBNOiBTZXQga2V5LCBsYWJlbCwgaW5wdXRUeXBlCiAgICBVLT4+UE06IEFkZCBvcHRpb25zL3ByZXNldHMgaWYgbmVlZGVkCiAgICBVLT4+UE06IENsaWNrIFNhdmUKICAgIFBNLT4+UEw6IHNhdmVUeXBlKG5ldykKICAgIFBMLT4+TFM6IFBlcnNpc3QgdG8gbG9jYWxTdG9yYWdlCgogICAgTm90ZSBvdmVyIFUsTFM6IERlbGV0ZSBUeXBlCiAgICBVLT4+UE06IENsaWNrIERlbGV0ZQogICAgUE0tPj5QTDogZGVsZXRlVHlwZShrZXkpCiAgICBhbHQgRGVmYXVsdCB0eXBlCiAgICAgICAgUEwtPj5MUzogVHJhY2sgYXMgZGVsZXRlZCBkZWZhdWx0CiAgICBlbHNlIEN1c3RvbSB0eXBlCiAgICAgICAgUEwtPj5MUzogUmVtb3ZlIGZyb20gc3RvcmFnZQogICAgZW5kCg==", "alt", "Parameter Manager process flow diagram", 2, "max-width", "100%", "height", "auto", "margin-bottom", "15px"]], template: function ParameterManager_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(17, ParameterManager_Conditional_17_Template, 46, 12, "div", 10)(18, ParameterManager_Conditional_18_Template, 44, 13, "div", 11)(19, ParameterManager_Conditional_19_Template, 7, 0, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(20, ParameterManager_Conditional_20_Template, 119, 0, "app-help-modal", 13);
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
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HelpModal], styles: ["\n\n.service-manager-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item.active[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .service-item-meta[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.detail-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item[_ngcontent-%COMP%]   .param-position[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item[_ngcontent-%COMP%]   .param-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item[_ngcontent-%COMP%]   .param-key[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item[_ngcontent-%COMP%]   .param-default[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.param-item[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--fusion-color-error);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.add-new-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.add-new-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.service-detail[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-base);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.service-detail[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.options-editor[_ngcontent-%COMP%], \n.presets-editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-tight);\n  margin-bottom: var(--fusion-space-base);\n}\n.option-row[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.option-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n}\n.option-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.preset-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.option-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.option-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.preset-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.option-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover, \n.preset-row[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--fusion-color-error);\n}\n.checkbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-loose);\n  margin-bottom: var(--fusion-space-base);\n}\n.checkbox-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  cursor: pointer;\n}\n.checkbox-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: var(--fusion-color-primary);\n}\n.override-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #e8f4fd;\n  border-left: 4px solid var(--fusion-color-info);\n  border-radius: var(--fusion-border-radius);\n  margin-bottom: var(--fusion-space-base);\n  font-size: var(--fusion-text-sm);\n  color: #0a4d78;\n}\n.override-hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.key-error[_ngcontent-%COMP%] {\n  color: var(--fusion-color-error);\n  font-size: var(--fusion-text-sm);\n  margin-top: var(--fusion-space-very-tight);\n}\n/*# sourceMappingURL=parameter-manager.css.map */"], changeDetection: 0 });
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
            @if (paramLibrary.isDefault(pt.key)) {
              <span class="badge">default</span>
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
          @if (isSelectedDefault()) {
            @if (hasUserVersion()) {
              <button class="btn btn-small btn-secondary" (click)="resetToDefault()">
                <span class="material-icons">restart_alt</span> Reset to Default
              </button>
            }
            <button class="btn btn-small btn-warn" (click)="removeType(type.key)">
              <span class="material-icons">delete</span> Delete
            </button>
          } @else {
            <button class="btn btn-small btn-warn" (click)="removeType(type.key)">
              <span class="material-icons">delete</span> Delete
            </button>
          }
        </div>

        @if (isSelectedDefault() && hasUserVersion()) {
          <div class="override-banner">
            <span class="material-icons" style="font-size: 16px;">info</span>
            This default parameter has been customized.
            <button class="btn btn-small btn-secondary" (click)="resetToDefault()">
              Reset to Default
            </button>
          </div>
        }

        <!-- All types are fully editable now -->
        <div class="add-new-form">
          <div class="detail-field">
            <label>Key</label>
            <code>{{ type.key }}</code>
          </div>

          <div class="form-group">
            <label>Input Type</label>
            <select [ngModel]="type.inputType" (ngModelChange)="updateField('inputType', $event)">
              @for (it of inputTypes; track it.value) {
                <option [value]="it.value">{{ it.label }}</option>
              }
            </select>
          </div>

          <div class="form-group">
            <label>Label</label>
            <input type="text"
              [ngModel]="type.label"
              (ngModelChange)="updateField('label', $event)" />
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea
              [ngModel]="type.description"
              (ngModelChange)="updateField('description', $event)"
              rows="2"></textarea>
          </div>

          <div class="form-group">
            <label>Default Value</label>
            <input type="text"
              [ngModel]="type.defaultValue || ''"
              (ngModelChange)="updateField('defaultValue', $event)" />
          </div>

          <div class="form-group">
            <label>Placeholder</label>
            <input type="text"
              [ngModel]="type.placeholder || ''"
              (ngModelChange)="updateField('placeholder', $event)" />
          </div>

          <div class="checkbox-row">
            <label>
              <input type="checkbox"
                [ngModel]="type.allowEmpty"
                (ngModelChange)="updateField('allowEmpty', $event)" />
              Allow Empty
            </label>
            <label>
              <input type="checkbox"
                [ngModel]="type.unquoted"
                (ngModelChange)="updateField('unquoted', $event)" />
              Unquoted (numeric)
            </label>
          </div>

          <!-- Options editor for select types -->
          @if (type.inputType === 'select') {
            <div class="form-group">
              <label>Options</label>
              <div class="options-editor">
                @for (opt of type.options || []; track $index; let i = $index) {
                  <div class="option-row">
                    <input type="text" [ngModel]="opt.label"
                      (ngModelChange)="updateExistingOption(i, 'label', $event)"
                      placeholder="Label" />
                    <input type="text" [ngModel]="opt.value"
                      (ngModelChange)="updateExistingOption(i, 'value', $event)"
                      placeholder="Value" />
                    <button class="btn-icon" (click)="removeExistingOption(i)">
                      <span class="material-icons">close</span>
                    </button>
                  </div>
                }
                <button class="btn btn-small btn-secondary" (click)="addExistingOption()">
                  <span class="material-icons">add</span> Add Option
                </button>
              </div>
            </div>
          }

          <!-- Presets editor for datetime types -->
          @if (type.inputType === 'datetime' || type.inputType === 'date' || type.inputType === 'time') {
            <div class="form-group">
              <label>CCL Format</label>
              <input type="text"
                [ngModel]="type.cclFormat || ''"
                (ngModelChange)="updateField('cclFormat', $event)"
                placeholder="e.g., DD-MMM-YYYY HH:MM:SS" />
            </div>

            <div class="form-group">
              <label>Presets</label>
              <div class="presets-editor">
                @for (preset of type.presets || []; track $index; let i = $index) {
                  <div class="preset-row">
                    <input type="text" [ngModel]="preset.label"
                      (ngModelChange)="updateExistingPreset(i, 'label', $event)"
                      placeholder="Label" />
                    <input type="text" [ngModel]="preset.preset"
                      (ngModelChange)="updateExistingPreset(i, 'preset', $event)"
                      placeholder="Preset key" />
                    <button class="btn-icon" (click)="removeExistingPreset(i)">
                      <span class="material-icons">close</span>
                    </button>
                  </div>
                }
                <button class="btn btn-small btn-secondary" (click)="addExistingPreset()">
                  <span class="material-icons">add</span> Add Preset
                </button>
              </div>
            </div>
          }
        </div>
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
    <h2>Process Flow</h2>
    <img src="https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IFBNIGFzIFBhcmFtZXRlciBNYW5hZ2VyCiAgICBwYXJ0aWNpcGFudCBQTCBhcyBQYXJhbWV0ZXIgTGlicmFyeQogICAgcGFydGljaXBhbnQgTFMgYXMgbG9jYWxTdG9yYWdlCgogICAgTm90ZSBvdmVyIFUsTFM6IEVkaXQgUGFyYW1ldGVyIFR5cGUKICAgIFUtPj5QTTogU2VsZWN0IHBhcmFtZXRlcgogICAgUE0tPj5QTDogZ2V0VHlwZShrZXkpCiAgICBQTC0tPj5QTTogUGFyYW1ldGVyIHR5cGUKICAgIFBNLS0+PlU6IFNob3cgZWRpdGFibGUgZm9ybQogICAgVS0+PlBNOiBDaGFuZ2UgZmllbGQKICAgIFBNLT4+UEw6IHNhdmVUeXBlKHVwZGF0ZWQpCiAgICBQTC0+PkxTOiBQZXJzaXN0IHRvIGxvY2FsU3RvcmFnZQoKICAgIE5vdGUgb3ZlciBVLExTOiBBZGQgTmV3IFR5cGUKICAgIFUtPj5QTTogQ2xpY2sgKyBOZXcKICAgIFBNLS0+PlU6IFNob3cgYmxhbmsgZm9ybQogICAgVS0+PlBNOiBTZXQga2V5LCBsYWJlbCwgaW5wdXRUeXBlCiAgICBVLT4+UE06IEFkZCBvcHRpb25zL3ByZXNldHMgaWYgbmVlZGVkCiAgICBVLT4+UE06IENsaWNrIFNhdmUKICAgIFBNLT4+UEw6IHNhdmVUeXBlKG5ldykKICAgIFBMLT4+TFM6IFBlcnNpc3QgdG8gbG9jYWxTdG9yYWdlCgogICAgTm90ZSBvdmVyIFUsTFM6IERlbGV0ZSBUeXBlCiAgICBVLT4+UE06IENsaWNrIERlbGV0ZQogICAgUE0tPj5QTDogZGVsZXRlVHlwZShrZXkpCiAgICBhbHQgRGVmYXVsdCB0eXBlCiAgICAgICAgUEwtPj5MUzogVHJhY2sgYXMgZGVsZXRlZCBkZWZhdWx0CiAgICBlbHNlIEN1c3RvbSB0eXBlCiAgICAgICAgUEwtPj5MUzogUmVtb3ZlIGZyb20gc3RvcmFnZQogICAgZW5kCg==" alt="Parameter Manager process flow diagram" style="max-width: 100%; height: auto; margin-bottom: 15px;" />

    <h2>Overview</h2>
    <p>The Parameter Manager lets you view, create, and customize parameter type definitions. Parameter types are reusable input definitions that services reference by key.</p>

    <h2>Default vs Custom</h2>
    <ul>
      <li><strong>Default</strong> parameter types ship with the application. All fields are fully editable. Use "Reset to Default" to restore the original definition.</li>
      <li><strong>Custom</strong> parameter types are created by you and stored in localStorage. All fields are fully editable.</li>
    </ul>

    <h2>Parameter Type Fields</h2>
    <table>
      <thead><tr><th>Field</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Key</strong></td><td>Unique identifier used by service definitions to reference this parameter type. Use lowercase with underscores (e.g., <code>nurse_unit</code>). Read-only on default types to prevent breaking references.</td></tr>
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
`, styles: ["/* src/app/pages/parameter-manager/parameter-manager.scss */\n.service-manager-layout {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.service-list-panel {\n  width: 320px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.service-list-panel .panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.service-list-panel .panel-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.service-list-panel .panel-header .panel-header-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.service-list-panel .service-list .service-item {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  cursor: pointer;\n  border-bottom: 1px solid var(--fusion-color-border);\n  transition: background var(--fusion-transition-fast);\n}\n.service-list-panel .service-list .service-item:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.service-list-panel .service-list .service-item.active {\n  background: var(--fusion-color-bg-selected);\n  border-left: 3px solid var(--fusion-color-primary);\n  padding-left: calc(var(--fusion-space-loose) - 3px);\n}\n.service-list-panel .service-list .service-item .service-item-name {\n  font-weight: 600;\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n}\n.service-list-panel .service-list .service-item .service-item-meta {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n}\n.service-list-panel .service-list .service-item .service-item-meta code {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n}\n.detail-panel {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  background: var(--fusion-color-bg-canvas);\n}\n.detail-panel .detail-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-loose);\n}\n.detail-panel .detail-header h2 {\n  margin: 0;\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.detail-panel .detail-field {\n  margin-bottom: var(--fusion-space-base);\n}\n.detail-panel .detail-field label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.detail-panel .detail-field code {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-primary);\n}\n.detail-panel .detail-field p {\n  margin: 0;\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n}\n.param-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-bottom: var(--fusion-space-tight);\n}\n.param-item {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border: 1px solid var(--fusion-color-border);\n  border-bottom: none;\n  font-size: var(--fusion-text-base);\n}\n.param-item:first-child {\n  border-radius: var(--fusion-border-radius) var(--fusion-border-radius) 0 0;\n}\n.param-item:last-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: 0 0 var(--fusion-border-radius) var(--fusion-border-radius);\n}\n.param-item:only-child {\n  border-bottom: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n}\n.param-item .param-position {\n  font-weight: 600;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  min-width: 18px;\n}\n.param-item .param-name {\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.param-item .param-key {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.param-item .param-default {\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-sm);\n  font-style: italic;\n  margin-left: auto;\n}\n.param-item .btn-icon {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.param-item .btn-icon .material-icons {\n  font-size: 15px;\n}\n.param-item .btn-icon:hover {\n  color: var(--fusion-color-error);\n}\n.badge {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.badge.required {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n}\n.badge.optional {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.add-new-form {\n  max-width: 600px;\n}\n.add-new-form h2 {\n  margin: 0 0 var(--fusion-space-loose);\n  font-size: var(--fusion-text-xl);\n  font-weight: 600;\n}\n.add-new-form .form-group {\n  margin-bottom: var(--fusion-space-base);\n}\n.add-new-form .form-group label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.add-new-form .form-group input[type=text],\n.add-new-form .form-group textarea,\n.add-new-form .form-group select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.add-new-form .form-group input[type=text]:focus,\n.add-new-form .form-group textarea:focus,\n.add-new-form .form-group select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.add-new-form .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.add-new-form .form-actions {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.service-detail {\n  max-width: 600px;\n}\n.service-detail .form-group {\n  margin-bottom: var(--fusion-space-base);\n}\n.service-detail .form-group label {\n  display: block;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  margin-bottom: var(--fusion-space-very-tight);\n  color: var(--fusion-color-text);\n}\n.service-detail .form-group input[type=text],\n.service-detail .form-group textarea,\n.service-detail .form-group select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.service-detail .form-group input[type=text]:focus,\n.service-detail .form-group textarea:focus,\n.service-detail .form-group select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.service-detail .form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.empty-state h3 {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.empty-state p {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.options-editor,\n.presets-editor {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-tight);\n  margin-bottom: var(--fusion-space-base);\n}\n.option-row,\n.preset-row {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.option-row input,\n.preset-row input {\n  flex: 1;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n}\n.option-row input:focus,\n.preset-row input:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.option-row .btn-icon,\n.preset-row .btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fusion-color-text-secondary);\n  padding: 2px;\n}\n.option-row .btn-icon .material-icons,\n.preset-row .btn-icon .material-icons {\n  font-size: 15px;\n}\n.option-row .btn-icon:hover,\n.preset-row .btn-icon:hover {\n  color: var(--fusion-color-error);\n}\n.checkbox-row {\n  display: flex;\n  gap: var(--fusion-space-loose);\n  margin-bottom: var(--fusion-space-base);\n}\n.checkbox-row label {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  cursor: pointer;\n}\n.checkbox-row label input[type=checkbox] {\n  accent-color: var(--fusion-color-primary);\n}\n.override-banner {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: #e8f4fd;\n  border-left: 4px solid var(--fusion-color-info);\n  border-radius: var(--fusion-border-radius);\n  margin-bottom: var(--fusion-space-base);\n  font-size: var(--fusion-text-sm);\n  color: #0a4d78;\n}\n.override-hint {\n  font-weight: 400;\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.key-error {\n  color: var(--fusion-color-error);\n  font-size: var(--fusion-text-sm);\n  margin-top: var(--fusion-space-very-tight);\n}\n/*# sourceMappingURL=parameter-manager.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParameterManager, { className: "ParameterManager", filePath: "src/app/pages/parameter-manager/parameter-manager.ts", lineNumber: 15 });
})();
export {
  ParameterManager
};
//# sourceMappingURL=chunk-XFALHPLO.js.map
