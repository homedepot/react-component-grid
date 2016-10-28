'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
        rowFooter = props.rowFooter;


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
            rowFooter: rowFooter
        })
    );
};

ComponentGridComponent.defaultProps = {
    useDefaultStyle: true
};

ComponentGridComponent.propTypes = {
    data: _react.PropTypes.array.isRequired,
    columns: _react.PropTypes.array.isRequired,
    rowClickHandler: _react.PropTypes.func,
    headerClass: _react.PropTypes.string,
    style: _react.PropTypes.object,
    useDefaultStyle: _react.PropTypes.bool,
    rowsContainerStyle: _react.PropTypes.object,
    rowHeader: _react.PropTypes.shape({
        data: _react.PropTypes.string.isRequired,
        component: _react.PropTypes.func.isRequired
    }),
    rowFooter: _react.PropTypes.shape({
        data: _react.PropTypes.string.isRequired,
        component: _react.PropTypes.func.isRequired
    })
};

exports.default = ComponentGridComponent;