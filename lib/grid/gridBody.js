'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _gridRow = require('./gridRow');

var _gridRow2 = _interopRequireDefault(_gridRow);

var _gridColumn = require('./gridColumn');

var _gridColumn2 = _interopRequireDefault(_gridColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapColumns = function mapColumns(item, columns, useDefaultStyle) {
    return columns.map(function (column, i) {
        var fieldValue = item[column.data];
        var fieldComponent = column.component(fieldValue);
        return _react2.default.createElement(
            _gridColumn2.default,
            {
                key: i,
                style: column.style,
                className: column.className,
                flexGrow: column.flexGrow,
                flexShrink: column.flexShrink,
                flexBasis: column.flexBasis,
                useDefaultStyle: useDefaultStyle
            },
            fieldComponent
        );
    }, undefined);
};

var isValidRowHeaderOrFooter = function isValidRowHeaderOrFooter(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.component !== 'undefined' && typeof obj.data !== 'undefined';
};

var createRow = function createRow(item, tableColumns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent) {
    var rowHeaderComponent = void 0;
    if (isValidRowHeaderOrFooter(rowHeader)) {
        rowHeaderComponent = rowHeader.component(item[rowHeader.data]);
    }

    var rowFooterComponent = void 0;
    if (isValidRowHeaderOrFooter(rowFooter)) {
        rowFooterComponent = rowFooter.component(item[rowFooter.data]);
    }

    return _react2.default.createElement(
        _react2.default.Fragment,
        { key: item.id },
        rowHeaderComponent,
        _react2.default.createElement(
            _gridRow2.default,
            {
                rowClickHandler: rowClickHandler,
                id: item.id,
                rowClass: item.rowClass,
                useDefaultStyle: useDefaultStyle,
                key: item.id,
                rowWrapperComponent: rowWrapperComponent,
                item: item
            },
            tableColumns
        ),
        rowFooterComponent
    );
};

var renderGridMap = function renderGridMap(newData, columns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent) {
    return newData.map(function (item) {
        var tableColumns = mapColumns(item, columns, useDefaultStyle);
        return createRow(item, tableColumns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent);
    }, undefined);
};

var GridBodyComponent = function (_React$Component) {
    _inherits(GridBodyComponent, _React$Component);

    function GridBodyComponent() {
        _classCallCheck(this, GridBodyComponent);

        return _possibleConstructorReturn(this, (GridBodyComponent.__proto__ || Object.getPrototypeOf(GridBodyComponent)).apply(this, arguments));
    }

    _createClass(GridBodyComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                data = _props.data,
                columns = _props.columns,
                rowClickHandler = _props.rowClickHandler,
                rowHeader = _props.rowHeader,
                rowFooter = _props.rowFooter,
                useDefaultStyle = _props.useDefaultStyle,
                rowWrapperComponent = _props.rowWrapperComponent;

            var tableRows = renderGridMap(data, columns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent);
            this.setState({
                tableRows: tableRows
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var data = nextProps.data,
                columns = nextProps.columns,
                rowClickHandler = nextProps.rowClickHandler,
                rowHeader = nextProps.rowHeader,
                rowFooter = nextProps.rowFooter,
                useDefaultStyle = nextProps.useDefaultStyle,
                rowWrapperComponent = nextProps.rowWrapperComponent;

            if (!(0, _isEqual2.default)(this.props, nextProps)) {
                var tableRows = renderGridMap(this.state.tableRows, this.props.data, data, columns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent);
                this.setState({
                    tableRows: tableRows
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var style = this.props.style;

            return _react2.default.createElement(
                'div',
                { style: style },
                this.state.tableRows
            );
        }
    }]);

    return GridBodyComponent;
}(_react2.default.Component);

GridBodyComponent.propTypes = {
    data: _propTypes2.default.array.isRequired,
    columns: _propTypes2.default.array.isRequired,
    rowClickHandler: _propTypes2.default.func,
    style: _propTypes2.default.object,
    useDefaultStyle: _propTypes2.default.bool,
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

exports.default = GridBodyComponent;