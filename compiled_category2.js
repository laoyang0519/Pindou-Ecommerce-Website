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
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnnouncementBar, {}, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Header, { categories }, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-brand-oilGreen uppercase tracking-wider", children: currentCategory ? "Category Collection" : "All Products" }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-extrabold text-brand-charcoal mt-1", children: currentCategory ? currentCategory.name : "Explore All Craft Supplies ✨" }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 63,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 mt-1 max-w-xl", children: currentCategory ? currentCategory.description : "Browse our full range of 2.6mm & 5mm perler beads, pegboards, precision tweezers, and craft accessories." }, void 0, false, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-bold text-brand-oilGreen bg-brand-pinkSalt-100 px-4 py-2 rounded-full", children: [
          "Showing ",
          productList.length,
          " items"
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 58,
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
              lineNumber: 81,
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
                lineNumber: 90,
                columnNumber: 15
              },
              this
            )
          )
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(SlidersHorizontal, { className: "w-3.5 h-3.5 text-brand-oilGreen" }, void 0, false, {
              fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
              lineNumber: 106,
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
                    lineNumber: 115,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "NEW", children: "New Arrivals" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 116,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "BESTSELLER", children: "Bestsellers" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 117,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "CLEARANCE", children: "Clearance" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 118,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "RECOMMENDED", children: "Recommended" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 119,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                lineNumber: 107,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxDEV(ArrowUpDown, { className: "w-3.5 h-3.5 text-brand-oilGreen" }, void 0, false, {
              fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
              lineNumber: 125,
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
                    lineNumber: 134,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "price_low", children: "Sort: Price Low → High" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 135,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "price_high", children: "Sort: Price High → Low" }, void 0, false, {
                    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                    lineNumber: 136,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
                lineNumber: 126,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      productList.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: productList.map(
        (product) => /* @__PURE__ */ jsxDEV(ProductCard, { product }, product.id, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 147,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-16 text-center space-y-3 border border-brand-pinkSalt-200", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-8 h-8" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 153,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-brand-charcoal", children: "No craft products found" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 155,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: "Try adjusting your filters or category selection." }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { href: "/category", className: "inline-block mt-2 text-xs font-bold bg-brand-oilGreen text-white px-4 py-2 rounded-full", children: "Reset Filters" }, void 0, false, {
          fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
      lineNumber: 165,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/chanj/OneDrive/Documents/GitHub/Pindou-Ecommerce-Website/resources/js/Pages/Category.jsx",
    lineNumber: 48,
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

//# sourceMappingURL=data:application/json;base64,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QUFBQSxlQUErQztBQUFBLE1BQ2hELEtBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUlBLElBRUEsdUJBQUMsU0FBSSxXQUFVLG9GQUNiO0FBQUEsK0JBQUMsU0FBSSxXQUFVLDZHQUNiLGlDQUFDLFlBQVMsV0FBVSxhQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTZCLEtBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0EsdUJBQUMsUUFBRyxXQUFVLDJDQUEwQyx1Q0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUErRTtBQUFBLFFBQy9FLHVCQUFDLE9BQUUsV0FBVSx5QkFBd0IsaUVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBc0Y7QUFBQSxRQUN0Rix1QkFBQyxRQUFLLE1BQUssYUFBWSxXQUFVLDJGQUF5Riw2QkFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsV0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBU0E7QUFBQSxTQXpHSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNEdBO0FBQUEsSUFFQSx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BcEhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FxSEEsS0F0SEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXVIQTtBQUVKO0FBQUNqQyxHQTVJdUJGLFVBQVE7QUFBQSxLQUFSQTtBQUFRLElBQUF3QztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkxpbmsiLCJFcnJvckJvdW5kYXJ5IiwiQW5ub3VuY2VtZW50QmFyIiwiSGVhZGVyIiwiRm9vdGVyIiwiUHJvZHVjdENhcmQiLCJTbGlkZXJzSG9yaXpvbnRhbCIsIkFycm93VXBEb3duIiwiU3BhcmtsZXMiLCJDYXRlZ29yeSIsInByb3BzIiwiX3MiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcmllcyIsImN1cnJlbnRDYXRlZ29yeSIsInByb2R1Y3RzIiwiZGF0YSIsImZpbHRlcnMiLCJzZWxlY3RlZFNvcnQiLCJzZXRTZWxlY3RlZFNvcnQiLCJzb3J0Iiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsInRhZyIsInByb2R1Y3RMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwidGFnVmFsIiwic29ydFZhbCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNsdWciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0b1N0cmluZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsIm1hcCIsImNhdCIsImlkIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJvZHVjdCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNhdGVnb3J5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkLCBMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9yZWFjdCc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9Db21wb25lbnRzL0Vycm9yQm91bmRhcnknO1xuaW1wb3J0IEFubm91bmNlbWVudEJhciBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dHMvQW5ub3VuY2VtZW50QmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXlvdXRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgU2xpZGVyc0hvcml6b250YWwsIEFycm93VXBEb3duLCBTcGFya2xlcyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwiQ0FURUdPUlkgUFJPUFM6XCIsIHByb3BzKTtcbiAgY29uc3QgeyBjYXRlZ29yaWVzID0gW10sIGN1cnJlbnRDYXRlZ29yeSA9IG51bGwsIHByb2R1Y3RzID0geyBkYXRhOiBbXSB9LCBmaWx0ZXJzID0ge30gfSA9IHByb3BzIHx8IHt9O1xuICBjb25zdCBbc2VsZWN0ZWRTb3J0LCBzZXRTZWxlY3RlZFNvcnRdID0gdXNlU3RhdGUoZmlsdGVycy5zb3J0IHx8ICdsYXRlc3QnKTtcbiAgY29uc3QgW3NlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZ10gPSB1c2VTdGF0ZShmaWx0ZXJzLnRhZyB8fCAnJyk7XG5cbiAgY29uc3QgcHJvZHVjdExpc3QgPSBBcnJheS5pc0FycmF5KHByb2R1Y3RzKVxuICAgID8gcHJvZHVjdHNcbiAgICA6IChBcnJheS5pc0FycmF5KHByb2R1Y3RzPy5kYXRhKSA/IHByb2R1Y3RzLmRhdGEgOiBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2hhbmdlID0gKHRhZ1ZhbCwgc29ydFZhbCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBpZiAoY3VycmVudENhdGVnb3J5KSBwYXJhbXMuYXBwZW5kKCdjYXRlZ29yeScsIGN1cnJlbnRDYXRlZ29yeS5zbHVnKTtcbiAgICBpZiAodGFnVmFsKSBwYXJhbXMuYXBwZW5kKCd0YWcnLCB0YWdWYWwpO1xuICAgIGlmIChzb3J0VmFsKSBwYXJhbXMuYXBwZW5kKCdzb3J0Jywgc29ydFZhbCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2NhdGVnb3J5PyR7cGFyYW1zLnRvU3RyaW5nKCl9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJyYW5kLWNyZWFtIGZsZXggZmxleC1jb2wgZm9udC1zYW5zXCI+XG4gICAgICA8SGVhZCB0aXRsZT17Y3VycmVudENhdGVnb3J5ID8gYCR7Y3VycmVudENhdGVnb3J5Lm5hbWV9IC0gSHVsbGEgUGluZG91YCA6IFwiQWxsIENyYWZ0IFByb2R1Y3RzIC0gSHVsbGEgUGluZG91XCJ9IC8+XG5cbiAgICAgIDxBbm5vdW5jZW1lbnRCYXIgLz5cbiAgICAgIDxIZWFkZXIgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04IHB5LTggc3BhY2UteS04XCI+XG4gICAgICAgIFxuICAgICAgICB7LyogQ2F0ZWdvcnkgSGVhZGVyIEJhbm5lciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTN4bCBwLTggYm9yZGVyIGJvcmRlci1icmFuZC1waW5rU2FsdC0yMDAgc2hhZG93LXNtIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHNtOml0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LWJyYW5kLW9pbEdyZWVuIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICB7Y3VycmVudENhdGVnb3J5ID8gXCJDYXRlZ29yeSBDb2xsZWN0aW9uXCIgOiBcIkFsbCBQcm9kdWN0c1wifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRleHQtYnJhbmQtY2hhcmNvYWwgbXQtMVwiPlxuICAgICAgICAgICAgICB7Y3VycmVudENhdGVnb3J5ID8gY3VycmVudENhdGVnb3J5Lm5hbWUgOiBcIkV4cGxvcmUgQWxsIENyYWZ0IFN1cHBsaWVzIOKcqFwifVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtdC0xIG1heC13LXhsXCI+XG4gICAgICAgICAgICAgIHtjdXJyZW50Q2F0ZWdvcnkgPyBjdXJyZW50Q2F0ZWdvcnkuZGVzY3JpcHRpb24gOiBcIkJyb3dzZSBvdXIgZnVsbCByYW5nZSBvZiAyLjZtbSAmIDVtbSBwZXJsZXIgYmVhZHMsIHBlZ2JvYXJkcywgcHJlY2lzaW9uIHR3ZWV6ZXJzLCBhbmQgY3JhZnQgYWNjZXNzb3JpZXMuXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtYnJhbmQtb2lsR3JlZW4gYmctYnJhbmQtcGlua1NhbHQtMTAwIHB4LTQgcHktMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgIFNob3dpbmcge3Byb2R1Y3RMaXN0Lmxlbmd0aH0gaXRlbXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEZpbHRlciBCYXIgJiBTb3J0aW5nICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0cmV0Y2ggbWQ6aXRlbXMtY2VudGVyIGdhcC00IGJnLXdoaXRlIHAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWJyYW5kLXBpbmtTYWx0LTIwMCBzaGFkb3ctc20gdGV4dC14c1wiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBDYXRlZ29yaWVzIFF1aWNrIEZpbHRlciBQaWxscyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9jYXRlZ29yeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMuNSBweS0xLjUgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICFjdXJyZW50Q2F0ZWdvcnkgPyAnYmctYnJhbmQtb2lsR3JlZW4gdGV4dC13aGl0ZScgOiAnYmctYnJhbmQtY3JlYW0gdGV4dC1icmFuZC1jaGFyY29hbCBob3ZlcjpiZy1icmFuZC1waW5rU2FsdC0xMDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtjYXQuaWR9XG4gICAgICAgICAgICAgICAgaHJlZj17YC9jYXRlZ29yeT9jYXRlZ29yeT0ke2NhdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMy41IHB5LTEuNSByb3VuZGVkLWZ1bGwgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q2F0ZWdvcnk/LmlkID09PSBjYXQuaWQgPyAnYmctYnJhbmQtb2lsR3JlZW4gdGV4dC13aGl0ZScgOiAnYmctYnJhbmQtY3JlYW0gdGV4dC1icmFuZC1jaGFyY29hbCBob3ZlcjpiZy1icmFuZC1waW5rU2FsdC0xMDAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2F0Lm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFRhZyAmIFNvcnQgU2VsZWN0b3JzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgIHsvKiBUYWcgc2VsZWN0b3IgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxTbGlkZXJzSG9yaXpvbnRhbCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWJyYW5kLW9pbEdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRhZ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFnKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbHRlckNoYW5nZShlLnRhcmdldC52YWx1ZSwgc2VsZWN0ZWRTb3J0KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJyYW5kLWNyZWFtIGJvcmRlciBib3JkZXItYnJhbmQtcGlua1NhbHQtMzAwIHJvdW5kZWQtbGcgcHktMS41IHB4LTIgdGV4dC14cyBmb250LXNlbWlib2xkIGZvY3VzOnJpbmctYnJhbmQtb2lsR3JlZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBUYWdzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5FV1wiPk5ldyBBcnJpdmFsczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCRVNUU0VMTEVSXCI+QmVzdHNlbGxlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0xFQVJBTkNFXCI+Q2xlYXJhbmNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJFQ09NTUVOREVEXCI+UmVjb21tZW5kZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFNvcnQgc2VsZWN0b3IgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxBcnJvd1VwRG93biBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWJyYW5kLW9pbEdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFNvcnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFNvcnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsdGVyQ2hhbmdlKHNlbGVjdGVkVGFnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1icmFuZC1jcmVhbSBib3JkZXIgYm9yZGVyLWJyYW5kLXBpbmtTYWx0LTMwMCByb3VuZGVkLWxnIHB5LTEuNSBweC0yIHRleHQteHMgZm9udC1zZW1pYm9sZCBmb2N1czpyaW5nLWJyYW5kLW9pbEdyZWVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsYXRlc3RcIj5Tb3J0OiBOZXdlc3QgRmlyc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2VfbG93XCI+U29ydDogUHJpY2UgTG93IOKGkiBIaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlX2hpZ2hcIj5Tb3J0OiBQcmljZSBIaWdoIOKGkiBMb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUHJvZHVjdCBHcmlkICovfVxuICAgICAgICB7cHJvZHVjdExpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0TGlzdC5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0zeGwgcC0xNiB0ZXh0LWNlbnRlciBzcGFjZS15LTMgYm9yZGVyIGJvcmRlci1icmFuZC1waW5rU2FsdC0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLWJyYW5kLXBpbmtTYWx0LTEwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byB0ZXh0LWJyYW5kLW9pbEdyZWVuXCI+XG4gICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTggaC04XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1icmFuZC1jaGFyY29hbFwiPk5vIGNyYWZ0IHByb2R1Y3RzIGZvdW5kPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlRyeSBhZGp1c3RpbmcgeW91ciBmaWx0ZXJzIG9yIGNhdGVnb3J5IHNlbGVjdGlvbi48L3A+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5XCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG10LTIgdGV4dC14cyBmb250LWJvbGQgYmctYnJhbmQtb2lsR3JlZW4gdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIFJlc2V0IEZpbHRlcnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApO1xufVxuIl0sImZpbGUiOiJDOi9Vc2Vycy9jaGFuai9PbmVEcml2ZS9Eb2N1bWVudHMvR2l0SHViL1BpbmRvdS1FY29tbWVyY2UtV2Vic2l0ZS9yZXNvdXJjZXMvanMvUGFnZXMvQ2F0ZWdvcnkuanN4In0=