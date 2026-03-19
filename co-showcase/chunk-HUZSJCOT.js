import {
  ButtonDirective,
  ChangeDetectionStrategy,
  CodeValueService,
  Component,
  FormsModule,
  MPageService,
  MpageIconComponent,
  MpageInputComponent,
  MpageRadioComponent,
  MpageSelectComponent,
  MpageTableComponent,
  NgControlStatus,
  NgModel,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7XJKXICL.js";

// src/app/config/config.ts
var _c0 = () => ["Email", "Phone", "SMS", "Fax"];
function Config_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mpage-table", 28);
    \u0275\u0275twoWayListener("columnConfigChange", function Config_Conditional_10_Template_mpage_table_columnConfigChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.codeValueColumns, $event) || (ctx_r1.codeValueColumns = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.codeValueResults());
    \u0275\u0275twoWayProperty("columnConfig", ctx_r1.codeValueColumns);
  }
}
function Config_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 29);
    \u0275\u0275text(2, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r3 === "default" ? "" : color_r3);
    \u0275\u0275attribute("color", color_r3 === "default" ? null : color_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("default / ", color_r3);
  }
}
function Config_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 31);
    \u0275\u0275text(2, "Raised");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r4 === "default" ? "" : color_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("raised / ", color_r4);
  }
}
function Config_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 32);
    \u0275\u0275text(2, "Stroked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const color_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r5 === "default" ? "" : color_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("stroked / ", color_r5);
  }
}
function Config_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 33)(2, "mpage-icon");
    \u0275\u0275text(3, "star");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const color_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", color_r6 === "default" ? "" : color_r6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("icon / ", color_r6);
  }
}
var Config = class _Config {
  mPage = inject(MPageService);
  codeValueService = inject(CodeValueService);
  // Section A: Code Value Browser
  codeSetNumber = "";
  codeValueResults = signal([], ...ngDevMode ? [{ debugName: "codeValueResults" }] : []);
  codeValueColumns = signal({
    columns: [
      { column: "codeValue", label: "Code Value", type: "number", visible: true, sticky: false, width: 100, justification: "right" },
      { column: "display", label: "Display", type: "text", visible: true, sticky: false, width: 200, justification: "left" },
      { column: "displayKey", label: "Display Key", type: "text", visible: true, sticky: false, width: 200, justification: "left" },
      { column: "cdfMeaning", label: "CDF Meaning", type: "text", visible: true, sticky: false, width: 150, justification: "left" },
      { column: "description", label: "Description", type: "text", visible: true, sticky: false, width: 200, justification: "left" }
    ],
    columnSort: []
  }, ...ngDevMode ? [{ debugName: "codeValueColumns" }] : []);
  // Section B: Personnel Lookup
  selectedPhysician = 0;
  selectedCodeValue = 0;
  // Section C: Form Controls
  textValue = "";
  numberValue = 0;
  emailValue = "";
  textareaValue = "";
  colorValue = "#3f51b5";
  dateValue = "";
  notificationPref = "Email";
  // Section D: Button Showcase
  buttonStyles = ["default", "raised", "stroked", "icon"];
  buttonColors = ["default", "primary", "accent", "warn"];
  lookupCodeSet() {
    const codeSet = parseInt(this.codeSetNumber, 10);
    if (!codeSet || isNaN(codeSet)) {
      this.mPage.notifyUser("Please enter a valid code set number", 3e3, "bottom", "20em", "warn");
      return;
    }
    this.codeValueService.load(codeSet, void 0, void 0, void 0, void 0, true, () => {
      const results = this.codeValueService.getCodeSet(codeSet);
      this.codeValueResults.set(results);
      if (results.length === 0) {
        this.mPage.notifyUser("No code values found for code set " + codeSet, 3e3, "bottom", "20em", "warn");
      } else {
        this.mPage.notifyUser("Loaded " + results.length + " code values", 2e3, "bottom", "20em", "primary");
      }
    });
  }
  notify(position, color, delay) {
    this.mPage.notifyUser("Notification from " + position + " (" + color + ")", delay, position, "20em", color);
  }
  getButtonIcon(style) {
    if (style === "icon") {
      return "star";
    }
    return "";
  }
  static \u0275fac = function Config_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Config)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Config, selectors: [["app-config"]], decls: 69, vars: 17, consts: [[1, "config-container"], [1, "config-section"], [1, "lookup-row"], ["type", "text", "label", "Code Set Number", "name", "codeSetNumber", 3, "ngModelChange", "ngModel"], ["coButton", "raised", "color", "accent", 3, "click"], [3, "data", "columnConfig"], [1, "select-row"], ["label", "Physician Search", "name", "physicianSelect", 3, "ngModelChange", "ngModel", "physicianInd", "searchable"], ["label", "Sex (Code Set 57)", "name", "codeSetSelect", 3, "ngModelChange", "ngModel", "codeSet"], [1, "input-showcase"], ["type", "text", "label", "Full Name", "name", "textInput", 3, "ngModelChange", "ngModel"], ["type", "number", "label", "Phone Extension", "name", "numberInput", 3, "ngModelChange", "ngModel"], ["type", "email", "label", "Email Address", "name", "emailInput", 3, "ngModelChange", "ngModel"], ["type", "date", "label", "Start Date", "name", "dateInput", 3, "ngModelChange", "ngModel"], ["type", "color", "label", "Theme Color", "name", "colorInput", 3, "ngModelChange", "ngModel"], [1, "input-showcase-full"], ["type", "textarea", "label", "Additional Notes", "name", "textareaInput", 3, "ngModelChange", "rows", "ngModel"], [1, "radio-section"], ["label", "Preferred Contact Method", "name", "contactMethod", 3, "ngModelChange", "values", "ngModel"], [1, "button-grid"], [1, "button-cell"], [2, "margin-bottom", "12px", "color", "#666"], [1, "notification-row"], ["coButton", "raised", "color", "primary", 3, "click"], ["coButton", "raised", "color", "warn", 3, "click"], ["coButton", "stroked", "color", "primary", 3, "click"], ["coButton", "stroked", "color", "accent", 3, "click"], ["coButton", "stroked", "color", "warn", 3, "click"], [3, "columnConfigChange", "data", "columnConfig"], ["coButton", "default", 3, "color"], [1, "button-label"], ["coButton", "raised", 3, "color"], ["coButton", "stroked", 3, "color"], ["coButton", "icon", 3, "color"]], template: function Config_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2")(3, "mpage-icon");
      \u0275\u0275text(4, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Code Value Browser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2)(7, "mpage-input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.codeSetNumber, $event) || (ctx.codeSetNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function Config_Template_button_click_8_listener() {
        return ctx.lookupCodeSet();
      });
      \u0275\u0275text(9, "Lookup");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, Config_Conditional_10_Template, 1, 2, "mpage-table", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 1)(12, "h2")(13, "mpage-icon");
      \u0275\u0275text(14, "person_search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Personnel Lookup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 6)(17, "mpage-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPhysician, $event) || (ctx.selectedPhysician = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mpage-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCodeValue, $event) || (ctx.selectedCodeValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 1)(20, "h2")(21, "mpage-icon");
      \u0275\u0275text(22, "tune");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Notification Preferences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 9)(25, "mpage-input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.textValue, $event) || (ctx.textValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mpage-input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.numberValue, $event) || (ctx.numberValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mpage-input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.emailValue, $event) || (ctx.emailValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mpage-input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateValue, $event) || (ctx.dateValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mpage-input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.colorValue, $event) || (ctx.colorValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "div");
      \u0275\u0275elementStart(31, "div", 15)(32, "mpage-input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.textareaValue, $event) || (ctx.textareaValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 17)(34, "mpage-radio-group", 18);
      \u0275\u0275twoWayListener("ngModelChange", function Config_Template_mpage_radio_group_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.notificationPref, $event) || (ctx.notificationPref = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 1)(36, "h2")(37, "mpage-icon");
      \u0275\u0275text(38, "smart_button");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " Button Showcase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 19);
      \u0275\u0275repeaterCreate(41, Config_For_42_Template, 5, 3, "div", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275repeaterCreate(43, Config_For_44_Template, 5, 2, "div", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275repeaterCreate(45, Config_For_46_Template, 5, 2, "div", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275repeaterCreate(47, Config_For_48_Template, 6, 2, "div", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 1)(50, "h2")(51, "mpage-icon");
      \u0275\u0275text(52, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p", 21);
      \u0275\u0275text(55, "Click buttons to trigger notifications with different positions, colors, and delays.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 22)(57, "button", 23);
      \u0275\u0275listener("click", function Config_Template_button_click_57_listener() {
        return ctx.notify("top", "primary", 3e3);
      });
      \u0275\u0275text(58, "Top / Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 4);
      \u0275\u0275listener("click", function Config_Template_button_click_59_listener() {
        return ctx.notify("bottom", "accent", 3e3);
      });
      \u0275\u0275text(60, "Bottom / Accent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 24);
      \u0275\u0275listener("click", function Config_Template_button_click_61_listener() {
        return ctx.notify("center", "warn", 3e3);
      });
      \u0275\u0275text(62, "Center / Warn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 25);
      \u0275\u0275listener("click", function Config_Template_button_click_63_listener() {
        return ctx.notify("top", "primary", 5e3);
      });
      \u0275\u0275text(64, "Top / 5s Delay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 26);
      \u0275\u0275listener("click", function Config_Template_button_click_65_listener() {
        return ctx.notify("bottom", "accent", 1e3);
      });
      \u0275\u0275text(66, "Bottom / 1s Delay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 27);
      \u0275\u0275listener("click", function Config_Template_button_click_67_listener() {
        return ctx.notify("center", "warn", 7e3);
      });
      \u0275\u0275text(68, "Center / 7s Delay");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.codeSetNumber);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.codeValueResults().length > 0 ? 10 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPhysician);
      \u0275\u0275property("physicianInd", true)("searchable", true);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCodeValue);
      \u0275\u0275property("codeSet", 57);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.textValue);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.numberValue);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.emailValue);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.dateValue);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.colorValue);
      \u0275\u0275advance(3);
      \u0275\u0275property("rows", 3);
      \u0275\u0275twoWayProperty("ngModel", ctx.textareaValue);
      \u0275\u0275advance(2);
      \u0275\u0275property("values", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.notificationPref);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.buttonColors);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.buttonColors);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.buttonColors);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.buttonColors);
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    ButtonDirective,
    MpageInputComponent,
    MpageSelectComponent,
    MpageRadioComponent,
    MpageTableComponent,
    MpageIconComponent
  ], styles: ["\n\n.config-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  max-width: 1000px;\n}\n.config-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 4px;\n  border: 1px solid #e0e0e0;\n}\n.config-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 1.2em;\n  color: var(--primary-color);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  max-width: 600px;\n}\n.button-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.button-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.button-label[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  color: grey;\n}\n.lookup-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.select-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.select-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.notification-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.input-showcase[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  max-width: 700px;\n}\n.input-showcase-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.radio-section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=config.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Config, [{
    type: Component,
    args: [{ selector: "app-config", standalone: true, imports: [
      FormsModule,
      ButtonDirective,
      MpageInputComponent,
      MpageSelectComponent,
      MpageRadioComponent,
      MpageTableComponent,
      MpageIconComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="config-container">

  <!-- Section A: Code Value Browser -->
  <div class="config-section">
    <h2><mpage-icon>search</mpage-icon> Code Value Browser</h2>
    <div class="lookup-row">
      <mpage-input type="text" label="Code Set Number" [(ngModel)]="codeSetNumber" name="codeSetNumber"></mpage-input>
      <button coButton="raised" color="accent" (click)="lookupCodeSet()">Lookup</button>
    </div>
    @if (codeValueResults().length > 0) {
      <mpage-table [data]="codeValueResults()" [(columnConfig)]="codeValueColumns"></mpage-table>
    }
  </div>

  <!-- Section B: Personnel Lookup -->
  <div class="config-section">
    <h2><mpage-icon>person_search</mpage-icon> Personnel Lookup</h2>
    <div class="select-row">
      <mpage-select
        label="Physician Search"
        [(ngModel)]="selectedPhysician"
        [physicianInd]="true"
        [searchable]="true"
        name="physicianSelect">
      </mpage-select>
      <mpage-select
        label="Sex (Code Set 57)"
        [(ngModel)]="selectedCodeValue"
        [codeSet]="57"
        name="codeSetSelect">
      </mpage-select>
    </div>
  </div>

  <!-- Section C: Form Controls (Notification Preferences) -->
  <div class="config-section">
    <h2><mpage-icon>tune</mpage-icon> Notification Preferences</h2>
    <div class="input-showcase">
      <mpage-input type="text" label="Full Name" [(ngModel)]="textValue" name="textInput"></mpage-input>
      <mpage-input type="number" label="Phone Extension" [(ngModel)]="numberValue" name="numberInput"></mpage-input>
      <mpage-input type="email" label="Email Address" [(ngModel)]="emailValue" name="emailInput"></mpage-input>
      <mpage-input type="date" label="Start Date" [(ngModel)]="dateValue" name="dateInput"></mpage-input>
      <mpage-input type="color" label="Theme Color" [(ngModel)]="colorValue" name="colorInput"></mpage-input>
      <div></div>
      <div class="input-showcase-full">
        <mpage-input type="textarea" label="Additional Notes" [rows]="3" [(ngModel)]="textareaValue" name="textareaInput"></mpage-input>
      </div>
    </div>
    <div class="radio-section">
      <mpage-radio-group
        label="Preferred Contact Method"
        [values]="['Email', 'Phone', 'SMS', 'Fax']"
        [(ngModel)]="notificationPref"
        name="contactMethod">
      </mpage-radio-group>
    </div>
  </div>

  <!-- Section D: Button Showcase -->
  <div class="config-section">
    <h2><mpage-icon>smart_button</mpage-icon> Button Showcase</h2>
    <div class="button-grid">
      @for (color of buttonColors; track color) {
        <div class="button-cell">
          <button coButton="default" [attr.color]="color === 'default' ? null : color" [color]="color === 'default' ? '' : color">Default</button>
          <span class="button-label">default / {{ color }}</span>
        </div>
      }
      @for (color of buttonColors; track color) {
        <div class="button-cell">
          <button coButton="raised" [color]="color === 'default' ? '' : color">Raised</button>
          <span class="button-label">raised / {{ color }}</span>
        </div>
      }
      @for (color of buttonColors; track color) {
        <div class="button-cell">
          <button coButton="stroked" [color]="color === 'default' ? '' : color">Stroked</button>
          <span class="button-label">stroked / {{ color }}</span>
        </div>
      }
      @for (color of buttonColors; track color) {
        <div class="button-cell">
          <button coButton="icon" [color]="color === 'default' ? '' : color"><mpage-icon>star</mpage-icon></button>
          <span class="button-label">icon / {{ color }}</span>
        </div>
      }
    </div>
  </div>

  <!-- Section E: Notifications -->
  <div class="config-section">
    <h2><mpage-icon>notifications</mpage-icon> Notifications</h2>
    <p style="margin-bottom: 12px; color: #666;">Click buttons to trigger notifications with different positions, colors, and delays.</p>
    <div class="notification-row">
      <button coButton="raised" color="primary" (click)="notify('top', 'primary', 3000)">Top / Primary</button>
      <button coButton="raised" color="accent" (click)="notify('bottom', 'accent', 3000)">Bottom / Accent</button>
      <button coButton="raised" color="warn" (click)="notify('center', 'warn', 3000)">Center / Warn</button>
      <button coButton="stroked" color="primary" (click)="notify('top', 'primary', 5000)">Top / 5s Delay</button>
      <button coButton="stroked" color="accent" (click)="notify('bottom', 'accent', 1000)">Bottom / 1s Delay</button>
      <button coButton="stroked" color="warn" (click)="notify('center', 'warn', 7000)">Center / 7s Delay</button>
    </div>
  </div>

</div>
`, styles: ["/* src/app/config/config.scss */\n.config-container {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  max-width: 1000px;\n}\n.config-section {\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 4px;\n  border: 1px solid #e0e0e0;\n}\n.config-section h2 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n  font-size: 1.2em;\n  color: var(--primary-color);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  max-width: 600px;\n}\n.button-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.button-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.button-label {\n  font-size: 0.75em;\n  color: grey;\n}\n.lookup-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.select-row {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.select-row > * {\n  flex: 1;\n  min-width: 250px;\n}\n.notification-row {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.input-showcase {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  max-width: 700px;\n}\n.input-showcase-full {\n  grid-column: 1/-1;\n}\n.radio-section {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=config.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Config, { className: "Config", filePath: "src/app/config/config.ts", lineNumber: 32 });
})();
export {
  Config
};
//# sourceMappingURL=chunk-HUZSJCOT.js.map
