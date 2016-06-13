'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var mapColumns = function mapColumns(item, columns) {
    return columns.map(function (column, i) {
        var fieldValue = item[column.data];
        var fieldComponent = column.component(fieldValue);
        return _react2.default.createElement(
            _gridColumn2.default,
            {
                key: i,
                style: column.style,
                className: column.className,
                flexGrow: column.flexGrow
            },
            fieldComponent
        );
    }, undefined);
};

var createRow = function createRow(item, tableColumns, rowClickHandler) {
    return _react2.default.createElement(
        _gridRow2.default,
        {
            key: item.id,
            rowClickHandler: rowClickHandler,
            id: item.id,
            rowClass: item.rowClass
        },
        tableColumns
    );
};

var renderGridMap = function renderGridMap(oldRows, oldData, newData, columns, rowClickHandler) {
    return newData.map(function (item) {
        var oldDataPoint = (0, _find2.default)(oldData, function (eachOldData) {
            return eachOldData.id === item.id;
        });
        var oldRow = (0, _find2.default)(oldRows, function (eachOldRow) {
            return eachOldRow.key === item.id;
        });
        var letsReRenderThisRow = !(oldDataPoint && (0, _isEqual2.default)(item, oldDataPoint));
        var tableColumns = !letsReRenderThisRow && oldRow ? oldRow.props.children : mapColumns(item, columns);
        return createRow(item, tableColumns, rowClickHandler);
    }, undefined);
};

var GridBodyComponent = function (_React$Component) {
    _inherits(GridBodyComponent, _React$Component);

    function GridBodyComponent() {
        _classCallCheck(this, GridBodyComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GridBodyComponent).apply(this, arguments));
    }

    _createClass(GridBodyComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props;
            var data = _props.data;
            var columns = _props.columns;
            var rowClickHandler = _props.rowClickHandler;

            var tableRows = renderGridMap(null, null, data, columns, rowClickHandler);
            this.setState({
                tableRows: tableRows
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var data = nextProps.data;
            var columns = nextProps.columns;
            var rowClickHandler = nextProps.rowClickHandler;

            if (!(0, _isEqual2.default)(this.props, nextProps)) {
                var tableRows = renderGridMap(this.state.tableRows, this.props.data, data, columns, rowClickHandler);
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
    data: _react.PropTypes.array.isRequired,
    columns: _react.PropTypes.array.isRequired,
    rowClickHandler: _react.PropTypes.func,
    style: _react.PropTypes.object
};

exports.default = GridBodyComponent;