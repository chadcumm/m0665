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
  },
  {
    id: "cov_external_rx_svc",
    programName: "cov_external_rx_svc",
    displayName: "External Rx / Medication Claims",
    description: "Retrieves external prescription/medication claims data for a patient. Pulls from external contributor systems (pharmacy claims, insurance data).",
    builtIn: true,
    parameters: [
      { position: 1, parameterTypeKey: "outdev", required: true, defaultValueOverride: "MINE" },
      { position: 2, parameterTypeKey: "fin", required: false }
    ]
  },
  {
    id: "cov_pha_disch_rx_meds_svc",
    programName: "cov_pha_disch_rx_meds_svc",
    displayName: "Discharge Rx Medications",
    description: "Extracts discharge prescription medications within a date range. Includes prescriber, pharmacy, drug class, and payer information.",
    builtIn: true,
    parameters: [
      { position: 1, parameterTypeKey: "outdev", required: true, defaultValueOverride: "JSON" },
      { position: 2, parameterTypeKey: "start_dt_tm", required: true },
      { position: 3, parameterTypeKey: "end_dt_tm", required: true }
    ]
  },
  {
    id: "cov_pha_rx_spec_meds_svc",
    programName: "cov_pha_rx_spec_meds_svc",
    displayName: "Specialty Rx Medications",
    description: "Extracts specialty medication prescriptions within a date range. Same structure as discharge meds but filtered to specialty pharmacy medications.",
    builtIn: true,
    parameters: [
      { position: 1, parameterTypeKey: "outdev", required: true, defaultValueOverride: "MINE" },
      { position: 2, parameterTypeKey: "start_dt_tm", required: true },
      { position: 3, parameterTypeKey: "end_dt_tm", required: true }
    ]
  },
  {
    id: "cov_order_radiology_extract",
    programName: "cov_order_radiology_extract",
    displayName: "Radiology Order Extract",
    description: "Extracts radiology orders and exam details within a date range. Includes patient demographics, order status, scheduling info, and facility/department data.",
    builtIn: true,
    parameters: [
      { position: 1, parameterTypeKey: "outdev", required: true, defaultValueOverride: "JSON" },
      { position: 2, parameterTypeKey: "start_dt_tm", required: true },
      { position: 3, parameterTypeKey: "end_dt_tm", required: true },
      { position: 4, parameterTypeKey: "file_output", required: false }
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

export {
  ServiceRegistryService
};
//# sourceMappingURL=chunk-VT7PEVIO.js.map
