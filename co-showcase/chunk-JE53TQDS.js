import {
  ActivatedRoute,
  Router
} from "./chunk-I6RTURXQ.js";
import {
  AddressService,
  AllergyService,
  ButtonDirective,
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  DiagnosisService,
  Dialog,
  EncounterService,
  MPageService,
  MpageConfirmComponent,
  MpageScrollBarComponent,
  MpageTableComponent,
  MpageTreeComponent,
  PersonService,
  PhoneService,
  ProblemService,
  RemainingScreenSpaceDirective,
  TabbedMenuComponent,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5B3TWA2.js";

// src/app/patient-summary/patient-summary.ts
var _c0 = () => ({ showToolbar: true, allowColumnSort: true, columnFilter: true });
var _c1 = () => ({ showUnits: true, censusInd: false });
function PatientSummary_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9)(2, "span", 11);
    \u0275\u0275text(3, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx);
  }
}
function PatientSummary_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9)(2, "span", 11);
    \u0275\u0275text(3, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Phone ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const phone_r1 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(phone_r1.phoneFormatted || phone_r1.phoneNumber);
  }
}
function PatientSummary_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "span", 9);
    \u0275\u0275text(7, "DOB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
    \u0275\u0275text(13, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
    \u0275\u0275text(18, "Sex");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 8)(22, "span", 9);
    \u0275\u0275text(23, "MRN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, PatientSummary_Conditional_5_Conditional_26_Template, 7, 1, "div", 8);
    \u0275\u0275conditionalCreate(27, PatientSummary_Conditional_5_Conditional_27_Template, 7, 1, "div", 8);
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const p_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.nameFullFormatted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, p_r2.birthDtTm, "MM/dd/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r2.age);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r2.sex);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.mrn());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r2.addressInline()) ? 26 : -1, tmp_7_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r2.homePhone()) ? 27 : -1, tmp_8_0);
  }
}
function PatientSummary_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading patient data...");
    \u0275\u0275elementEnd();
  }
}
function PatientSummary_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Loading clinical data...");
    \u0275\u0275elementEnd();
  }
}
function PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.reactionFtDesc || r_r5.reaction);
  }
}
function PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_3_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const allergy_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(allergy_r6.reactions);
  }
}
function PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.comment);
  }
}
function PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_4_For_2_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const allergy_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(allergy_r6.comments);
  }
}
function PatientSummary_Conditional_15_Case_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_3_Template, 3, 0, "ul");
    \u0275\u0275conditionalCreate(4, PatientSummary_Conditional_15_Case_0_Conditional_1_Conditional_4_Template, 3, 0, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const allergy_r6 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", allergy_r6.substance, " \u2014 Reactions & Comments");
    \u0275\u0275advance();
    \u0275\u0275conditional((allergy_r6.reactions == null ? null : allergy_r6.reactions.length) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((allergy_r6.comments == null ? null : allergy_r6.comments.length) ? 4 : -1);
  }
}
function PatientSummary_Conditional_15_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mpage-table", 14);
    \u0275\u0275twoWayListener("columnConfigChange", function PatientSummary_Conditional_15_Case_0_Template_mpage_table_columnConfigChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.allergyColumns, $event) || (ctx_r2.allergyColumns = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("clickRow", function PatientSummary_Conditional_15_Case_0_Template_mpage_table_clickRow_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedAllergy.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, PatientSummary_Conditional_15_Case_0_Conditional_1_Template, 5, 3, "div", 15);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r2.allergies());
    \u0275\u0275twoWayProperty("columnConfig", ctx_r2.allergyColumns);
    \u0275\u0275property("params", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r2.selectedAllergy()) ? 1 : -1, tmp_5_0);
  }
}
function PatientSummary_Conditional_15_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mpage-table", 17);
    \u0275\u0275twoWayListener("columnConfigChange", function PatientSummary_Conditional_15_Case_1_Template_mpage_table_columnConfigChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.problemColumns, $event) || (ctx_r2.problemColumns = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r2.problems());
    \u0275\u0275twoWayProperty("columnConfig", ctx_r2.problemColumns);
    \u0275\u0275property("params", \u0275\u0275pureFunction0(3, _c0));
  }
}
function PatientSummary_Conditional_15_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mpage-table", 17);
    \u0275\u0275twoWayListener("columnConfigChange", function PatientSummary_Conditional_15_Case_2_Template_mpage_table_columnConfigChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.diagnosisColumns, $event) || (ctx_r2.diagnosisColumns = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r2.diagnoses());
    \u0275\u0275twoWayProperty("columnConfig", ctx_r2.diagnosisColumns);
    \u0275\u0275property("params", \u0275\u0275pureFunction0(3, _c0));
  }
}
function PatientSummary_Conditional_15_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "mpage-table", 17);
    \u0275\u0275twoWayListener("columnConfigChange", function PatientSummary_Conditional_15_Case_3_Template_mpage_table_columnConfigChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.encounterColumns, $event) || (ctx_r2.encounterColumns = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18)(3, "h3");
    \u0275\u0275text(4, "Location Hierarchy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275element(6, "mpage-tree", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mpage-scroll-bar", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r2.encounters());
    \u0275\u0275twoWayProperty("columnConfig", ctx_r2.encounterColumns);
    \u0275\u0275property("params", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("label", "Location")("searchable", true)("scriptParams", \u0275\u0275pureFunction0(9, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("vertical", true)("allowWheelScroll", true);
  }
}
function PatientSummary_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PatientSummary_Conditional_15_Case_0_Template, 2, 5)(1, PatientSummary_Conditional_15_Case_1_Template, 1, 4, "mpage-table", 12)(2, PatientSummary_Conditional_15_Case_2_Template, 1, 4, "mpage-table", 12)(3, PatientSummary_Conditional_15_Case_3_Template, 8, 10, "div", 13);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.activeTab()) === "allergies" ? 0 : tmp_1_0 === "problems" ? 1 : tmp_1_0 === "diagnoses" ? 2 : tmp_1_0 === "encounters" ? 3 : -1);
  }
}
var PatientSummary = class _PatientSummary {
  route = inject(ActivatedRoute);
  router = inject(Router);
  dialog = inject(Dialog);
  mPage = inject(MPageService);
  personService = inject(PersonService);
  addressService = inject(AddressService);
  phoneService = inject(PhoneService);
  allergyService = inject(AllergyService);
  problemService = inject(ProblemService);
  diagnosisService = inject(DiagnosisService);
  encounterService = inject(EncounterService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  activeTab = signal("allergies", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  tabs = [
    { label: "Allergies", icon: "vaccines", idName: "allergies" },
    { label: "Problems", icon: "report_problem", idName: "problems" },
    { label: "Diagnoses", icon: "diagnosis", idName: "diagnoses" },
    { label: "Encounters", icon: "calendar_month", idName: "encounters" }
  ];
  personId = signal(0, ...ngDevMode ? [{ debugName: "personId" }] : []);
  encntrId = signal(0, ...ngDevMode ? [{ debugName: "encntrId" }] : []);
  selectedAllergy = signal(null, ...ngDevMode ? [{ debugName: "selectedAllergy" }] : []);
  allergyColumns = signal({
    columns: [
      { column: "substance", label: "Substance", type: "text", visible: true, sticky: false, width: 200, justification: "left" },
      { column: "substanceType", label: "Type", type: "text", visible: true, sticky: false, width: 120, justification: "left" },
      { column: "severity", label: "Severity", type: "text", visible: true, sticky: false, width: 100, justification: "left" },
      { column: "reactionStatus", label: "Reaction Status", type: "text", visible: true, sticky: false, width: 130, justification: "left" }
    ],
    columnSort: []
  }, ...ngDevMode ? [{ debugName: "allergyColumns" }] : []);
  problemColumns = signal({
    columns: [
      { column: "probSourceString", label: "Problem", type: "text", visible: true, sticky: false, width: 250, justification: "left" },
      { column: "classification", label: "Classification", type: "text", visible: true, sticky: false, width: 130, justification: "left" },
      { column: "lifeCycleStatus", label: "Lifecycle Status", type: "text", visible: true, sticky: false, width: 130, justification: "left" },
      { column: "severity", label: "Severity", type: "text", visible: true, sticky: false, width: 100, justification: "left" },
      { column: "ranking", label: "Ranking", type: "text", visible: true, sticky: false, width: 80, justification: "left" }
    ],
    columnSort: []
  }, ...ngDevMode ? [{ debugName: "problemColumns" }] : []);
  diagnosisColumns = signal({
    columns: [
      { column: "dxSourceString", label: "Diagnosis", type: "text", visible: true, sticky: false, width: 250, justification: "left" },
      { column: "diagType", label: "Type", type: "text", visible: true, sticky: false, width: 100, justification: "left" },
      { column: "diagPriority", label: "Priority", type: "text", visible: true, sticky: false, width: 100, justification: "left" },
      { column: "confirmationStatus", label: "Confirmation", type: "text", visible: true, sticky: false, width: 120, justification: "left" },
      { column: "ranking", label: "Ranking", type: "text", visible: true, sticky: false, width: 80, justification: "left" },
      { column: "severity", label: "Severity", type: "text", visible: true, sticky: false, width: 100, justification: "left" }
    ],
    columnSort: []
  }, ...ngDevMode ? [{ debugName: "diagnosisColumns" }] : []);
  encounterColumns = signal({
    columns: [
      { column: "facility", label: "Facility", type: "text", visible: true, sticky: false, width: 150, justification: "left" },
      { column: "nurseUnit", label: "Nurse Unit", type: "text", visible: true, sticky: false, width: 130, justification: "left" },
      { column: "roomBed", label: "Room/Bed", type: "text", visible: true, sticky: false, width: 120, justification: "left" },
      { column: "medService", label: "Medical Service", type: "text", visible: true, sticky: false, width: 150, justification: "left" },
      { column: "regDtTm", label: "Admit Date", type: "datetime", visible: true, sticky: false, width: 150, justification: "left" },
      { column: "dischDtTm", label: "Discharge Date", type: "datetime", visible: true, sticky: false, width: 150, justification: "left" },
      { column: "encntrType", label: "Encounter Type", type: "text", visible: true, sticky: false, width: 130, justification: "left" }
    ],
    columnSort: []
  }, ...ngDevMode ? [{ debugName: "encounterColumns" }] : []);
  allergies = computed(() => {
    const pid = this.personId();
    return pid ? this.allergyService.get(void 0, pid) : [];
  }, ...ngDevMode ? [{ debugName: "allergies" }] : []);
  problems = computed(() => {
    const pid = this.personId();
    return pid ? this.problemService.get(pid) : [];
  }, ...ngDevMode ? [{ debugName: "problems" }] : []);
  diagnoses = computed(() => {
    const eid = this.encntrId();
    return eid ? this.diagnosisService.get(eid) : [];
  }, ...ngDevMode ? [{ debugName: "diagnoses" }] : []);
  encounters = computed(() => {
    const eid = this.encntrId();
    const enc = eid ? this.encounterService.get(eid) : null;
    return enc ? [enc] : [];
  }, ...ngDevMode ? [{ debugName: "encounters" }] : []);
  person = computed(() => this.personService.get(), ...ngDevMode ? [{ debugName: "person" }] : []);
  mrn = computed(() => {
    const alias = this.personService.getAlias("MRN");
    return alias?.aliasFormatted || alias?.alias || "";
  }, ...ngDevMode ? [{ debugName: "mrn" }] : []);
  homeAddress = computed(() => this.addressService.get("HOME"), ...ngDevMode ? [{ debugName: "homeAddress" }] : []);
  homePhone = computed(() => this.phoneService.get("HOME"), ...ngDevMode ? [{ debugName: "homePhone" }] : []);
  addressInline = computed(() => {
    const addr = this.homeAddress();
    if (!addr)
      return "";
    const parts = [addr.streetAddr, addr.city, addr.state, addr.zipCode].filter(Boolean);
    return parts.join(", ");
  }, ...ngDevMode ? [{ debugName: "addressInline" }] : []);
  ngOnInit() {
    const personId = Number(this.route.snapshot.paramMap.get("personId"));
    const encntrId = Number(this.route.snapshot.paramMap.get("encntrId"));
    this.personId.set(personId);
    this.encntrId.set(encntrId);
    const patientSource = [{ personId, encntrId }];
    this.personService.load({ person: { aliases: true, patient: true, names: true } }, patientSource);
    this.addressService.load("APO_ADDR", patientSource);
    this.phoneService.load("APO_PHONE", patientSource);
    this.allergyService.load({ allergy: { reactions: true, comments: true } }, patientSource);
    this.problemService.load({ problem: { comments: true } }, patientSource);
    this.diagnosisService.load("DIAGNOSIS_FINAL", patientSource);
    this.encounterService.load({ encounter: { encounterInfo: true, locHist: true } }, patientSource, () => this.loading.set(false));
  }
  onTabClick(tab) {
    this.activeTab.set(tab.idName || "allergies");
  }
  goBack() {
    const dialogRef = this.dialog.open(MpageConfirmComponent, {
      width: "400px",
      data: {
        title: "Leave Patient Summary?",
        icon: "logout",
        text: "<p>Are you sure you want to leave this patient's summary?</p>",
        showCancelButton: true,
        confirmButtonLabel: "Leave",
        confirmButtonColor: "warn",
        cancelButtonLabel: "Stay"
      }
    });
    dialogRef.addEventListener("close", () => {
      if (dialogRef.returnValue === "true") {
        this.router.navigate(["/search"]);
      }
    });
  }
  static \u0275fac = function PatientSummary_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PatientSummary)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PatientSummary, selectors: [["app-patient-summary"]], decls: 16, vars: 5, consts: [[1, "summary-container"], [1, "demographics-banner", "flex", "flex-center-items", "flex-gap"], ["coButton", "icon", 3, "click"], [1, "material-symbols-outlined"], [1, "flex-fill"], ["coButton", "stroked", "color", "warn", 3, "click"], ["buttonType", "default", "buttonColor", "default", "selectedButtonColor", "primary", 3, "clickTab", "tabs", "defaultTab"], ["coRemainingScreenSpace", "", 1, "tab-content", 3, "shorten"], [1, "demo-field"], [1, "demo-label"], [1, "demo-value"], [1, "material-symbols-outlined", "demo-icon"], [3, "data", "columnConfig", "params"], [1, "encounters-section"], [3, "columnConfigChange", "clickRow", "data", "columnConfig", "params"], [1, "allergy-detail"], [1, "allergy-comments"], [3, "columnConfigChange", "data", "columnConfig", "params"], [1, "tree-container"], [1, "tree-scroll-wrapper"], [3, "label", "searchable", "scriptParams"], [3, "vertical", "allowWheelScroll"]], template: function PatientSummary_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function PatientSummary_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, PatientSummary_Conditional_5_Template, 28, 10)(6, PatientSummary_Conditional_6_Template, 2, 0, "span");
      \u0275\u0275element(7, "span", 4);
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function PatientSummary_Template_button_click_8_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(9, "span", 3);
      \u0275\u0275text(10, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Leave ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "tabbed-menu", 6);
      \u0275\u0275listener("clickTab", function PatientSummary_Template_tabbed_menu_clickTab_12_listener($event) {
        return ctx.onTabClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275conditionalCreate(14, PatientSummary_Conditional_14_Template, 2, 0, "p")(15, PatientSummary_Conditional_15_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_0_0 = ctx.person()) ? 5 : 6, tmp_0_0);
      \u0275\u0275advance(7);
      \u0275\u0275property("tabs", ctx.tabs)("defaultTab", "allergies");
      \u0275\u0275advance();
      \u0275\u0275property("shorten", 8);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 14 : 15);
    }
  }, dependencies: [
    ButtonDirective,
    TabbedMenuComponent,
    RemainingScreenSpaceDirective,
    MpageTableComponent,
    MpageTreeComponent,
    MpageScrollBarComponent,
    DatePipe
  ], styles: ["\n\n.summary-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 8px;\n}\n.demographics-banner[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #e8eaf6;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.demo-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 12px;\n  border-right: 1px solid #c5cae9;\n}\n.demo-label[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  color: grey;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.demo-value[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.demo-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: auto;\n  padding: 8px;\n}\n.allergy-detail[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 12px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  border-left: 4px solid var(--primary-color);\n}\n.allergy-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 1em;\n}\n.allergy-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin-bottom: 8px;\n}\n.allergy-comments[_ngcontent-%COMP%] {\n  color: grey;\n  font-style: italic;\n}\n.tree-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.tree-scroll-wrapper[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n  position: relative;\n}\n.encounters-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=patient-summary.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatientSummary, [{
    type: Component,
    args: [{ selector: "app-patient-summary", standalone: true, imports: [
      DatePipe,
      ButtonDirective,
      TabbedMenuComponent,
      RemainingScreenSpaceDirective,
      MpageTableComponent,
      MpageTreeComponent,
      MpageScrollBarComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="summary-container">
  <!-- Demographics Banner -->
  <div class="demographics-banner flex flex-center-items flex-gap">
    <button coButton="icon" (click)="goBack()">
      <span class="material-symbols-outlined">arrow_back</span>
    </button>

    @if (person(); as p) {
      <div class="demo-field">
        <span class="demo-label">Name</span>
        <span class="demo-value">{{ p.nameFullFormatted }}</span>
      </div>
      <div class="demo-field">
        <span class="demo-label">DOB</span>
        <span class="demo-value">{{ p.birthDtTm | date:'MM/dd/yyyy' }}</span>
      </div>
      <div class="demo-field">
        <span class="demo-label">Age</span>
        <span class="demo-value">{{ p.age }}</span>
      </div>
      <div class="demo-field">
        <span class="demo-label">Sex</span>
        <span class="demo-value">{{ p.sex }}</span>
      </div>
      <div class="demo-field">
        <span class="demo-label">MRN</span>
        <span class="demo-value">{{ mrn() }}</span>
      </div>

      @if (addressInline(); as addr) {
        <div class="demo-field">
          <span class="demo-label">
            <span class="material-symbols-outlined demo-icon">home</span> Address
          </span>
          <span class="demo-value">{{ addr }}</span>
        </div>
      }

      @if (homePhone(); as phone) {
        <div class="demo-field">
          <span class="demo-label">
            <span class="material-symbols-outlined demo-icon">phone</span> Phone
          </span>
          <span class="demo-value">{{ phone.phoneFormatted || phone.phoneNumber }}</span>
        </div>
      }
    } @else {
      <span>Loading patient data...</span>
    }

    <span class="flex-fill"></span>

    <button coButton="stroked" color="warn" (click)="goBack()">
      <span class="material-symbols-outlined">logout</span> Leave
    </button>
  </div>

  <!-- Tabbed Menu -->
  <tabbed-menu
    [tabs]="tabs"
    [defaultTab]="'allergies'"
    buttonType="default"
    buttonColor="default"
    selectedButtonColor="primary"
    (clickTab)="onTabClick($event)">
  </tabbed-menu>

  <!-- Tab Content -->
  <div class="tab-content" coRemainingScreenSpace [shorten]="8">
    @if (loading()) {
      <p>Loading clinical data...</p>
    } @else {
      @switch (activeTab()) {
        @case ('allergies') {
          <mpage-table [data]="allergies()" [(columnConfig)]="allergyColumns"
            [params]="{showToolbar: true, allowColumnSort: true, columnFilter: true}"
            (clickRow)="selectedAllergy.set($event)">
          </mpage-table>
          @if (selectedAllergy(); as allergy) {
            <div class="allergy-detail">
              <h3>{{ allergy.substance }} \u2014 Reactions &amp; Comments</h3>
              @if (allergy.reactions?.length) {
                <ul>
                  @for (r of allergy.reactions; track r) {
                    <li>{{ r.reactionFtDesc || r.reaction }}</li>
                  }
                </ul>
              }
              @if (allergy.comments?.length) {
                <div class="allergy-comments">
                  @for (c of allergy.comments; track c) {
                    <p>{{ c.comment }}</p>
                  }
                </div>
              }
            </div>
          }
        }
        @case ('problems') {
          <mpage-table [data]="problems()" [(columnConfig)]="problemColumns"
            [params]="{showToolbar: true, allowColumnSort: true, columnFilter: true}">
          </mpage-table>
        }
        @case ('diagnoses') {
          <mpage-table [data]="diagnoses()" [(columnConfig)]="diagnosisColumns"
            [params]="{showToolbar: true, allowColumnSort: true, columnFilter: true}">
          </mpage-table>
        }
        @case ('encounters') {
          <div class="encounters-section">
            <mpage-table [data]="encounters()" [(columnConfig)]="encounterColumns"
              [params]="{showToolbar: true, allowColumnSort: true, columnFilter: true}">
            </mpage-table>
            <div class="tree-container">
              <h3>Location Hierarchy</h3>
              <div class="tree-scroll-wrapper">
                <mpage-tree [label]="'Location'" [searchable]="true"
                  [scriptParams]="{showUnits: true, censusInd: false}">
                </mpage-tree>
              </div>
              <mpage-scroll-bar [vertical]="true" [allowWheelScroll]="true" />
            </div>
          </div>
        }
      }
    }
  </div>
</div>
`, styles: ["/* src/app/patient-summary/patient-summary.scss */\n.summary-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 8px;\n}\n.demographics-banner {\n  padding: 12px 16px;\n  background: #e8eaf6;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.demo-field {\n  display: flex;\n  flex-direction: column;\n  padding: 0 12px;\n  border-right: 1px solid #c5cae9;\n}\n.demo-label {\n  font-size: 0.7em;\n  color: grey;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.demo-value {\n  font-weight: bold;\n}\n.demo-icon {\n  font-size: 14px;\n}\n.tab-content {\n  flex: 1 1 auto;\n  overflow: auto;\n  padding: 8px;\n}\n.allergy-detail {\n  margin-top: 12px;\n  padding: 12px;\n  background: #f5f5f5;\n  border-radius: 4px;\n  border-left: 4px solid var(--primary-color);\n}\n.allergy-detail h3 {\n  margin-bottom: 8px;\n  font-size: 1em;\n}\n.allergy-detail ul {\n  padding-left: 20px;\n  margin-bottom: 8px;\n}\n.allergy-comments {\n  color: grey;\n  font-style: italic;\n}\n.tree-container {\n  margin-top: 16px;\n}\n.tree-scroll-wrapper {\n  height: 200px;\n  overflow: auto;\n  position: relative;\n}\n.encounters-section {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=patient-summary.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PatientSummary, { className: "PatientSummary", filePath: "src/app/patient-summary/patient-summary.ts", lineNumber: 41 });
})();
export {
  PatientSummary
};
//# sourceMappingURL=chunk-JE53TQDS.js.map
