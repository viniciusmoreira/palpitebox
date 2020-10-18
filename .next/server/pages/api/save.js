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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/save.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./credentials.json":
/*!**************************!*\
  !*** ./credentials.json ***!
  \**************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"type\\\":\\\"service_account\\\",\\\"project_id\\\":\\\"palpitebox-292715\\\",\\\"private_key_id\\\":\\\"bc3434989b306d3a458d8f9bf850996db632b78f\\\",\\\"private_key\\\":\\\"-----BEGIN PRIVATE KEY-----\\\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIftsHp5A6X4k/\\\\nc24BkLuN9qR52oiGOzG8bLHsDr+Eb9oq5mXhZ2FXcTWKS0mzdO9T4wCG6CSq6sht\\\\n7qoqnEUkcsq2MZo61thLEjKfIs8v1Z5xo5JykJarcRqJK9KhWBBBeW6STNzZZDPa\\\\nwogxUsIeZTR2AdeI1cg1GCPprLbdHMpT/POP59VXwz/AeROc5x2S3ip6cVULr/bU\\\\nXHQ637MfN8hL2iZIEYJwhjBYC1R/juqVTjlRNqhepDyxBmkHCAxH4L7ro3pySUpD\\\\nmYbKCInlxUAQQX+mHTKyZ8qYdXPpFM5Nx80l3eQhp0mHkzoim0q9RjMuvWzjEcYS\\\\n1OQ7M1yDAgMBAAECggEAHAZksKyNY9DC1dRZW21S/28AYpVXYVvuLHu3tbACDo22\\\\nndSCsn/Jgs2CQbMbDt3uLiLxienyZimsm8vb4Vo37Uuru3fc1RNUPHoYtVcfmtIY\\\\nnvh8RKNNTD2NC1Yiz7Fdjv6y+U7hIp9NAuu6LxrK+NtbT+YbWIx5Zbfax+j/zpGI\\\\ntNgVIFkceyT1VZxZmDaVgGSu5hsGpc2ByQAPfNHL05we7oAryk/wQI0kQajAWYuq\\\\nk+4ICnWUFzUIhKqsBN0+fSY0DfcLOUYg5XqUC9xM7K3mgng27seB16ut4nKIrXim\\\\nBAnXnW4CQ+mPe8xBi83vVytzfPomb+Skp1CdHprvkQKBgQD5G01hzPwA4GvANr73\\\\nUetA6xOJ4gCfWjXbUt2lSbP7/49UnNlYay4XKB0VVR/A4MkSplnOAJzSx/Z7IH6Q\\\\nznLoYmz20bWJacb9U/Pt+HoAQuTWLyYwodE7PPogDOKjT/FdQZU0KAZiRrJEt7rP\\\\nl39SIee36kRYwY2f+QB2ZPqv9wKBgQDOCy/gqussYDMsmSlpdnsT/2Lpxa1LFfI/\\\\nZHR0csie9UG6PPRVEZBi53TWtW1MuSvvO5CBXAgvcIeSTsT4aJ0YR1Eh/Pc9/Id0\\\\n1bDYJkvzCcSL7OEkh8cT0YgdePM213BJoA1iQdpsD1nAYb9DzyStQOC6CjUOjym9\\\\nLQCW64Os1QKBgF1LtWqYnBUz+AcQOetk2egBYtr0Mul7nsoaufpqpScPKr401E4C\\\\nLkvr8SCJNhBF3+jFNsMphZKH469vlxdiyrRwEIFMP2JMpINCSwxoUEECzLPPCs2R\\\\n/UvjZYZVbRhfG3Wi11+mUeXCtod4DFYtVjkLi75c1eYr73/ngR3WafE3AoGBAJ+f\\\\noxPW1iKm1H50mdSOaYNwktywvDQzaF0cIewlEK+1KZpypodQ+B7nWWkNXQPXYOYR\\\\nqz3MYrr93snGJGqeATZR6dT++TwYa4hkFIEgCi7bHl2YwkNevSfpaB4NGb8e4Grp\\\\nh/TbN7AHpGyaTWbnD275mCAI0FnbJ2bbel1xT62RAoGBAJUqTMx7RSCl1MUGaU1y\\\\n5iqyKy+uAOtDojZML4yNGUMh1m93daUkGdwH07S3+I/xkJGWYsizxR2ZEuSscdIw\\\\nSqwzJtM9exTCIU5WfHWspMuhSo93T8sJk9/lPe6Lg1kogLKve9X95hAdo0lsgKWJ\\\\nrs6TeAFltwkDLZswLTLxuKnG\\\\n-----END PRIVATE KEY-----\\\\n\\\",\\\"client_email\\\":\\\"palpitebox@palpitebox-292715.iam.gserviceaccount.com\\\",\\\"client_id\\\":\\\"108675667313070870528\\\",\\\"auth_uri\\\":\\\"https://accounts.google.com/o/oauth2/auth\\\",\\\"token_uri\\\":\\\"https://oauth2.googleapis.com/token\\\",\\\"auth_provider_x509_cert_url\\\":\\\"https://www.googleapis.com/oauth2/v1/certs\\\",\\\"client_x509_cert_url\\\":\\\"https://www.googleapis.com/robot/v1/metadata/x509/palpitebox%40palpitebox-292715.iam.gserviceaccount.com\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NyZWRlbnRpYWxzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./credentials.json\n");

/***/ }),

/***/ "./pages/api/save.js":
/*!***************************!*\
  !*** ./pages/api/save.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../credentials.json */ \"./credentials.json\");\nvar _credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../credentials.json */ \"./credentials.json\", 1);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__[\"GoogleSpreadsheet\"](process.env.SHEET_DOC_ID);\n\nconst genCupom = () => {\n  const code = parseInt(moment__WEBPACK_IMPORTED_MODULE_2___default()().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();\n  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    await doc.useServiceAccountAuth({\n      client_email: process.env.SHEET_CLIENT_EMAIL,\n      private_key: process.env.SHEET_PRIVATE_KEY\n    });\n    await doc.loadInfo();\n    const sheet = doc.sheetsByIndex[1];\n    const data = JSON.parse(req.body);\n    const sheetConfig = doc.sheetsByIndex[2];\n    await sheetConfig.loadCells('A3:B3');\n    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);\n    const textoCell = sheetConfig.getCell(2, 1);\n    let Cupom = '';\n    let Promo = '';\n\n    if (mostrarPromocaoCell.value === 'VERDADEIRO') {\n      Cupom = genCupom();\n      Promo = textoCell.value;\n    }\n\n    await sheet.addRow({\n      Nome: data.Nome,\n      Email: data.Email,\n      WhatsApp: data.WhatsApp,\n      'Data Preenchimento': moment__WEBPACK_IMPORTED_MODULE_2___default()().format('DD/MM/YYYY [-] HH:mm:ss'),\n      Nota: parseInt(data.Nota),\n      Cupom,\n      Promo\n    });\n    res.end(JSON.stringify({\n      showCoupon: Cupom !== '',\n      Cupom,\n      Promo\n    }));\n  } catch (error) {\n    res.end(JSON.stringify({\n      showCoupon: false,\n      message: 'error'\n    }));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2F2ZS5qcz9hYzU4Il0sIm5hbWVzIjpbImRvYyIsIkdvb2dsZVNwcmVhZHNoZWV0IiwicHJvY2VzcyIsImVudiIsIlNIRUVUX0RPQ19JRCIsImdlbkN1cG9tIiwiY29kZSIsInBhcnNlSW50IiwibW9tZW50IiwiZm9ybWF0IiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNsaWVudF9lbWFpbCIsIlNIRUVUX0NMSUVOVF9FTUFJTCIsInByaXZhdGVfa2V5IiwiU0hFRVRfUFJJVkFURV9LRVkiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5Iiwic2hlZXRDb25maWciLCJsb2FkQ2VsbHMiLCJtb3N0cmFyUHJvbW9jYW9DZWxsIiwiZ2V0Q2VsbCIsInRleHRvQ2VsbCIsIkN1cG9tIiwiUHJvbW8iLCJ2YWx1ZSIsImFkZFJvdyIsIk5vbWUiLCJFbWFpbCIsIldoYXRzQXBwIiwiTm90YSIsImVuZCIsInN0cmluZ2lmeSIsInNob3dDb3Vwb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLG9FQUFKLENBQXNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBbEMsQ0FBWjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsNkNBQU0sR0FBR0MsTUFBVCxDQUFnQixpQkFBaEIsQ0FBRCxDQUFSLENBQTZDQyxRQUE3QyxDQUFzRCxFQUF0RCxFQUEwREMsV0FBMUQsRUFBYjtBQUNBLFNBQU9MLElBQUksQ0FBQ00sTUFBTCxDQUFZLENBQVosRUFBYyxDQUFkLElBQW1CLEdBQW5CLEdBQXlCTixJQUFJLENBQUNNLE1BQUwsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxDQUF6QixHQUE0QyxHQUE1QyxHQUFrRE4sSUFBSSxDQUFDTSxNQUFMLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBekQ7QUFDRCxDQUhEOztBQUtlLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSTtBQUNGLFVBQU1kLEdBQUcsQ0FBQ2UscUJBQUosQ0FBMEI7QUFDOUJDLGtCQUFZLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYyxrQkFESTtBQUU5QkMsaUJBQVcsRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0I7QUFGSyxLQUExQixDQUFOO0FBSUEsVUFBTW5CLEdBQUcsQ0FBQ29CLFFBQUosRUFBTjtBQUVBLFVBQU1DLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3NCLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdaLEdBQUcsQ0FBQ2EsSUFBZixDQUFiO0FBRUEsVUFBTUMsV0FBVyxHQUFHM0IsR0FBRyxDQUFDc0IsYUFBSixDQUFrQixDQUFsQixDQUFwQjtBQUNBLFVBQU1LLFdBQVcsQ0FBQ0MsU0FBWixDQUFzQixPQUF0QixDQUFOO0FBRUEsVUFBTUMsbUJBQW1CLEdBQUdGLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixDQUFwQixFQUFzQixDQUF0QixDQUE1QjtBQUNBLFVBQU1DLFNBQVMsR0FBR0osV0FBVyxDQUFDRyxPQUFaLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQWxCO0FBRUEsUUFBSUUsS0FBSyxHQUFHLEVBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFFQSxRQUFHSixtQkFBbUIsQ0FBQ0ssS0FBcEIsS0FBOEIsWUFBakMsRUFBOEM7QUFDNUNGLFdBQUssR0FBRzNCLFFBQVEsRUFBaEI7QUFDQTRCLFdBQUssR0FBR0YsU0FBUyxDQUFDRyxLQUFsQjtBQUNEOztBQUdELFVBQU1iLEtBQUssQ0FBQ2MsTUFBTixDQUFhO0FBQ2pCQyxVQUFJLEVBQUViLElBQUksQ0FBQ2EsSUFETTtBQUVqQkMsV0FBSyxFQUFFZCxJQUFJLENBQUNjLEtBRks7QUFHakJDLGNBQVEsRUFBRWYsSUFBSSxDQUFDZSxRQUhFO0FBSWpCLDRCQUFzQjlCLDZDQUFNLEdBQUdDLE1BQVQsQ0FBZ0IseUJBQWhCLENBSkw7QUFLakI4QixVQUFJLEVBQUVoQyxRQUFRLENBQUNnQixJQUFJLENBQUNnQixJQUFOLENBTEc7QUFNakJQLFdBTmlCO0FBT2pCQztBQVBpQixLQUFiLENBQU47QUFVQW5CLE9BQUcsQ0FBQzBCLEdBQUosQ0FBUWhCLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZTtBQUNyQkMsZ0JBQVUsRUFBRVYsS0FBSyxLQUFLLEVBREQ7QUFFckJBLFdBRnFCO0FBR3JCQztBQUhxQixLQUFmLENBQVI7QUFLRCxHQXhDRCxDQXdDRSxPQUFPVSxLQUFQLEVBQWM7QUFDZDdCLE9BQUcsQ0FBQzBCLEdBQUosQ0FBUWhCLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZTtBQUNyQkMsZ0JBQVUsRUFBRSxLQURTO0FBRXJCRSxhQUFPLEVBQUU7QUFGWSxLQUFmLENBQVI7QUFJRDtBQUNGLENBL0NEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NhdmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVTcHJlYWRzaGVldCB9IGZyb20gJ2dvb2dsZS1zcHJlYWRzaGVldCc7XG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vLi4vY3JlZGVudGlhbHMuanNvbic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldChwcm9jZXNzLmVudi5TSEVFVF9ET0NfSUQpO1xuXG5jb25zdCBnZW5DdXBvbSA9ICgpID0+IHtcbiAgY29uc3QgY29kZSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnWVlNTURESEhtbXNzU1NTJykpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gY29kZS5zdWJzdHIoMCw0KSArICctJyArIGNvZGUuc3Vic3RyKDQsNCkgKyAnLScgKyBjb2RlLnN1YnN0cig4LDQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoe1xuICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5TSEVFVF9DTElFTlRfRU1BSUwsXG4gICAgICBwcml2YXRlX2tleTogcHJvY2Vzcy5lbnYuU0hFRVRfUFJJVkFURV9LRVlcbiAgICB9KTtcbiAgICBhd2FpdCBkb2MubG9hZEluZm8oKTtcblxuICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMV07XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuXG4gICAgY29uc3Qgc2hlZXRDb25maWcgPSBkb2Muc2hlZXRzQnlJbmRleFsyXTtcbiAgICBhd2FpdCBzaGVldENvbmZpZy5sb2FkQ2VsbHMoJ0EzOkIzJyk7XG5cbiAgICBjb25zdCBtb3N0cmFyUHJvbW9jYW9DZWxsID0gc2hlZXRDb25maWcuZ2V0Q2VsbCgyLDApO1xuICAgIGNvbnN0IHRleHRvQ2VsbCA9IHNoZWV0Q29uZmlnLmdldENlbGwoMiwxKTtcblxuICAgIGxldCBDdXBvbSA9ICcnO1xuICAgIGxldCBQcm9tbyA9ICcnO1xuXG4gICAgaWYobW9zdHJhclByb21vY2FvQ2VsbC52YWx1ZSA9PT0gJ1ZFUkRBREVJUk8nKXtcbiAgICAgIEN1cG9tID0gZ2VuQ3Vwb20oKTtcbiAgICAgIFByb21vID0gdGV4dG9DZWxsLnZhbHVlO1xuICAgIH1cblxuICAgIFxuICAgIGF3YWl0IHNoZWV0LmFkZFJvdyh7XG4gICAgICBOb21lOiBkYXRhLk5vbWUsXG4gICAgICBFbWFpbDogZGF0YS5FbWFpbCxcbiAgICAgIFdoYXRzQXBwOiBkYXRhLldoYXRzQXBwLFxuICAgICAgJ0RhdGEgUHJlZW5jaGltZW50byc6IG1vbWVudCgpLmZvcm1hdCgnREQvTU0vWVlZWSBbLV0gSEg6bW06c3MnKSxcbiAgICAgIE5vdGE6IHBhcnNlSW50KGRhdGEuTm90YSksXG4gICAgICBDdXBvbSxcbiAgICAgIFByb21vXG4gICAgfSlcblxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgc2hvd0NvdXBvbjogQ3Vwb20gIT09ICcnLFxuICAgICAgQ3Vwb20sXG4gICAgICBQcm9tb1xuICAgIH0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHNob3dDb3Vwb246IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJ2Vycm9yJ1xuICAgIH0pKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/save.js\n");

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"google-spreadsheet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIj80MTkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imdvb2dsZS1zcHJlYWRzaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1zcHJlYWRzaGVldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///google-spreadsheet\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ })

/******/ });