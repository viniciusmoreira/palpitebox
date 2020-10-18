module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/get-promo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__[\"GoogleSpreadsheet\"](process.env.SHEET_DOC_ID);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  console.log('passando pelo get-promo');\n\n  try {\n    await doc.useServiceAccountAuth({\n      client_email: process.env.SHEET_CLIENT_EMAIL,\n      private_key: process.env.SHEET_PRIVATE_KEY\n    });\n    await doc.loadInfo();\n    const sheet = doc.sheetsByIndex[2];\n    await sheet.loadCells('A3:B3');\n    const mostrarPromocaoCell = sheet.getCell(2, 0);\n    const textoCell = sheet.getCell(2, 1);\n    res.end(JSON.stringify({\n      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',\n      message: textoCell.value\n    }));\n  } catch (error) {\n    res.end(JSON.stringify({\n      showCoupon: false,\n      message: 'error'\n    }));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzPzYwNDIiXSwibmFtZXMiOlsiZG9jIiwiR29vZ2xlU3ByZWFkc2hlZXQiLCJwcm9jZXNzIiwiZW52IiwiU0hFRVRfRE9DX0lEIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNsaWVudF9lbWFpbCIsIlNIRUVUX0NMSUVOVF9FTUFJTCIsInByaXZhdGVfa2V5IiwiU0hFRVRfUFJJVkFURV9LRVkiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsImxvYWRDZWxscyIsIm1vc3RyYXJQcm9tb2Nhb0NlbGwiLCJnZXRDZWxsIiwidGV4dG9DZWxsIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3dDb3Vwb24iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsb0VBQUosQ0FBc0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFsQyxDQUFaO0FBRWUsc0VBQU1DLEdBQU4sRUFBV0MsR0FBWCxLQUFtQjtBQUNoQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7O0FBQ0EsTUFBSTtBQUNGLFVBQU1SLEdBQUcsQ0FBQ1MscUJBQUosQ0FBMEI7QUFDOUJDLGtCQUFZLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxrQkFESTtBQUU5QkMsaUJBQVcsRUFBRVYsT0FBTyxDQUFDQyxHQUFSLENBQVlVO0FBRkssS0FBMUIsQ0FBTjtBQUlBLFVBQU1iLEdBQUcsQ0FBQ2MsUUFBSixFQUFOO0FBRUEsVUFBTUMsS0FBSyxHQUFHZixHQUFHLENBQUNnQixhQUFKLENBQWtCLENBQWxCLENBQWQ7QUFDQSxVQUFNRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBTjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWdCLENBQWhCLENBQTVCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWdCLENBQWhCLENBQWxCO0FBRUFiLE9BQUcsQ0FBQ2UsR0FBSixDQUFRQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNyQkMsZ0JBQVUsRUFBRU4sbUJBQW1CLENBQUNPLEtBQXBCLEtBQThCLFlBRHJCO0FBRXJCQyxhQUFPLEVBQUVOLFNBQVMsQ0FBQ0s7QUFGRSxLQUFmLENBQVI7QUFJRCxHQWpCRCxDQWlCRSxPQUFPRSxLQUFQLEVBQWM7QUFDZHJCLE9BQUcsQ0FBQ2UsR0FBSixDQUFRQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNyQkMsZ0JBQVUsRUFBRSxLQURTO0FBRXJCRSxhQUFPLEVBQUU7QUFGWSxLQUFmLENBQVI7QUFJRDtBQUNGLENBekJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dldC1wcm9tby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZVNwcmVhZHNoZWV0IH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0JztcblxuY29uc3QgZG9jID0gbmV3IEdvb2dsZVNwcmVhZHNoZWV0KHByb2Nlc3MuZW52LlNIRUVUX0RPQ19JRCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdwYXNzYW5kbyBwZWxvIGdldC1wcm9tbycpXG4gIHRyeSB7XG4gICAgYXdhaXQgZG9jLnVzZVNlcnZpY2VBY2NvdW50QXV0aCh7XG4gICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LlNIRUVUX0NMSUVOVF9FTUFJTCxcbiAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5TSEVFVF9QUklWQVRFX0tFWVxuICAgIH0pO1xuICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpO1xuICAgXG4gICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsyXTtcbiAgICBhd2FpdCBzaGVldC5sb2FkQ2VsbHMoJ0EzOkIzJyk7XG5cbiAgICBjb25zdCBtb3N0cmFyUHJvbW9jYW9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgyLDApO1xuICAgIGNvbnN0IHRleHRvQ2VsbCA9IHNoZWV0LmdldENlbGwoMiwxKTtcblxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgc2hvd0NvdXBvbjogbW9zdHJhclByb21vY2FvQ2VsbC52YWx1ZSA9PT0gJ1ZFUkRBREVJUk8nLFxuICAgICAgbWVzc2FnZTogdGV4dG9DZWxsLnZhbHVlXG4gICAgfSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICBzaG93Q291cG9uOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICdlcnJvcidcbiAgICB9KSlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/get-promo.js\n");

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"google-spreadsheet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIj80MTkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imdvb2dsZS1zcHJlYWRzaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1zcHJlYWRzaGVldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///google-spreadsheet\n");

/***/ })

/******/ });