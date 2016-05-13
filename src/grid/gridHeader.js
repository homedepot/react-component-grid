import React, { PropTypes } from 'react';
import _ from 'lodash';

const renderColumnHeaders = columns => (
    _.map(columns, (column) => {
        const style = { flex: '1 0 0px' };
        return (
          <div key={column.header} style={{ ...column.style, ...style }}>
            {column.header}
          </div>
        );
    })
);

const GridHeaderComponent = props => {
    const { columns, headerClass } = props;
    const headerColumns = renderColumnHeaders(columns);
    return (
      <div className={headerClass} style={{ display: 'flex' }}>
        {headerColumns}
      </div>
    );
};

GridHeaderComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    headerClass: PropTypes.string.isRequired
};

export default GridHeaderComponent;
