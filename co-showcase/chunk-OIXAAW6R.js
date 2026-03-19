import {
  Router
} from "./chunk-I6RTURXQ.js";
import {
  ButtonDirective,
  ChangeDetectionStrategy,
  Component,
  MPageService,
  MpageDateRangePickerComponent,
  MpageIconComponent,
  MpagePatientSearchComponent,
  MpageTableComponent,
  RemainingScreenSpaceDirective,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5B3TWA2.js";

// src/app/search/search.ts
var _c0 = () => ({ showToolbar: true, allowColumnSort: true, columnFilter: true });
function Search_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mpage-table", 10);
    \u0275\u0275twoWayListener("columnConfigChange", function Search_Conditional_9_Template_mpage_table_columnConfigChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchColumnConfig, $event) || (ctx_r1.searchColumnConfig = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("clickRow", function Search_Conditional_9_Template_mpage_table_clickRow_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.searchResults());
    \u0275\u0275twoWayProperty("columnConfig", ctx_r1.searchColumnConfig);
    \u0275\u0275property("params", \u0275\u0275pureFunction0(3, _c0));
  }
}
function Search_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mpage-icon");
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Use the search above to find patients");
    \u0275\u0275elementEnd()();
  }
}
var Search = class _Search {
  router = inject(Router);
  mPage = inject(MPageService);
  searchResults = signal([], ...ngDevMode ? [{ debugName: "searchResults" }] : []);
  dateRange = signal({ range: "", fromDate: /* @__PURE__ */ new Date(), toDate: /* @__PURE__ */ new Date() }, ...ngDevMode ? [{ debugName: "dateRange" }] : []);
  searchColumnConfig = signal({
    columns: [
      { column: "name", label: "Name", type: "text", visible: true, sticky: false, width: 200, justification: "left" },
      { column: "mrn", label: "MRN", type: "text", visible: true, sticky: false, width: 120, justification: "left" },
      { column: "birthDate", label: "DOB", type: "date", visible: true, sticky: false, width: 120, justification: "left" },
      { column: "sex", label: "Sex", type: "text", visible: true, sticky: false, width: 80, justification: "left" },
      { column: "facility", label: "Facility", type: "text", visible: true, sticky: false, width: 150, justification: "left" },
      { column: "nurseUnit", label: "Nurse Unit", type: "text", visible: true, sticky: false, width: 130, justification: "left" },
      { column: "roomBed", label: "Room/Bed", type: "text", visible: true, sticky: false, width: 120, justification: "left" },
      { column: "regDtTm", label: "Admit Date", type: "datetime", visible: true, sticky: false, width: 150, justification: "left" }
    ],
    columnSort: []
  }, ...ngDevMode ? [{ debugName: "searchColumnConfig" }] : []);
  onSearchResult(result) {
    if (result) {
      this.searchResults.update((current) => [...current, result]);
    }
  }
  onRowClick(row) {
    const personId = row.personId || row.person_id;
    const encntrId = row.encntrId || row.encntr_id;
    if (personId && encntrId) {
      this.router.navigate(["/patient", personId, encntrId]);
    }
  }
  clearResults() {
    this.searchResults.set([]);
  }
  static \u0275fac = function Search_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Search)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Search, selectors: [["app-search"]], decls: 11, vars: 4, consts: [[1, "search-container"], [1, "search-bar"], [1, "search-controls"], [1, "search-input"], [3, "searchResult", "returnType"], [3, "label"], ["coButton", "stroked", 3, "click"], ["coRemainingScreenSpace", "", 1, "results-table", 3, "shorten"], [3, "data", "columnConfig", "params"], [1, "empty-state"], [3, "columnConfigChange", "clickRow", "data", "columnConfig", "params"]], template: function Search_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mpage-patient-search", 4);
      \u0275\u0275listener("searchResult", function Search_Template_mpage_patient_search_searchResult_4_listener($event) {
        return ctx.onSearchResult($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "mpage-date-range-picker", 5);
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function Search_Template_button_click_6_listener() {
        return ctx.clearResults();
      });
      \u0275\u0275text(7, "Clear");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275conditionalCreate(9, Search_Conditional_9_Template, 1, 4, "mpage-table", 8)(10, Search_Conditional_10_Template, 5, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("returnType", "encounter");
      \u0275\u0275advance();
      \u0275\u0275property("label", "Date Range");
      \u0275\u0275advance(3);
      \u0275\u0275property("shorten", 12);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchResults().length > 0 ? 9 : 10);
    }
  }, dependencies: [
    MpagePatientSearchComponent,
    MpageTableComponent,
    ButtonDirective,
    MpageDateRangePickerComponent,
    RemainingScreenSpaceDirective,
    MpageIconComponent
  ], styles: ["\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 16px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 8px;\n  background: #f5f5f5;\n  border-radius: 4px;\n}\n.search-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.results-table[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: grey;\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   mpage-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=search.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Search, [{
    type: Component,
    args: [{ selector: "app-search", standalone: true, imports: [
      MpagePatientSearchComponent,
      MpageTableComponent,
      ButtonDirective,
      MpageDateRangePickerComponent,
      RemainingScreenSpaceDirective,
      MpageIconComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="search-container">
  <div class="search-bar">
    <div class="search-controls">
      <div class="search-input">
        <mpage-patient-search
          [returnType]="'encounter'"
          (searchResult)="onSearchResult($event)">
        </mpage-patient-search>
      </div>
      <mpage-date-range-picker [label]="'Date Range'"></mpage-date-range-picker>
      <button coButton="stroked" (click)="clearResults()">Clear</button>
    </div>
  </div>

  <div class="results-table" coRemainingScreenSpace [shorten]="12">
    @if (searchResults().length > 0) {
      <mpage-table
        [data]="searchResults()"
        [(columnConfig)]="searchColumnConfig"
        [params]="{showToolbar: true, allowColumnSort: true, columnFilter: true}"
        (clickRow)="onRowClick($event)">
      </mpage-table>
    } @else {
      <div class="empty-state">
        <mpage-icon>search</mpage-icon>
        <p>Use the search above to find patients</p>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/search/search.scss */\n.search-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 16px;\n}\n.search-bar {\n  flex-shrink: 0;\n  padding: 8px;\n  background: #f5f5f5;\n  border-radius: 4px;\n}\n.search-controls {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-input {\n  flex: 1 1 auto;\n}\n.results-table {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: grey;\n  gap: 8px;\n}\n.empty-state mpage-icon {\n  font-size: 48px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=search.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Search, { className: "Search", filePath: "src/app/search/search.ts", lineNumber: 30 });
})();
export {
  Search
};
//# sourceMappingURL=chunk-OIXAAW6R.js.map
