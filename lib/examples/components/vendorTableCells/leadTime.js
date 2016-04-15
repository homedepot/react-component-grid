'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeadTimeComponent = function LeadTimeComponent(leadTime) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			leadTime
		),
		_react2.default.createElement(
			'div',
			null,
			'Business Days'
		)
	);
};

LeadTimeComponent.propTypes = {
	leadTime: _react.PropTypes.string.isRequired
};

exports.default = LeadTimeComponent;