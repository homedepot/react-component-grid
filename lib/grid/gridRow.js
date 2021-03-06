'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridRowComponent = function (_React$Component) {
    _inherits(GridRowComponent, _React$Component);

    function GridRowComponent(props) {
        _classCallCheck(this, GridRowComponent);

        var _this = _possibleConstructorReturn(this, (GridRowComponent.__proto__ || Object.getPrototypeOf(GridRowComponent)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(GridRowComponent, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return !(0, _isEqual2.default)(this.props, nextProps);
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            var rowClickHandler = this.props.rowClickHandler;

            if (rowClickHandler) {
                rowClickHandler(this.props.id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                useDefaultStyle = _props.useDefaultStyle,
                rowWrapperComponent = _props.rowWrapperComponent,
                rowClass = _props.rowClass,
                item = _props.item,
                children = _props.children;


            var style = useDefaultStyle ? { display: 'flex' } : {};
            var wrapperProps = {
                className: rowClass,
                style: style,
                onClick: this.onClick
            };

            // only set item property if this is a react component
            if (rowWrapperComponent) {
                wrapperProps.item = item;
            }

            var WrapperComponent = rowWrapperComponent || 'div';

            return _react2.default.createElement(
                WrapperComponent,
                wrapperProps,
                children
            );
        }
    }]);

    return GridRowComponent;
}(_react2.default.Component);

exports.default = GridRowComponent;


GridRowComponent.propTypes = {
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    rowClickHandler: _propTypes2.default.func,
    rowClass: _propTypes2.default.string,
    children: _propTypes2.default.array,
    useDefaultStyle: _propTypes2.default.bool,
    rowWrapperComponent: _propTypes2.default.func,
    item: _propTypes2.default.object
};