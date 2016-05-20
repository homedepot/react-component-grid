import React, { PropTypes } from 'react';

import GridRow from './gridRow';
import GridColumn from './gridColumn';

const GridBodyComponent = props => {
    const { data, columns, rowClickHandler, style } = props;
    const tableRows = data.map(function (item, r) {
        const tableColumns = columns.map((column, i) => {
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
        return (
            <GridRow
              key={ r }
              rowClickHandler={rowClickHandler}
              id={item.id}
              rowClass={item.rowClass}
            >
                {tableColumns}
            </GridRow>
        );
    }, this);
    return (
        <div style={style}>
            { tableRows }
        </div>
    );
};

GridBodyComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func,
    style: PropTypes.object
};

export default GridBodyComponent;
