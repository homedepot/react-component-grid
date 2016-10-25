import React, { PropTypes } from 'react';

import GridHeader from './gridHeader';
import GridBody from './gridBody';

const ComponentGridComponent = props => {
    const {
        data,
        columns,
        headerClass,
        rowClickHandler,
        style,
        rowsContainerStyle,
        rowHeader,
        rowFooter
    } = props;

    return (
      <div style={style}>
        <GridHeader headerClass={headerClass} columns={columns} />
        <GridBody
          data={data}
          columns={columns}
          rowClickHandler={rowClickHandler}
          style={rowsContainerStyle}
          rowHeader={rowHeader}
          rowFooter={rowFooter}
        />
      </div>
    );
};

ComponentGridComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func,
    headerClass: PropTypes.string,
    style: PropTypes.object,
    rowsContainerStyle: PropTypes.object,
    rowHeader: PropTypes.object,
    rowFooter: PropTypes.object,
};

export default ComponentGridComponent;
