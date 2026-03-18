import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZHUMCYTK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/services/service-registry.service.ts
var STORAGE_KEY = "dwsv_service_registry";
var BUILT_IN_SERVICES = [
  {
    id: "cov_doc_activity_extract",
    programName: "cov_doc_activity_extract",
    displayName: "Document Activity Extract",
    description: "Extracts documents and their action audit trails from a given event set hierarchy. Supports facility-wide or single-patient queries.",
    builtIn: true,
    parameters: [
      { position: 1, parameterTypeKey: "outdev", required: true, defaultValueOverride: "MINE" },
      { position: 2, parameterTypeKey: "event_set_name", required: true },
      { position: 3, parameterTypeKey: "fin", required: false },
      { position: 4, parameterTypeKey: "facility", required: false },
      { position: 5, parameterTypeKey: "start_dt_tm", required: true },
      { position: 6, parameterTypeKey: "end_dt_tm", required: true }
    ]
  }
];
var ServiceRegistryService = class _ServiceRegistryService {
  _customServices = signal([], ...ngDevMode ? [{ debugName: "_customServices" }] : []);
  /** All available services (built-in + custom) */
  allServices = computed(() => [...BUILT_IN_SERVICES, ...this._customServices()], ...ngDevMode ? [{ debugName: "allServices" }] : []);
  constructor() {
    this.loadFromStorage();
  }
  /** Get a service by ID */
  getService(id) {
    return this.allServices().find((s) => s.id === id);
  }
  /** Add a custom service definition */
  addService(service) {
    const existing = this._customServices();
    if (this.allServices().some((s) => s.id === service.id))
      return;
    this._customServices.set([...existing, service]);
    this.saveToStorage();
  }
  /** Update a service definition */
  updateService(id, updates) {
    const builtIn = BUILT_IN_SERVICES.find((s) => s.id === id);
    if (builtIn)
      return;
    this._customServices.update((services) => services.map((s) => s.id === id ? __spreadProps(__spreadValues(__spreadValues({}, s), updates), { id }) : s));
    this.saveToStorage();
  }
  /** Remove a custom service definition */
  removeService(id) {
    if (BUILT_IN_SERVICES.some((s) => s.id === id))
      return;
    this._customServices.update((services) => services.filter((s) => s.id !== id));
    this.saveToStorage();
  }
  /** Export all service definitions as JSON */
  exportServices() {
    return JSON.stringify(this.allServices(), null, 2);
  }
  /** Import service definitions from JSON */
  importServices(json) {
    const services = JSON.parse(json);
    let imported = 0;
    let skipped = 0;
    for (const service of services) {
      if (this.allServices().some((s) => s.id === service.id)) {
        skipped++;
      } else {
        this.addService(__spreadProps(__spreadValues({}, service), { builtIn: false }));
        imported++;
      }
    }
    return { imported, skipped };
  }
  loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this._customServices.set(JSON.parse(stored));
      }
    } catch {
    }
  }
  saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._customServices()));
  }
  static \u0275fac = function ServiceRegistryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceRegistryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceRegistryService, factory: _ServiceRegistryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceRegistryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/models/parameter-library.model.ts
var PARAMETER_LIBRARY = [
  {
    key: "outdev",
    label: "Output Device",
    inputType: "hidden",
    description: "Output destination for CCL program",
    defaultValue: "MINE"
  },
  {
    key: "facility",
    label: "Facility",
    inputType: "select",
    description: "Covenant Health facility",
    allowEmpty: true,
    options: [
      { label: "(None)", value: "" },
      { label: "CMC - Covenant Medical Center", value: "CMC" },
      { label: "FWCH - Fort West Community Hospital", value: "FWCH" },
      { label: "FSCH - Fort Sanders Community Hospital", value: "FSCH" },
      { label: "FSRMC - Fort Sanders Regional Medical Center", value: "FSRMC" },
      { label: "LCH - LeConte Medical Center", value: "LCH" },
      { label: "MCGH - Morristown-Hamblen Healthcare System", value: "MCGH" },
      { label: "MMC - Methodist Medical Center", value: "MMC" },
      { label: "PW - Parkwest Medical Center", value: "PW" },
      { label: "RMC - Roane Medical Center", value: "RMC" },
      { label: "CRMC - Claiborne Medical Center", value: "CRMC" },
      { label: "CCH - Cumberland Medical Center", value: "CCH" }
    ]
  },
  {
    key: "fin",
    label: "FIN (Financial Number)",
    inputType: "text",
    description: "Patient encounter financial number",
    placeholder: "Enter FIN (e.g., 5417604143)",
    allowEmpty: true
  },
  {
    key: "event_set_name",
    label: "Event Set Name",
    inputType: "select",
    description: "Clinical event set hierarchy name",
    defaultValue: "ClinicalDoc",
    options: [
      { label: "ClinicalDoc", value: "ClinicalDoc" },
      { label: "PATH REPORT", value: "PATH REPORT" },
      { label: "Radiology", value: "Radiology" },
      { label: "Laboratory", value: "Laboratory" }
    ]
  },
  {
    key: "start_dt_tm",
    label: "Start Date/Time",
    inputType: "datetime",
    description: "Start date and time",
    cclFormat: "DD-MMM-YYYY HH:MM:SS",
    presets: [
      { label: "Today Start", preset: "today_start" },
      { label: "Yesterday Start", preset: "yesterday_start" },
      { label: "Now", preset: "now" }
    ]
  },
  {
    key: "end_dt_tm",
    label: "End Date/Time",
    inputType: "datetime",
    description: "End date and time",
    cclFormat: "DD-MMM-YYYY HH:MM:SS",
    presets: [
      { label: "Today End", preset: "today_end" },
      { label: "Yesterday End", preset: "yesterday_end" },
      { label: "Now", preset: "now" }
    ]
  },
  {
    key: "person_id",
    label: "Person ID",
    inputType: "number",
    description: "Cerner person_id value",
    placeholder: "Enter person_id",
    allowEmpty: true
  },
  {
    key: "encntr_id",
    label: "Encounter ID",
    inputType: "number",
    description: "Cerner encntr_id value",
    placeholder: "Enter encntr_id",
    allowEmpty: true
  },
  {
    key: "generic_text",
    label: "Text Parameter",
    inputType: "text",
    description: "Generic text parameter",
    placeholder: "Enter value",
    allowEmpty: true
  }
];

// src/app/services/parameter-library.service.ts
var STORAGE_KEY2 = "dwsv_parameter_library";
var ParameterLibraryService = class _ParameterLibraryService {
  _customTypes = signal([], ...ngDevMode ? [{ debugName: "_customTypes" }] : []);
  /** All available parameter types (built-in + custom) */
  allTypes = computed(() => [...PARAMETER_LIBRARY, ...this._customTypes()], ...ngDevMode ? [{ debugName: "allTypes" }] : []);
  constructor() {
    this.loadFromStorage();
  }
  /** Get a parameter type by its key */
  getType(key) {
    return this.allTypes().find((t) => t.key === key);
  }
  /** Add a custom parameter type */
  addCustomType(type) {
    const existing = this._customTypes();
    if (existing.some((t) => t.key === type.key) || PARAMETER_LIBRARY.some((t) => t.key === type.key)) {
      return;
    }
    this._customTypes.set([...existing, type]);
    this.saveToStorage();
  }
  /** Update a custom parameter type */
  updateCustomType(key, updates) {
    this._customTypes.update((types) => types.map((t) => t.key === key ? __spreadProps(__spreadValues(__spreadValues({}, t), updates), { key }) : t));
    this.saveToStorage();
  }
  /** Remove a custom parameter type */
  removeCustomType(key) {
    if (PARAMETER_LIBRARY.some((t) => t.key === key))
      return;
    this._customTypes.update((types) => types.filter((t) => t.key !== key));
    this.saveToStorage();
  }
  /** Check if a key belongs to a built-in type */
  isBuiltIn(key) {
    return PARAMETER_LIBRARY.some((t) => t.key === key);
  }
  loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY2);
      if (stored) {
        this._customTypes.set(JSON.parse(stored));
      }
    } catch {
    }
  }
  saveToStorage() {
    localStorage.setItem(STORAGE_KEY2, JSON.stringify(this._customTypes()));
  }
  static \u0275fac = function ParameterLibraryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParameterLibraryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParameterLibraryService, factory: _ParameterLibraryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParameterLibraryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ServiceRegistryService,
  ParameterLibraryService
};
//# sourceMappingURL=chunk-RVLKILZU.js.map
