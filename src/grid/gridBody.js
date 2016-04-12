import React, { PropTypes } from 'react';

import GridRow from './gridRow';
import GridColumn from './gridColumn';

const GridBodyComponent = props => {
    const { data, columns, rowClickHandler } = props;
    const tableRows = data.map(function (item, r) {
        const tableColumns = columns.map((column, i) => {
            const fieldValue = item[column.data];
            const fieldComponent = column.component(fieldValue);
            const fieldStyles = column.styles ? column.styles : null;
            return (<GridColumn key={ i } styles={fieldStyles} >{ fieldComponent }</GridColumn>);
        }, this);
        return (
            <GridRow
              key={ r }
              rowClickHandler={ rowClickHandler }
              id={ item.id }
            >
                { tableColumns }
            </GridRow>
        );
    }, this);
    return (
        <div>
            { tableRows }
        </div>
    );
};

GridBodyComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func
};

export default GridBodyComponent;
