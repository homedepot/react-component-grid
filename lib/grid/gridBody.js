'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gridRow = require('./gridRow');

var _gridRow2 = _interopRequireDefault(_gridRow);

var _gridColumn = require('./gridColumn');

var _gridColumn2 = _interopRequireDefault(_gridColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridBodyComponent = function GridBodyComponent(props) {
    var data = props.data;
    var columns = props.columns;
    var rowClickHandler = props.rowClickHandler;

    var tableRows = data.map(function (item, r) {
        var tableColumns = columns.map(function (column, i) {
            var fieldValue = item[column.data];
            var fieldComponent = column.component(fieldValue);
            var fieldStyles = column.styles ? column.styles : null;
            return _react2.default.createElement(
                _gridColumn2.default,
                { key: i, styles: fieldStyles },
                fieldComponent
            );
        }, this);
        return _react2.default.createElement(
            _gridRow2.default,
            {
                key: r,
                rowClickHandler: rowClickHandler,
                id: item.id
            },
            tableColumns
        );
    }, undefined);
    return _react2.default.createElement(
        'div',
        null,
        tableRows
    );
};

GridBodyComponent.propTypes = {
    data: _react.PropTypes.array.isRequired,
    columns: _react.PropTypes.array.isRequired,
    rowClickHandler: _react.PropTypes.func
};

exports.default = GridBodyComponent;