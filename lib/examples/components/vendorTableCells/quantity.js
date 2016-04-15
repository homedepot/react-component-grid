'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemComponent = function ItemComponent(props) {
	return props.quantity === 1 ? _react2.default.createElement(
		'div',
		null,
		props.baseUnit
	) : _react2.default.createElement(
		'div',
		null,
		props.baseUnit,
		's'
	);
};

var QuantityComponent = function QuantityComponent(props) {
	var baseUnitDisplay = ItemComponent(props);
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			props.quantity
		),
		_react2.default.createElement(
			'div',
			null,
			baseUnitDisplay
		)
	);
};

QuantityComponent.propTypes = {
	quantity: _react.PropTypes.string.isRequired,
	baseUnit: _react.PropTypes.string.isRequired
};

ItemComponent.propTypes = {
	quantity: _react.PropTypes.string.isRequired,
	baseUnit: _react.PropTypes.string.isRequired
};

exports.default = QuantityComponent;