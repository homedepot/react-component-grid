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
    var data = props.data;
    var columns = props.columns;
    var rowClickHandler = props.rowClickHandler;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_gridHeader2.default, { columns: columns }),
        _react2.default.createElement(_gridBody2.default, { data: data, columns: columns, rowClickHandler: rowClickHandler })
    );
};

ComponentGridComponent.propTypes = {
    data: _react.PropTypes.array.isRequired,
    columns: _react.PropTypes.array.isRequired,
    rowClickHandler: _react.PropTypes.func
};

exports.default = ComponentGridComponent;