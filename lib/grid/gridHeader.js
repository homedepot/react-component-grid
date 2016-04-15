'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderColumnHeaders = function renderColumnHeaders(columns) {
    return _lodash2.default.map(columns, function (column) {
        var styles = { flex: '1 0 0px' };
        _lodash2.default.forEach(column.styles, function (style) {
            styles[style.name] = style.value;
        });
        return _react2.default.createElement(
            'div',
            { key: column.header, style: styles },
            column.header
        );
    });
};

var GridHeaderComponent = function GridHeaderComponent(props) {
    var columns = props.columns;

    var headerColumns = renderColumnHeaders(columns);
    return _react2.default.createElement(
        'div',
        { style: { display: 'flex' } },
        headerColumns
    );
};

GridHeaderComponent.propTypes = {
    columns: _react.PropTypes.array.isRequired
};

exports.default = GridHeaderComponent;