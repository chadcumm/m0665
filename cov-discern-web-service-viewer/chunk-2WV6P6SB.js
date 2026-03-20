import {
  CustomService,
  MPageService,
  ReferenceService
} from "./chunk-HUG4DTJF.js";
import {
  ServiceRegistryService
} from "./chunk-ZPOP7CD7.js";
import {
  HelpModal
} from "./chunk-KHASGS2B.js";
import {
  ChangeDetectionStrategy,
  Component,
  FormsModule,
  Injectable,
  NgSelectOption,
  ParameterLibraryService,
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
} from "./chunk-YANIWAVR.js";
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
   * Execute a CCL program with the given parameter values via XMLCclRequest.
   *
   * Builds a positional parameter string (e.g., `^MINE^,^ClinicalDoc^,^^,^CMC^`),
   * sends it to the CCL program, parses the JSON response, and records the result
   * in execution history.
   *
   * @param service - The service definition containing program name and parameter bindings
   * @param parameterValues - Map of parameterTypeKey → user-entered value
   * @returns ExecutionResult with response data or error message
   *
   * @example
   * const result = await cclExecutor.execute(myService, { event_set_name: 'ClinicalDoc', facility: 'CMC' });
   * if (result.success) { console.log(result.response); }
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
      timestamp: /* @__PURE__ */ new Date(),
      executionMode: "raw"
    };
    this.mPage.putLog(`[XMLCclRequest] Executing: ${service.programName}`);
    this.mPage.putLog(`[XMLCclRequest] Parameters: ${paramString}`);
    return this.executeXmlCclRequest(service.programName, paramString).then((response) => {
      const durationMs = Date.now() - startTime;
      this.mPage.putLog(`[XMLCclRequest] Success: ${service.programName} (${durationMs}ms)`);
      const result = __spreadProps(__spreadValues({}, resultBase), {
        durationMs,
        success: true,
        response
      });
      this.addToHistory(result);
      return result;
    }).catch((error) => {
      const durationMs = Date.now() - startTime;
      this.mPage.putLog(`[XMLCclRequest] Error: ${service.programName} - ${error.message || error}`);
      const result = __spreadProps(__spreadValues({}, resultBase), {
        durationMs,
        success: false,
        errorMessage: error.message || String(error)
      });
      this.addToHistory(result);
      return result;
    }).finally(() => {
      this._executing.set(false);
    });
  }
  /**
   * Build the positional ^param1^,^param2^ string from service definition and values.
   *
   * Parameters are sorted by position (1-based) and each value is wrapped in ^carets^
   * unless the parameter type has `unquoted: true` (for numeric CCL prompts like i2/i4/f8).
   *
   * @param service - Service definition with parameter bindings
   * @param values - Map of parameterTypeKey → value
   * @returns Comma-separated parameter string ready for XMLCclRequest.send()
   *
   * @example
   * // Given: outdev=MINE, event_set_name=ClinicalDoc, fin=(empty), facility=CMC
   * // Returns: "^MINE^,^ClinicalDoc^,^^,^CMC^"
   */
  buildParameterString(service, values) {
    const sortedParams = [...service.parameters].sort((a, b) => a.position - b.position);
    return sortedParams.map((param) => {
      const paramType = this.paramLibrary.getType(param.parameterTypeKey);
      const value = values[param.parameterTypeKey] ?? param.defaultValueOverride ?? paramType?.defaultValue ?? "";
      return paramType?.unquoted ? value : `^${value}^`;
    }).join(",");
  }
  /** Clear execution history from memory and localStorage */
  clearHistory() {
    this._history.set([]);
    localStorage.removeItem(HISTORY_KEY);
  }
  /**
   * Execute a CCL program via the native XMLCclRequest API.
   *
   * XMLCclRequest lifecycle:
   * 1. `new XMLCclRequest()` — Instantiate from Cerner's runtime-injected global
   * 2. Set `onreadystatechange` callback to handle response
   * 3. `info.open('GET', programName, true)` — Open async GET to CCL program
   * 4. `info.send(paramString)` — Send the positional parameter string
   * 5. Callback fires when readyState === 4:
   *    - status 200: Parse JSON (with trailing comma cleanup for CCL quirks)
   *    - status !== 200: Reject with error
   *
   * CCL JSON quirk: CCL's JSON output often includes trailing commas before
   * closing braces/brackets (e.g., `{"a": 1,}`) which is invalid JSON.
   * The regex cleanup handles this: /,\s*}/g → } and /,\s*]/g → ]
   *
   * If JSON parsing fails entirely, the raw response text is returned as
   * `{ _rawResponse: text }` so the user can still inspect it.
   *
   * @param programName - CCL program name (e.g., 'cov_doc_activity_extract')
   * @param paramString - Positional parameter string (e.g., '^MINE^,^ClinicalDoc^')
   * @returns Parsed JSON response object
   * @throws Error if XMLCclRequest is unavailable or request fails
   */
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
  /** Prepend result to history and persist to localStorage */
  addToHistory(result) {
    this._history.update((history) => {
      const updated = [result, ...history].slice(0, MAX_HISTORY);
      this.saveHistory(updated);
      return updated;
    });
  }
  /** Load execution history from localStorage on service init */
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
  /** Persist execution history to localStorage (capped at MAX_HISTORY) */
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

// src/app/services/clinical-office-executor.service.ts
var HISTORY_KEY2 = "dwsv_co_execution_history";
var MAX_HISTORY2 = 50;
var EXECUTION_TIMEOUT_MS = 3e4;
var ClinicalOfficeExecutorService = class _ClinicalOfficeExecutorService {
  mPage = inject(MPageService);
  customService = inject(CustomService);
  paramLibrary = inject(ParameterLibraryService);
  _executing = signal(false, ...ngDevMode ? [{ debugName: "_executing" }] : []);
  _history = signal([], ...ngDevMode ? [{ debugName: "_history" }] : []);
  executing = this._executing.asReadonly();
  history = this._history.asReadonly();
  constructor() {
    this.loadHistory();
  }
  /**
   * Execute a CCL program via Clinical Office CustomService.
   *
   * Guards against framework not being ready, builds a CustomService payload
   * with named parameters, and wraps the callback-based API in a Promise
   * with a 30-second timeout.
   *
   * @param service - The service definition containing program name and parameter bindings
   * @param parameterValues - Map of parameterTypeKey → user-entered value
   * @param options - Optional settings (reference: true to collect Reference Service data)
   * @returns ExecutionResult with response data or error message
   */
  async execute(service, parameterValues, options) {
    this._executing.set(true);
    const startTime = Date.now();
    const paramDisplay = JSON.stringify(parameterValues);
    const resultBase = {
      id: crypto.randomUUID(),
      serviceId: service.id,
      serviceName: service.displayName,
      parameterValues: __spreadValues({}, parameterValues),
      rawParameterString: paramDisplay,
      timestamp: /* @__PURE__ */ new Date(),
      executionMode: "clinical-office"
    };
    try {
      if (!this.mPage.serviceReady) {
        throw new Error("Clinical Office framework is not initialized. Use Raw mode or wait for initialization.");
      }
      const response = await this.executeViaCustomService(service, parameterValues, options);
      const result = __spreadProps(__spreadValues({}, resultBase), {
        durationMs: Date.now() - startTime,
        success: true,
        response
      });
      this.addToHistory(result);
      return result;
    } catch (error) {
      const result = __spreadProps(__spreadValues({}, resultBase), {
        durationMs: Date.now() - startTime,
        success: false,
        errorMessage: error.message || String(error)
      });
      this.addToHistory(result);
      return result;
    } finally {
      this._executing.set(false);
    }
  }
  /** Clear execution history from memory and localStorage */
  clearHistory() {
    this._history.set([]);
    localStorage.removeItem(HISTORY_KEY2);
  }
  /**
   * Build and execute a CustomService payload, returning the response as a Promise.
   *
   * Uses a 30-second timeout to guard against the callback never firing
   * (e.g., network error, script not found, CCL compile error).
   */
  executeViaCustomService(service, parameterValues, options) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`Execution timed out after ${EXECUTION_TIMEOUT_MS / 1e3} seconds`)), EXECUTION_TIMEOUT_MS);
      try {
        const payload = this.buildCustomPayload(service, parameterValues, options);
        this.customService.load(payload, [{ personId: 0, encntrId: 0 }], () => {
          clearTimeout(timer);
          try {
            const response = this.customService.get(service.id);
            if (!response) {
              reject(new Error(`No response received for script ID: ${service.id}`));
              return;
            }
            if (response.statusData?.status === "F") {
              reject(new Error(`CCL script returned failure: ${response.text || "Unknown error"}`));
              return;
            }
            resolve(response);
          } catch (err) {
            reject(new Error(`Error reading CustomService response: ${err.message}`));
          }
        });
      } catch (err) {
        clearTimeout(timer);
        reject(new Error(`CustomService.load() failed: ${err.message}`));
      }
    });
  }
  /**
   * Build the CustomService payload from a service definition and parameter values.
   *
   * Maps parameterTypeKey names to named parameters in the CustomService format.
   * Uses clearPatientSource: true by default since most built-in services are
   * facility-wide queries.
   *
   * @param service - Service definition with parameter bindings
   * @param values - Map of parameterTypeKey → value
   * @param options - Optional settings (reference, etc.)
   * @returns Payload object ready for CustomService.load()
   */
  buildCustomPayload(service, values, options) {
    const parameters = {};
    const sortedParams = [...service.parameters].sort((a, b) => a.position - b.position);
    for (const param of sortedParams) {
      const paramType = this.paramLibrary.getType(param.parameterTypeKey);
      const value = values[param.parameterTypeKey] ?? param.defaultValueOverride ?? paramType?.defaultValue ?? "";
      parameters[param.parameterTypeKey] = value;
    }
    const payload = {
      clearPatientSource: true,
      customScript: {
        script: [{
          name: service.programName,
          run: "pre",
          id: service.id,
          parameters
        }]
      }
    };
    if (options?.reference) {
      payload.reference = true;
    }
    return payload;
  }
  /** Prepend result to history and persist to localStorage */
  addToHistory(result) {
    this._history.update((history) => {
      const updated = [result, ...history].slice(0, MAX_HISTORY2);
      this.saveHistory(updated);
      return updated;
    });
  }
  /** Load execution history from localStorage on service init */
  loadHistory() {
    try {
      const stored = localStorage.getItem(HISTORY_KEY2);
      if (stored) {
        const parsed = JSON.parse(stored);
        this._history.set(parsed.map((r) => __spreadProps(__spreadValues({}, r), { timestamp: new Date(r.timestamp) })));
      }
    } catch {
    }
  }
  /** Persist execution history to localStorage (capped at MAX_HISTORY) */
  saveHistory(history) {
    try {
      localStorage.setItem(HISTORY_KEY2, JSON.stringify(history.slice(0, MAX_HISTORY2)));
    } catch {
    }
  }
  static \u0275fac = function ClinicalOfficeExecutorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClinicalOfficeExecutorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClinicalOfficeExecutorService, factory: _ClinicalOfficeExecutorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClinicalOfficeExecutorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/components/parameter-inputs/parameter-form.ts
var _forTrack0 = ($index, $item) => $item.serviceParam.position;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.preset;
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
function ParameterForm_For_10_Case_6_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ParameterForm_For_10_Case_6_Conditional_3_For_2_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const param_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset(param_r2.serviceParam.parameterTypeKey, p_r7.preset));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7.label, " ");
  }
}
function ParameterForm_For_10_Case_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, ParameterForm_For_10_Case_6_Conditional_3_For_2_Template, 2, 1, "button", 21, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(param_r2.paramType.presets);
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
    \u0275\u0275conditionalCreate(3, ParameterForm_For_10_Case_6_Conditional_3_Template, 3, 0, "div", 19);
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey + "-date")("value", ctx_r2.getDateInputValue(param_r2.value));
    \u0275\u0275advance();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey + "-time")("value", ctx_r2.getTimeInputValue(param_r2.value));
    \u0275\u0275advance();
    \u0275\u0275conditional((param_r2.paramType.presets == null ? null : param_r2.paramType.presets.length) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r2.value);
  }
}
function ParameterForm_For_10_Case_7_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ParameterForm_For_10_Case_7_Conditional_1_For_2_Template_button_click_0_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const param_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset(param_r2.serviceParam.parameterTypeKey, p_r10.preset));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r10.label, " ");
  }
}
function ParameterForm_For_10_Case_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, ParameterForm_For_10_Case_7_Conditional_1_For_2_Template, 2, 1, "button", 21, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(param_r2.paramType.presets);
  }
}
function ParameterForm_For_10_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 17);
    \u0275\u0275listener("change", function ParameterForm_For_10_Case_7_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateOnlyChange(param_r2.serviceParam.parameterTypeKey, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, ParameterForm_For_10_Case_7_Conditional_1_Template, 3, 0, "div", 19);
    \u0275\u0275elementStart(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey)("value", ctx_r2.getDateInputValue(param_r2.value));
    \u0275\u0275advance();
    \u0275\u0275conditional((param_r2.paramType.presets == null ? null : param_r2.paramType.presets.length) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r2.value);
  }
}
function ParameterForm_For_10_Case_8_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ParameterForm_For_10_Case_8_Conditional_1_For_2_Template_button_click_0_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const param_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset(param_r2.serviceParam.parameterTypeKey, p_r13.preset));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r13.label, " ");
  }
}
function ParameterForm_For_10_Case_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, ParameterForm_For_10_Case_8_Conditional_1_For_2_Template, 2, 1, "button", 21, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(param_r2.paramType.presets);
  }
}
function ParameterForm_For_10_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 18);
    \u0275\u0275listener("change", function ParameterForm_For_10_Case_8_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const param_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTimeOnlyChange(param_r2.serviceParam.parameterTypeKey, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, ParameterForm_For_10_Case_8_Conditional_1_Template, 3, 0, "div", 19);
    \u0275\u0275elementStart(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "param-" + param_r2.serviceParam.parameterTypeKey)("value", ctx_r2.getTimeInputValue(param_r2.value));
    \u0275\u0275advance();
    \u0275\u0275conditional((param_r2.paramType.presets == null ? null : param_r2.paramType.presets.length) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r2.value);
  }
}
function ParameterForm_For_10_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 23);
    \u0275\u0275listener("input", function ParameterForm_For_10_Case_9_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r14);
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
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 23);
    \u0275\u0275listener("input", function ParameterForm_For_10_Case_10_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r15);
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
    \u0275\u0275conditionalCreate(5, ParameterForm_For_10_Case_5_Template, 3, 2, "select", 11)(6, ParameterForm_For_10_Case_6_Template, 6, 6)(7, ParameterForm_For_10_Case_7_Template, 4, 4)(8, ParameterForm_For_10_Case_8_Template, 4, 4)(9, ParameterForm_For_10_Case_9_Template, 1, 3, "input", 12)(10, ParameterForm_For_10_Case_10_Template, 1, 3, "input", 12);
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
    \u0275\u0275element(0, "div", 24);
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
  visibleParams = computed(() => this.resolvedParams().filter((p) => !p.serviceParam.hidden), ...ngDevMode ? [{ debugName: "visibleParams" }] : []);
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
  /** Apply a named preset to a parameter */
  applyPreset(key, presetName) {
    const value = this.resolvePreset(presetName);
    if (value) {
      this.setValue(key, value);
    }
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
  /** Resolve a named preset to a CCL-formatted value */
  resolvePreset(preset) {
    const now = /* @__PURE__ */ new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    switch (preset) {
      case "now":
        return this.formatCclDateTime(now);
      case "today_start":
        return this.formatCclDateTime(today);
      case "today_end": {
        const end = new Date(today);
        end.setHours(23, 59, 59);
        return this.formatCclDateTime(end);
      }
      case "yesterday_start":
        return this.formatCclDateTime(yesterday);
      case "yesterday_end": {
        const end = new Date(yesterday);
        end.setHours(23, 59, 59);
        return this.formatCclDateTime(end);
      }
      default:
        return null;
    }
  }
  formatCclDate(d) {
    const day = String(d.getDate()).padStart(2, "0");
    const mon = MONTHS[d.getMonth()];
    const year = d.getFullYear();
    return `${day}-${mon}-${year}`;
  }
  formatCclTime(d) {
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  }
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
  toDateInputValue(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  toTimeInputValue(d) {
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }
  combineDateAndTime(dateStr, timeStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hh, mm] = (timeStr || "00:00").split(":").map(Number);
    const d = new Date(year, month - 1, day, hh, mm, 0);
    return this.formatCclDateTime(d);
  }
  static \u0275fac = function ParameterForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParameterForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParameterForm, selectors: [["app-parameter-form"]], inputs: { service: [1, "service"], executing: [1, "executing"] }, outputs: { executeRequested: "executeRequested" }, decls: 15, vars: 2, consts: [[1, "parameter-form"], [1, "form-header"], [1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "material-icons"], [1, "form-fields"], [1, "field-row"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "field-label"], [1, "required"], [1, "field-input"], [3, "id", "value"], ["type", "text", 3, "id", "value", "placeholder"], [1, "field-help"], [3, "change", "id", "value"], [3, "value", "selected"], [1, "datetime-picker"], ["type", "date", 3, "change", "id", "value"], ["type", "time", 3, "change", "id", "value"], [1, "presets"], [1, "field-ccl-value"], [1, "preset-chip"], [1, "preset-chip", 3, "click"], ["type", "text", 3, "input", "id", "value", "placeholder"], [1, "btn-spinner"]], template: function ParameterForm_Template(rf, ctx) {
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
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.parameter-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-base);\n}\n.parameter-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.parameter-form[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-base);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-very-tight);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--fusion-color-error);\n  margin-left: 2px;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-very-tight);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n  background: var(--fusion-color-bg-canvas);\n  transition: border-color var(--fusion-transition-fast);\n  box-sizing: border-box;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--fusion-color-text-secondary);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   .field-help[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.parameter-form[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%]   .field-ccl-value[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n}\n.parameter-form[_ngcontent-%COMP%]   .datetime-picker[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.parameter-form[_ngcontent-%COMP%]   .datetime-picker[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  flex: 1;\n}\n.parameter-form[_ngcontent-%COMP%]   .datetime-picker[_ngcontent-%COMP%]   input[type=time][_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 120px;\n}\n.parameter-form[_ngcontent-%COMP%]   .presets[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n  flex-wrap: wrap;\n}\n.parameter-form[_ngcontent-%COMP%]   .preset-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-sm);\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--fusion-transition-fast);\n  white-space: nowrap;\n}\n.parameter-form[_ngcontent-%COMP%]   .preset-chip[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n  border-color: var(--fusion-color-primary);\n  color: var(--fusion-color-primary);\n}\n.parameter-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=parameter-form.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParameterForm, [{
    type: Component,
    args: [{ selector: "app-parameter-form", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="parameter-form">
  <div class="form-header">
    <h3>Parameters</h3>
    <button class="btn btn-ghost btn-small" (click)="resetDefaults()">
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
              @if (param.paramType.presets?.length) {
                <div class="presets">
                  @for (p of param.paramType.presets; track p.preset) {
                    <button
                      class="preset-chip"
                      (click)="applyPreset(param.serviceParam.parameterTypeKey, p.preset)">
                      {{ p.label }}
                    </button>
                  }
                </div>
              }
              <span class="field-ccl-value">{{ param.value }}</span>
            }
            @case ('date') {
              <input
                type="date"
                [id]="'param-' + param.serviceParam.parameterTypeKey"
                [value]="getDateInputValue(param.value)"
                (change)="onDateOnlyChange(param.serviceParam.parameterTypeKey, $any($event.target).value)" />
              @if (param.paramType.presets?.length) {
                <div class="presets">
                  @for (p of param.paramType.presets; track p.preset) {
                    <button
                      class="preset-chip"
                      (click)="applyPreset(param.serviceParam.parameterTypeKey, p.preset)">
                      {{ p.label }}
                    </button>
                  }
                </div>
              }
              <span class="field-ccl-value">{{ param.value }}</span>
            }
            @case ('time') {
              <input
                type="time"
                [id]="'param-' + param.serviceParam.parameterTypeKey"
                [value]="getTimeInputValue(param.value)"
                (change)="onTimeOnlyChange(param.serviceParam.parameterTypeKey, $any($event.target).value)" />
              @if (param.paramType.presets?.length) {
                <div class="presets">
                  @for (p of param.paramType.presets; track p.preset) {
                    <button
                      class="preset-chip"
                      (click)="applyPreset(param.serviceParam.parameterTypeKey, p.preset)">
                      {{ p.label }}
                    </button>
                  }
                </div>
              }
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
`, styles: ["/* src/app/components/parameter-inputs/parameter-form.scss */\n.parameter-form .form-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-base);\n}\n.parameter-form .form-header h3 {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.parameter-form .form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-base);\n}\n.parameter-form .field-row {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-very-tight);\n}\n.parameter-form .field-label {\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.parameter-form .field-label .required {\n  color: var(--fusion-color-error);\n  margin-left: 2px;\n}\n.parameter-form .field-input {\n  display: flex;\n  flex-direction: column;\n  gap: var(--fusion-space-very-tight);\n}\n.parameter-form .field-input input,\n.parameter-form .field-input select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text);\n  background: var(--fusion-color-bg-canvas);\n  transition: border-color var(--fusion-transition-fast);\n  box-sizing: border-box;\n}\n.parameter-form .field-input input:focus,\n.parameter-form .field-input select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.parameter-form .field-input input::placeholder,\n.parameter-form .field-input select::placeholder {\n  color: var(--fusion-color-text-secondary);\n}\n.parameter-form .field-input select {\n  cursor: pointer;\n}\n.parameter-form .field-input .field-help {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.parameter-form .field-input .field-ccl-value {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n}\n.parameter-form .datetime-picker {\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.parameter-form .datetime-picker input[type=date] {\n  flex: 1;\n}\n.parameter-form .datetime-picker input[type=time] {\n  flex: 0 0 auto;\n  width: 120px;\n}\n.parameter-form .presets {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n  flex-wrap: wrap;\n}\n.parameter-form .preset-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-sm);\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--fusion-transition-fast);\n  white-space: nowrap;\n}\n.parameter-form .preset-chip:hover {\n  background: var(--fusion-color-bg-hover);\n  border-color: var(--fusion-color-primary);\n  color: var(--fusion-color-primary);\n}\n.parameter-form .form-actions {\n  margin-top: var(--fusion-space-loose);\n  display: flex;\n  gap: var(--fusion-space-tight);\n}\n.btn-spinner {\n  width: 13px;\n  height: 13px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=parameter-form.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParameterForm, { className: "ParameterForm", filePath: "src/app/components/parameter-inputs/parameter-form.ts", lineNumber: 23 });
})();

// src/app/components/json-viewer/json-viewer.ts
var _c0 = ["editorContainer"];
var _forTrack02 = ($index, $item) => $item.path;
var _forTrack12 = ($index, $item) => $item.key;
function JsonViewer_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 9, 0);
  }
}
function JsonViewer_Conditional_26_Conditional_1_For_5_Template(rf, ctx) {
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
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "th", 17);
  }
}
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_6_Template(rf, ctx) {
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
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const \u0275$index_80_r8 = \u0275\u0275nextContext(2).$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRowExpanded(\u0275$index_80_r8) ? "expand_more" : "chevron_right", " ");
  }
}
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td", 17);
    \u0275\u0275conditionalCreate(1, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_1_Conditional_1_Template, 2, 1, "span", 20);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasNestedArrays(row_r7) ? 1 : -1);
  }
}
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_For_3_Template(rf, ctx) {
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
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_9_Template(rf, ctx) {
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
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_For_2_Template(rf, ctx) {
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
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_For_2_Template, 2, 2, "td", 19, _forTrack12);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const nested_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getNestedColumns(nested_r13.data));
  }
}
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 21)(1, "td")(2, "div", 22)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "table", 23)(6, "thead")(7, "tr");
    \u0275\u0275repeaterCreate(8, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_9_Template, 2, 1, "th", null, _forTrack12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_For_12_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIndex);
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
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_For_1_Template, 13, 3, "tr", 21, _forTrack12);
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r1.getNestedArrays(row_r7));
  }
}
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 18);
    \u0275\u0275domListener("click", function JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Template_tr_click_0_listener() {
      const ctx_r5 = \u0275\u0275restoreView(_r5);
      const row_r7 = ctx_r5.$implicit;
      const \u0275$index_80_r8 = ctx_r5.$index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.hasNestedArrays(row_r7) ? ctx_r1.toggleRowExpansion(\u0275$index_80_r8) : null);
    });
    \u0275\u0275conditionalCreate(1, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_1_Template, 2, 1, "td", 17);
    \u0275\u0275repeaterCreate(2, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_For_3_Template, 2, 2, "td", 19, _forTrack12);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Conditional_4_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const \u0275$index_80_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("expandable", ctx_r1.hasNestedArrays(row_r7))("expanded", ctx_r1.isRowExpanded(\u0275$index_80_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasNestedArrays(ctx_r1.tableRows()[0]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tableColumns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRowExpanded(\u0275$index_80_r8) ? 4 : -1);
  }
}
function JsonViewer_Conditional_26_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "table")(2, "thead")(3, "tr");
    \u0275\u0275conditionalCreate(4, JsonViewer_Conditional_26_Conditional_1_Conditional_8_Conditional_4_Template, 1, 0, "th", 17);
    \u0275\u0275repeaterCreate(5, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_6_Template, 2, 1, "th", null, _forTrack12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, JsonViewer_Conditional_26_Conditional_1_Conditional_8_For_9_Template, 5, 6, null, null, \u0275\u0275repeaterTrackByIndex);
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
function JsonViewer_Conditional_26_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275text(1, "No tabular data available for this array.");
    \u0275\u0275domElementEnd();
  }
}
function JsonViewer_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 12)(1, "label");
    \u0275\u0275text(2, "Array:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "select", 13);
    \u0275\u0275domListener("change", function JsonViewer_Conditional_26_Conditional_1_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectArrayPath($event.target.value));
    });
    \u0275\u0275repeaterCreate(4, JsonViewer_Conditional_26_Conditional_1_For_5_Template, 2, 3, "option", 14, _forTrack02);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 15);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, JsonViewer_Conditional_26_Conditional_1_Conditional_8_Template, 10, 1, "div", 16)(9, JsonViewer_Conditional_26_Conditional_1_Conditional_9_Template, 2, 0, "div", 11);
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
function JsonViewer_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275text(1, "No arrays found in the response data.");
    \u0275\u0275domElementEnd();
  }
}
function JsonViewer_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, JsonViewer_Conditional_26_Conditional_1_Template, 10, 2)(2, JsonViewer_Conditional_26_Conditional_2_Template, 2, 0, "div", 11);
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
  /**
   * Export response data to XLSX.
   * Creates one worksheet per array found in the response.
   * If no arrays are found, exports the top-level object as a single row.
   */
  async exportToXlsx() {
    const d = this.data();
    if (!d)
      return;
    const XLSX = await import("./chunk-WZVIW3F7.js");
    const wb = XLSX.utils.book_new();
    const arrays = this.arrayPaths();
    if (arrays.length > 0) {
      for (const arr of arrays) {
        const flatRows = arr.data.map((row) => this.flattenObject(row));
        const ws = XLSX.utils.json_to_sheet(flatRows);
        const sheetName = this.sanitizeSheetName(arr.label);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
      }
    } else {
      const flatRows = [this.flattenObject(d)];
      const ws = XLSX.utils.json_to_sheet(flatRows);
      XLSX.utils.book_append_sheet(wb, ws, "Response");
    }
    XLSX.writeFile(wb, "response.xlsx");
  }
  /** Flatten a nested object into dot-notation keys for spreadsheet columns */
  flattenObject(obj, prefix = "") {
    const result = {};
    for (const [key, value] of Object.entries(obj || {})) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (Array.isArray(value)) {
        result[fullKey] = JSON.stringify(value);
      } else if (value && typeof value === "object") {
        Object.assign(result, this.flattenObject(value, fullKey));
      } else {
        result[fullKey] = value;
      }
    }
    return result;
  }
  /** Sanitize sheet name to comply with Excel limits (31 chars, no special chars) */
  sanitizeSheetName(name) {
    return name.replace(/[\\/*?:\[\]]/g, "_").substring(0, 31);
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
  }, inputs: { data: [1, "data"] }, decls: 27, vars: 8, consts: [["editorContainer", ""], [1, "json-viewer"], [1, "viewer-toolbar"], [1, "mode-tabs"], [1, "tab", 3, "click"], [1, "material-icons"], [1, "toolbar-actions"], [1, "btn", "btn-small", "btn-secondary", 3, "click"], [1, "viewer-content"], [1, "editor-container"], [1, "table-view"], [1, "no-data"], [1, "array-selector"], [3, "change"], [3, "value", "selected"], [1, "row-count"], [1, "table-scroll"], [1, "expand-col"], [3, "click"], [3, "title"], [1, "material-icons", "expand-icon"], [1, "nested-row"], [1, "nested-table-container"], [1, "nested-table"]], template: function JsonViewer_Template(rf, ctx) {
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
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "button", 7);
      \u0275\u0275domListener("click", function JsonViewer_Template_button_click_20_listener() {
        return ctx.exportToXlsx();
      });
      \u0275\u0275domElementStart(21, "span", 5);
      \u0275\u0275text(22, "table_view");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(23, " Export XLSX ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(24, "div", 8);
      \u0275\u0275conditionalCreate(25, JsonViewer_Conditional_25_Template, 2, 0, "div", 9);
      \u0275\u0275conditionalCreate(26, JsonViewer_Conditional_26_Template, 3, 1, "div", 10);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeMode() === "tree");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeMode() === "code");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeMode() === "table");
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.activeMode() === "tree" || ctx.activeMode() === "code" ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeMode() === "table" ? 26 : -1);
    }
  }, styles: ['\n\n.json-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border-bottom: 2px solid var(--fusion-color-border);\n  flex-shrink: 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-loose);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n  transition: color var(--fusion-transition-fast);\n  position: relative;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  color: var(--fusion-color-primary);\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  color: var(--fusion-color-primary);\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .mode-tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: calc(-1 * var(--fusion-space-tight) - 2px);\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--fusion-color-primary);\n  border-radius: 3px 3px 0 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-toolbar[_ngcontent-%COMP%]   .toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-content[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border-bottom: 1px solid var(--fusion-color-border);\n  flex-shrink: 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-sm);\n  max-width: 400px;\n  background: var(--fusion-color-bg-canvas);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .array-selector[_ngcontent-%COMP%]   .row-count[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n  margin-left: auto;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fusion-text-base);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  text-align: left;\n  white-space: nowrap;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text);\n  font-weight: 600;\n  border-bottom: 2px solid var(--fusion-color-border);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--fusion-transition-fast);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--fusion-color-bg-zebra);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expandable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expanded[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .expand-col[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  padding: 2px;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .expand-col[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--fusion-color-text-secondary);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .nested-row[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor) !important;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .nested-row[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-anchor) !important;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .nested-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-tight) var(--fusion-space-base) var(--fusion-space-tight) var(--fusion-space-loose);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-very-tight) 0;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   .nested-table[_ngcontent-%COMP%] {\n  width: auto;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   .nested-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-anchor);\n  position: static;\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .nested-table-container[_ngcontent-%COMP%]   .nested-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n}\n.json-viewer[_ngcontent-%COMP%]   .table-view[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-loose);\n  text-align: center;\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-base);\n}\n/*# sourceMappingURL=json-viewer.css.map */'], changeDetection: 0 });
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
      <button class="btn btn-small btn-secondary" (click)="exportToXlsx()">
        <span class="material-icons">table_view</span> Export XLSX
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
`, styles: ['/* src/app/components/json-viewer/json-viewer.scss */\n.json-viewer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.json-viewer .viewer-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border-bottom: 2px solid var(--fusion-color-border);\n  flex-shrink: 0;\n}\n.json-viewer .viewer-toolbar .mode-tabs {\n  display: flex;\n  gap: 0;\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-loose);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n  transition: color var(--fusion-transition-fast);\n  position: relative;\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab .material-icons {\n  font-size: 14px;\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab:hover {\n  color: var(--fusion-color-primary);\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab.active {\n  color: var(--fusion-color-primary);\n}\n.json-viewer .viewer-toolbar .mode-tabs .tab.active::after {\n  content: "";\n  position: absolute;\n  bottom: calc(-1 * var(--fusion-space-tight) - 2px);\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--fusion-color-primary);\n  border-radius: 3px 3px 0 0;\n}\n.json-viewer .viewer-toolbar .toolbar-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.json-viewer .viewer-content {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.json-viewer .viewer-content .editor-container {\n  height: 100%;\n  width: 100%;\n}\n.json-viewer .table-view {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.json-viewer .table-view .array-selector {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  background: var(--fusion-color-bg-canvas);\n  border-bottom: 1px solid var(--fusion-color-border);\n  flex-shrink: 0;\n}\n.json-viewer .table-view .array-selector label {\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.json-viewer .table-view .array-selector select {\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-sm);\n  max-width: 400px;\n  background: var(--fusion-color-bg-canvas);\n}\n.json-viewer .table-view .array-selector select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n}\n.json-viewer .table-view .array-selector .row-count {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n  margin-left: auto;\n}\n.json-viewer .table-view .table-scroll {\n  flex: 1;\n  overflow: auto;\n}\n.json-viewer .table-view .table-scroll table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fusion-text-base);\n}\n.json-viewer .table-view .table-scroll table th,\n.json-viewer .table-view .table-scroll table td {\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  text-align: left;\n  white-space: nowrap;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.json-viewer .table-view .table-scroll table th {\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text);\n  font-weight: 600;\n  border-bottom: 2px solid var(--fusion-color-border);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.json-viewer .table-view .table-scroll table td {\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.json-viewer .table-view .table-scroll table tbody tr {\n  transition: background var(--fusion-transition-fast);\n}\n.json-viewer .table-view .table-scroll table tbody tr:nth-child(odd) {\n  background: var(--fusion-color-bg-zebra);\n}\n.json-viewer .table-view .table-scroll table tbody tr:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.json-viewer .table-view .table-scroll table tbody tr.expandable {\n  cursor: pointer;\n}\n.json-viewer .table-view .table-scroll table tbody tr.expanded {\n  background: var(--fusion-color-bg-selected);\n}\n.json-viewer .table-view .table-scroll table .expand-col {\n  width: 28px;\n  text-align: center;\n  padding: 2px;\n}\n.json-viewer .table-view .table-scroll table .expand-col .expand-icon {\n  font-size: 16px;\n  color: var(--fusion-color-text-secondary);\n}\n.json-viewer .table-view .table-scroll table .nested-row {\n  background: var(--fusion-color-bg-anchor) !important;\n}\n.json-viewer .table-view .table-scroll table .nested-row:hover {\n  background: var(--fusion-color-bg-anchor) !important;\n}\n.json-viewer .table-view .table-scroll table .nested-row td {\n  padding: 0;\n}\n.json-viewer .table-view .nested-table-container {\n  padding: var(--fusion-space-tight) var(--fusion-space-base) var(--fusion-space-tight) var(--fusion-space-loose);\n}\n.json-viewer .table-view .nested-table-container h4 {\n  margin: 0 0 var(--fusion-space-very-tight) 0;\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n}\n.json-viewer .table-view .nested-table-container .nested-table {\n  width: auto;\n}\n.json-viewer .table-view .nested-table-container .nested-table th {\n  background: var(--fusion-color-bg-anchor);\n  position: static;\n}\n.json-viewer .table-view .nested-table-container .nested-table td {\n  font-size: var(--fusion-text-sm);\n}\n.json-viewer .table-view .no-data {\n  padding: var(--fusion-space-loose);\n  text-align: center;\n  color: var(--fusion-color-text-secondary);\n  font-size: var(--fusion-text-base);\n}\n/*# sourceMappingURL=json-viewer.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JsonViewer, { className: "JsonViewer", filePath: "src/app/components/json-viewer/json-viewer.ts", lineNumber: 34 });
})();

// src/app/pages/executor/executor.ts
var _forTrack03 = ($index, $item) => $item.id;
function Executor_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function Executor_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHistory());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " History ");
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.history().length);
  }
}
function Executor_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const svc_r3 = ctx.$implicit;
    \u0275\u0275property("value", svc_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(svc_r3.displayName);
  }
}
function Executor_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4, "Program:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const svc_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(svc_r4.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(svc_r4.programName);
  }
}
function Executor_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function Executor_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 18)(1, "input", 29);
    \u0275\u0275listener("change", function Executor_Conditional_29_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.includeReference.set($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Include Reference ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.includeReference());
  }
}
function Executor_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "app-parameter-form", 30);
    \u0275\u0275listener("executeRequested", function Executor_Conditional_30_Template_app_parameter_form_executeRequested_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExecute($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("service", ctx)("executing", ctx_r1.executing());
  }
}
function Executor_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Executing CCL script...");
    \u0275\u0275elementEnd()();
  }
}
function Executor_Conditional_33_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r8.executionMode === "raw" ? "XMLCcl" : "CO");
  }
}
function Executor_Conditional_33_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "app-json-viewer", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", result_r8.response);
  }
}
function Executor_Conditional_33_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h3");
    \u0275\u0275text(2, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r8.errorMessage);
  }
}
function Executor_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, Executor_Conditional_33_Conditional_7_Template, 2, 1, "span", 36);
    \u0275\u0275elementStart(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275listener("click", function Executor_Conditional_33_Template_button_click_10_listener() {
      const result_r8 = \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyParams(result_r8.rawParameterString));
    });
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 39)(14, "code", 40);
    \u0275\u0275listener("click", function Executor_Conditional_33_Template_code_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.paramsExpanded.set(!ctx_r1.paramsExpanded()));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 24);
    \u0275\u0275listener("click", function Executor_Conditional_33_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearResult());
    });
    \u0275\u0275elementStart(17, "span", 7);
    \u0275\u0275text(18, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(19, Executor_Conditional_33_Conditional_19_Template, 2, 1, "div", 41);
    \u0275\u0275conditionalCreate(20, Executor_Conditional_33_Conditional_20_Template, 5, 1, "div", 42);
  }
  if (rf & 2) {
    const result_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r8.serviceName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", result_r8.success)("error", !result_r8.success);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r8.success ? "Success" : "Failed", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r8.executionMode ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDuration(result_r8.durationMs));
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.paramsCopied() ? "Copied!" : "Copy parameters");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.paramsCopied() ? "check" : "content_copy");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("expanded", ctx_r1.paramsExpanded());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r8.rawParameterString);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(result_r8.success && result_r8.response ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r8.errorMessage ? 20 : -1);
  }
}
function Executor_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 7);
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
function Executor_Conditional_35_For_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r11.executionMode === "raw" ? "XMLCcl" : "CO");
  }
}
function Executor_Conditional_35_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function Executor_Conditional_35_For_15_Template_div_click_0_listener() {
      const entry_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.loadFromHistory(entry_r11);
      return \u0275\u0275resetView(ctx_r1.toggleHistory());
    });
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275element(2, "span", 52);
    \u0275\u0275elementStart(3, "div", 53)(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, Executor_Conditional_35_For_15_Conditional_6_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 57)(10, "span", 58);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 59);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const entry_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("success", entry_r11.success)("error", !entry_r11.success)("active", ((tmp_14_0 = ctx_r1.currentResult()) == null ? null : tmp_14_0.id) === entry_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("success", entry_r11.success)("error", !entry_r11.success);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", entry_r11.serviceName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r11.executionMode ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r11.rawParameterString);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(entry_r11.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDuration(entry_r11.durationMs));
  }
}
function Executor_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function Executor_Conditional_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHistory());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46)(3, "h3");
    \u0275\u0275text(4, "Execution History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 47)(6, "button", 24);
    \u0275\u0275listener("click", function Executor_Conditional_35_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearHistory());
    });
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, "delete_sweep");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Clear ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 24);
    \u0275\u0275listener("click", function Executor_Conditional_35_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleHistory());
    });
    \u0275\u0275elementStart(11, "span", 7);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 48);
    \u0275\u0275repeaterCreate(14, Executor_Conditional_35_For_15_Template, 14, 15, "div", 49, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.history());
  }
}
function Executor_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-help-modal", 60);
    \u0275\u0275listener("closeRequested", function Executor_Conditional_36_Template_app_help_modal_closeRequested_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.helpOpen.set(false));
    });
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Process Flow");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 61);
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Service Selector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "The ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " dropdown lists all registered CCL web services. Select a service to load its parameter form.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
    \u0275\u0275text(14, "Program name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " is the actual CCL program that will be called");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li")(17, "strong");
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " explains what data the service returns");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "h2");
    \u0275\u0275text(21, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Each service defines positional parameters. The form renders the appropriate input for each one.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h3");
    \u0275\u0275text(25, "Field Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "table")(27, "thead")(28, "tr")(29, "th");
    \u0275\u0275text(30, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody")(34, "tr")(35, "td")(36, "strong");
    \u0275\u0275text(37, "Text");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39, "Free-text input. Type any string value.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "tr")(41, "td")(42, "strong");
    \u0275\u0275text(43, "Select");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45, "Dropdown with predefined options.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "tr")(47, "td")(48, "strong");
    \u0275\u0275text(49, "DateTime");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "td");
    \u0275\u0275text(51, "Date and time picker. Quick presets available (Today Start, Yesterday Start, Now).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "tr")(53, "td")(54, "strong");
    \u0275\u0275text(55, "Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "Date-only picker with presets.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "tr")(59, "td")(60, "strong");
    \u0275\u0275text(61, "Time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63, "Time-only picker with presets.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "tr")(65, "td")(66, "strong");
    \u0275\u0275text(67, "Number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69, "Numeric input. Sent unquoted to CCL (no ^caret^ wrapping).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "tr")(71, "td")(72, "strong");
    \u0275\u0275text(73, "Hidden");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "td");
    \u0275\u0275text(75, "Not shown in the form. Uses its default value automatically.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "h3");
    \u0275\u0275text(77, "Required vs Optional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ul")(79, "li");
    \u0275\u0275text(80, "Fields marked with a red ");
    \u0275\u0275elementStart(81, "strong");
    \u0275\u0275text(82, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, " are required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "li");
    \u0275\u0275text(85, "Optional fields can be left empty \u2014 sent as ");
    \u0275\u0275elementStart(86, "code");
    \u0275\u0275text(87, "^^");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " (empty carets) to CCL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "li");
    \u0275\u0275text(90, "Default values are pre-populated from the parameter library or service definition");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "h3");
    \u0275\u0275text(92, "How Parameters Are Sent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p");
    \u0275\u0275text(94, "In ");
    \u0275\u0275elementStart(95, "strong");
    \u0275\u0275text(96, "Raw mode");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, ", parameters are assembled into a positional string:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "pre")(99, "code");
    \u0275\u0275text(100, "^MINE^,^ClinicalDoc^,^^,^CMC^,^19-MAR-2026 00:00:00^");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "ul")(102, "li");
    \u0275\u0275text(103, "String values are wrapped in ");
    \u0275\u0275elementStart(104, "code");
    \u0275\u0275text(105, "^carets^");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "li");
    \u0275\u0275text(107, "Numeric values are sent bare: ");
    \u0275\u0275elementStart(108, "code");
    \u0275\u0275text(109, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, " not ");
    \u0275\u0275elementStart(111, "code");
    \u0275\u0275text(112, "^1^");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "li");
    \u0275\u0275text(114, "Empty optional parameters are sent as ");
    \u0275\u0275elementStart(115, "code");
    \u0275\u0275text(116, "^^");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "li");
    \u0275\u0275text(118, "Order matters \u2014 parameters are sorted by position number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(119, "p");
    \u0275\u0275text(120, "In ");
    \u0275\u0275elementStart(121, "strong");
    \u0275\u0275text(122, "Clinical Office mode");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, ", parameters are sent as named key-value pairs.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "h2");
    \u0275\u0275text(125, "Execution Modes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "h3");
    \u0275\u0275text(127, "Raw Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "p");
    \u0275\u0275text(129, "Uses the native ");
    \u0275\u0275elementStart(130, "code");
    \u0275\u0275text(131, "XMLCclRequest");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, " object in PowerChart. Sends the positional parameter string exactly as CCL expects it.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "p")(134, "strong");
    \u0275\u0275text(135, "Use Raw mode when:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "ul")(137, "li");
    \u0275\u0275text(138, "Testing any CCL script for the first time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "li");
    \u0275\u0275text(140, "You need exact control over the parameter string");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "li");
    \u0275\u0275text(142, "The CCL script was written for positional prompt invocation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "h3");
    \u0275\u0275text(144, "Clinical Office Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "p");
    \u0275\u0275text(146, "Uses the Clinical Office ");
    \u0275\u0275elementStart(147, "code");
    \u0275\u0275text(148, "CustomService");
    \u0275\u0275elementEnd();
    \u0275\u0275text(149, " framework with automatic JSON parsing, error handling, and Reference Service support.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "p")(151, "strong");
    \u0275\u0275text(152, "Use Clinical Office mode when:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "ul")(154, "li");
    \u0275\u0275text(155, "You want to collect Reference Service metadata about response fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "li");
    \u0275\u0275text(157, "The CCL script supports Clinical Office named parameter mapping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "li");
    \u0275\u0275text(159, "You need patient context binding (personId/encntrId)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "p")(161, "strong");
    \u0275\u0275text(162, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, " The Clinical Office button is disabled if the framework is not initialized.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "h3");
    \u0275\u0275text(165, "Include Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "p");
    \u0275\u0275text(167, "When checked (Clinical Office mode only), adds ");
    \u0275\u0275elementStart(168, "code");
    \u0275\u0275text(169, "reference: true");
    \u0275\u0275elementEnd();
    \u0275\u0275text(170, " to the payload. This tells the CCL script to return metadata about its fields. Reference data appears in the MPage log.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "h2");
    \u0275\u0275text(172, "Load Reference Button");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "p");
    \u0275\u0275text(174, "Loads Reference Service data for all built-in services (Address, Allergy, Diagnosis, etc.). Results are logged to the ");
    \u0275\u0275elementStart(175, "strong");
    \u0275\u0275text(176, "MPage Log");
    \u0275\u0275elementEnd();
    \u0275\u0275text(177, " panel at the bottom of the screen. Does not affect normal execution.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "h2");
    \u0275\u0275text(179, "Results Panel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "h3");
    \u0275\u0275text(181, "Status Indicators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "ul")(183, "li")(184, "strong");
    \u0275\u0275text(185, "Success");
    \u0275\u0275elementEnd();
    \u0275\u0275text(186, " (green) \u2014 CCL script returned data successfully");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "li")(188, "strong");
    \u0275\u0275text(189, "Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(190, " (red) \u2014 An error occurred");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(191, "h3");
    \u0275\u0275text(192, "JSON Viewer Modes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "table")(194, "thead")(195, "tr")(196, "th");
    \u0275\u0275text(197, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "th");
    \u0275\u0275text(199, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(200, "tbody")(201, "tr")(202, "td")(203, "strong");
    \u0275\u0275text(204, "Tree");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(205, "td");
    \u0275\u0275text(206, "Interactive expandable tree view. Search and copy paths.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(207, "tr")(208, "td")(209, "strong");
    \u0275\u0275text(210, "Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(211, "td");
    \u0275\u0275text(212, "Syntax-highlighted raw JSON. Best for copying the full response.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "tr")(214, "td")(215, "strong");
    \u0275\u0275text(216, "Table");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(217, "td");
    \u0275\u0275text(218, "Auto-detects arrays and renders as tables. Nested arrays are expandable.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(219, "h2");
    \u0275\u0275text(220, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "p");
    \u0275\u0275text(222, "Click ");
    \u0275\u0275elementStart(223, "strong");
    \u0275\u0275text(224, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275text(225, " to open the execution history drawer (last 50 executions).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "ul")(227, "li")(228, "strong");
    \u0275\u0275text(229, "Green dot");
    \u0275\u0275elementEnd();
    \u0275\u0275text(230, " = successful execution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "li")(232, "strong");
    \u0275\u0275text(233, "Red dot");
    \u0275\u0275elementEnd();
    \u0275\u0275text(234, " = failed execution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "li")(236, "strong");
    \u0275\u0275text(237, "Mode badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(238, ' = "Raw" or "CO"');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(239, "li");
    \u0275\u0275text(240, "Click any entry to reload its result");
    \u0275\u0275elementEnd()()();
  }
}
var Executor = class _Executor {
  registry = inject(ServiceRegistryService);
  rawExecutor = inject(CclExecutorService);
  coExecutor = inject(ClinicalOfficeExecutorService);
  referenceService = inject(ReferenceService);
  MPage = inject(MPageService);
  /** All available services */
  services = this.registry.allServices;
  /** Currently selected service ID */
  selectedServiceId = signal("cov_doc_activity_extract", ...ngDevMode ? [{ debugName: "selectedServiceId" }] : []);
  /** Resolved selected service */
  selectedService = computed(() => this.registry.getService(this.selectedServiceId()), ...ngDevMode ? [{ debugName: "selectedService" }] : []);
  /** Execution mode: raw XMLCclRequest or Clinical Office CustomService */
  executionMode = signal("raw", ...ngDevMode ? [{ debugName: "executionMode" }] : []);
  /** Whether to include reference data in Clinical Office mode */
  includeReference = signal(false, ...ngDevMode ? [{ debugName: "includeReference" }] : []);
  /** Whether reference data has been loaded */
  referenceLoaded = signal(false, ...ngDevMode ? [{ debugName: "referenceLoaded" }] : []);
  /**
   * Whether the Clinical Office initialization check has timed out.
   * After 5 seconds, if serviceReady is still false, we assume standalone mode.
   */
  standaloneMode = signal(false, ...ngDevMode ? [{ debugName: "standaloneMode" }] : []);
  /** Tooltip text for the Clinical Office button when disabled */
  coButtonTooltip = computed(() => {
    if (this.MPage.serviceReady)
      return "Execute via Clinical Office CustomService";
    if (this.standaloneMode())
      return "Standalone mode \u2014 Clinical Office unavailable";
    return "Waiting for Clinical Office...";
  }, ...ngDevMode ? [{ debugName: "coButtonTooltip" }] : []);
  /** Whether a script is currently executing */
  executing = computed(() => this.executionMode() === "raw" ? this.rawExecutor.executing() : this.coExecutor.executing(), ...ngDevMode ? [{ debugName: "executing" }] : []);
  /** Current execution result */
  currentResult = signal(null, ...ngDevMode ? [{ debugName: "currentResult" }] : []);
  /** Execution history (merged from both engines) */
  history = computed(() => {
    const raw = this.rawExecutor.history();
    const co = this.coExecutor.history();
    return [...raw, ...co].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 50);
  }, ...ngDevMode ? [{ debugName: "history" }] : []);
  /** Whether the history drawer is open */
  historyOpen = signal(false, ...ngDevMode ? [{ debugName: "historyOpen" }] : []);
  /** Whether the help modal is open */
  helpOpen = signal(false, ...ngDevMode ? [{ debugName: "helpOpen" }] : []);
  /** Whether the params string is expanded */
  paramsExpanded = signal(false, ...ngDevMode ? [{ debugName: "paramsExpanded" }] : []);
  /** Whether params were just copied */
  paramsCopied = signal(false, ...ngDevMode ? [{ debugName: "paramsCopied" }] : []);
  ngOnInit() {
    if (!this.MPage.serviceReady) {
      const startTime = Date.now();
      const interval = setInterval(() => {
        if (this.MPage.serviceReady) {
          clearInterval(interval);
        } else if (Date.now() - startTime > 5e3) {
          clearInterval(interval);
          this.standaloneMode.set(true);
        }
      }, 500);
    }
  }
  /** Select a service */
  selectService(id) {
    this.selectedServiceId.set(id);
    this.currentResult.set(null);
  }
  /** Set execution mode */
  setMode(mode) {
    this.executionMode.set(mode);
    if (mode === "raw") {
      this.includeReference.set(false);
    }
  }
  /** Execute the selected service with given parameter values */
  async onExecute(parameterValues) {
    const service = this.selectedService();
    if (!service)
      return;
    let result;
    if (this.executionMode() === "clinical-office") {
      result = await this.coExecutor.execute(service, parameterValues, {
        reference: this.includeReference()
      });
    } else {
      result = await this.rawExecutor.execute(service, parameterValues);
    }
    this.currentResult.set(result);
  }
  /** Load Reference Service data and log to MPage log */
  loadReference() {
    this.referenceService.loadCoreReference();
    this.referenceLoaded.set(true);
    const keys = this.referenceService.references();
    this.MPage.putLog(`Reference Service loaded. Keys: [${keys.join(", ")}]`);
    for (const key of keys) {
      const ref = this.referenceService.get(key);
      this.MPage.putLog(`Reference: ${key}
${JSON.stringify(ref, null, 2)}`);
    }
    this.MPage.putLog(`Reference loading complete. Total keys: ${keys.length}`);
  }
  /** Load a result from history */
  loadFromHistory(result) {
    this.currentResult.set(result);
  }
  /** Clear the current result */
  clearResult() {
    this.currentResult.set(null);
  }
  /** Toggle the history drawer */
  toggleHistory() {
    this.historyOpen.update((v) => !v);
  }
  /** Clear all history */
  clearHistory() {
    this.rawExecutor.clearHistory();
    this.coExecutor.clearHistory();
    this.historyOpen.set(false);
  }
  /** Copy parameter string to clipboard */
  copyParams(params) {
    navigator.clipboard.writeText(params);
    this.paramsCopied.set(true);
    setTimeout(() => this.paramsCopied.set(false), 2e3);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Executor, selectors: [["app-executor"]], decls: 37, vars: 18, consts: [[1, "executor-layout"], [1, "left-panel"], [1, "left-panel-scroll"], [1, "service-selector"], [1, "service-selector-header"], [1, "service-selector-actions"], ["title", "Help", 1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "material-icons"], [1, "btn", "btn-ghost", "btn-small", 3, "click", "disabled"], [1, "btn", "btn-ghost", "btn-small"], [3, "change", "value"], [3, "value"], [1, "mode-toggle-section"], [1, "mode-label"], [1, "mode-toggle"], [1, "btn", "btn-small", 3, "click"], [1, "btn", "btn-small", 3, "click", "disabled", "title"], [1, "co-init-spinner"], [1, "reference-checkbox"], [1, "parameter-section"], [1, "status-message", "loading"], [1, "right-panel"], [1, "empty-state"], ["title", "Executor Help"], [1, "btn", "btn-ghost", "btn-small", 3, "click"], [1, "history-count"], [1, "service-description"], [1, "program-name"], [1, "label"], ["type", "checkbox", 3, "change", "checked"], [3, "executeRequested", "service", "executing"], [1, "spinner"], [1, "result-header"], [1, "result-info"], [1, "result-meta"], [1, "result-status"], [1, "result-mode"], [1, "result-duration"], [1, "btn", "btn-ghost", "btn-small", 3, "click", "title"], [1, "result-params-row"], [1, "result-params", 3, "click"], [1, "result-viewer"], [1, "error-panel"], [3, "data"], [1, "history-overlay", 3, "click"], [1, "history-drawer"], [1, "drawer-header"], [1, "drawer-actions"], [1, "drawer-body"], [1, "history-item", 3, "success", "error", "active"], [1, "history-item", 3, "click"], [1, "history-left"], [1, "history-status-dot"], [1, "history-info"], [1, "history-name"], [1, "history-mode-badge"], [1, "history-params"], [1, "history-right"], [1, "history-time"], [1, "history-duration"], ["title", "Executor Help", 3, "closeRequested"], ["src", "https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IEUgYXMgRXhlY3V0b3IKICAgIHBhcnRpY2lwYW50IFMgYXMgU2VydmljZSBSZWdpc3RyeQogICAgcGFydGljaXBhbnQgUCBhcyBQYXJhbWV0ZXIgTGlicmFyeQogICAgcGFydGljaXBhbnQgQ0NMIGFzIENDTCBFbmdpbmUKICAgIHBhcnRpY2lwYW50IEggYXMgSGlzdG9yeQoKICAgIFUtPj5FOiBTZWxlY3QgU2VydmljZQogICAgRS0+PlM6IGdldFNlcnZpY2UoaWQpCiAgICBTLS0+PkU6IFNlcnZpY2UgRGVmaW5pdGlvbgogICAgRS0+PlA6IFJlc29sdmUgcGFyYW1ldGVyIHR5cGVzCiAgICBQLS0+PkU6IFBhcmFtZXRlciBmb3JtcyByZW5kZXJlZAoKICAgIFUtPj5FOiBGaWxsIHBhcmFtZXRlcnMKICAgIFUtPj5FOiBDbGljayBFeGVjdXRlCgogICAgYWx0IFJhdyBNb2RlCiAgICAgICAgRS0+PkNDTDogWE1MQ2NsUmVxdWVzdChwcm9ncmFtLCBecGFyYW1zXikKICAgIGVsc2UgQ2xpbmljYWwgT2ZmaWNlIE1vZGUKICAgICAgICBFLT4+Q0NMOiBDdXN0b21TZXJ2aWNlLmxvYWQocGF5bG9hZCkKICAgIGVuZAoKICAgIENDTC0tPj5FOiBKU09OIFJlc3BvbnNlCiAgICBFLT4+SDogU2F2ZSB0byBoaXN0b3J5IChsb2NhbFN0b3JhZ2UpCiAgICBFLS0+PlU6IERpc3BsYXkgaW4gSlNPTiBWaWV3ZXIK", "alt", "Executor process flow diagram", 2, "max-width", "100%", "height", "auto", "margin-bottom", "15px"]], template: function Executor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      \u0275\u0275text(6, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function Executor_Template_button_click_8_listener() {
        return ctx.helpOpen.set(true);
      });
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10, "help_outline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function Executor_Template_button_click_11_listener() {
        return ctx.loadReference();
      });
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13, "data_object");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, Executor_Conditional_15_Template, 6, 1, "button", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "select", 10);
      \u0275\u0275listener("change", function Executor_Template_select_change_16_listener($event) {
        return ctx.selectService($event.target.value);
      });
      \u0275\u0275repeaterCreate(17, Executor_For_18_Template, 2, 2, "option", 11, _forTrack03);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, Executor_Conditional_19_Template, 7, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
      \u0275\u0275text(22, "Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
      \u0275\u0275listener("click", function Executor_Template_button_click_24_listener() {
        return ctx.setMode("raw");
      });
      \u0275\u0275text(25, " XMLCclRequest ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 16);
      \u0275\u0275listener("click", function Executor_Template_button_click_26_listener() {
        return ctx.setMode("clinical-office");
      });
      \u0275\u0275text(27, " Clinical Office ");
      \u0275\u0275conditionalCreate(28, Executor_Conditional_28_Template, 1, 0, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(29, Executor_Conditional_29_Template, 3, 1, "label", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, Executor_Conditional_30_Template, 2, 2, "div", 19);
      \u0275\u0275conditionalCreate(31, Executor_Conditional_31_Template, 4, 0, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 21);
      \u0275\u0275conditionalCreate(33, Executor_Conditional_33_Template, 21, 15)(34, Executor_Conditional_34_Template, 7, 0, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(35, Executor_Conditional_35_Template, 16, 0);
      \u0275\u0275conditionalCreate(36, Executor_Conditional_36_Template, 241, 0, "app-help-modal", 23);
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_12_0;
      let tmp_14_0;
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.referenceLoaded());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.referenceLoaded() ? "Reference Loaded" : "Load Reference", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.history().length > 0 ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.selectedServiceId());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.services());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_5_0 = ctx.selectedService()) ? 19 : -1, tmp_5_0);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-selected", ctx.executionMode() === "raw");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-selected", ctx.executionMode() === "clinical-office");
      \u0275\u0275property("disabled", !ctx.MPage.serviceReady)("title", ctx.coButtonTooltip());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.MPage.serviceReady && !ctx.standaloneMode() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.executionMode() === "clinical-office" ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_12_0 = ctx.selectedService()) ? 30 : -1, tmp_12_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.executing() ? 31 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_14_0 = ctx.currentResult()) ? 33 : 34, tmp_14_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.historyOpen() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.helpOpen() ? 36 : -1);
    }
  }, dependencies: [ParameterForm, JsonViewer, HelpModal], styles: ['@charset "UTF-8";\n\n\n\n.executor-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.left-panel[_ngcontent-%COMP%] {\n  width: 340px;\n  min-width: 300px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.left-panel[_ngcontent-%COMP%]   .left-panel-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .service-selector-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-tight);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .service-selector-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .history-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  background: var(--fusion-color-bg-selected);\n  color: var(--fusion-color-primary);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  padding-right: 32px;\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .service-description[_ngcontent-%COMP%] {\n  margin: var(--fusion-space-tight) 0 var(--fusion-space-very-tight);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.left-panel[_ngcontent-%COMP%]   .service-selector[_ngcontent-%COMP%]   .program-name[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-primary);\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .mode-label[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-radius: var(--fusion-border-radius) 0 0 var(--fusion-border-radius);\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 var(--fusion-border-radius) var(--fusion-border-radius) 0;\n  border-left: none;\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .mode-toggle[_ngcontent-%COMP%]   .btn.is-selected[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n  border-color: var(--fusion-color-primary);\n  color: var(--fusion-color-primary);\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .co-init-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 1.5px solid var(--fusion-color-border);\n  border-top-color: var(--fusion-color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .reference-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-very-tight);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  cursor: pointer;\n  margin-left: auto;\n}\n.left-panel[_ngcontent-%COMP%]   .mode-toggle-section[_ngcontent-%COMP%]   .reference-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: var(--fusion-color-primary);\n}\n.left-panel[_ngcontent-%COMP%]   .parameter-section[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.left-panel[_ngcontent-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-tight) var(--fusion-space-loose);\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.left-panel[_ngcontent-%COMP%]   .status-message.loading[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.left-panel[_ngcontent-%COMP%]   .status-message.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--fusion-color-border);\n  border-top-color: var(--fusion-color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.right-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: var(--fusion-color-bg-anchor);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-canvas);\n  flex-shrink: 0;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n  font-size: var(--fusion-text-sm);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-status[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-weight: 600;\n  font-size: var(--fusion-text-sm);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-status.success[_ngcontent-%COMP%] {\n  background: #e6f4ea;\n  color: #1e6e35;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-status.error[_ngcontent-%COMP%] {\n  background: #fde8ea;\n  color: #8b0013;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-mode[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]   .result-duration[_ngcontent-%COMP%] {\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-params-row[_ngcontent-%COMP%] {\n  margin-top: var(--fusion-space-very-tight);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-params-row[_ngcontent-%COMP%]   .result-params[_ngcontent-%COMP%] {\n  display: block;\n  background: var(--fusion-color-bg-anchor);\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all var(--fusion-transition-fast);\n  word-break: break-all;\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-params-row[_ngcontent-%COMP%]   .result-params[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-text);\n}\n.right-panel[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-params-row[_ngcontent-%COMP%]   .result-params.expanded[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  overflow: visible;\n  text-overflow: unset;\n}\n.right-panel[_ngcontent-%COMP%]   .result-viewer[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.right-panel[_ngcontent-%COMP%]   .error-panel[_ngcontent-%COMP%] {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  margin: var(--fusion-space-base);\n  background: #fde8ea;\n  border-left: 4px solid var(--fusion-color-error);\n  border-radius: var(--fusion-border-radius);\n}\n.right-panel[_ngcontent-%COMP%]   .error-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: #8b0013;\n}\n.right-panel[_ngcontent-%COMP%]   .error-panel[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  color: #8b0013;\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  padding: var(--fusion-space-loose);\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.right-panel[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.history-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  animation: _ngcontent-%COMP%_fadeIn var(--fusion-transition-fast);\n}\n.history-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 420px;\n  max-width: 90vw;\n  background: var(--fusion-color-bg-canvas);\n  box-shadow: var(--fusion-shadow-popup);\n  z-index: 101;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideIn var(--fusion-transition-slow);\n}\n.history-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.history-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.history-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .drawer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.history-drawer[_ngcontent-%COMP%]   .drawer-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-tight);\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base);\n  border-bottom: 1px solid var(--fusion-color-border);\n  cursor: pointer;\n  transition: background var(--fusion-transition-fast);\n  gap: var(--fusion-space-base);\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item.active[_ngcontent-%COMP%] {\n  background: var(--fusion-color-bg-selected);\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--fusion-space-tight);\n  min-width: 0;\n  flex: 1;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-status-dot.success[_ngcontent-%COMP%] {\n  background: var(--fusion-color-success);\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-status-dot.error[_ngcontent-%COMP%] {\n  background: var(--fusion-color-error);\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-name[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-name[_ngcontent-%COMP%]   .history-mode-badge[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n  margin-left: var(--fusion-space-very-tight);\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-params[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 240px;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-time[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n  white-space: nowrap;\n}\n.history-drawer[_ngcontent-%COMP%]   .history-item[_ngcontent-%COMP%]   .history-duration[_ngcontent-%COMP%] {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=executor.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Executor, [{
    type: Component,
    args: [{ selector: "app-executor", standalone: true, imports: [ParameterForm, JsonViewer, HelpModal], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="executor-layout">
  <!-- Left Panel: Service Selection + Parameters -->
  <div class="left-panel">
    <div class="left-panel-scroll">
      <div class="service-selector">
        <div class="service-selector-header">
          <h2>Service</h2>
          <div class="service-selector-actions">
            <button class="btn btn-ghost btn-small" (click)="helpOpen.set(true)" title="Help">
              <span class="material-icons">help_outline</span>
            </button>
            <button class="btn btn-ghost btn-small"
              [disabled]="referenceLoaded()"
              (click)="loadReference()">
              <span class="material-icons">data_object</span>
              {{ referenceLoaded() ? 'Reference Loaded' : 'Load Reference' }}
            </button>
            @if (history().length > 0) {
              <button class="btn btn-ghost btn-small" (click)="toggleHistory()">
                <span class="material-icons">history</span>
                History
                <span class="history-count">{{ history().length }}</span>
              </button>
            }
          </div>
        </div>
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

      <!-- Execution Mode Toggle -->
      <div class="mode-toggle-section">
        <span class="mode-label">Mode</span>
        <div class="mode-toggle">
          <button class="btn btn-small"
            [class.is-selected]="executionMode() === 'raw'"
            (click)="setMode('raw')">
            XMLCclRequest
          </button>
          <button class="btn btn-small"
            [class.is-selected]="executionMode() === 'clinical-office'"
            [disabled]="!MPage.serviceReady"
            [title]="coButtonTooltip()"
            (click)="setMode('clinical-office')">
            Clinical Office
            @if (!MPage.serviceReady && !standaloneMode()) {
              <span class="co-init-spinner"></span>
            }
          </button>
        </div>
        @if (executionMode() === 'clinical-office') {
          <label class="reference-checkbox">
            <input type="checkbox"
              [checked]="includeReference()"
              (change)="includeReference.set($any($event.target).checked)" />
            Include Reference
          </label>
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
    </div>
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
            @if (result.executionMode) {
              <span class="result-mode">{{ result.executionMode === 'raw' ? 'XMLCcl' : 'CO' }}</span>
            }
            <span class="result-duration">{{ formatDuration(result.durationMs) }}</span>
            <button class="btn btn-ghost btn-small" (click)="copyParams(result.rawParameterString)" [title]="paramsCopied() ? 'Copied!' : 'Copy parameters'">
              <span class="material-icons">{{ paramsCopied() ? 'check' : 'content_copy' }}</span>
            </button>
          </div>
          <div class="result-params-row">
            <code class="result-params" [class.expanded]="paramsExpanded()" (click)="paramsExpanded.set(!paramsExpanded())">{{ result.rawParameterString }}</code>
          </div>
        </div>
        <button class="btn btn-ghost btn-small" (click)="clearResult()">
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

<!-- History Drawer -->
@if (historyOpen()) {
  <div class="history-overlay" (click)="toggleHistory()"></div>
  <div class="history-drawer">
    <div class="drawer-header">
      <h3>Execution History</h3>
      <div class="drawer-actions">
        <button class="btn btn-ghost btn-small" (click)="clearHistory()">
          <span class="material-icons">delete_sweep</span> Clear
        </button>
        <button class="btn btn-ghost btn-small" (click)="toggleHistory()">
          <span class="material-icons">close</span>
        </button>
      </div>
    </div>
    <div class="drawer-body">
      @for (entry of history(); track entry.id; let i = $index) {
        <div
          class="history-item"
          [class.success]="entry.success"
          [class.error]="!entry.success"
          [class.active]="currentResult()?.id === entry.id"
          (click)="loadFromHistory(entry); toggleHistory()">
          <div class="history-left">
            <span class="history-status-dot" [class.success]="entry.success" [class.error]="!entry.success"></span>
            <div class="history-info">
              <span class="history-name">
                {{ entry.serviceName }}
                @if (entry.executionMode) {
                  <span class="history-mode-badge">{{ entry.executionMode === 'raw' ? 'XMLCcl' : 'CO' }}</span>
                }
              </span>
              <code class="history-params">{{ entry.rawParameterString }}</code>
            </div>
          </div>
          <div class="history-right">
            <span class="history-time">{{ formatTime(entry.timestamp) }}</span>
            <span class="history-duration">{{ formatDuration(entry.durationMs) }}</span>
          </div>
        </div>
      }
    </div>
  </div>
}

<!-- Help Modal -->
@if (helpOpen()) {
  <app-help-modal title="Executor Help" (closeRequested)="helpOpen.set(false)">
    <h2>Process Flow</h2>
    <img src="https://mermaid.ink/img/c2VxdWVuY2VEaWFncmFtCiAgICBwYXJ0aWNpcGFudCBVIGFzIFVzZXIKICAgIHBhcnRpY2lwYW50IEUgYXMgRXhlY3V0b3IKICAgIHBhcnRpY2lwYW50IFMgYXMgU2VydmljZSBSZWdpc3RyeQogICAgcGFydGljaXBhbnQgUCBhcyBQYXJhbWV0ZXIgTGlicmFyeQogICAgcGFydGljaXBhbnQgQ0NMIGFzIENDTCBFbmdpbmUKICAgIHBhcnRpY2lwYW50IEggYXMgSGlzdG9yeQoKICAgIFUtPj5FOiBTZWxlY3QgU2VydmljZQogICAgRS0+PlM6IGdldFNlcnZpY2UoaWQpCiAgICBTLS0+PkU6IFNlcnZpY2UgRGVmaW5pdGlvbgogICAgRS0+PlA6IFJlc29sdmUgcGFyYW1ldGVyIHR5cGVzCiAgICBQLS0+PkU6IFBhcmFtZXRlciBmb3JtcyByZW5kZXJlZAoKICAgIFUtPj5FOiBGaWxsIHBhcmFtZXRlcnMKICAgIFUtPj5FOiBDbGljayBFeGVjdXRlCgogICAgYWx0IFJhdyBNb2RlCiAgICAgICAgRS0+PkNDTDogWE1MQ2NsUmVxdWVzdChwcm9ncmFtLCBecGFyYW1zXikKICAgIGVsc2UgQ2xpbmljYWwgT2ZmaWNlIE1vZGUKICAgICAgICBFLT4+Q0NMOiBDdXN0b21TZXJ2aWNlLmxvYWQocGF5bG9hZCkKICAgIGVuZAoKICAgIENDTC0tPj5FOiBKU09OIFJlc3BvbnNlCiAgICBFLT4+SDogU2F2ZSB0byBoaXN0b3J5IChsb2NhbFN0b3JhZ2UpCiAgICBFLS0+PlU6IERpc3BsYXkgaW4gSlNPTiBWaWV3ZXIK" alt="Executor process flow diagram" style="max-width: 100%; height: auto; margin-bottom: 15px;" />

    <h2>Service Selector</h2>
    <p>The <strong>Service</strong> dropdown lists all registered CCL web services. Select a service to load its parameter form.</p>
    <ul>
      <li><strong>Program name</strong> is the actual CCL program that will be called</li>
      <li><strong>Description</strong> explains what data the service returns</li>
    </ul>

    <h2>Parameters</h2>
    <p>Each service defines positional parameters. The form renders the appropriate input for each one.</p>

    <h3>Field Types</h3>
    <table>
      <thead><tr><th>Type</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Text</strong></td><td>Free-text input. Type any string value.</td></tr>
        <tr><td><strong>Select</strong></td><td>Dropdown with predefined options.</td></tr>
        <tr><td><strong>DateTime</strong></td><td>Date and time picker. Quick presets available (Today Start, Yesterday Start, Now).</td></tr>
        <tr><td><strong>Date</strong></td><td>Date-only picker with presets.</td></tr>
        <tr><td><strong>Time</strong></td><td>Time-only picker with presets.</td></tr>
        <tr><td><strong>Number</strong></td><td>Numeric input. Sent unquoted to CCL (no ^caret^ wrapping).</td></tr>
        <tr><td><strong>Hidden</strong></td><td>Not shown in the form. Uses its default value automatically.</td></tr>
      </tbody>
    </table>

    <h3>Required vs Optional</h3>
    <ul>
      <li>Fields marked with a red <strong>*</strong> are required</li>
      <li>Optional fields can be left empty \u2014 sent as <code>^^</code> (empty carets) to CCL</li>
      <li>Default values are pre-populated from the parameter library or service definition</li>
    </ul>

    <h3>How Parameters Are Sent</h3>
    <p>In <strong>Raw mode</strong>, parameters are assembled into a positional string:</p>
    <pre><code>^MINE^,^ClinicalDoc^,^^,^CMC^,^19-MAR-2026 00:00:00^</code></pre>
    <ul>
      <li>String values are wrapped in <code>^carets^</code></li>
      <li>Numeric values are sent bare: <code>1</code> not <code>^1^</code></li>
      <li>Empty optional parameters are sent as <code>^^</code></li>
      <li>Order matters \u2014 parameters are sorted by position number</li>
    </ul>
    <p>In <strong>Clinical Office mode</strong>, parameters are sent as named key-value pairs.</p>

    <h2>Execution Modes</h2>

    <h3>Raw Mode</h3>
    <p>Uses the native <code>XMLCclRequest</code> object in PowerChart. Sends the positional parameter string exactly as CCL expects it.</p>
    <p><strong>Use Raw mode when:</strong></p>
    <ul>
      <li>Testing any CCL script for the first time</li>
      <li>You need exact control over the parameter string</li>
      <li>The CCL script was written for positional prompt invocation</li>
    </ul>

    <h3>Clinical Office Mode</h3>
    <p>Uses the Clinical Office <code>CustomService</code> framework with automatic JSON parsing, error handling, and Reference Service support.</p>
    <p><strong>Use Clinical Office mode when:</strong></p>
    <ul>
      <li>You want to collect Reference Service metadata about response fields</li>
      <li>The CCL script supports Clinical Office named parameter mapping</li>
      <li>You need patient context binding (personId/encntrId)</li>
    </ul>
    <p><strong>Note:</strong> The Clinical Office button is disabled if the framework is not initialized.</p>

    <h3>Include Reference</h3>
    <p>When checked (Clinical Office mode only), adds <code>reference: true</code> to the payload. This tells the CCL script to return metadata about its fields. Reference data appears in the MPage log.</p>

    <h2>Load Reference Button</h2>
    <p>Loads Reference Service data for all built-in services (Address, Allergy, Diagnosis, etc.). Results are logged to the <strong>MPage Log</strong> panel at the bottom of the screen. Does not affect normal execution.</p>

    <h2>Results Panel</h2>

    <h3>Status Indicators</h3>
    <ul>
      <li><strong>Success</strong> (green) \u2014 CCL script returned data successfully</li>
      <li><strong>Failed</strong> (red) \u2014 An error occurred</li>
    </ul>

    <h3>JSON Viewer Modes</h3>
    <table>
      <thead><tr><th>Mode</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Tree</strong></td><td>Interactive expandable tree view. Search and copy paths.</td></tr>
        <tr><td><strong>Code</strong></td><td>Syntax-highlighted raw JSON. Best for copying the full response.</td></tr>
        <tr><td><strong>Table</strong></td><td>Auto-detects arrays and renders as tables. Nested arrays are expandable.</td></tr>
      </tbody>
    </table>

    <h2>History</h2>
    <p>Click <strong>History</strong> to open the execution history drawer (last 50 executions).</p>
    <ul>
      <li><strong>Green dot</strong> = successful execution</li>
      <li><strong>Red dot</strong> = failed execution</li>
      <li><strong>Mode badge</strong> = "Raw" or "CO"</li>
      <li>Click any entry to reload its result</li>
    </ul>
  </app-help-modal>
}
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/executor/executor.scss */\n.executor-layout {\n  display: flex;\n  height: calc(100vh - 40px);\n}\n.left-panel {\n  width: 340px;\n  min-width: 300px;\n  border-right: 1px solid var(--fusion-color-border);\n  display: flex;\n  flex-direction: column;\n  background: var(--fusion-color-bg-canvas);\n}\n.left-panel .left-panel-scroll {\n  flex: 1;\n  overflow-y: auto;\n}\n.left-panel .service-selector {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.left-panel .service-selector .service-selector-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--fusion-space-tight);\n}\n.left-panel .service-selector .service-selector-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.left-panel .service-selector h2 {\n  margin: 0;\n  font-size: var(--fusion-text-md);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.left-panel .service-selector .history-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 9px;\n  background: var(--fusion-color-bg-selected);\n  color: var(--fusion-color-primary);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.left-panel .service-selector select {\n  width: 100%;\n  padding: var(--fusion-space-tight) var(--fusion-space-base);\n  padding-right: 32px;\n  border: 1px solid var(--fusion-color-border);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-family);\n  font-size: var(--fusion-text-base);\n  background: var(--fusion-color-bg-canvas);\n  color: var(--fusion-color-text);\n  transition: border-color var(--fusion-transition-fast);\n}\n.left-panel .service-selector select:focus {\n  outline: none;\n  border-color: var(--fusion-color-border-focus);\n  box-shadow: 0 0 0 1px var(--fusion-color-border-focus);\n}\n.left-panel .service-selector .service-description {\n  margin: var(--fusion-space-tight) 0 var(--fusion-space-very-tight);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  line-height: var(--fusion-line-height-base);\n}\n.left-panel .service-selector .program-name {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n}\n.left-panel .service-selector .program-name .label {\n  font-weight: 600;\n}\n.left-panel .service-selector .program-name code {\n  background: var(--fusion-color-bg-hover);\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-primary);\n}\n.left-panel .mode-toggle-section {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  padding: var(--fusion-space-tight) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n}\n.left-panel .mode-toggle-section .mode-label {\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n}\n.left-panel .mode-toggle-section .mode-toggle {\n  display: flex;\n  gap: 0;\n}\n.left-panel .mode-toggle-section .mode-toggle .btn {\n  border-radius: 0;\n}\n.left-panel .mode-toggle-section .mode-toggle .btn:first-child {\n  border-radius: var(--fusion-border-radius) 0 0 var(--fusion-border-radius);\n}\n.left-panel .mode-toggle-section .mode-toggle .btn:last-child {\n  border-radius: 0 var(--fusion-border-radius) var(--fusion-border-radius) 0;\n  border-left: none;\n}\n.left-panel .mode-toggle-section .mode-toggle .btn.is-selected {\n  background: var(--fusion-color-bg-selected);\n  border-color: var(--fusion-color-primary);\n  color: var(--fusion-color-primary);\n}\n.left-panel .mode-toggle-section .co-init-spinner {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border: 1.5px solid var(--fusion-color-border);\n  border-top-color: var(--fusion-color-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.left-panel .mode-toggle-section .reference-checkbox {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-very-tight);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  cursor: pointer;\n  margin-left: auto;\n}\n.left-panel .mode-toggle-section .reference-checkbox input[type=checkbox] {\n  accent-color: var(--fusion-color-primary);\n}\n.left-panel .parameter-section {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n}\n.left-panel .status-message {\n  padding: var(--fusion-space-tight) var(--fusion-space-loose);\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n}\n.left-panel .status-message.loading {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-primary);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n}\n.left-panel .status-message.loading .spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--fusion-color-border);\n  border-top-color: var(--fusion-color-primary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.right-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: var(--fusion-color-bg-anchor);\n}\n.right-panel .result-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-canvas);\n  flex-shrink: 0;\n}\n.right-panel .result-header .result-info h2 {\n  margin: 0;\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.right-panel .result-header .result-info .result-meta {\n  display: flex;\n  align-items: center;\n  gap: var(--fusion-space-tight);\n  margin-top: var(--fusion-space-very-tight);\n  font-size: var(--fusion-text-sm);\n}\n.right-panel .result-header .result-info .result-meta .result-status {\n  padding: 2px 8px;\n  border-radius: var(--fusion-border-radius);\n  font-weight: 600;\n  font-size: var(--fusion-text-sm);\n}\n.right-panel .result-header .result-info .result-meta .result-status.success {\n  background: #e6f4ea;\n  color: #1e6e35;\n}\n.right-panel .result-header .result-info .result-meta .result-status.error {\n  background: #fde8ea;\n  color: #8b0013;\n}\n.right-panel .result-header .result-info .result-meta .result-mode {\n  padding: 2px 6px;\n  border-radius: var(--fusion-border-radius);\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n  background: var(--fusion-color-bg-anchor);\n  color: var(--fusion-color-text-secondary);\n}\n.right-panel .result-header .result-info .result-meta .result-duration {\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n}\n.right-panel .result-header .result-params-row {\n  margin-top: var(--fusion-space-very-tight);\n}\n.right-panel .result-header .result-params-row .result-params {\n  display: block;\n  background: var(--fusion-color-bg-anchor);\n  padding: var(--fusion-space-very-tight) var(--fusion-space-tight);\n  border-radius: var(--fusion-border-radius);\n  font-family: var(--fusion-font-mono);\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all var(--fusion-transition-fast);\n  word-break: break-all;\n}\n.right-panel .result-header .result-params-row .result-params:hover {\n  background: var(--fusion-color-bg-hover);\n  color: var(--fusion-color-text);\n}\n.right-panel .result-header .result-params-row .result-params.expanded {\n  white-space: pre-wrap;\n  overflow: visible;\n  text-overflow: unset;\n}\n.right-panel .result-viewer {\n  flex: 1;\n  overflow: hidden;\n}\n.right-panel .error-panel {\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  margin: var(--fusion-space-base);\n  background: #fde8ea;\n  border-left: 4px solid var(--fusion-color-error);\n  border-radius: var(--fusion-border-radius);\n}\n.right-panel .error-panel h3 {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: #8b0013;\n}\n.right-panel .error-panel pre {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  color: #8b0013;\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n}\n.right-panel .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  text-align: center;\n  padding: var(--fusion-space-loose);\n}\n.right-panel .empty-state .material-icons {\n  font-size: 48px;\n  color: var(--fusion-color-border);\n  margin-bottom: var(--fusion-space-base);\n}\n.right-panel .empty-state h3 {\n  margin: 0 0 var(--fusion-space-tight);\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.right-panel .empty-state p {\n  max-width: 360px;\n  line-height: var(--fusion-line-height-base);\n  font-size: var(--fusion-text-base);\n  color: var(--fusion-color-text-secondary);\n}\n.history-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  animation: fadeIn var(--fusion-transition-fast);\n}\n.history-drawer {\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 420px;\n  max-width: 90vw;\n  background: var(--fusion-color-bg-canvas);\n  box-shadow: var(--fusion-shadow-popup);\n  z-index: 101;\n  display: flex;\n  flex-direction: column;\n  animation: slideIn var(--fusion-transition-slow);\n}\n.history-drawer .drawer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base) var(--fusion-space-loose);\n  border-bottom: 1px solid var(--fusion-color-border);\n  background: var(--fusion-color-bg-anchor);\n  flex-shrink: 0;\n}\n.history-drawer .drawer-header h3 {\n  margin: 0;\n  font-size: var(--fusion-text-lg);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n}\n.history-drawer .drawer-header .drawer-actions {\n  display: flex;\n  gap: var(--fusion-space-very-tight);\n}\n.history-drawer .drawer-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--fusion-space-tight);\n}\n.history-drawer .history-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--fusion-space-base);\n  border-bottom: 1px solid var(--fusion-color-border);\n  cursor: pointer;\n  transition: background var(--fusion-transition-fast);\n  gap: var(--fusion-space-base);\n}\n.history-drawer .history-item:last-child {\n  border-bottom: none;\n}\n.history-drawer .history-item:hover {\n  background: var(--fusion-color-bg-hover);\n}\n.history-drawer .history-item.active {\n  background: var(--fusion-color-bg-selected);\n}\n.history-drawer .history-item .history-left {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--fusion-space-tight);\n  min-width: 0;\n  flex: 1;\n}\n.history-drawer .history-item .history-status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.history-drawer .history-item .history-status-dot.success {\n  background: var(--fusion-color-success);\n}\n.history-drawer .history-item .history-status-dot.error {\n  background: var(--fusion-color-error);\n}\n.history-drawer .history-item .history-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.history-drawer .history-item .history-name {\n  font-size: var(--fusion-text-base);\n  font-weight: 600;\n  color: var(--fusion-color-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.history-drawer .history-item .history-name .history-mode-badge {\n  font-size: var(--fusion-text-sm);\n  font-weight: 600;\n  color: var(--fusion-color-text-secondary);\n  margin-left: var(--fusion-space-very-tight);\n}\n.history-drawer .history-item .history-params {\n  font-size: var(--fusion-text-sm);\n  font-family: var(--fusion-font-mono);\n  color: var(--fusion-color-text-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 240px;\n}\n.history-drawer .history-item .history-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.history-drawer .history-item .history-time {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n  white-space: nowrap;\n}\n.history-drawer .history-item .history-duration {\n  font-size: var(--fusion-text-sm);\n  color: var(--fusion-color-text-secondary);\n  font-family: var(--fusion-font-mono);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=executor.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Executor, { className: "Executor", filePath: "src/app/pages/executor/executor.ts", lineNumber: 19 });
})();
export {
  Executor
};
//# sourceMappingURL=chunk-2WV6P6SB.js.map
