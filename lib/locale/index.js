"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  locales: true,
  enLocale: true,
  uaLocale: true,
  zhCNLocale: true,
  ptBrLocale: true
};
Object.defineProperty(exports, "enLocale", {
  enumerable: true,
  get: function () {
    return _en.default;
  }
});
exports.locales = void 0;
Object.defineProperty(exports, "ptBrLocale", {
  enumerable: true,
  get: function () {
    return _ptBr.default;
  }
});
Object.defineProperty(exports, "uaLocale", {
  enumerable: true,
  get: function () {
    return _ua.default;
  }
});
Object.defineProperty(exports, "zhCNLocale", {
  enumerable: true,
  get: function () {
    return _zhCn.default;
  }
});

var _en = _interopRequireDefault(require("./en"));

var _ua = _interopRequireDefault(require("./ua"));

var _zhCn = _interopRequireDefault(require("./zh-cn"));

var _ptBr = _interopRequireDefault(require("./pt-br"));

var _config = require("./config");

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _config[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _config[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const locales = {
  en: _en.default,
  ua: _ua.default,
  'zh-CN': _zhCn.default,
  'pt-BR': _ptBr.default
};
exports.locales = locales;