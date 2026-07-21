import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/resources/js/Pages/Category.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c371c7e4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=c371c7e4"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { Head, Link } from "/node_modules/.vite/deps/@inertiajs_react.js?v=c371c7e4";
import ErrorBoundary from "/resources/js/Components/ErrorBoundary.jsx";
import AnnouncementBar from "/resources/js/Components/Layouts/AnnouncementBar.jsx";
import Header from "/resources/js/Components/Layouts/Header.jsx";
import Footer from "/resources/js/Components/Layouts/Footer.jsx?t=1784649964647";
import ProductCard from "/resources/js/Components/ProductCard.jsx";
import { SlidersHorizontal, ArrowUpDown, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=c371c7e4";
export default function Category({ categories = [], currentCategory = null, products = { data: [] }, filters = {} }) {
  _s();
  const [selectedSort, setSelectedSort] = useState(filters.sort || "latest");
  const [selectedTag, setSelectedTag] = useState(filters.tag || "");
  const productList = Array.isArray(products) ? products : Array.isArray(products?.data) ? products.data : [];
  const handleFilterChange = (tagVal, sortVal) => {
    const params = new URLSearchParams();
    if (currentCategory) params.append("category", currentCategory.slug);
    if (tagVal) params.append("tag", tagVal);
    if (sortVal) params.append("sort", sortVal);
    window.location.href = `/category?${params.toString()}`;
  };
  return /* @__PURE__ */ jsxDEV(ErrorBoundary, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-brand-cream flex flex-col font-sans", children: [
    /* @__PURE__ */ jsxDEV(Head, { title: currentCategory ? `${currentCategory.name} - Hulla Pindou` : "All Craft Products - Hulla Pindou" }, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnnouncementBar, {}, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Header, { categories }, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-brand-oilGreen uppercase tracking-wider", children: currentCategory ? "Category Collection" : "All Products" }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-extrabold text-brand-charcoal mt-1", children: currentCategory ? currentCategory.name : "Explore All Craft Supplies ✨" }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 mt-1 max-w-xl", children: currentCategory ? currentCategory.description : "Browse our full range of 2.6mm & 5mm perler beads, pegboards, precision tweezers, and craft accessories." }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-bold text-brand-oilGreen bg-brand-pinkSalt-100 px-4 py-2 rounded-full", children: [
          "Showing ",
          productList.length,
          " items"
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white p-4 rounded-2xl border border-brand-pinkSalt-200 shadow-sm text-xs", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              href: "/category",
              className: `px-3.5 py-1.5 rounded-full font-bold transition-all ${!currentCategory ? "bg-brand-oilGreen text-white" : "bg-brand-cream text-brand-charcoal hover:bg-brand-pinkSalt-100"}`,
              children: "All"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
              lineNumber: 79,
              columnNumber: 13
            },
            this
          ),
          categories.map(
            (cat) => /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: `/category?category=${cat.slug}`,
                className: `px-3.5 py-1.5 rounded-full font-bold transition-all ${currentCategory?.id === cat.id ? "bg-brand-oilGreen text-white" : "bg-brand-cream text-brand-charcoal hover:bg-brand-pinkSalt-100"}`,
                children: cat.name
              },
              cat.id,
              false,
              {
                fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                lineNumber: 88,
                columnNumber: 15
              },
              this
            )
          )
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(SlidersHorizontal, { className: "w-3.5 h-3.5 text-brand-oilGreen" }, void 0, false, {
              fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
              lineNumber: 104,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: selectedTag,
                onChange: (e) => {
                  setSelectedTag(e.target.value);
                  handleFilterChange(e.target.value, selectedSort);
                },
                className: "bg-brand-cream border border-brand-pinkSalt-300 rounded-lg py-1.5 px-2 text-xs font-semibold focus:ring-brand-oilGreen",
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "", children: "All Tags" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 113,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "NEW", children: "New Arrivals" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 114,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "BESTSELLER", children: "Bestsellers" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 115,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "CLEARANCE", children: "Clearance" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 116,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "RECOMMENDED", children: "Recommended" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 117,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                lineNumber: 105,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(ArrowUpDown, { className: "w-3.5 h-3.5 text-brand-oilGreen" }, void 0, false, {
              fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
              lineNumber: 123,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: selectedSort,
                onChange: (e) => {
                  setSelectedSort(e.target.value);
                  handleFilterChange(selectedTag, e.target.value);
                },
                className: "bg-brand-cream border border-brand-pinkSalt-300 rounded-lg py-1.5 px-2 text-xs font-semibold focus:ring-brand-oilGreen",
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "latest", children: "Sort: Newest First" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 132,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "price_low", children: "Sort: Price Low → High" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 133,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "price_high", children: "Sort: Price High → Low" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 134,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                lineNumber: 124,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 122,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      productList.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: productList.map(
        (product) => /* @__PURE__ */ jsxDEV(ProductCard, { product }, product.id, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 145,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-16 text-center space-y-3 border border-brand-pinkSalt-200", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-8 h-8" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 151,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-brand-charcoal", children: "No craft products found" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: "Try adjusting your filters or category selection." }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { href: "/category", className: "inline-block mt-2 text-xs font-bold bg-brand-oilGreen text-white px-4 py-2 rounded-full", children: "Reset Filters" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 155,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 149,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 163,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
_s(Category, "d/0D8icQFI5rUThdJZ7grCWK5Hk=");
_c = Category;
var _c;
$RefreshReg$(_c, "Category");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFDLFNBQUksV0FBVSxvRkFDYjtBQUFBLCtCQUFDLFNBQUksV0FBVSw2R0FDYixpQ0FBQyxZQUFTLFdBQVUsYUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE2QixLQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLFFBQUcsV0FBVSwyQ0FBMEMsdUNBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBK0U7QUFBQSxRQUMvRSx1QkFBQyxPQUFFLFdBQVUseUJBQXdCLGlFQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXNGO0FBQUEsUUFDdEYsdUJBQUMsUUFBSyxNQUFLLGFBQVksV0FBVSwyRkFBeUYsNkJBQTFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFdBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVNBO0FBQUEsU0F6R0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTRHQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQXBIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcUhBLEtBdEhBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F1SEE7QUFFSjtBQUFDMUIsR0ExSXVCTixVQUFRO0FBQUEsS0FBUkE7QUFBUSxJQUFBcUM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJMaW5rIiwiRXJyb3JCb3VuZGFyeSIsIkFubm91bmNlbWVudEJhciIsIkhlYWRlciIsIkZvb3RlciIsIlByb2R1Y3RDYXJkIiwiU2xpZGVyc0hvcml6b250YWwiLCJBcnJvd1VwRG93biIsIlNwYXJrbGVzIiwiQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiY3VycmVudENhdGVnb3J5IiwicHJvZHVjdHMiLCJkYXRhIiwiZmlsdGVycyIsIl9zIiwic2VsZWN0ZWRTb3J0Iiwic2V0U2VsZWN0ZWRTb3J0Iiwic29ydCIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJ0YWciLCJwcm9kdWN0TGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImhhbmRsZUZpbHRlckNoYW5nZSIsInRhZ1ZhbCIsInNvcnRWYWwiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzbHVnIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9TdHJpbmciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJtYXAiLCJjYXQiLCJpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2R1Y3QiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDYXRlZ29yeS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZCwgTGluayB9IGZyb20gJ0BpbmVydGlhanMvcmVhY3QnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vQ29tcG9uZW50cy9FcnJvckJvdW5kYXJ5JztcbmltcG9ydCBBbm5vdW5jZW1lbnRCYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXRzL0Fubm91bmNlbWVudEJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dHMvRm9vdGVyJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1Byb2R1Y3RDYXJkJztcbmltcG9ydCB7IFNsaWRlcnNIb3Jpem9udGFsLCBBcnJvd1VwRG93biwgU3BhcmtsZXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSh7IGNhdGVnb3JpZXMgPSBbXSwgY3VycmVudENhdGVnb3J5ID0gbnVsbCwgcHJvZHVjdHMgPSB7IGRhdGE6IFtdIH0sIGZpbHRlcnMgPSB7fSB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZFNvcnQsIHNldFNlbGVjdGVkU29ydF0gPSB1c2VTdGF0ZShmaWx0ZXJzLnNvcnQgfHwgJ2xhdGVzdCcpO1xuICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlKGZpbHRlcnMudGFnIHx8ICcnKTtcblxuICBjb25zdCBwcm9kdWN0TGlzdCA9IEFycmF5LmlzQXJyYXkocHJvZHVjdHMpXG4gICAgPyBwcm9kdWN0c1xuICAgIDogKEFycmF5LmlzQXJyYXkocHJvZHVjdHM/LmRhdGEpID8gcHJvZHVjdHMuZGF0YSA6IFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSAodGFnVmFsLCBzb3J0VmFsKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGlmIChjdXJyZW50Q2F0ZWdvcnkpIHBhcmFtcy5hcHBlbmQoJ2NhdGVnb3J5JywgY3VycmVudENhdGVnb3J5LnNsdWcpO1xuICAgIGlmICh0YWdWYWwpIHBhcmFtcy5hcHBlbmQoJ3RhZycsIHRhZ1ZhbCk7XG4gICAgaWYgKHNvcnRWYWwpIHBhcmFtcy5hcHBlbmQoJ3NvcnQnLCBzb3J0VmFsKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvY2F0ZWdvcnk/JHtwYXJhbXMudG9TdHJpbmcoKX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnk+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYnJhbmQtY3JlYW0gZmxleCBmbGV4LWNvbCBmb250LXNhbnNcIj5cbiAgICAgIDxIZWFkIHRpdGxlPXtjdXJyZW50Q2F0ZWdvcnkgPyBgJHtjdXJyZW50Q2F0ZWdvcnkubmFtZX0gLSBIdWxsYSBQaW5kb3VgIDogXCJBbGwgQ3JhZnQgUHJvZHVjdHMgLSBIdWxsYSBQaW5kb3VcIn0gLz5cblxuICAgICAgPEFubm91bmNlbWVudEJhciAvPlxuICAgICAgPEhlYWRlciBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgbWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggcHktOCBzcGFjZS15LThcIj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBDYXRlZ29yeSBIZWFkZXIgQmFubmVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIHAtOCBib3JkZXIgYm9yZGVyLWJyYW5kLXBpbmtTYWx0LTIwMCBzaGFkb3ctc20gZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgc206aXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtYnJhbmQtb2lsR3JlZW4gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW50Q2F0ZWdvcnkgPyBcIkNhdGVnb3J5IENvbGxlY3Rpb25cIiA6IFwiQWxsIFByb2R1Y3RzXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1icmFuZC1jaGFyY29hbCBtdC0xXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW50Q2F0ZWdvcnkgPyBjdXJyZW50Q2F0ZWdvcnkubmFtZSA6IFwiRXhwbG9yZSBBbGwgQ3JhZnQgU3VwcGxpZXMg4pyoXCJ9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTEgbWF4LXcteGxcIj5cbiAgICAgICAgICAgICAge2N1cnJlbnRDYXRlZ29yeSA/IGN1cnJlbnRDYXRlZ29yeS5kZXNjcmlwdGlvbiA6IFwiQnJvd3NlIG91ciBmdWxsIHJhbmdlIG9mIDIuNm1tICYgNW1tIHBlcmxlciBiZWFkcywgcGVnYm9hcmRzLCBwcmVjaXNpb24gdHdlZXplcnMsIGFuZCBjcmFmdCBhY2Nlc3Nvcmllcy5cIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1icmFuZC1vaWxHcmVlbiBiZy1icmFuZC1waW5rU2FsdC0xMDAgcHgtNCBweS0yIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgU2hvd2luZyB7cHJvZHVjdExpc3QubGVuZ3RofSBpdGVtc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRmlsdGVyIEJhciAmIFNvcnRpbmcgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RyZXRjaCBtZDppdGVtcy1jZW50ZXIgZ2FwLTQgYmctd2hpdGUgcC00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItYnJhbmQtcGlua1NhbHQtMjAwIHNoYWRvdy1zbSB0ZXh0LXhzXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIENhdGVnb3JpZXMgUXVpY2sgRmlsdGVyIFBpbGxzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiL2NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMy41IHB5LTEuNSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgIWN1cnJlbnRDYXRlZ29yeSA/ICdiZy1icmFuZC1vaWxHcmVlbiB0ZXh0LXdoaXRlJyA6ICdiZy1icmFuZC1jcmVhbSB0ZXh0LWJyYW5kLWNoYXJjb2FsIGhvdmVyOmJnLWJyYW5kLXBpbmtTYWx0LTEwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQpID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2NhdC5pZH1cbiAgICAgICAgICAgICAgICBocmVmPXtgL2NhdGVnb3J5P2NhdGVnb3J5PSR7Y2F0LnNsdWd9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMS41IHJvdW5kZWQtZnVsbCBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXRlZ29yeT8uaWQgPT09IGNhdC5pZCA/ICdiZy1icmFuZC1vaWxHcmVlbiB0ZXh0LXdoaXRlJyA6ICdiZy1icmFuZC1jcmVhbSB0ZXh0LWJyYW5kLWNoYXJjb2FsIGhvdmVyOmJnLWJyYW5kLXBpbmtTYWx0LTEwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXQubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogVGFnICYgU29ydCBTZWxlY3RvcnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgey8qIFRhZyBzZWxlY3RvciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgPFNsaWRlcnNIb3Jpem9udGFsIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYnJhbmQtb2lsR3JlZW5cIiAvPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWcoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCBzZWxlY3RlZFNvcnQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYnJhbmQtY3JlYW0gYm9yZGVyIGJvcmRlci1icmFuZC1waW5rU2FsdC0zMDAgcm91bmRlZC1sZyBweS0xLjUgcHgtMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgZm9jdXM6cmluZy1icmFuZC1vaWxHcmVlblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsIFRhZ3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkVXXCI+TmV3IEFycml2YWxzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJFU1RTRUxMRVJcIj5CZXN0c2VsbGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDTEVBUkFOQ0VcIj5DbGVhcmFuY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUkVDT01NRU5ERURcIj5SZWNvbW1lbmRlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU29ydCBzZWxlY3RvciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgPEFycm93VXBEb3duIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtYnJhbmQtb2lsR3JlZW5cIiAvPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkU29ydH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkU29ydChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXJDaGFuZ2Uoc2VsZWN0ZWRUYWcsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJyYW5kLWNyZWFtIGJvcmRlciBib3JkZXItYnJhbmQtcGlua1NhbHQtMzAwIHJvdW5kZWQtbGcgcHktMS41IHB4LTIgdGV4dC14cyBmb250LXNlbWlib2xkIGZvY3VzOnJpbmctYnJhbmQtb2lsR3JlZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxhdGVzdFwiPlNvcnQ6IE5ld2VzdCBGaXJzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZV9sb3dcIj5Tb3J0OiBQcmljZSBMb3cg4oaSIEhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2VfaGlnaFwiPlNvcnQ6IFByaWNlIEhpZ2gg4oaSIExvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBQcm9kdWN0IEdyaWQgKi99XG4gICAgICAgIHtwcm9kdWN0TGlzdC5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNlwiPlxuICAgICAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBwLTE2IHRleHQtY2VudGVyIHNwYWNlLXktMyBib3JkZXIgYm9yZGVyLWJyYW5kLXBpbmtTYWx0LTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgYmctYnJhbmQtcGlua1NhbHQtMTAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIHRleHQtYnJhbmQtb2lsR3JlZW5cIj5cbiAgICAgICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LWJyYW5kLWNoYXJjb2FsXCI+Tm8gY3JhZnQgcHJvZHVjdHMgZm91bmQ8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+VHJ5IGFkanVzdGluZyB5b3VyIGZpbHRlcnMgb3IgY2F0ZWdvcnkgc2VsZWN0aW9uLjwvcD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcnlcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXQtMiB0ZXh0LXhzIGZvbnQtYm9sZCBiZy1icmFuZC1vaWxHcmVlbiB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgUmVzZXQgRmlsdGVyc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgICA8L0Vycm9yQm91bmRhcnk+XG4gICk7XG59XG4iXSwiZmlsZSI6IkM6L1VzZXJzL2NoYW5qL09uZURyaXZlL0RvY3VtZW50cy9HaXRIdWIvUGluZG91LUVjb21tZXJjZS1XZWJzaXRlL3Jlc291cmNlcy9qcy9QYWdlcy9DYXRlZ29yeS5qc3gifQ==