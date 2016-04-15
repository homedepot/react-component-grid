"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeesComponent = function FeesComponent(props) {
	var feesComponent = props ? _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"div",
			null,
			props.explanation
		),
		_react2.default.createElement(
			"div",
			null,
			_react2.default.createElement("i", { className: "fa fa-question" }),
			" Explain"
		)
	) : _react2.default.createElement("div", null);
	return feesComponent;
};

FeesComponent.propTypes = {
	explanation: _react.PropTypes.string.isRequired
};

exports.default = FeesComponent;