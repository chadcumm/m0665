import {
  MPageService
} from "./chunk-ZY6O5BGM.js";
import {
  ParameterLibraryService,
  ServiceRegistryService
} from "./chunk-6G3RUESR.js";
import {
  ChangeDetectionStrategy,
  Component,
  FormsModule,
  Injectable,
  NgSelectOption,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-ZHUMCYTK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/services/ccl-executor.service.ts
var HISTORY_KEY = "dwsv_execution_history";
var MAX_HISTORY = 50;
var CclExecutorService = class _CclExecutorService {
  mPage = inject(MPageService);
  paramLibrary = inject(ParameterLibraryService);
  _executing = signal(false, ...ngDevMode ? [{ debugName: "_executing" }] : []);
  _history = signal([], ...ngDevMode ? [{ debugName: "_history" }] : []);
  executing = this._executing.asReadonly();
  history = this._history.asReadonly();
  constructor() {
    this.loadHistory();
  }
  /**
   * Execute a CCL program with the given parameter values.
   * Uses XMLCclRequest when running inside PowerChart/DiscernReportViewer.
   */
  execute(service, parameterValues) {
    this._executing.set(true);
    const startTime = Date.now();
    const paramString = this.buildParameterString(service, parameterValues);
    const resultBase = {
      id: crypto.randomUUID(),
      serviceId: service.id,
      serviceName: service.displayName,
      parameterValues: __spreadValues({}, parameterValues),
      rawParameterString: paramString,
      timestamp: /* @__PURE__ */ new Date()
    };
    return this.executeXmlCclRequest(service.programName, paramString).then((response) => {
      const result = __spreadProps(__spreadValues({}, resultBase), {
        durationMs: Date.now() - startTime,
        success: true,
        response
      });
      this.addToHistory(result);
      return result;
    }).catch((error) => {
      const result = __spreadProps(__spreadValues({}, resultBase), {
        durationMs: Date.now() - startTime,
        success: false,
        errorMessage: error.message || String(error)
      });
      this.addToHistory(result);
      return result;
    }).finally(() => {
      this._executing.set(false);
    });
  }
  /** Build the ^param1^,^param2^ string from service definition and values */
  buildParameterString(service, values) {
    const sortedParams = [...service.parameters].sort((a, b) => a.position - b.position);
    return sortedParams.map((param) => {
      const paramType = this.paramLibrary.getType(param.parameterTypeKey);
      const value = values[param.parameterTypeKey] ?? param.defaultValueOverride ?? paramType?.defaultValue ?? "";
      return `^${value}^`;
    }).join(",");
  }
  /** Clear execution history */
  clearHistory() {
    this._history.set([]);
    localStorage.removeItem(HISTORY_KEY);
  }
  executeXmlCclRequest(programName, paramString) {
    return new Promise((resolve, reject) => {
      try {
        const info = new XMLCclRequest();
        info.onreadystatechange = function() {
          if (info.readyState === 4 && info.status === 200) {
            try {
              const text = info.responseText || "{}";
              const cleaned = text.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");
              resolve(JSON.parse(cleaned));
            } catch (parseError) {
              resolve({ _rawResponse: info.responseText });
            }
          } else if (info.readyState === 4) {
            reject(new Error(`CCL request failed with status ${info.status}: ${info.statusText || "Unknown error"}`));
          }
        };
        info.open("GET", programName, true);
        info.send(paramString);
      } catch (error) {
        reject(new Error(`XMLCclRequest not available: ${error.message}. This tool must run inside PowerChart or DiscernReportViewer.`));
      }
    });
  }
  addToHistory(result) {
    this._history.update((history) => {
      const updated = [result, ...history].slice(0, MAX_HISTORY);
      this.saveHistory(updated);
      return updated;
    });
  }
  loadHistory() {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        this._history.set(parsed.map((r) => __spreadProps(__spreadValues({}, r), { timestamp: new Date(r.timestamp) })));
      }
    } catch {
    }
  }
  saveHistory(history) {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
    } catch {
    }
  }
  static \u0275fac = function CclExecutorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CclExecutorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CclExecutorService, factory: _CclExecutorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CclExecutorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/components/parameter-inputs/parameter-form.ts
var _forTrack0 = ($index, $item) => $item.serviceParam.position;
var _forTrack1 = ($index, $item) => $item.value;
function ParameterForm_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ParameterForm_For_10_Case_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const param_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", opt_r4.value)("selected", opt_r4.value === param_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4.label, " ");
  }
}
function ParameterForm_For_10_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 14);
    \u0275\u0275listener("change", function ParameterForm_For_10_Case_5_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setValue(param_r2.serviceParam.parameterTypeKey, $event.target.value));
    });
    \u0275\u0275repeaterCreate(1, ParameterForm_For_10_Case_5_For_2_Template, 2, 3, "option", 15, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey)("value", param_r2.value);
    \u0275\u0275advance();
    \u0275\u0275repeater(param_r2.paramType.options);
  }
}
function ParameterForm_For_10_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "input", 17);
    \u0275\u0275listener("change", function ParameterForm_For_10_Case_6_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateChange(param_r2.serviceParam.parameterTypeKey, $event.target.value, param_r2.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 18);
    \u0275\u0275listener("change", function ParameterForm_For_10_Case_6_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTimeChange(param_r2.serviceParam.parameterTypeKey, $event.target.value, param_r2.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey + "-date")("value", ctx_r2.getDateInputValue(param_r2.value));
    \u0275\u0275advance();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey + "-time")("value", ctx_r2.getTimeInputValue(param_r2.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r2.value);
  }
}
function ParameterForm_For_10_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 17);
    \u0275\u0275listener("change", function ParameterForm_For_10_Case_7_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateOnlyChange(param_r2.serviceParam.parameterTypeKey, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey)("value", ctx_r2.getDateInputValue(param_r2.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r2.value);
  }
}
function ParameterForm_For_10_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 18);
    \u0275\u0275listener("change", function ParameterForm_For_10_Case_8_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTimeOnlyChange(param_r2.serviceParam.parameterTypeKey, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey)("value", ctx_r2.getTimeInputValue(param_r2.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r2.value);
  }
}
function ParameterForm_For_10_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 20);
    \u0275\u0275listener("input", function ParameterForm_For_10_Case_9_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setValue(param_r2.serviceParam.parameterTypeKey, $event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey)("value", param_r2.value)("placeholder", param_r2.paramType.placeholder || "");
  }
}
function ParameterForm_For_10_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 20);
    \u0275\u0275listener("input", function ParameterForm_For_10_Case_10_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setValue(param_r2.serviceParam.parameterTypeKey, $event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey)("value", param_r2.value)("placeholder", param_r2.paramType.placeholder || "");
  }
}
function ParameterForm_For_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(param_r2.paramType.description);
  }
}
function ParameterForm_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, ParameterForm_For_10_Conditional_3_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275conditionalCreate(5, ParameterForm_For_10_Case_5_Template, 3, 2, "select", 11)(6, ParameterForm_For_10_Case_6_Template, 5, 5)(7, ParameterForm_For_10_Case_7_Template, 3, 3)(8, ParameterForm_For_10_Case_8_Template, 3, 3)(9, ParameterForm_For_10_Case_9_Template, 1, 3, "input", 12)(10, ParameterForm_For_10_Case_10_Template, 1, 3, "input", 12);
    \u0275\u0275conditionalCreate(11, ParameterForm_For_10_Conditional_11_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const param_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("for", "param-" + param_r2.serviceParam.parameterTypeKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", param_r2.serviceParam.labelOverride || param_r2.paramType.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(param_r2.serviceParam.required ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = param_r2.paramType.inputType) === "select" ? 5 : tmp_13_0 === "datetime" ? 6 : tmp_13_0 === "date" ? 7 : tmp_13_0 === "time" ? 8 : tmp_13_0 === "number" ? 9 : 10);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(param_r2.paramType.description ? 11 : -1);
  }
}
function ParameterForm_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
    \u0275\u0275text(1, " Executing... ");
  }
}
function ParameterForm_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Execute ");
  }
}
var MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var ParameterForm = class _ParameterForm {
  paramLibrary = inject(ParameterLibraryService);
  /** The service definition whose parameters to render */
  service = input.required(...ngDevMode ? [{ debugName: "service" }] : []);
  /** Whether execution is in progress — disables Execute button */
  executing = input(false, ...ngDevMode ? [{ debugName: "executing" }] : []);
  /** Emitted when the user clicks Execute */
  executeRequested = output();
  /** Current parameter values keyed by parameterTypeKey */
  _values = signal({}, ...ngDevMode ? [{ debugName: "_values" }] : []);
  /** Resolved parameters with their library types, sorted by position */
  resolvedParams = computed(() => {
    const svc = this.service();
    if (!svc)
      return [];
    const sorted = [...svc.parameters].sort((a, b) => a.position - b.position);
    return sorted.map((sp) => {
      const pt = this.paramLibrary.getType(sp.parameterTypeKey);
      if (!pt)
        return null;
      let defaultVal = sp.defaultValueOverride ?? pt.defaultValue ?? "";
      if (!this._values()[sp.parameterTypeKey] && (defaultVal === "" || defaultVal === "SYSDATE")) {
        if (pt.inputType === "datetime")
          defaultVal = this.formatCclDateTime(/* @__PURE__ */ new Date());
        else if (pt.inputType === "date")
          defaultVal = this.formatCclDate(/* @__PURE__ */ new Date());
        else if (pt.inputType === "time")
          defaultVal = this.formatCclTime(/* @__PURE__ */ new Date());
      }
      return {
        serviceParam: sp,
        paramType: pt,
        value: this._values()[sp.parameterTypeKey] ?? defaultVal
      };
    }).filter((p) => p !== null);
  }, ...ngDevMode ? [{ debugName: "resolvedParams" }] : []);
  /** Only visible (non-hidden) parameters */
  visibleParams = computed(() => this.resolvedParams().filter((p) => p.paramType.inputType !== "hidden"), ...ngDevMode ? [{ debugName: "visibleParams" }] : []);
  /** Get the native date input value (YYYY-MM-DD) from a CCL datetime/date value */
  getDateInputValue(cclValue) {
    const parsed = this.parseCclDateTime(cclValue);
    return parsed ? this.toDateInputValue(parsed) : this.toDateInputValue(/* @__PURE__ */ new Date());
  }
  /** Get the native time input value (HH:MM) from a CCL datetime/time value */
  getTimeInputValue(cclValue) {
    const parsed = this.parseCclDateTime(cclValue);
    return parsed ? this.toTimeInputValue(parsed) : this.toTimeInputValue(/* @__PURE__ */ new Date());
  }
  /** Handle date part change for datetime fields */
  onDateChange(key, dateStr, currentValue) {
    const timePart = this.getTimeInputValue(currentValue);
    const combined = this.combineDateAndTime(dateStr, timePart);
    this.setValue(key, combined);
  }
  /** Handle time part change for datetime fields */
  onTimeChange(key, timeStr, currentValue) {
    const datePart = this.getDateInputValue(currentValue);
    const combined = this.combineDateAndTime(datePart, timeStr);
    this.setValue(key, combined);
  }
  /** Handle date-only field change */
  onDateOnlyChange(key, dateStr) {
    if (!dateStr)
      return;
    const [year, month, day] = dateStr.split("-").map(Number);
    const d = new Date(year, month - 1, day);
    this.setValue(key, this.formatCclDate(d));
  }
  /** Handle time-only field change */
  onTimeOnlyChange(key, timeStr) {
    if (!timeStr)
      return;
    this.setValue(key, timeStr + ":00");
  }
  /** Update a parameter value */
  setValue(key, value) {
    this._values.update((v) => __spreadProps(__spreadValues({}, v), { [key]: value }));
  }
  /** Get the current value for a parameter */
  getValue(key) {
    const resolved = this.resolvedParams().find((p) => p.serviceParam.parameterTypeKey === key);
    return resolved?.value ?? "";
  }
  /** Submit the form */
  onExecute() {
    if (this.executing())
      return;
    const values = {};
    for (const rp of this.resolvedParams()) {
      values[rp.serviceParam.parameterTypeKey] = rp.value;
    }
    this.executeRequested.emit(values);
  }
  /** Reset all values to defaults */
  resetDefaults() {
    this._values.set({});
  }
  /** Format a Date as DD-MMM-YYYY HH:MM:SS for CCL */
  formatCclDateTime(d) {
    const day = String(d.getDate()).padStart(2, "0");
    const mon = MONTHS[d.getMonth()];
    const year = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${day}-${mon}-${year} ${hh}:${mm}:${ss}`;
  }
  /** Format a Date as DD-MMM-YYYY for CCL */
  formatCclDate(d) {
    const day = String(d.getDate()).padStart(2, "0");
    const mon = MONTHS[d.getMonth()];
    const year = d.getFullYear();
    return `${day}-${mon}-${year}`;
  }
  /** Format a Date as HH:MM:SS for CCL */
  formatCclTime(d) {
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  }
  /** Parse a CCL datetime string (DD-MMM-YYYY HH:MM:SS) to Date */
  parseCclDateTime(value) {
    if (!value)
      return null;
    const match = value.match(/^(\d{1,2})-([A-Z]{3})-(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/);
    if (match) {
      const monthIdx = MONTHS.indexOf(match[2]);
      if (monthIdx === -1)
        return null;
      return new Date(+match[3], monthIdx, +match[1], +match[4], +match[5], +match[6]);
    }
    const dateMatch = value.match(/^(\d{1,2})-([A-Z]{3})-(\d{4})$/);
    if (dateMatch) {
      const monthIdx = MONTHS.indexOf(dateMatch[2]);
      if (monthIdx === -1)
        return null;
      return new Date(+dateMatch[3], monthIdx, +dateMatch[1]);
    }
    const timeMatch = value.match(/^(\d{2}):(\d{2}):(\d{2})$/);
    if (timeMatch) {
      const d = /* @__PURE__ */ new Date();
      d.setHours(+timeMatch[1], +timeMatch[2], +timeMatch[3], 0);
      return d;
    }
    return null;
  }
  /** Convert Date to YYYY-MM-DD for native date input */
  toDateInputValue(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  /** Convert Date to HH:MM for native time input */
  toTimeInputValue(d) {
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }
  /** Combine a YYYY-MM-DD date string and HH:MM time string into CCL format */
  combineDateAndTime(dateStr, timeStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hh, mm] = (timeStr || "00:00").split(":").map(Number);
    const d = new Date(year, month - 1, day, hh, mm, 0);
    return this.formatCclDateTime(d);
  }
  static \u0275fac = function ParameterForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParameterForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParameterForm, selectors: [["app-parameter-form"]], inputs: { service: [1, "service"], executing: [1, "executing"] }, outputs: { executeRequested: "executeRequested" }, decls: 15, vars: 2, consts: [[1, "parameter-form"], [1, "form-header"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "material-icons"], [1, "form-fields"], [1, "field-row"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "field-label"], [1, "required"], [1, "field-input"], [3, "id", "value"], ["type", "text", 3, "id", "value", "placeholder"], [1, "field-help"], [3, "change", "id", "value"], [3, "value", "selected"], [1, "datetime-picker"], ["type", "date", 3, "change", "id", "value"], ["type", "time", 3, "change", "id", "value"], [1, "field-ccl-value"], ["type", "text", 3, "input", "id", "value", "placeholder"], [1, "btn-spinner"]], template: function ParameterForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
      \u0275\u0275text(3, "Parameters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function ParameterForm_Template_button_click_4_listener() {
        return ctx.resetDefaults();
      });
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "restart_alt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Reset ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275repeaterCreate(9, ParameterForm_For_10_Template, 12, 5, "div", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
      \u0275\u0275listener("click", function ParameterForm_Template_button_click_12_listener() {
        return ctx.onExecute();
      });
      \u0275\u0275conditionalCreate(13, ParameterForm_Conditional_13_Template, 2, 0)(14, ParameterForm_Conditional_14_Template, 3, 0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.visibleParams());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.executing());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.executing() ? 13 : 14);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.parameter-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.parameter-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #333;\n}\n.parameter-form[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #444;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--warn-color, #ed0800);\n  margin-left: 2px;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: inherit;\n  background-color: var(--field-background-color, ghostwhite);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color, #5783db);\n  box-shadow: 0 0 0 2px rgba(87, 131, 219, 0.2);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   .field-help[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #888;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   .field-ccl-value[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #666;\n  font-family: monospace;\n}\n.parameter-form[_ngcontent-%COMP%]   .datetime-picker[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.parameter-form[_ngcontent-%COMP%]   .datetime-picker[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  flex: 1;\n}\n.parameter-form[_ngcontent-%COMP%]   .datetime-picker[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 130px;\n}\n.parameter-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color, #5783db);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--primary-color-alternate, darkblue);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.btn.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 0.8rem;\n}\n.btn.btn-small[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=parameter-form.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParameterForm, [{
    type: Component,
    args: [{ selector: "app-parameter-form", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="parameter-form">
  <div class="form-header">
    <h3>Parameters</h3>
    <button class="btn btn-small btn-secondary" (click)="resetDefaults()">
      <span class="material-icons">restart_alt</span> Reset
    </button>
  </div>

  <div class="form-fields">
    @for (param of visibleParams(); track param.serviceParam.position) {
      <div class="field-row">
        <label class="field-label" [attr.for]="'param-' + param.serviceParam.parameterTypeKey">
          {{ param.serviceParam.labelOverride || param.paramType.label }}
          @if (param.serviceParam.required) {
            <span class="required">*</span>
          }
        </label>

        <div class="field-input">
          @switch (param.paramType.inputType) {
            @case ('select') {
              <select
                [id]="'param-' + param.serviceParam.parameterTypeKey"
                [value]="param.value"
                (change)="setValue(param.serviceParam.parameterTypeKey, $any($event.target).value)">
                @for (opt of param.paramType.options; track opt.value) {
                  <option [value]="opt.value" [selected]="opt.value === param.value">
                    {{ opt.label }}
                  </option>
                }
              </select>
            }
            @case ('datetime') {
              <div class="datetime-picker">
                <input
                  type="date"
                  [id]="'param-' + param.serviceParam.parameterTypeKey + '-date'"
                  [value]="getDateInputValue(param.value)"
                  (change)="onDateChange(param.serviceParam.parameterTypeKey, $any($event.target).value, param.value)" />
                <input
                  type="time"
                  [id]="'param-' + param.serviceParam.parameterTypeKey + '-time'"
                  [value]="getTimeInputValue(param.value)"
                  (change)="onTimeChange(param.serviceParam.parameterTypeKey, $any($event.target).value, param.value)" />
              </div>
              <span class="field-ccl-value">{{ param.value }}</span>
            }
            @case ('date') {
              <input
                type="date"
                [id]="'param-' + param.serviceParam.parameterTypeKey"
                [value]="getDateInputValue(param.value)"
                (change)="onDateOnlyChange(param.serviceParam.parameterTypeKey, $any($event.target).value)" />
              <span class="field-ccl-value">{{ param.value }}</span>
            }
            @case ('time') {
              <input
                type="time"
                [id]="'param-' + param.serviceParam.parameterTypeKey"
                [value]="getTimeInputValue(param.value)"
                (change)="onTimeOnlyChange(param.serviceParam.parameterTypeKey, $any($event.target).value)" />
              <span class="field-ccl-value">{{ param.value }}</span>
            }
            @case ('number') {
              <input
                type="text"
                [id]="'param-' + param.serviceParam.parameterTypeKey"
                [value]="param.value"
                [placeholder]="param.paramType.placeholder || ''"
                (input)="setValue(param.serviceParam.parameterTypeKey, $any($event.target).value)" />
            }
            @default {
              <input
                type="text"
                [id]="'param-' + param.serviceParam.parameterTypeKey"
                [value]="param.value"
                [placeholder]="param.paramType.placeholder || ''"
                (input)="setValue(param.serviceParam.parameterTypeKey, $any($event.target).value)" />
            }
          }

          @if (param.paramType.description) {
            <span class="field-help">{{ param.paramType.description }}</span>
          }
        </div>
      </div>
    }
  </div>

  <div class="form-actions">
    <button class="btn btn-primary" (click)="onExecute()" [disabled]="executing()">
      @if (executing()) {
        <div class="btn-spinner"></div> Executing...
      } @else {
        <span class="material-icons">play_arrow</span> Execute
      }
    </button>
  </div>
</div>
`, styles: ["/* src/app/components/parameter-inputs/parameter-form.scss */\n.parameter-form .form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.parameter-form .form-header h3 {\n  margin: 0;\n  font-size: 1rem;\n  color: #333;\n}\n.parameter-form .form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.parameter-form .field-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.parameter-form .field-label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #444;\n}\n.parameter-form .field-label .required {\n  color: var(--warn-color, #ed0800);\n  margin-left: 2px;\n}\n.parameter-form .field-input {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.parameter-form .field-input input,\n.parameter-form .field-input select {\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: inherit;\n  background-color: var(--field-background-color, ghostwhite);\n}\n.parameter-form .field-input input:focus,\n.parameter-form .field-input select:focus {\n  outline: none;\n  border-color: var(--primary-color, #5783db);\n  box-shadow: 0 0 0 2px rgba(87, 131, 219, 0.2);\n}\n.parameter-form .field-input select {\n  cursor: pointer;\n}\n.parameter-form .field-input .field-help {\n  font-size: 0.75rem;\n  color: #888;\n}\n.parameter-form .field-input .field-ccl-value {\n  font-size: 0.75rem;\n  color: #666;\n  font-family: monospace;\n}\n.parameter-form .datetime-picker {\n  display: flex;\n  gap: 6px;\n}\n.parameter-form .datetime-picker input[type=date] {\n  flex: 1;\n}\n.parameter-form .datetime-picker input[type=time] {\n  flex: 0 0 auto;\n  width: 130px;\n}\n.parameter-form .form-actions {\n  margin-top: 16px;\n  display: flex;\n  gap: 8px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.15s;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background-color: var(--primary-color, #5783db);\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  background-color: var(--primary-color-alternate, darkblue);\n}\n.btn.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background-color: #5a6268;\n}\n.btn.btn-small {\n  padding: 4px 10px;\n  font-size: 0.8rem;\n}\n.btn.btn-small .material-icons {\n  font-size: 16px;\n}\n.btn-spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=parameter-form.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParameterForm, { className: "ParameterForm", filePath: "src/app/components/parameter-inputs/parameter-form.ts", lineNumber: 23 });
})();

// src/app/components/json-viewer/json-viewer.ts
var _c0 = ["editorContainer"];
var _forTrack02 = ($index, $item) => $item.path;
var _forTrack12 = ($index, $item) => $item.key;
function JsonViewer_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 9, 0);
  }
}
function JsonViewer_Conditional_22_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ap_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275domProperty("value", ap_r3.path)("selected", ap_r3.path === ctx_r1.selectedArrayPath());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ap_r3.label, " ");
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "th", 17);
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r4.label);
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const \u0275$index_74_r8 = \u0275\u0275nextContext(2).$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRowExpanded(\u0275$index_74_r8) ? "expand_more" : "chevron_right", " ");
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 17);
    \u0275\u0275conditionalCreate(1, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_1_Conditional_1_Template, 2, 1, "span", 20);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasNestedArrays(row_r7) ? 1 : -1);
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275domProperty("title", ctx_r1.getCellValue(row_r7, col_r9.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCellValue(row_r7, col_r9.key), " ");
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ncol_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ncol_r10.label);
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ncol_r11 = ctx.$implicit;
    const nrow_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275domProperty("title", ctx_r1.getCellValue(nrow_r12, ncol_r11.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCellValue(nrow_r12, ncol_r11.key), " ");
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_For_2_Template, 2, 2, "td", 19, _forTrack12);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const nested_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getNestedColumns(nested_r13.data));
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 21)(1, "td")(2, "div", 22)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "table", 23)(6, "thead")(7, "tr");
    \u0275\u0275repeaterCreate(8, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_9_Template, 2, 1, "th", null, _forTrack12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const nested_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.tableColumns().length + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", nested_r13.key, " (", nested_r13.data.length, ")");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.getNestedColumns(nested_r13.data));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(nested_r13.data);
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_Template, 13, 3, "tr", 21, _forTrack12);
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r1.getNestedArrays(row_r7));
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 18);
    \u0275\u0275domListener("click", function JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Template_tr_click_0_listener() {
      const ctx_r5 = \u0275\u0275restoreView(_r5);
      const row_r7 = ctx_r5.$implicit;
      const \u0275$index_74_r8 = ctx_r5.$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hasNestedArrays(row_r7) ? ctx_r1.toggleRowExpansion(\u0275$index_74_r8) : null);
    });
    \u0275\u0275conditionalCreate(1, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_1_Template, 2, 1, "td", 17);
    \u0275\u0275repeaterCreate(2, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_For_3_Template, 2, 2, "td", 19, _forTrack12);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Conditional_4_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const \u0275$index_74_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("expandable", ctx_r1.hasNestedArrays(row_r7))("expanded", ctx_r1.isRowExpanded(\u0275$index_74_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasNestedArrays(ctx_r1.tableRows()[0]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tableColumns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRowExpanded(\u0275$index_74_r8) ? 4 : -1);
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "table")(2, "thead")(3, "tr");
    \u0275\u0275conditionalCreate(4, JsonViewer_Conditional_22_Conditional_1_Conditional_8_Conditional_4_Template, 1, 0, "th", 17);
    \u0275\u0275repeaterCreate(5, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_6_Template, 2, 1, "th", null, _forTrack12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, JsonViewer_Conditional_22_Conditional_1_Conditional_8_For_9_Template, 5, 6, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.tableRows().length > 0 && ctx_r1.hasNestedArrays(ctx_r1.tableRows()[0]) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tableColumns());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.tableRows());
  }
}
function JsonViewer_Conditional_22_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275text(1, "No tabular data available for this array.");
    \u0275\u0275domElementEnd();
  }
}
function JsonViewer_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, "Array:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "select", 13);
    \u0275\u0275domListener("change", function JsonViewer_Conditional_22_Conditional_1_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectArrayPath($event.target.value));
    });
    \u0275\u0275repeaterCreate(4, JsonViewer_Conditional_22_Conditional_1_For_5_Template, 2, 3, "option", 14, _forTrack02);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 15);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, JsonViewer_Conditional_22_Conditional_1_Conditional_8_Template, 10, 1, "div", 16)(9, JsonViewer_Conditional_22_Conditional_1_Conditional_9_Template, 2, 0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.arrayPaths());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.tableRows().length, " rows");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tableColumns().length > 0 ? 8 : 9);
  }
}
function JsonViewer_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275text(1, "No arrays found in the response data.");
    \u0275\u0275domElementEnd();
  }
}
function JsonViewer_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, JsonViewer_Conditional_22_Conditional_1_Template, 10, 2)(2, JsonViewer_Conditional_22_Conditional_2_Template, 2, 0, "div", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.arrayPaths().length > 0 ? 1 : 2);
  }
}
var JsonViewer = class _JsonViewer {
  /** JSON data to display */
  data = input(null, ...ngDevMode ? [{ debugName: "data" }] : []);
  /** Currently active view mode */
  activeMode = signal("tree", ...ngDevMode ? [{ debugName: "activeMode" }] : []);
  /** Available array paths found in the data for table view */
  arrayPaths = signal([], ...ngDevMode ? [{ debugName: "arrayPaths" }] : []);
  /** Currently selected array path for table view */
  selectedArrayPath = signal("", ...ngDevMode ? [{ debugName: "selectedArrayPath" }] : []);
  /** Table columns for the selected array */
  tableColumns = signal([], ...ngDevMode ? [{ debugName: "tableColumns" }] : []);
  /** Table rows for the selected array */
  tableRows = signal([], ...ngDevMode ? [{ debugName: "tableRows" }] : []);
  /** Expanded rows in table view (for nested arrays) */
  expandedRows = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedRows" }] : []);
  /** Reference to the vanilla-jsoneditor container */
  editorContainer = viewChild("editorContainer", ...ngDevMode ? [{ debugName: "editorContainer" }] : []);
  editorInstance = null;
  constructor() {
    effect(() => {
      const d = this.data();
      if (d) {
        this.findArrays(d);
        this.updateEditor();
      }
    });
    effect(() => {
      const path = this.selectedArrayPath();
      const d = this.data();
      if (path && d) {
        this.buildTable(d, path);
      }
    });
  }
  ngAfterViewInit() {
    this.initEditor();
  }
  ngOnDestroy() {
    if (this.editorInstance) {
      this.editorInstance.destroy();
    }
  }
  setMode(mode) {
    this.activeMode.set(mode);
    if (mode === "tree" || mode === "code") {
      setTimeout(() => this.initEditor(), 0);
    }
  }
  selectArrayPath(path) {
    this.selectedArrayPath.set(path);
  }
  toggleRowExpansion(index) {
    this.expandedRows.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }
  isRowExpanded(index) {
    return this.expandedRows().has(index);
  }
  copyToClipboard() {
    const d = this.data();
    if (d) {
      navigator.clipboard.writeText(JSON.stringify(d, null, 2));
    }
  }
  /** Get nested arrays within a table row for expansion */
  getNestedArrays(row) {
    if (!row || typeof row !== "object")
      return [];
    return Object.entries(row).filter(([, v]) => Array.isArray(v) && v.length > 0).map(([key, data]) => ({ key, data }));
  }
  /** Get columns for a nested array */
  getNestedColumns(data) {
    if (!data.length)
      return [];
    const first = data[0];
    if (typeof first !== "object" || first === null) {
      return [{ key: "_value", label: "Value" }];
    }
    return Object.keys(first).filter((k) => !Array.isArray(first[k]) && typeof first[k] !== "object").map((k) => ({ key: k, label: k }));
  }
  /** Get cell value formatted for display */
  getCellValue(row, key) {
    if (key === "_value")
      return String(row);
    const val = row[key];
    if (val === null || val === void 0)
      return "";
    if (typeof val === "object")
      return Array.isArray(val) ? `[${val.length}]` : "{...}";
    return String(val);
  }
  /** Check if a row has nested arrays */
  hasNestedArrays(row) {
    if (!row || typeof row !== "object")
      return false;
    return Object.values(row).some((v) => Array.isArray(v) && v.length > 0);
  }
  async initEditor() {
    const container = this.editorContainer()?.nativeElement;
    if (!container)
      return;
    if (this.editorInstance) {
      this.editorInstance.destroy();
      this.editorInstance = null;
    }
    try {
      const vje = await import("./chunk-TDAIRDCY.js");
      const mode = this.activeMode();
      const EditorClass = vje.JSONEditor;
      this.editorInstance = new EditorClass({
        target: container,
        props: {
          content: { json: this.data() || {} },
          mode: mode === "tree" ? "tree" : "text",
          readOnly: true,
          mainMenuBar: true,
          navigationBar: true
        }
      });
    } catch {
      container.innerHTML = `<pre style="padding:12px;overflow:auto;max-height:100%">${JSON.stringify(this.data(), null, 2)}</pre>`;
    }
  }
  updateEditor() {
    if (this.editorInstance) {
      try {
        this.editorInstance.set({ json: this.data() || {} });
      } catch {
      }
    }
  }
  /** Recursively find all arrays in the data */
  findArrays(obj, path = "", results = []) {
    if (!obj || typeof obj !== "object")
      return results;
    if (Array.isArray(obj) && obj.length > 0) {
      const label = path || "root";
      results.push({ path: path || "$", label, data: obj });
    }
    if (!Array.isArray(obj)) {
      for (const [key, value] of Object.entries(obj)) {
        const newPath = path ? `${path}.${key}` : key;
        if (Array.isArray(value) && value.length > 0) {
          results.push({ path: newPath, label: `${key} (${value.length})`, data: value });
          if (typeof value[0] === "object") {
            for (const [nestedKey, nestedValue] of Object.entries(value[0])) {
              if (Array.isArray(nestedValue)) {
              }
            }
          }
        } else if (typeof value === "object" && value !== null) {
          this.findArrays(value, newPath, results);
        }
      }
    }
    this.arrayPaths.set(results);
    if (results.length > 0 && !this.selectedArrayPath()) {
      this.selectedArrayPath.set(results[0].path);
    }
    return results;
  }
  /** Build table data from a selected array path */
  buildTable(data, path) {
    const arrayData = this.getValueAtPath(data, path);
    if (!Array.isArray(arrayData) || arrayData.length === 0) {
      this.tableColumns.set([]);
      this.tableRows.set([]);
      return;
    }
    const first = arrayData[0];
    if (typeof first !== "object" || first === null) {
      this.tableColumns.set([{ key: "_value", label: "Value" }]);
      this.tableRows.set(arrayData);
      return;
    }
    const columns = Object.keys(first).filter((k) => !Array.isArray(first[k]) && (typeof first[k] !== "object" || first[k] === null)).map((k) => ({ key: k, label: k }));
    this.tableColumns.set(columns);
    this.tableRows.set(arrayData);
    this.expandedRows.set(/* @__PURE__ */ new Set());
  }
  /** Navigate to a value at a dot-separated path */
  getValueAtPath(obj, path) {
    if (path === "$")
      return obj;
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  }
  static \u0275fac = function JsonViewer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JsonViewer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JsonViewer, selectors: [["app-json-viewer"]], viewQuery: function JsonViewer_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.editorContainer, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { data: [1, "data"] }, decls: 23, vars: 8, consts: [["editorContainer", ""], [1, "json-viewer"], [1, "viewer-toolbar"], [1, "mode-tabs"], [1, "tab", 3, "click"], [1, "material-icons"], [1, "toolbar-actions"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "viewer-content"], [1, "editor-container"], [1, "table-view"], [1, "no-data"], [1, "array-selector"], [3, "change"], [3, "value", "selected"], [1, "row-count"], [1, "table-scroll"], [1, "expand-col"], [3, "click"], [3, "title"], [1, "material-icons", "expand-icon"], [1, "nested-row"], [1, "nested-table-container"], [1, "nested-table"]], template: function JsonViewer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275domListener("click", function JsonViewer_Template_button_click_3_listener() {
        return ctx.setMode("tree");
      });
      \u0275\u0275domElementStart(4, "span", 5);
      \u0275\u0275text(5, "account_tree");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(6, " Tree ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "button", 4);
      \u0275\u0275domListener("click", function JsonViewer_Template_button_click_7_listener() {
        return ctx.setMode("code");
      });
      \u0275\u0275domElementStart(8, "span", 5);
      \u0275\u0275text(9, "code");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(10, " Code ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "button", 4);
      \u0275\u0275domListener("click", function JsonViewer_Template_button_click_11_listener() {
        return ctx.setMode("table");
      });
      \u0275\u0275domElementStart(12, "span", 5);
      \u0275\u0275text(13, "table_chart");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(14, " Table ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "div", 6)(16, "button", 7);
      \u0275\u0275domListener("click", function JsonViewer_Template_button_click_16_listener() {
        return ctx.copyToClipboard();
      });
      \u0275\u0275domElementStart(17, "span", 5);
      \u0275\u0275text(18, "content_copy");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(19, " Copy JSON ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(20, "div", 8);
      \u0275\u0275conditionalCreate(21, JsonViewer_Conditional_21_Template, 2, 0, "div", 9);
      \u0275\u0275conditionalCreate(22, JsonViewer_Conditional_22_Template, 3, 1, "div", 10);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeMode() === "tree");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeMode() === "code");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeMode() === "table");
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.activeMode() === "tree" || ctx.activeMode() === "code" ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeMode() === "table" ? 22 : -1);
    }
  }, styles: ["\n\n.json-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 12px;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #ddd;\n  flex-shrink: 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-bottom: none;\n  border-radius: 4px 4px 0 0;\n  background: #e8e8e8;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: background-color 0.15s;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid white;\n  font-weight: 500;\n  margin-bottom: -1px;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-content[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #fafafa;\n  border-bottom: 1px solid #eee;\n  flex-shrink: 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #555;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: 0.85rem;\n  max-width: 400px;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%]   .row-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n  margin-left: auto;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #e0e0e0;\n  text-align: left;\n  white-space: nowrap;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: var(--mpage-table-header-background-color, rgb(124, 179, 198));\n  color: #333;\n  font-weight: 600;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f0f6ff;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expandable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expanded[_ngcontent-%COMP%] {\n  background-color: #e8f0fe;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .expand-col[_ngcontent-%COMP%] {\n  width: 30px;\n  text-align: center;\n  padding: 2px;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .expand-col[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .nested-row[_ngcontent-%COMP%] {\n  background-color: #f5f7fa !important;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .nested-row[_ngcontent-%COMP%]:hover {\n  background-color: #f5f7fa !important;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .nested-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%] {\n  padding: 8px 12px 8px 40px;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 0.85rem;\n  color: #555;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   .nested-table[_ngcontent-%COMP%] {\n  width: auto;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   .nested-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d4e1eb;\n  position: static;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   .nested-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #888;\n  font-size: 0.9rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.btn.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=json-viewer.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonViewer, [{
    type: Component,
    args: [{ selector: "app-json-viewer", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="json-viewer">
  <div class="viewer-toolbar">
    <div class="mode-tabs">
      <button
        class="tab"
        [class.active]="activeMode() === 'tree'"
        (click)="setMode('tree')">
        <span class="material-icons">account_tree</span> Tree
      </button>
      <button
        class="tab"
        [class.active]="activeMode() === 'code'"
        (click)="setMode('code')">
        <span class="material-icons">code</span> Code
      </button>
      <button
        class="tab"
        [class.active]="activeMode() === 'table'"
        (click)="setMode('table')">
        <span class="material-icons">table_chart</span> Table
      </button>
    </div>

    <div class="toolbar-actions">
      <button class="btn btn-small btn-secondary" (click)="copyToClipboard()">
        <span class="material-icons">content_copy</span> Copy JSON
      </button>
    </div>
  </div>

  <div class="viewer-content">
    @if (activeMode() === 'tree' || activeMode() === 'code') {
      <div class="editor-container" #editorContainer></div>
    }

    @if (activeMode() === 'table') {
      <div class="table-view">
        @if (arrayPaths().length > 0) {
          <div class="array-selector">
            <label>Array:</label>
            <select (change)="selectArrayPath($any($event.target).value)">
              @for (ap of arrayPaths(); track ap.path) {
                <option [value]="ap.path" [selected]="ap.path === selectedArrayPath()">
                  {{ ap.label }}
                </option>
              }
            </select>
            <span class="row-count">{{ tableRows().length }} rows</span>
          </div>

          @if (tableColumns().length > 0) {
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    @if (tableRows().length > 0 && hasNestedArrays(tableRows()[0])) {
                      <th class="expand-col"></th>
                    }
                    @for (col of tableColumns(); track col.key) {
                      <th>{{ col.label }}</th>
                    }
                  </tr>
                </thead>
                <tbody>
                  @for (row of tableRows(); track $index; let i = $index) {
                    <tr (click)="hasNestedArrays(row) ? toggleRowExpansion(i) : null"
                        [class.expandable]="hasNestedArrays(row)"
                        [class.expanded]="isRowExpanded(i)">
                      @if (hasNestedArrays(tableRows()[0])) {
                        <td class="expand-col">
                          @if (hasNestedArrays(row)) {
                            <span class="material-icons expand-icon">
                              {{ isRowExpanded(i) ? 'expand_more' : 'chevron_right' }}
                            </span>
                          }
                        </td>
                      }
                      @for (col of tableColumns(); track col.key) {
                        <td [title]="getCellValue(row, col.key)">
                          {{ getCellValue(row, col.key) }}
                        </td>
                      }
                    </tr>

                    @if (isRowExpanded(i)) {
                      @for (nested of getNestedArrays(row); track nested.key) {
                        <tr class="nested-row">
                          <td [attr.colspan]="tableColumns().length + 1">
                            <div class="nested-table-container">
                              <h4>{{ nested.key }} ({{ nested.data.length }})</h4>
                              <table class="nested-table">
                                <thead>
                                  <tr>
                                    @for (ncol of getNestedColumns(nested.data); track ncol.key) {
                                      <th>{{ ncol.label }}</th>
                                    }
                                  </tr>
                                </thead>
                                <tbody>
                                  @for (nrow of nested.data; track $index) {
                                    <tr>
                                      @for (ncol of getNestedColumns(nested.data); track ncol.key) {
                                        <td [title]="getCellValue(nrow, ncol.key)">
                                          {{ getCellValue(nrow, ncol.key) }}
                                        </td>
                                      }
                                    </tr>
                                  }
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      }
                    }
                  }
                </tbody>
              </table>
            </div>
          } @else {
            <div class="no-data">No tabular data available for this array.</div>
          }
        } @else {
          <div class="no-data">No arrays found in the response data.</div>
        }
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/components/json-viewer/json-viewer.scss */\n.json-viewer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.json-viewer .viewer-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 12px;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #ddd;\n  flex-shrink: 0;\n}\n.json-viewer .viewer-toolbar .mode-tabs {\n  display: flex;\n  gap: 2px;\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-bottom: none;\n  border-radius: 4px 4px 0 0;\n  background: #e8e8e8;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: background-color 0.15s;\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab .material-icons {\n  font-size: 16px;\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab:hover {\n  background: #ddd;\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab.active {\n  background: white;\n  border-bottom: 1px solid white;\n  font-weight: 500;\n  margin-bottom: -1px;\n}\n.json-viewer .viewer-toolbar .toolbar-actions {\n  display: flex;\n  gap: 6px;\n}\n.json-viewer .viewer-content {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.json-viewer .viewer-content .editor-container {\n  height: 100%;\n  width: 100%;\n}\n.json-viewer .table-view {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.json-viewer .table-view .array-selector {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #fafafa;\n  border-bottom: 1px solid #eee;\n  flex-shrink: 0;\n}\n.json-viewer .table-view .array-selector label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #555;\n}\n.json-viewer .table-view .array-selector select {\n  padding: 4px 8px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: 0.85rem;\n  max-width: 400px;\n}\n.json-viewer .table-view .array-selector .row-count {\n  font-size: 0.8rem;\n  color: #888;\n  margin-left: auto;\n}\n.json-viewer .table-view .table-scroll {\n  flex: 1;\n  overflow: auto;\n}\n.json-viewer .table-view .table-scroll table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.json-viewer .table-view .table-scroll table th,\n.json-viewer .table-view .table-scroll table td {\n  padding: 6px 10px;\n  border: 1px solid #e0e0e0;\n  text-align: left;\n  white-space: nowrap;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.json-viewer .table-view .table-scroll table th {\n  background-color: var(--mpage-table-header-background-color, rgb(124, 179, 198));\n  color: #333;\n  font-weight: 600;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.json-viewer .table-view .table-scroll table tbody tr:nth-child(even) {\n  background-color: #fafafa;\n}\n.json-viewer .table-view .table-scroll table tbody tr:hover {\n  background-color: #f0f6ff;\n}\n.json-viewer .table-view .table-scroll table tbody tr.expandable {\n  cursor: pointer;\n}\n.json-viewer .table-view .table-scroll table tbody tr.expanded {\n  background-color: #e8f0fe;\n}\n.json-viewer .table-view .table-scroll table .expand-col {\n  width: 30px;\n  text-align: center;\n  padding: 2px;\n}\n.json-viewer .table-view .table-scroll table .expand-col .expand-icon {\n  font-size: 18px;\n  color: #666;\n}\n.json-viewer .table-view .table-scroll table .nested-row {\n  background-color: #f5f7fa !important;\n}\n.json-viewer .table-view .table-scroll table .nested-row:hover {\n  background-color: #f5f7fa !important;\n}\n.json-viewer .table-view .table-scroll table .nested-row td {\n  padding: 0;\n}\n.json-viewer .table-view .nested-table-container {\n  padding: 8px 12px 8px 40px;\n}\n.json-viewer .table-view .nested-table-container h4 {\n  margin: 0 0 6px 0;\n  font-size: 0.85rem;\n  color: #555;\n}\n.json-viewer .table-view .nested-table-container .nested-table {\n  width: auto;\n}\n.json-viewer .table-view .nested-table-container .nested-table th {\n  background-color: #d4e1eb;\n  position: static;\n}\n.json-viewer .table-view .nested-table-container .nested-table td {\n  font-size: 0.8rem;\n}\n.json-viewer .table-view .no-data {\n  padding: 40px;\n  text-align: center;\n  color: #888;\n  font-size: 0.9rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.btn.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary:hover {\n  background-color: #5a6268;\n}\n.btn.btn-small {\n  padding: 4px 10px;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=json-viewer.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JsonViewer, { className: "JsonViewer", filePath: "src/app/components/json-viewer/json-viewer.ts", lineNumber: 34 });
})();

// src/app/pages/executor/executor.ts
var _forTrack03 = ($index, $item) => $item.id;
function Executor_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r1 = ctx.$implicit;
    \u0275\u0275property("value", svc_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(svc_r1.displayName);
  }
}
function Executor_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4, "Program:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const svc_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(svc_r2.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(svc_r2.programName);
  }
}
function Executor_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "app-parameter-form", 13);
    \u0275\u0275listener("executeRequested", function Executor_Conditional_9_Template_app_parameter_form_executeRequested_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onExecute($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("service", ctx)("executing", ctx_r3.executing());
  }
}
function Executor_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Executing CCL script...");
    \u0275\u0275elementEnd()();
  }
}
function Executor_Conditional_11_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function Executor_Conditional_11_For_5_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const entry_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.loadFromHistory(entry_r6));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const entry_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("success", entry_r6.success)("error", !entry_r6.success)("active", ((tmp_15_0 = ctx_r3.currentResult()) == null ? null : tmp_15_0.id) === entry_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r6.serviceName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatTime(entry_r6.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDuration(entry_r6.durationMs));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", entry_r6.success ? "check_circle" : "error", " ");
  }
}
function Executor_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Executor_Conditional_11_For_5_Conditional_0_Template, 10, 10, "div", 16);
  }
  if (rf & 2) {
    const \u0275$index_49_r7 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_49_r7 < 10 ? 0 : -1);
  }
}
function Executor_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3");
    \u0275\u0275text(2, "Recent Executions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275repeaterCreate(4, Executor_Conditional_11_For_5_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.history());
  }
}
function Executor_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "app-json-viewer", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", result_r9.response);
  }
}
function Executor_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h3");
    \u0275\u0275text(2, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r9.errorMessage);
  }
}
function Executor_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "code", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 29);
    \u0275\u0275listener("click", function Executor_Conditional_13_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearResult());
    });
    \u0275\u0275elementStart(12, "span", 30);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, Executor_Conditional_13_Conditional_14_Template, 2, 1, "div", 31);
    \u0275\u0275conditionalCreate(15, Executor_Conditional_13_Conditional_15_Template, 5, 1, "div", 32);
  }
  if (rf & 2) {
    const result_r9 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r9.serviceName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", result_r9.success)("error", !result_r9.success);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r9.success ? "Success" : "Failed", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDuration(result_r9.durationMs));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r9.rawParameterString);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(result_r9.success && result_r9.response ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r9.errorMessage ? 15 : -1);
  }
}
function Executor_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 30);
    \u0275\u0275text(2, "terminal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Select a service and execute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Choose a CCL web service from the left panel, fill in the parameters, and click Execute to view the JSON response.");
    \u0275\u0275elementEnd()();
  }
}
var Executor = class _Executor {
  registry = inject(ServiceRegistryService);
  executor = inject(CclExecutorService);
  /** All available services */
  services = this.registry.allServices;
  /** Currently selected service ID */
  selectedServiceId = signal("cov_doc_activity_extract", ...ngDevMode ? [{ debugName: "selectedServiceId" }] : []);
  /** Resolved selected service */
  selectedService = computed(() => this.registry.getService(this.selectedServiceId()), ...ngDevMode ? [{ debugName: "selectedService" }] : []);
  /** Whether a script is currently executing */
  executing = this.executor.executing;
  /** Current execution result */
  currentResult = signal(null, ...ngDevMode ? [{ debugName: "currentResult" }] : []);
  /** Execution history */
  history = this.executor.history;
  /** Select a service */
  selectService(id) {
    this.selectedServiceId.set(id);
    this.currentResult.set(null);
  }
  /** Execute the selected service with given parameter values */
  async onExecute(parameterValues) {
    const service = this.selectedService();
    if (!service)
      return;
    const result = await this.executor.execute(service, parameterValues);
    this.currentResult.set(result);
  }
  /** Load a result from history */
  loadFromHistory(result) {
    this.currentResult.set(result);
  }
  /** Clear the current result */
  clearResult() {
    this.currentResult.set(null);
  }
  /** Format a timestamp for display */
  formatTime(date) {
    return new Date(date).toLocaleTimeString();
  }
  /** Format duration for display */
  formatDuration(ms) {
    if (ms < 1e3)
      return `${ms}ms`;
    return `${(ms / 1e3).toFixed(1)}s`;
  }
  static \u0275fac = function Executor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Executor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Executor, selectors: [["app-executor"]], decls: 15, vars: 6, consts: [[1, "executor-layout"], [1, "left-panel"], [1, "service-selector"], [3, "change", "value"], [3, "value"], [1, "parameter-section"], [1, "status-message", "loading"], [1, "history-section"], [1, "right-panel"], [1, "empty-state"], [1, "service-description"], [1, "program-name"], [1, "label"], [3, "executeRequested", "service", "executing"], [1, "spinner"], [1, "history-list"], [1, "history-item", 3, "success", "error", "active"], [1, "history-item", 3, "click"], [1, "history-name"], [1, "history-meta"], [1, "history-time"], [1, "history-duration"], [1, "history-status", "material-icons"], [1, "result-header"], [1, "result-info"], [1, "result-meta"], [1, "result-status"], [1, "result-duration"], [1, "result-params"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "material-icons"], [1, "result-viewer"], [1, "error-panel"], [3, "data"]], template: function Executor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 3);
      \u0275\u0275listener("change", function Executor_Template_select_change_5_listener($event) {
        return ctx.selectService($event.target.value);
      });
      \u0275\u0275repeaterCreate(6, Executor_For_7_Template, 2, 2, "option", 4, _forTrack03);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, Executor_Conditional_8_Template, 7, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, Executor_Conditional_9_Template, 2, 2, "div", 5);
      \u0275\u0275conditionalCreate(10, Executor_Conditional_10_Template, 4, 0, "div", 6);
      \u0275\u0275conditionalCreate(11, Executor_Conditional_11_Template, 6, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275conditionalCreate(13, Executor_Conditional_13_Template, 16, 10)(14, Executor_Conditional_14_Template, 7, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_6_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedServiceId());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.services());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.selectedService()) ? 8 : -1, tmp_2_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.selectedService()) ? 9 : -1, tmp_3_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.executing() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.history().length > 0 ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_6_0 = ctx.currentResult()) ? 13 : 14, tmp_6_0);
    }
  }, dependencies: [ParameterForm, JsonViewer], styles: ["\n\n.executor-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 50px);\n  gap: 0;\n}\n.left-panel[_ngcontent-%COMP%] {\n  width: 360px;\n  min-width: 300px;\n  border-right: 1px solid #ddd;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: #fafafa;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid #eee;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1rem;\n  color: #333;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: 0.9rem;\n  background: white;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .service-description[_ngcontent-%COMP%] {\n  margin: 8px 0 4px;\n  font-size: 0.8rem;\n  color: #666;\n  line-height: 1.4;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #555;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 0.8rem;\n  color: #d73a49;\n}\n.left-panel[_ngcontent-%COMP%]   .parameter-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid #eee;\n}\n.left-panel[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.left-panel[_ngcontent-%COMP%]   .status-message.loading[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  color: #0056b3;\n  font-size: 0.85rem;\n}\n.left-panel[_ngcontent-%COMP%]   .status-message.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #b3d9ff;\n  border-top-color: #0056b3;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  flex: 1;\n  overflow-y: auto;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.85rem;\n  color: #555;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 8px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  border: 1px solid transparent;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item.active[_ngcontent-%COMP%] {\n  background: #e0ecff;\n  border-color: var(--primary-color, #5783db);\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #888;\n  font-size: 0.75rem;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item.success[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.left-panel[_ngcontent-%COMP%]   .history-section[_ngcontent-%COMP%]   .history-item.error[_ngcontent-%COMP%]   .history-status[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.right-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 12px 16px;\n  border-bottom: 1px solid #ddd;\n  background: #fafafa;\n  flex-shrink: 0;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #333;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n  font-size: 0.8rem;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-status[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-status.success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-status.error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-duration[_ngcontent-%COMP%] {\n  color: #888;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-params[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 0.75rem;\n  color: #555;\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.right-panel[_ngcontent-%COMP%]   .result-viewer[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.right-panel[_ngcontent-%COMP%]   .error-panel[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 4px;\n}\n.right-panel[_ngcontent-%COMP%]   .error-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #721c24;\n}\n.right-panel[_ngcontent-%COMP%]   .error-panel[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  color: #721c24;\n  font-size: 0.85rem;\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  padding: 40px;\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #ccc;\n  margin-bottom: 16px;\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #666;\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 400px;\n  line-height: 1.5;\n  font-size: 0.9rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n}\n.btn.btn-small[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=executor.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Executor, [{
    type: Component,
    args: [{ selector: "app-executor", standalone: true, imports: [ParameterForm, JsonViewer], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="executor-layout">
  <!-- Left Panel: Service Selection + Parameters -->
  <div class="left-panel">
    <div class="service-selector">
      <h2>Service</h2>
      <select
        [value]="selectedServiceId()"
        (change)="selectService($any($event.target).value)">
        @for (svc of services(); track svc.id) {
          <option [value]="svc.id">{{ svc.displayName }}</option>
        }
      </select>

      @if (selectedService(); as svc) {
        <p class="service-description">{{ svc.description }}</p>
        <div class="program-name">
          <span class="label">Program:</span>
          <code>{{ svc.programName }}</code>
        </div>
      }
    </div>

    @if (selectedService(); as svc) {
      <div class="parameter-section">
        <app-parameter-form
          [service]="svc"
          [executing]="executing()"
          (executeRequested)="onExecute($event)" />
      </div>
    }

    @if (executing()) {
      <div class="status-message loading">
        <div class="spinner"></div>
        <span>Executing CCL script...</span>
      </div>
    }

    <!-- Execution History -->
    @if (history().length > 0) {
      <div class="history-section">
        <h3>Recent Executions</h3>
        <div class="history-list">
          @for (entry of history(); track entry.id; let i = $index) {
            @if (i < 10) {
              <div
                class="history-item"
                [class.success]="entry.success"
                [class.error]="!entry.success"
                [class.active]="currentResult()?.id === entry.id"
                (click)="loadFromHistory(entry)">
                <div class="history-name">{{ entry.serviceName }}</div>
                <div class="history-meta">
                  <span class="history-time">{{ formatTime(entry.timestamp) }}</span>
                  <span class="history-duration">{{ formatDuration(entry.durationMs) }}</span>
                  <span class="history-status material-icons">
                    {{ entry.success ? 'check_circle' : 'error' }}
                  </span>
                </div>
              </div>
            }
          }
        </div>
      </div>
    }
  </div>

  <!-- Right Panel: Results Viewer -->
  <div class="right-panel">
    @if (currentResult(); as result) {
      <div class="result-header">
        <div class="result-info">
          <h2>{{ result.serviceName }}</h2>
          <div class="result-meta">
            <span class="result-status" [class.success]="result.success" [class.error]="!result.success">
              {{ result.success ? 'Success' : 'Failed' }}
            </span>
            <span class="result-duration">{{ formatDuration(result.durationMs) }}</span>
            <code class="result-params">{{ result.rawParameterString }}</code>
          </div>
        </div>
        <button class="btn btn-small btn-secondary" (click)="clearResult()">
          <span class="material-icons">close</span>
        </button>
      </div>

      @if (result.success && result.response) {
        <div class="result-viewer">
          <app-json-viewer [data]="result.response" />
        </div>
      }

      @if (result.errorMessage) {
        <div class="error-panel">
          <h3>Error</h3>
          <pre>{{ result.errorMessage }}</pre>
        </div>
      }
    } @else {
      <div class="empty-state">
        <span class="material-icons">terminal</span>
        <h3>Select a service and execute</h3>
        <p>Choose a CCL web service from the left panel, fill in the parameters, and click Execute to view the JSON response.</p>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/pages/executor/executor.scss */\n.executor-layout {\n  display: flex;\n  height: calc(100vh - 50px);\n  gap: 0;\n}\n.left-panel {\n  width: 360px;\n  min-width: 300px;\n  border-right: 1px solid #ddd;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: #fafafa;\n}\n.left-panel .service-selector {\n  padding: 16px;\n  border-bottom: 1px solid #eee;\n}\n.left-panel .service-selector h2 {\n  margin: 0 0 8px;\n  font-size: 1rem;\n  color: #333;\n}\n.left-panel .service-selector select {\n  width: 100%;\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-family: inherit;\n  font-size: 0.9rem;\n  background: white;\n}\n.left-panel .service-selector .service-description {\n  margin: 8px 0 4px;\n  font-size: 0.8rem;\n  color: #666;\n  line-height: 1.4;\n}\n.left-panel .service-selector .program-name {\n  font-size: 0.8rem;\n  color: #555;\n}\n.left-panel .service-selector .program-name .label {\n  font-weight: 500;\n}\n.left-panel .service-selector .program-name code {\n  background: #f0f0f0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 0.8rem;\n  color: #d73a49;\n}\n.left-panel .parameter-section {\n  padding: 16px;\n  border-bottom: 1px solid #eee;\n}\n.left-panel .status-message {\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.left-panel .status-message.loading {\n  background-color: #e7f3ff;\n  color: #0056b3;\n  font-size: 0.85rem;\n}\n.left-panel .status-message.loading .spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #b3d9ff;\n  border-top-color: #0056b3;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.left-panel .history-section {\n  padding: 16px;\n  flex: 1;\n  overflow-y: auto;\n}\n.left-panel .history-section h3 {\n  margin: 0 0 8px;\n  font-size: 0.85rem;\n  color: #555;\n}\n.left-panel .history-section .history-list {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.left-panel .history-section .history-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 8px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  border: 1px solid transparent;\n}\n.left-panel .history-section .history-item:hover {\n  background: #eee;\n}\n.left-panel .history-section .history-item.active {\n  background: #e0ecff;\n  border-color: var(--primary-color, #5783db);\n}\n.left-panel .history-section .history-item .history-name {\n  font-weight: 500;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n}\n.left-panel .history-section .history-item .history-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #888;\n  font-size: 0.75rem;\n}\n.left-panel .history-section .history-item .history-meta .history-status {\n  font-size: 16px;\n}\n.left-panel .history-section .history-item .history-meta .success .history-status {\n  color: #28a745;\n}\n.left-panel .history-section .history-item .history-meta .error .history-status {\n  color: #dc3545;\n}\n.left-panel .history-section .history-item.success .history-status {\n  color: #28a745;\n}\n.left-panel .history-section .history-item.error .history-status {\n  color: #dc3545;\n}\n.right-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.right-panel .result-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 12px 16px;\n  border-bottom: 1px solid #ddd;\n  background: #fafafa;\n  flex-shrink: 0;\n}\n.right-panel .result-header .result-info h2 {\n  margin: 0;\n  font-size: 1rem;\n  color: #333;\n}\n.right-panel .result-header .result-info .result-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n  font-size: 0.8rem;\n}\n.right-panel .result-header .result-info .result-meta .result-status {\n  padding: 2px 8px;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n.right-panel .result-header .result-info .result-meta .result-status.success {\n  background: #d4edda;\n  color: #155724;\n}\n.right-panel .result-header .result-info .result-meta .result-status.error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.right-panel .result-header .result-info .result-meta .result-duration {\n  color: #888;\n}\n.right-panel .result-header .result-info .result-meta .result-params {\n  background: #f0f0f0;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 0.75rem;\n  color: #555;\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.right-panel .result-viewer {\n  flex: 1;\n  overflow: hidden;\n}\n.right-panel .error-panel {\n  padding: 16px;\n  margin: 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 4px;\n}\n.right-panel .error-panel h3 {\n  margin: 0 0 8px;\n  color: #721c24;\n}\n.right-panel .error-panel pre {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  color: #721c24;\n  font-size: 0.85rem;\n}\n.right-panel .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  padding: 40px;\n}\n.right-panel .empty-state .material-icons {\n  font-size: 64px;\n  color: #ccc;\n  margin-bottom: 16px;\n}\n.right-panel .empty-state h3 {\n  margin: 0 0 8px;\n  color: #666;\n}\n.right-panel .empty-state p {\n  max-width: 400px;\n  line-height: 1.5;\n  font-size: 0.9rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.btn .material-icons {\n  font-size: 18px;\n}\n.btn.btn-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.btn.btn-secondary:hover {\n  background-color: #5a6268;\n}\n.btn.btn-small {\n  padding: 4px 8px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=executor.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Executor, { className: "Executor", filePath: "src/app/pages/executor/executor.ts", lineNumber: 16 });
})();
export {
  Executor
};
//# sourceMappingURL=chunk-ZTZH674K.js.map
