'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unitPrice = require('./vendorTableCells/unitPrice');

var _unitPrice2 = _interopRequireDefault(_unitPrice);

var _leadTime = require('./vendorTableCells/leadTime');

var _leadTime2 = _interopRequireDefault(_leadTime);

var _sourceName = require('./vendorTableCells/sourceName');

var _sourceName2 = _interopRequireDefault(_sourceName);

var _lineNumber = require('./vendorTableCells/lineNumber');

var _lineNumber2 = _interopRequireDefault(_lineNumber);

var _quantity = require('./vendorTableCells/quantity');

var _quantity2 = _interopRequireDefault(_quantity);

var _fees = require('./vendorTableCells/fees');

var _fees2 = _interopRequireDefault(_fees);

var _subtotal = require('./vendorTableCells/subtotal');

var _subtotal2 = _interopRequireDefault(_subtotal);

var _componentGrid = require('../../grid/componentGrid');

var _componentGrid2 = _interopRequireDefault(_componentGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: '_onRowClick',
        value: function _onRowClick(id) {
            console.log(id);
        }
    }, {
        key: 'render',
        value: function render() {
            var data = [{
                rowNumber: 1,
                id: 123213,
                source: { name: 'Boise Cascade', imageUrl: 'http://cdn-5.famouslogos.us/images/boise-cascade-logo.jpg' },
                pricing: { unitPrice: 36.28, baseUnit: 'board', bulkPricing: true },
                leadTime: 3,
                quantity: { quantity: 1, baseUnit: 'board' },
                fees: null,
                subtotal: 2321.92,
                rowClass: 'text-muted'
            }, {
                rowNumber: 1,
                id: 245454,
                source: { name: 'International Wood Products', imageUrl: 'http://tricitylumber.com/files/2014/09/IVP.png?w=316&h=210&zc=2&cc=111111&a=t' },
                pricing: { unitPrice: 51.53, baseUnit: 'board', bulkPricing: false },
                leadTime: 5,
                quantity: { quantity: 1, baseUnit: 'board' },
                fees: { explanation: 'Fees Waived' },
                subtotal: 3285.12,
                rowClass: 'text-primary'
            }];

            var columns = [{
                data: 'rowNumber',
                header: '#',
                component: _lineNumber2.default,
                maxWidth: '10px',
                styles: [{ name: 'maxWidth', value: '20px' }]
            }, {
                data: 'pricing',
                header: 'UnitPrice',
                component: _unitPrice2.default
            }, {
                data: 'leadTime',
                header: 'Lead Time',
                component: _leadTime2.default
            }, {
                data: 'source',
                header: 'Vendor Name',
                component: _sourceName2.default
            }, {
                data: 'quantity',
                header: 'Quantity',
                component: _quantity2.default
            }, {
                data: 'fees',
                header: 'Fees',
                component: _fees2.default
            }, {
                data: 'subtotal',
                header: 'Subtotal',
                component: _subtotal2.default
            }];

            return _react2.default.createElement(
                'div',
                { className: 'panel panel-default' },
                _react2.default.createElement(
                    'div',
                    { className: 'panel-heading' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Example - Vendor Options'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-body' },
                    _react2.default.createElement(_componentGrid2.default, { data: data, columns: columns, rowClickHandler: this._onRowClick })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;


App.propTypes = {};