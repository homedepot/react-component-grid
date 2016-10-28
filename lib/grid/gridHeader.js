'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderColumnHeaders = function renderColumnHeaders(columns, useDefaultStyle) {
    return (0, _map2.default)(columns, function (column, i) {
        var flexSize = column.flexGrow || '1';
        var flexShrink = column.flexShrink || '0';
        var flexBasis = column.flexBasis || '0px';
        var style = useDefaultStyle ? { flex: flexSize + ' ' + flexShrink + ' ' + flexBasis } : {};

        return _react2.default.createElement(
            'div',
            { key: i, style: _extends({}, column.style, style) },
            column.header
        );
    });
};

var GridHeaderComponent = function GridHeaderComponent(props) {
    var columns = props.columns,
        headerClass = props.headerClass,
        useDefaultStyle = props.useDefaultStyle;

    var headerColumns = renderColumnHeaders(columns, useDefaultStyle);
    var style = useDefaultStyle ? { display: 'flex' } : {};
    return _react2.default.createElement(
        'div',
        { className: headerClass, style: style },
        headerColumns
    );
};

GridHeaderComponent.propTypes = {
    columns: _react.PropTypes.array.isRequired,
    headerClass: _react.PropTypes.string.isRequired,
    useDefaultStyle: _react.PropTypes.bool
};

exports.default = GridHeaderComponent;