import React, { PropTypes } from 'react';
import _ from 'lodash';

const renderColumnHeaders = columns => (
    _.map(columns, (column) =>
        (
            <div key={ column.header } style={{ flex: '1 0 0px' }}>
                { column.header }
            </div>
        )
    )
);

const GridHeaderComponent = props => {
    const { columns } = props;
    const headerColumns = renderColumnHeaders(columns);
    return (
        <div style={{ display: 'flex' }}>
            { headerColumns }
        </div>
    );
};

GridHeaderComponent.propTypes = {
    columns: PropTypes.array.isRequired
};

export default GridHeaderComponent;
