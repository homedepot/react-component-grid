'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderColumnHeaders = function renderColumnHeaders(columns) {
    return _lodash2.default.map(columns, function (column) {
        var flexSize = column.flexGrow || '1';
        var style = { flex: flexSize + ' 0 0px' };
        return _react2.default.createElement(
            'div',
            { key: column.header, style: _extends({}, column.style, style) },
            column.header
        );
    });
};

var GridHeaderComponent = function GridHeaderComponent(props) {
    var columns = props.columns;
    var headerClass = props.headerClass;

    var headerColumns = renderColumnHeaders(columns);
    return _react2.default.createElement(
        'div',
        { className: headerClass, style: { display: 'flex' } },
        headerColumns
    );
};

GridHeaderComponent.propTypes = {
    columns: _react.PropTypes.array.isRequired,
    headerClass: _react.PropTypes.string.isRequired
};

exports.default = GridHeaderComponent;