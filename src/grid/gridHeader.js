import React, { PropTypes } from 'react';
import map from 'lodash/map';

const renderColumnHeaders = (columns, useDefaultStyle) => (
    map(columns, (column, i) => {
        const flexSize = column.flexGrow || '1';
        const flexShrink = column.flexShrink || '0';
        const flexBasis = column.flexBasis || '0px';
        const style = useDefaultStyle ? { flex: `${flexSize} ${flexShrink} ${flexBasis}` } : {};

        return (
          <div key={i} style={{ ...column.style, ...style }}>
            {column.header}
          </div>
        );
    })
);

const GridHeaderComponent = (props) => {
    const { columns, headerClass, useDefaultStyle } = props;
    const headerColumns = renderColumnHeaders(columns, useDefaultStyle);
    const style = useDefaultStyle ? { display: 'flex' } : {};
    return (
      <div className={headerClass} style={style}>
        {headerColumns}
      </div>
    );
};

GridHeaderComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    headerClass: PropTypes.string.isRequired,
    useDefaultStyle: PropTypes.bool
};

export default GridHeaderComponent;
