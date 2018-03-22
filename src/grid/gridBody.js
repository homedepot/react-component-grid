import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';

import GridRow from './gridRow';
import GridColumn from './gridColumn';

const mapColumns = (item, columns, useDefaultStyle) =>
    columns.map((column, i) => {
        const fieldValue = item[column.data];
        const fieldComponent = column.component(fieldValue);
        return (
          <GridColumn
            key={i}
            style={column.style}
            className={column.className}
            flexGrow={column.flexGrow}
            flexShrink={column.flexShrink}
            flexBasis={column.flexBasis}
            useDefaultStyle={useDefaultStyle}
          >
            {fieldComponent}
          </GridColumn>);
    }, this);

const isValidRowHeaderOrFooter = obj =>
    typeof obj === 'object' &&
    typeof obj.component !== 'undefined' &&
    typeof obj.data !== 'undefined';

const createRow = (item, tableColumns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent) => {
    let rowHeaderComponent;
    if (isValidRowHeaderOrFooter(rowHeader)) {
        rowHeaderComponent = rowHeader.component(item[rowHeader.data]);
    }

    let rowFooterComponent;
    if (isValidRowHeaderOrFooter(rowFooter)) {
        rowFooterComponent = rowFooter.component(item[rowFooter.data]);
    }

    return (
      <div key={item.id}>
        {rowHeaderComponent}
        <GridRow
          rowClickHandler={rowClickHandler}
          id={item.id}
          rowClass={item.rowClass}
          useDefaultStyle={useDefaultStyle}
          key={item.id}
          rowWrapperComponent={rowWrapperComponent}
          item={item}
        >
          {tableColumns}
        </GridRow>
        {rowFooterComponent}
      </div>
    );
};

const renderGridMap = (oldRows, oldData, newData, columns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent) =>
    newData.map((item) => {
        const oldDataPoint = find(oldData, eachOldData => eachOldData.id === item.id);
        const foundOldRow = find(oldRows, eachOldRow => eachOldRow.key === item.id);
        const oldRow = foundOldRow ? find(foundOldRow.children, child => child.key === item.id) : null;
        const letsReRenderThisRow = (!(oldDataPoint && isEqual(item, oldDataPoint)));
        const tableColumns = (!letsReRenderThisRow && oldRow) ?
            oldRow.props.children :
            mapColumns(item, columns, useDefaultStyle);
        return createRow(item, tableColumns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent);
    }, this);

class GridBodyComponent extends React.Component {
    componentWillMount() {
        const { data, columns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent } = this.props;
        const tableRows = renderGridMap(
            null,
            null,
            data,
            columns,
            rowClickHandler,
            rowHeader,
            rowFooter,
            useDefaultStyle,
            rowWrapperComponent
        );
        this.setState({
            tableRows,
        });
    }
    componentWillReceiveProps(nextProps) {
        const { data, columns, rowClickHandler, rowHeader, rowFooter, useDefaultStyle, rowWrapperComponent } = nextProps;
        if (!isEqual(this.props, nextProps)) {
            const tableRows = renderGridMap(
                this.state.tableRows,
                this.props.data,
                data,
                columns,
                rowClickHandler,
                rowHeader,
                rowFooter,
                useDefaultStyle,
                rowWrapperComponent
            );
            this.setState({
                tableRows,
            });
        }
    }
    render() {
        const { style } = this.props;
        return (
          <div style={style}>
            {this.state.tableRows}
          </div>
        );
    }
}

GridBodyComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func,
    style: PropTypes.object,
    useDefaultStyle: PropTypes.bool,
    rowHeader: PropTypes.shape({
        data: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
    }),
    rowFooter: PropTypes.shape({
        data: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
    }),
    rowWrapperComponent: PropTypes.func,
};

export default GridBodyComponent;
