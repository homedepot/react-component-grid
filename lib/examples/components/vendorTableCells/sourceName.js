'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SourceNameComponent = function SourceNameComponent(props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement('img', { style: { maxWidth: '60px' }, alt: props.name, src: props.imageUrl })
		),
		_react2.default.createElement(
			'div',
			null,
			props.name
		)
	);
};

SourceNameComponent.propTypes = {
	name: _react.PropTypes.string.isRequired,
	imageUrl: _react.PropTypes.string.isRequired
};

exports.default = SourceNameComponent;