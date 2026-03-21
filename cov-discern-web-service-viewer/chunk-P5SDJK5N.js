import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-M5ONDEQN.js";

// src/app/components/customized-dot/customized-dot.ts
function CustomizedDot_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 3);
    \u0275\u0275domListener("click", function CustomizedDot_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.resetClicked.emit();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1, " Reset ");
    \u0275\u0275domElementEnd();
  }
}
var CustomizedDot = class _CustomizedDot {
  /** Tooltip text explaining the customization */
  tooltip = input("This item has been customized from the default", ...ngDevMode ? [{ debugName: "tooltip" }] : []);
  /** Whether to show the inline "Reset" link */
  showReset = input(false, ...ngDevMode ? [{ debugName: "showReset" }] : []);
  /** Emitted when "Reset" is clicked */
  resetClicked = output();
  static \u0275fac = function CustomizedDot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomizedDot)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomizedDot, selectors: [["app-customized-dot"]], inputs: { tooltip: [1, "tooltip"], showReset: [1, "showReset"] }, outputs: { resetClicked: "resetClicked" }, decls: 3, vars: 2, consts: [[1, "customized-dot-wrapper", 3, "title"], [1, "customized-dot"], [1, "reset-link"], [1, "reset-link", 3, "click"]], template: function CustomizedDot_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span", 0);
      \u0275\u0275domElement(1, "span", 1);
      \u0275\u0275conditionalCreate(2, CustomizedDot_Conditional_2_Template, 2, 0, "button", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275domProperty("title", ctx.tooltip());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showReset() ? 2 : -1);
    }
  }, styles: ["\n\n.customized-dot-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: help;\n}\n.customized-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #f59e0b;\n  flex-shrink: 0;\n}\n.reset-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  font-size: 11px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.reset-link[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n/*# sourceMappingURL=customized-dot.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomizedDot, [{
    type: Component,
    args: [{ selector: "app-customized-dot", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <span class="customized-dot-wrapper" [title]="tooltip()">
      <span class="customized-dot"></span>
      @if (showReset()) {
        <button class="reset-link" (click)="resetClicked.emit(); $event.stopPropagation()">
          Reset
        </button>
      }
    </span>
  `, styles: ["/* angular:styles/component:scss;ec2d6d8d14f12c8b4516e319e81f88c7c1bdc1e93407f80cc1f0302423b767f4;/Users/chadcummings/Github/cov-discern-web-service-viewer/src/app/components/customized-dot/customized-dot.ts */\n.customized-dot-wrapper {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: help;\n}\n.customized-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #f59e0b;\n  flex-shrink: 0;\n}\n.reset-link {\n  background: none;\n  border: none;\n  color: #6b7280;\n  font-size: 11px;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.reset-link:hover {\n  color: #374151;\n}\n/*# sourceMappingURL=customized-dot.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomizedDot, { className: "CustomizedDot", filePath: "src/app/components/customized-dot/customized-dot.ts", lineNumber: 46 });
})();

export {
  CustomizedDot
};
//# sourceMappingURL=chunk-P5SDJK5N.js.map
