'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridColumnComponent = function GridColumnComponent(props) {
    var flexSize = props.flexGrow || '1';
    var style = { flex: flexSize + ' 0 0px' };
    return _react2.default.createElement(
        'div',
        { style: _extends({}, props.style, style), className: props.className },
        props.children
    );
};

GridColumnComponent.propTypes = {
    children: _react.PropTypes.object.isRequired,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    flexGrow: _react.PropTypes.number
};

exports.default = GridColumnComponent;