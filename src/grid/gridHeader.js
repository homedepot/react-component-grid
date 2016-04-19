import React, { PropTypes } from 'react';
import _ from 'lodash';

const renderColumnHeaders = columns => (
    _.map(columns, (column) => {
        let styles = { flex: '1 0 0px' };
        _.forEach(column.styles, (style) => {
            styles[style.name] = style.value;
        });
        return (
            <div key={ column.header } style={styles}>
                { column.header }
            </div>
        );
    })
);

const GridHeaderComponent = props => {
    const { columns, headerClass } = props;
    const headerColumns = renderColumnHeaders(columns);
    return (
        <div className={headerClass} style={{ display: 'flex' }}>
            { headerColumns }
        </div>
    );
};

GridHeaderComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    headerClass: PropTypes.string.isRequired
};

export default GridHeaderComponent;
