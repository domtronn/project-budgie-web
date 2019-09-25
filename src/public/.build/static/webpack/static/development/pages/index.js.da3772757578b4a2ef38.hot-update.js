webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/counter */ "./components/counter.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
var _jsxFileName = "/Users/doug/Desktop/project-budgie-web/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var config = {
  apiKey: "AIzaSyDNyck6jDf4UmScagxFSE-4QjBHIXEScR0",
  authDomain: "project-budgie.firebaseapp.com",
  databaseURL: "https://project-budgie.firebaseio.com",
  projectId: "project-budgie",
  storageBucket: "project-budgie.appspot.com",
  messagingSenderId: "785786802795",
  appId: "1:785786802795:web:11f195a6e8549fbd46172e"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.initializeApp(config);
}

var app = firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.app();
var db = app.firestore();
db.collection('locations').get().then(function (snapshot) {
  snapshot.forEach(function (doc) {
    console.log(doc.data());
  });
});

var a = function a(i) {
  var _ref, _i;

  return _ref = (_i = i, _i + 2), _ref * 2;
};

var Home = function Home() {
  return __jsx("div", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Home")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_counter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-243749409" + " " + 'hero',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-243749409" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Welcome to Next.js!"), __jsx("p", {
    className: "jsx-243749409" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "To get started, edit ", __jsx("code", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "pages/index.js"), " and save to reload."), __jsx("div", {
    className: "jsx-243749409" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/my-state",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-243749409" + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Getting Started \u2192"), __jsx("p", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Learn more about Next.js on GitHub and in their examples."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "243749409",
    __self: this
  }, ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3VnL0Rlc2t0b3AvcHJvamVjdC1idWRnaWUtd2ViL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEZ0IsQUFHb0IsQUFJRixBQVFTLEFBR0YsQUFPTyxBQVFGLEFBR1osQUFLQSxTQWpDRSxBQTZCRyxBQUtHLEVBdENOLEtBZVcsRUFIeEIsRUFQbUIsQ0F5Qm5CLENBN0JBLENBcUJjLEFBWUcsR0FLQSxTQWhCQyxFQWpCQyxDQVVKLEFBbUJmLEdBS2EsVUFoQlUsQ0FpQnZCLEVBbENpQixlQUNqQixnQ0FpQmdCLFdBUkssR0FTTSx5QkFDM0IseUNBVCtCLDJIQUMvQiIsImZpbGUiOiIvVXNlcnMvZG91Zy9EZXNrdG9wL3Byb2plY3QtYnVkZ2llLXdlYi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG5pbXBvcnQgQ291bnRlciBmcm9tICcuLi9jb21wb25lbnRzL2NvdW50ZXInXG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcblxuY29uc3QgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lETnljazZqRGY0VW1TY2FneEZTRS00UWpCSElYRVNjUjBcIixcbiAgICBhdXRoRG9tYWluOiBcInByb2plY3QtYnVkZ2llLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcHJvamVjdC1idWRnaWUuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwicHJvamVjdC1idWRnaWVcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcInByb2plY3QtYnVkZ2llLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzg1Nzg2ODAyNzk1XCIsXG4gICAgYXBwSWQ6IFwiMTo3ODU3ODY4MDI3OTU6d2ViOjExZjE5NWE2ZTg1NDlmYmQ0NjE3MmVcIlxufTtcblxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbn1cblxuY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwKClcbmNvbnN0IGRiID0gYXBwLmZpcmVzdG9yZSgpXG5cbmRiLmNvbGxlY3Rpb24oJ2xvY2F0aW9ucycpLmdldCgpXG4gICAgICAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuY29uc3QgYSA9IGkgPT4gaVxuICAgICAgfD4gKGkgPT4gaSArIDIpXG4gICAgICB8PiAoaSA9PiBpICogMilcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICA8L0hlYWQ+XG5cbiAgICA8TmF2IC8+XG5cbiAgICA8Q291bnRlciAvPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2hlcm8nPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPldlbGNvbWUgdG8gTmV4dC5qcyE8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XG4gICAgICAgIFRvIGdldCBzdGFydGVkLCBlZGl0IDxjb2RlPnBhZ2VzL2luZGV4LmpzPC9jb2RlPiBhbmQgc2F2ZSB0byByZWxvYWQuXG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICA8TGluayBocmVmPScvbXktc3RhdGUnPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgICA8aDM+R2V0dGluZyBTdGFydGVkICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5MZWFybiBtb3JlIGFib3V0IE5leHQuanMgb24gR2l0SHViIGFuZCBpbiB0aGVpciBleGFtcGxlcy48L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAuY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICB9XG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/doug/Desktop/project-budgie-web/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.da3772757578b4a2ef38.hot-update.js.map