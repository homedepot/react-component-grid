'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridColumnComponent = function GridColumnComponent(props) {
    var styles = { flex: '1 0 0px' };
    _lodash2.default.forEach(props.styles, function (style) {
        styles[style.name] = style.value;
    });
    return _react2.default.createElement(
        'div',
        { style: styles },
        props.children
    );
};

GridColumnComponent.propTypes = {
    children: _react.PropTypes.object.isRequired,
    styles: _react.PropTypes.array
};

exports.default = GridColumnComponent;