import React, { PropTypes } from 'react';
import find from 'lodash/find';

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
            flexGrow={column.flexGrow}
          >
            {fieldComponent}
          </GridColumn>);
    }, this);

const createRow = (item, tableColumns, rowClickHandler) => {
    return (
        <GridRow
          key={item.id}
          rowClickHandler={rowClickHandler}
          id={item.id}
          rowClass={item.rowClass}
        >
            {tableColumns}
        </GridRow>
    );
};

const renderGridMap = (oldRows, newData, columns, rowClickHandler) => {
    // iterate through the newData
    // if the newData item refers to an oldRow and the data is the same, take the old row source
    return newData.map((item, r) => {
        // try to find the this item in the oldRows
        const oldRow = find(oldRows, eachOldRow => eachOldRow.key === item.id);
        const tableColumns = (oldRow) ? oldRow.props.children : mapColumns(item, columns);
        return createRow(item, tableColumns, rowClickHandler);
    }, this);
};

class GridBodyComponent extends React.Component {
    componentWillMount() {
        const { data, columns, rowClickHandler } = this.props;
        const tableRows = renderGridMap(null, data, columns, rowClickHandler);
        this.setState({
            tableRows,
        });
    }
    componentWillReceiveProps(nextProps) {
        const { data, columns, rowClickHandler } = nextProps;
        const tableRows = renderGridMap(this.state.tableRows, data, columns, rowClickHandler);
        this.setState({
            tableRows,
        });
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
