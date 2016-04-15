'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineNumberComponent = function LineNumberComponent(lineNumber) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			lineNumber
		)
	);
};

LineNumberComponent.propTypes = {
	lineNumber: _react.PropTypes.number.isRequired
};

exports.default = LineNumberComponent;