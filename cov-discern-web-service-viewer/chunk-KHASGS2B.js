import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YANIWAVR.js";

// src/app/components/help-modal/help-modal.ts
var _c0 = ["*"];
var HelpModal = class _HelpModal {
  /** Modal title displayed in the header */
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  /** Emits when the modal should close */
  closeRequested = output();
  /** Whether the modal is in fullscreen mode */
  fullscreen = signal(false, ...ngDevMode ? [{ debugName: "fullscreen" }] : []);
  toggleFullscreen() {
    this.fullscreen.update((v) => !v);
  }
  onBackdropClick() {
    this.closeRequested.emit();
  }
  onClose() {
    this.closeRequested.emit();
  }
  static \u0275fac = function HelpModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HelpModal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpModal, selectors: [["app-help-modal"]], inputs: { title: [1, "title"] }, outputs: { closeRequested: "closeRequested" }, ngContentSelectors: _c0, decls: 14, vars: 5, consts: [[1, "help-overlay", 3, "click"], [1, "help-modal"], [1, "help-modal__header"], [1, "help-modal__title"], [1, "help-modal__header-actions"], [1, "btn", "btn-ghost", "btn-small", 3, "click", "title"], [1, "material-icons"], [1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "help-modal__body"]], template: function HelpModal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function HelpModal_Template_div_click_0_listener() {
        return ctx.onBackdropClick();
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275domListener("click", function HelpModal_Template_button_click_6_listener() {
        return ctx.toggleFullscreen();
      });
      \u0275\u0275domElementStart(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "button", 7);
      \u0275\u0275domListener("click", function HelpModal_Template_button_click_9_listener() {
        return ctx.onClose();
      });
      \u0275\u0275domElementStart(10, "span", 6);
      \u0275\u0275text(11, "close");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(12, "div", 8);
      \u0275\u0275projection(13);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("help-modal--fullscreen", ctx.fullscreen());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("title", ctx.fullscreen() ? "Exit fullscreen" : "Fullscreen");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.fullscreen() ? "fullscreen_exit" : "fullscreen");
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_helpFadeIn 150ms ease;\n}\n.help-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.help-modal[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--fusion-color-bg-canvas);\n  border-radius: var(--fusion-border-radius);\n  box-shadow: var(--fusion-shadow-modal);\n  display: flex;\n  flex-direction: column;\n  width: 700px;\n  max-width: 90vw;\n  max-height: 80vh;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_helpSlideUp 300ms ease;\n  z-index: 1;\n}\n.help-modal--fullscreen[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 100vw;\n  height: 100vh;\n  max-height: 100vh;\n  border-radius: 0;\n}\n.help-modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.help-modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.help-modal__header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.help-modal__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  font-size: var(--fusion-text-base);\n  line-height: 1.6;\n  color: var(--fusion-color-text);\n}\n.help-modal__body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-xxl);\n  font-weight: 700;\n  margin: 0 0 var(--fusion-space-base);\n  color: var(--fusion-color-text);\n}\n.help-modal__body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  margin: var(--fusion-space-loose) 0 var(--fusion-space-tight);\n  color: var(--fusion-color-primary);\n  border-bottom: 2px solid var(--fusion-color-border);\n  padding-bottom: var(--fusion-space-very-tight);\n}\n.help-modal__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  margin: var(--fusion-space-base) 0 var(--fusion-space-tight);\n  color: var(--fusion-color-text);\n}\n.help-modal__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-base);\n}\n.help-modal__body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.help-modal__body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-base);\n  padding-left: var(--fusion-space-loose);\n}\n.help-modal__body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.help-modal__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.help-modal__body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  padding: 1px 4px;\n  border-radius: 2px;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n}\n.help-modal__body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  padding: var(--fusion-space-base);\n  overflow-x: auto;\n  margin: 0 0 var(--fusion-space-base);\n}\n.help-modal__body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: none;\n  padding: 0;\n}\n.help-modal__body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 0 0 var(--fusion-space-base);\n  font-size: var(--fusion-text-base);\n}\n.help-modal__body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.help-modal__body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  text-align: left;\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.help-modal__body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  font-weight: 600;\n}\n.help-modal__body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n}\n@keyframes _ngcontent-%COMP%_helpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_helpSlideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=help-modal.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpModal, [{
    type: Component,
    args: [{ selector: "app-help-modal", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="help-overlay" (click)="onBackdropClick()"></div>
<div class="help-modal" [class.help-modal--fullscreen]="fullscreen()">
  <div class="help-modal__header">
    <h3 class="help-modal__title">{{ title() }}</h3>
    <div class="help-modal__header-actions">
      <button class="btn btn-ghost btn-small" (click)="toggleFullscreen()" [title]="fullscreen() ? 'Exit fullscreen' : 'Fullscreen'">
        <span class="material-icons">{{ fullscreen() ? 'fullscreen_exit' : 'fullscreen' }}</span>
      </button>
      <button class="btn btn-ghost btn-small" (click)="onClose()">
        <span class="material-icons">close</span>
      </button>
    </div>
  </div>
  <div class="help-modal__body">
    <ng-content />
  </div>
</div>
`, styles: ["/* src/app/components/help-modal/help-modal.scss */\n:host {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: helpFadeIn 150ms ease;\n}\n.help-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.help-modal {\n  position: relative;\n  background: var(--fusion-color-bg-canvas);\n  border-radius: var(--fusion-border-radius);\n  box-shadow: var(--fusion-shadow-modal);\n  display: flex;\n  flex-direction: column;\n  width: 700px;\n  max-width: 90vw;\n  max-height: 80vh;\n  overflow: hidden;\n  animation: helpSlideUp 300ms ease;\n  z-index: 1;\n}\n.help-modal--fullscreen {\n  width: 100vw;\n  max-width: 100vw;\n  height: 100vh;\n  max-height: 100vh;\n  border-radius: 0;\n}\n.help-modal__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.help-modal__title {\n  margin: 0;\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.help-modal__header-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.help-modal__body {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-loose);\n  font-size: var(--fusion-text-base);\n  line-height: 1.6;\n  color: var(--fusion-color-text);\n}\n.help-modal__body h1 {\n  font-size: var(--fusion-text-xxl);\n  font-weight: 700;\n  margin: 0 0 var(--fusion-space-base);\n  color: var(--fusion-color-text);\n}\n.help-modal__body h2 {\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  margin: var(--fusion-space-loose) 0 var(--fusion-space-tight);\n  color: var(--fusion-color-primary);\n  border-bottom: 2px solid var(--fusion-color-border);\n  padding-bottom: var(--fusion-space-very-tight);\n}\n.help-modal__body h3 {\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  margin: var(--fusion-space-base) 0 var(--fusion-space-tight);\n  color: var(--fusion-color-text);\n}\n.help-modal__body p {\n  margin: 0 0 var(--fusion-space-base);\n}\n.help-modal__body ul,\n.help-modal__body ol {\n  margin: 0 0 var(--fusion-space-base);\n  padding-left: var(--fusion-space-loose);\n}\n.help-modal__body li {\n  margin-bottom: var(--fusion-space-very-tight);\n}\n.help-modal__body strong {\n  font-weight: 600;\n}\n.help-modal__body code {\n  background: var(--fusion-color-bg-anchor);\n  padding: 1px 4px;\n  border-radius: 2px;\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n}\n.help-modal__body pre {\n  background: var(--fusion-color-bg-anchor);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  padding: var(--fusion-space-base);\n  overflow-x: auto;\n  margin: 0 0 var(--fusion-space-base);\n}\n.help-modal__body pre code {\n  background: none;\n  padding: 0;\n}\n.help-modal__body table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 0 0 var(--fusion-space-base);\n  font-size: var(--fusion-text-base);\n}\n.help-modal__body table th,\n.help-modal__body table td {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  text-align: left;\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.help-modal__body table th {\n  background: var(--fusion-color-bg-anchor);\n  font-weight: 600;\n}\n.help-modal__body table tr:hover td {\n  background: var(--fusion-color-bg-hover);\n}\n@keyframes helpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes helpSlideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=help-modal.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpModal, { className: "HelpModal", filePath: "src/app/components/help-modal/help-modal.ts", lineNumber: 10 });
})();

export {
  HelpModal
};
//# sourceMappingURL=chunk-KHASGS2B.js.map
