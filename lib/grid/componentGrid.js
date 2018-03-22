'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gridHeader = require('./gridHeader');

var _gridHeader2 = _interopRequireDefault(_gridHeader);

var _gridBody = require('./gridBody');

var _gridBody2 = _interopRequireDefault(_gridBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentGridComponent = function ComponentGridComponent(props) {
    var data = props.data,
        columns = props.columns,
        headerClass = props.headerClass,
        rowClickHandler = props.rowClickHandler,
        style = props.style,
        useDefaultStyle = props.useDefaultStyle,
        rowsContainerStyle = props.rowsContainerStyle,
        rowHeader = props.rowHeader,
        rowFooter = props.rowFooter,
        rowWrapperComponent = props.rowWrapperComponent;


    return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(_gridHeader2.default, { headerClass: headerClass, columns: columns, useDefaultStyle: useDefaultStyle }),
        _react2.default.createElement(_gridBody2.default, {
            data: data,
            columns: columns,
            rowClickHandler: rowClickHandler,
            style: rowsContainerStyle,
            useDefaultStyle: useDefaultStyle,
            rowHeader: rowHeader,
            rowFooter: rowFooter,
            rowWrapperComponent: rowWrapperComponent
        })
    );
};

ComponentGridComponent.defaultProps = {
    useDefaultStyle: true
};

ComponentGridComponent.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    rowClickHandler: _propTypes2.default.func,
    headerClass: _propTypes2.default.string,
    style: _propTypes2.default.object,
    useDefaultStyle: _propTypes2.default.bool,
    rowsContainerStyle: _propTypes2.default.object,
    rowHeader: _propTypes2.default.shape({
        data: _propTypes2.default.string.isRequired,
        component: _propTypes2.default.func.isRequired
    }),
    rowFooter: _propTypes2.default.shape({
        data: _propTypes2.default.string.isRequired,
        component: _propTypes2.default.func.isRequired
    }),
    rowWrapperComponent: _propTypes2.default.func
};

exports.default = ComponentGridComponent;