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
export default function Category(props) {
  _s();
  console.log("CATEGORY PROPS:", props);
  const { categories = [], currentCategory = null, products = { data: [] }, filters = {} } = props || {};
  const safeFilters = filters || {};
  const [selectedSort, setSelectedSort] = useState(safeFilters.sort || "latest");
  const [selectedTag, setSelectedTag] = useState(safeFilters.tag || "");
  const productList = Array.isArray(products) ? products : Array.isArray(products?.data) ? products.data : [];
  const handleFilterChange = (tagVal, sortVal) => {
    const params = new URLSearchParams();
    if (currentCategory) params.append("category", currentCategory.slug);
    if (tagVal) params.append("tag", tagVal);
    if (sortVal) params.append("sort", sortVal);
    window.location.href = `/category?${params.toString()}`;
  };
  return /* @__PURE__ */ jsxDEV(ErrorBoundary, { children: /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-brand-cream flex flex-col font-sans", children: [
    /* @__PURE__ */ jsxDEV(AnnouncementBar, {}, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Header, { categories }, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-brand-oilGreen uppercase tracking-wider", children: currentCategory ? "Category Collection" : "All Products" }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-extrabold text-brand-charcoal mt-1", children: currentCategory ? currentCategory.name : "Explore All Craft Supplies ✨" }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 mt-1 max-w-xl", children: currentCategory ? currentCategory.description : "Browse our full range of 2.6mm & 5mm perler beads, pegboards, precision tweezers, and craft accessories." }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-bold text-brand-oilGreen bg-brand-pinkSalt-100 px-4 py-2 rounded-full", children: [
          "Showing ",
          productList.length,
          " items"
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 59,
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
              lineNumber: 82,
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
                lineNumber: 91,
                columnNumber: 15
              },
              this
            )
          )
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(SlidersHorizontal, { className: "w-3.5 h-3.5 text-brand-oilGreen" }, void 0, false, {
              fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
              lineNumber: 107,
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
                    lineNumber: 116,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "NEW", children: "New Arrivals" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 117,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "BESTSELLER", children: "Bestsellers" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 118,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "CLEARANCE", children: "Clearance" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 119,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "RECOMMENDED", children: "Recommended" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 120,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                lineNumber: 108,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(ArrowUpDown, { className: "w-3.5 h-3.5 text-brand-oilGreen" }, void 0, false, {
              fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
              lineNumber: 126,
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
                    lineNumber: 135,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "price_low", children: "Sort: Price Low → High" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 136,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "price_high", children: "Sort: Price High → Low" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 137,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                lineNumber: 127,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 125,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      productList.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: productList.map(
        (product) => /* @__PURE__ */ jsxDEV(ProductCard, { product }, product.id, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 148,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-16 text-center space-y-3 border border-brand-pinkSalt-200", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-8 h-8" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 154,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-brand-charcoal", children: "No craft products found" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: "Try adjusting your filters or category selection." }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { href: "/category", className: "inline-block mt-2 text-xs font-bold bg-brand-oilGreen text-white px-4 py-2 rounded-full", children: "Reset Filters" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 158,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 152,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
_s(Category, "vq6Ga8LFp8WJXEjKavpTh7MEZvg=");
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

//# sourceMappingURL=data:application/json;base64,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V0FBVSxvRkFDYjtBQUFBLCtCQUFDLFNBQUksV0FBVSw2R0FDYixpQ0FBQyxZQUFTLFdBQVUsYUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE2QixLQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUNBLHVCQUFDLFFBQUcsV0FBVSwyQ0FBMEMsdUNBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBK0U7QUFBQSxRQUMvRSx1QkFBQyxPQUFFLFdBQVUseUJBQXdCLGlFQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXNGO0FBQUEsUUFDdEYsdUJBQUMsUUFBSyxNQUFLLGFBQVksV0FBVSwyRkFBeUYsNkJBQTFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFdBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVNBO0FBQUEsU0F6R0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTRHQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQXBIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcUhBLEtBdEhBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F1SEE7QUFFSjtBQUFDbEMsR0E3SXVCRixVQUFRO0FBQUEsS0FBUkE7QUFBUSxJQUFBeUM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJMaW5rIiwiRXJyb3JCb3VuZGFyeSIsIkFubm91bmNlbWVudEJhciIsIkhlYWRlciIsIkZvb3RlciIsIlByb2R1Y3RDYXJkIiwiU2xpZGVyc0hvcml6b250YWwiLCJBcnJvd1VwRG93biIsIlNwYXJrbGVzIiwiQ2F0ZWdvcnkiLCJwcm9wcyIsIl9zIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiLCJjdXJyZW50Q2F0ZWdvcnkiLCJwcm9kdWN0cyIsImRhdGEiLCJmaWx0ZXJzIiwic2FmZUZpbHRlcnMiLCJzZWxlY3RlZFNvcnQiLCJzZXRTZWxlY3RlZFNvcnQiLCJzb3J0Iiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsInRhZyIsInByb2R1Y3RMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwidGFnVmFsIiwic29ydFZhbCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNsdWciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0b1N0cmluZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsIm1hcCIsImNhdCIsImlkIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJvZHVjdCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNhdGVnb3J5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkLCBMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9yZWFjdCc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9Db21wb25lbnRzL0Vycm9yQm91bmRhcnknO1xuaW1wb3J0IEFubm91bmNlbWVudEJhciBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dHMvQW5ub3VuY2VtZW50QmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgU2xpZGVyc0hvcml6b250YWwsIEFycm93VXBEb3duLCBTcGFya2xlcyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwiQ0FURUdPUlkgUFJPUFM6XCIsIHByb3BzKTtcbiAgY29uc3QgeyBjYXRlZ29yaWVzID0gW10sIGN1cnJlbnRDYXRlZ29yeSA9IG51bGwsIHByb2R1Y3RzID0geyBkYXRhOiBbXSB9LCBmaWx0ZXJzID0ge30gfSA9IHByb3BzIHx8IHt9O1xuICBjb25zdCBzYWZlRmlsdGVycyA9IGZpbHRlcnMgfHwge307XG4gIGNvbnN0IFtzZWxlY3RlZFNvcnQsIHNldFNlbGVjdGVkU29ydF0gPSB1c2VTdGF0ZShzYWZlRmlsdGVycy5zb3J0IHx8ICdsYXRlc3QnKTtcbiAgY29uc3QgW3NlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZ10gPSB1c2VTdGF0ZShzYWZlRmlsdGVycy50YWcgfHwgJycpO1xuXG4gIGNvbnN0IHByb2R1Y3RMaXN0ID0gQXJyYXkuaXNBcnJheShwcm9kdWN0cylcbiAgICA/IHByb2R1Y3RzXG4gICAgOiAoQXJyYXkuaXNBcnJheShwcm9kdWN0cz8uZGF0YSkgPyBwcm9kdWN0cy5kYXRhIDogW10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9ICh0YWdWYWwsIHNvcnRWYWwpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgaWYgKGN1cnJlbnRDYXRlZ29yeSkgcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcnknLCBjdXJyZW50Q2F0ZWdvcnkuc2x1Zyk7XG4gICAgaWYgKHRhZ1ZhbCkgcGFyYW1zLmFwcGVuZCgndGFnJywgdGFnVmFsKTtcbiAgICBpZiAoc29ydFZhbCkgcGFyYW1zLmFwcGVuZCgnc29ydCcsIHNvcnRWYWwpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9jYXRlZ29yeT8ke3BhcmFtcy50b1N0cmluZygpfWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1icmFuZC1jcmVhbSBmbGV4IGZsZXgtY29sIGZvbnQtc2Fuc1wiPlxuICAgICAgey8qIDxIZWFkIHRpdGxlPXtjdXJyZW50Q2F0ZWdvcnkgPyBgJHtjdXJyZW50Q2F0ZWdvcnkubmFtZX0gLSBIdWxsYSBQaW5kb3VgIDogXCJBbGwgQ3JhZnQgUHJvZHVjdHMgLSBIdWxsYSBQaW5kb3VcIn0gLz4gKi99XG5cbiAgICAgIDxBbm5vdW5jZW1lbnRCYXIgLz5cbiAgICAgIDxIZWFkZXIgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04IHB5LTggc3BhY2UteS04XCI+XG4gICAgICAgIFxuICAgICAgICB7LyogQ2F0ZWdvcnkgSGVhZGVyIEJhbm5lciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBwLTggYm9yZGVyIGJvcmRlci1icmFuZC1waW5rU2FsdC0yMDAgc2hhZG93LXNtIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LWJyYW5kLW9pbEdyZWVuIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICB7Y3VycmVudENhdGVnb3J5ID8gXCJDYXRlZ29yeSBDb2xsZWN0aW9uXCIgOiBcIkFsbCBQcm9kdWN0c1wifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtYnJhbmQtY2hhcmNvYWwgbXQtMVwiPlxuICAgICAgICAgICAgICB7Y3VycmVudENhdGVnb3J5ID8gY3VycmVudENhdGVnb3J5Lm5hbWUgOiBcIkV4cGxvcmUgQWxsIENyYWZ0IFN1cHBsaWVzIOKcqFwifVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtdC0xIG1heC13LXhsXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW50Q2F0ZWdvcnkgPyBjdXJyZW50Q2F0ZWdvcnkuZGVzY3JpcHRpb24gOiBcIkJyb3dzZSBvdXIgZnVsbCByYW5nZSBvZiAyLjZtbSAmIDVtbSBwZXJsZXIgYmVhZHMsIHBlZ2JvYXJkcywgcHJlY2lzaW9uIHR3ZWV6ZXJzLCBhbmQgY3JhZnQgYWNjZXNzb3JpZXMuXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtYnJhbmQtb2lsR3JlZW4gYmctYnJhbmQtcGlua1NhbHQtMTAwIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgIFNob3dpbmcge3Byb2R1Y3RMaXN0Lmxlbmd0aH0gaXRlbXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZpbHRlciBCYXIgJiBTb3J0aW5nICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0cmV0Y2ggbWQ6aXRlbXMtY2VudGVyIGdhcC00IGJnLXdoaXRlIHAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWJyYW5kLXBpbmtTYWx0LTIwMCBzaGFkb3ctc20gdGV4dC14c1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBDYXRlZ29yaWVzIFF1aWNrIEZpbHRlciBQaWxscyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9jYXRlZ29yeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMuNSBweS0xLjUgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICFjdXJyZW50Q2F0ZWdvcnkgPyAnYmctYnJhbmQtb2lsR3JlZW4gdGV4dC13aGl0ZScgOiAnYmctYnJhbmQtY3JlYW0gdGV4dC1icmFuZC1jaGFyY29hbCBob3ZlcjpiZy1icmFuZC1waW5rU2FsdC0xMDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtjYXQuaWR9XG4gICAgICAgICAgICAgICAgaHJlZj17YC9jYXRlZ29yeT9jYXRlZ29yeT0ke2NhdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMy41IHB5LTEuNSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q2F0ZWdvcnk/LmlkID09PSBjYXQuaWQgPyAnYmctYnJhbmQtb2lsR3JlZW4gdGV4dC13aGl0ZScgOiAnYmctYnJhbmQtY3JlYW0gdGV4dC1icmFuZC1jaGFyY29hbCBob3ZlcjpiZy1icmFuZC1waW5rU2FsdC0xMDAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2F0Lm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFRhZyAmIFNvcnQgU2VsZWN0b3JzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIHsvKiBUYWcgc2VsZWN0b3IgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxTbGlkZXJzSG9yaXpvbnRhbCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWJyYW5kLW9pbEdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRhZ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFnKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlckNoYW5nZShlLnRhcmdldC52YWx1ZSwgc2VsZWN0ZWRTb3J0KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJyYW5kLWNyZWFtIGJvcmRlciBib3JkZXItYnJhbmQtcGlua1NhbHQtMzAwIHJvdW5kZWQtbGcgcHktMS41IHB4LTIgdGV4dC14cyBmb250LXNlbWlib2xkIGZvY3VzOnJpbmctYnJhbmQtb2lsR3JlZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBUYWdzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5FV1wiPk5ldyBBcnJpdmFsczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCRVNUU0VMTEVSXCI+QmVzdHNlbGxlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0xFQVJBTkNFXCI+Q2xlYXJhbmNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJFQ09NTUVOREVEXCI+UmVjb21tZW5kZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFNvcnQgc2VsZWN0b3IgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxBcnJvd1VwRG93biBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWJyYW5kLW9pbEdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFNvcnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFNvcnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyQ2hhbmdlKHNlbGVjdGVkVGFnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1icmFuZC1jcmVhbSBib3JkZXIgYm9yZGVyLWJyYW5kLXBpbmtTYWx0LTMwMCByb3VuZGVkLWxnIHB5LTEuNSBweC0yIHRleHQteHMgZm9udC1zZW1pYm9sZCBmb2N1czpyaW5nLWJyYW5kLW9pbEdyZWVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsYXRlc3RcIj5Tb3J0OiBOZXdlc3QgRmlyc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2VfbG93XCI+U29ydDogUHJpY2UgTG93IOKGkiBIaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlX2hpZ2hcIj5Tb3J0OiBQcmljZSBIaWdoIOKGkiBMb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUHJvZHVjdCBHcmlkICovfVxuICAgICAgICB7cHJvZHVjdExpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0TGlzdC5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgcC0xNiB0ZXh0LWNlbnRlciBzcGFjZS15LTMgYm9yZGVyIGJvcmRlci1icmFuZC1waW5rU2FsdC0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLWJyYW5kLXBpbmtTYWx0LTEwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byB0ZXh0LWJyYW5kLW9pbEdyZWVuXCI+XG4gICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTggaC04XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1icmFuZC1jaGFyY29hbFwiPk5vIGNyYWZ0IHByb2R1Y3RzIGZvdW5kPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlRyeSBhZGp1c3RpbmcgeW91ciBmaWx0ZXJzIG9yIGNhdGVnb3J5IHNlbGVjdGlvbi48L3A+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5XCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG10LTIgdGV4dC14cyBmb250LWJvbGQgYmctYnJhbmQtb2lsR3JlZW4gdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIFJlc2V0IEZpbHRlcnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApO1xufVxuIl0sImZpbGUiOiJDOi9Vc2Vycy9jaGFuai9PbmVEcml2ZS9Eb2N1bWVudHMvR2l0SHViL1BpbmRvdS1FY29tbWVyY2UtV2Vic2l0ZS9yZXNvdXJjZXMvanMvUGFnZXMvQ2F0ZWdvcnkuanN4In0=