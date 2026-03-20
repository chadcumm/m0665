import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-7ZRSRWYH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  _toasts = signal([], ...ngDevMode ? [{ debugName: "_toasts" }] : []);
  nextId = 0;
  toasts = this._toasts.asReadonly();
  /** Show a toast message. Auto-dismisses after duration (ms). Returns the toast ID. */
  show(text, type = "info", duration = 3e3) {
    const id = this.nextId++;
    this._toasts.update((t) => [...t, { id, text, type }]);
    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }
    return id;
  }
  /** Dismiss a specific toast by ID */
  dismiss(id) {
    this._toasts.update((t) => t.filter((m) => m.id !== id));
  }
  /** Update the text of an existing toast */
  update(id, text, type) {
    this._toasts.update((toasts) => toasts.map((t) => t.id === id ? __spreadValues(__spreadProps(__spreadValues({}, t), { text }), type ? { type } : {}) : t));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-UFLMDBUL.js.map
