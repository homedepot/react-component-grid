import React, { PropTypes } from 'react';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';

import GridRow from './gridRow';
import GridColumn from './gridColumn';

const mapColumns = (item, columns) =>
    columns.map((column, i) => {
        const fieldValue = item[column.data];
        const fieldComponent = column.component(fieldValue);
        return (
          <GridColumn
            key={i}
            style={column.style}
            className={column.className}
          >
            {fieldComponent}
          </GridColumn>);
    }, this);

const createRow = (item, tableColumns, rowClickHandler) => (
        <GridRow
          key={item.id}
          rowClickHandler={rowClickHandler}
          id={item.id}
          rowClass={item.rowClass}
        >
            {tableColumns}
        </GridRow>
    );

const renderGridMap = (oldRows, oldData, newData, columns, rowClickHandler) =>
    newData.map(item => {
        const oldDataPoint = find(oldData, eachOldData => eachOldData.id === item.id);
        const oldRow = find(oldRows, eachOldRow => eachOldRow.key === item.id);
        const letsReRenderThisRow = (!(oldDataPoint && isEqual(item, oldDataPoint)));
        const tableColumns = (!letsReRenderThisRow && oldRow) ?
            oldRow.props.children :
            mapColumns(item, columns);
        return createRow(item, tableColumns, rowClickHandler);
    }, this);

class GridBodyComponent extends React.Component {
    componentWillMount() {
        const { data, columns, rowClickHandler } = this.props;
        const tableRows = renderGridMap(null, null, data, columns, rowClickHandler);
        this.setState({
            tableRows,
        });
    }
    componentWillReceiveProps(nextProps) {
        const { data, columns, rowClickHandler } = nextProps;
        if (!isEqual(this.props, nextProps)) {
            const tableRows = renderGridMap(
                this.state.tableRows,
                this.props.data,
                data,
                columns,
                rowClickHandler
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
    style: PropTypes.object
};

export default GridBodyComponent;
