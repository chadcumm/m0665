import {
  Router,
  RouterOutlet,
  provideRouter,
  withHashLocation
} from "./chunk-QQOIXTP3.js";
import {
  AddressService,
  AllergyService,
  ChangeDetectionStrategy,
  CodeValueService,
  Component,
  ConfigService,
  CustomService,
  DiagnosisService,
  Dialog,
  EncounterService,
  MPageService,
  MpageLogComponent,
  OrganizationService,
  PersonService,
  PhoneService,
  ProblemService,
  PrsnlService,
  ReferenceService,
  TabbedMenuComponent,
  bootstrapApplication,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZonelessChangeDetection,
  setClassMetadata,
  withFetch,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7XJKXICL.js";

// src/app/guards/patient.guard.ts
var patientGuard = (route) => {
  const router = inject(Router);
  const personId = route.paramMap.get("personId");
  const encntrId = route.paramMap.get("encntrId");
  if (!personId || personId === "0" || !encntrId || encntrId === "0") {
    return router.createUrlTree(["/search"]);
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "search", loadComponent: () => import("./chunk-AKY225JN.js").then((m) => m.Search) },
  {
    path: "patient/:personId/:encntrId",
    loadComponent: () => import("./chunk-GWCPDNJR.js").then((m) => m.PatientSummary),
    canActivate: [patientGuard]
  },
  { path: "config", loadComponent: () => import("./chunk-HUZSJCOT.js").then((m) => m.Config) },
  { path: "**", redirectTo: "search" }
];

// src/app/app.config.ts
var CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: ["dd-MMM-yyyy"]
  },
  display: {
    dateInput: "dd-MMM-yyyy",
    dateLabel: "dd-MMM-yyyy",
    dateTimeLabel: "dd-MMM-yyyy HH:mm",
    locale: "en-US",
    monthYearLabel: "MMM yyyy",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM yyyy"
  }
};
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withFetch()),
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig();
    })
  ]
};

// src/app/version.ts
var buildVersion = "v0.0.6-main";

// src/app/app.ts
var _c0 = () => ({ position: "bottom", size: 25 });
var App = class _App {
  MPage = inject(MPageService);
  router = inject(Router);
  version = buildVersion;
  tabs = [
    { idName: "search", label: "Patient Search", icon: "search" },
    { idName: "patient", label: "Patient Summary", icon: "person" },
    { idName: "config", label: "Configuration", icon: "settings" }
  ];
  ngOnInit() {
    this.MPage.setMaxInstances(4, true, "ORGANIZER", false);
    this.MPage.defaultDateFormats = CUSTOM_DATE_FORMATS;
  }
  onTabClick(tab) {
    switch (tab.idName) {
      case "search":
        this.router.navigate(["/search"]);
        break;
      case "config":
        this.router.navigate(["/config"]);
        break;
      case "patient":
        break;
    }
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], features: [\u0275\u0275ProvidersFeature([
    MPageService,
    AddressService,
    AllergyService,
    CodeValueService,
    CustomService,
    DiagnosisService,
    EncounterService,
    Dialog,
    OrganizationService,
    PersonService,
    PhoneService,
    ProblemService,
    PrsnlService,
    ReferenceService
  ])], decls: 8, vars: 5, consts: [[1, "app-shell"], [1, "app-header"], [3, "clickTab", "tabs", "defaultTab"], [1, "version-stamp"], [1, "app-content"], [3, "properties"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "tabbed-menu", 2);
      \u0275\u0275listener("clickTab", function App_Template_tabbed_menu_clickTab_2_listener($event) {
        return ctx.onTabClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "main", 4);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "mpage-log-component", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.tabs)("defaultTab", "search");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.version);
      \u0275\u0275advance(3);
      \u0275\u0275property("properties", \u0275\u0275pureFunction0(4, _c0));
    }
  }, dependencies: [RouterOutlet, MpageLogComponent, TabbedMenuComponent], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.25rem 0.5rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.version-stamp[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.75rem;\n  color: #999;\n  white-space: nowrap;\n}\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 1rem;\n}\n/*# sourceMappingURL=app.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, MpageLogComponent, TabbedMenuComponent], standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
      MPageService,
      AddressService,
      AllergyService,
      CodeValueService,
      CustomService,
      DiagnosisService,
      EncounterService,
      Dialog,
      OrganizationService,
      PersonService,
      PhoneService,
      ProblemService,
      PrsnlService,
      ReferenceService
    ], template: `<div class="app-shell">
  <header class="app-header">
    <tabbed-menu [tabs]="tabs" [defaultTab]="'search'" (clickTab)="onTabClick($event)" />
    <span class="version-stamp">{{ version }}</span>
  </header>

  <main class="app-content">
    <router-outlet />
  </main>

  <mpage-log-component [properties]="{position: 'bottom', size: 25}" />
</div>
`, styles: ["/* src/app/app.scss */\n.app-shell {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.app-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.25rem 0.5rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.version-stamp {\n  margin-left: auto;\n  font-size: 0.75rem;\n  color: #999;\n  white-space: nowrap;\n}\n.app-content {\n  flex: 1;\n  overflow: auto;\n  padding: 1rem;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 37 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
