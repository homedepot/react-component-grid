'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BulkPricingComponent = function BulkPricingComponent(bulkPricing) {
	return bulkPricing ? _react2.default.createElement(
		'div',
		null,
		'BULK PRICING'
	) : null;
};

var UnitPriceComponent = function UnitPriceComponent(props) {
	var bulkPricing = BulkPricingComponent(props.bulkPricing);
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			'$',
			props.unitPrice
		),
		_react2.default.createElement(
			'div',
			null,
			'per ',
			props.baseUnit
		),
		_react2.default.createElement(
			'div',
			null,
			bulkPricing
		)
	);
};

UnitPriceComponent.propTypes = {
	unitPrice: _react.PropTypes.string.isRequired,
	bulkPricing: _react.PropTypes.bool.isRequired,
	baseUnit: _react.PropTypes.string.isRequired
};

exports.default = UnitPriceComponent;