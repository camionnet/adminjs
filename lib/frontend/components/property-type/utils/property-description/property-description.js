"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PropertyDescription = void 0;

var _designSystem = require("@adminjs/design-system");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PropertyDescription = props => {
  var _property$custom;

  const {
    property
  } = props;

  if (!property.description) {
    return null;
  }

  const direction = ((_property$custom = property.custom) === null || _property$custom === void 0 ? void 0 : _property$custom.tooltipDirection) || 'top';
  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    mx: "sm",
    display: "inline-flex"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Tooltip, {
    direction: direction,
    title: property.description,
    size: "lg"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, null, /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "Help",
    color: "info"
  }))));
};

exports.PropertyDescription = exports.default = PropertyDescription;