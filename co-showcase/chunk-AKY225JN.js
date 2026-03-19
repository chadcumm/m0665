import {
  Router
} from "./chunk-QQOIXTP3.js";
import {
  ChangeDetectionStrategy,
  Component,
  MPageService,
  MpagePatientSearchComponent,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-7XJKXICL.js";

// src/app/search/search.ts
var Search = class _Search {
  router = inject(Router);
  mPage = inject(MPageService);
  onSearchResult(result) {
    const personId = result?.personId || result?.person_id;
    const encntrId = result?.encntrId || result?.encntr_id;
    if (personId && encntrId) {
      this.router.navigate(["/patient", personId, encntrId]);
    }
  }
  static \u0275fac = function Search_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Search)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Search, selectors: [["app-search"]], decls: 2, vars: 1, consts: [[1, "search-container"], [3, "searchResult", "returnType"]], template: function Search_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mpage-patient-search", 1);
      \u0275\u0275listener("searchResult", function Search_Template_mpage_patient_search_searchResult_1_listener($event) {
        return ctx.onSearchResult($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("returnType", "encounter");
    }
  }, dependencies: [MpagePatientSearchComponent], styles: ["\n\n.search-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.search-container[_ngcontent-%COMP%]   mpage-patient-search[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=search.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Search, [{
    type: Component,
    args: [{ selector: "app-search", standalone: true, imports: [
      MpagePatientSearchComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="search-container">
  <mpage-patient-search
    [returnType]="'encounter'"
    (searchResult)="onSearchResult($event)">
  </mpage-patient-search>
</div>
`, styles: ["/* src/app/search/search.scss */\n.search-container {\n  height: 100%;\n}\n.search-container mpage-patient-search {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=search.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Search, { className: "Search", filePath: "src/app/search/search.ts", lineNumber: 18 });
})();
export {
  Search
};
//# sourceMappingURL=chunk-AKY225JN.js.map
