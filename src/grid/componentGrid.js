import React, { PropTypes } from 'react';

import GridHeader from './gridHeader';
import GridBody from './gridBody';

const ComponentGridComponent = (props) => {
    const {
        data,
        columns,
        headerClass,
        rowClickHandler,
        style,
        useDefaultStyle,
        rowsContainerStyle,
        rowHeader,
        rowFooter
    } = props;

    return (
      <div style={style}>
        <GridHeader headerClass={headerClass} columns={columns} useDefaultStyle={useDefaultStyle} />
        <GridBody
          data={data}
          columns={columns}
          rowClickHandler={rowClickHandler}
          style={rowsContainerStyle}
          useDefaultStyle={useDefaultStyle}
          rowHeader={rowHeader}
          rowFooter={rowFooter}
        />
      </div>
    );
};

ComponentGridComponent.defaultProps = {
    useDefaultStyle: true
};

ComponentGridComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func,
    headerClass: PropTypes.string,
    style: PropTypes.object,
    useDefaultStyle: PropTypes.bool,
    rowsContainerStyle: PropTypes.object,
    rowHeader: PropTypes.shape({
        data: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
    }),
    rowFooter: PropTypes.shape({
        data: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
    }),
};

export default ComponentGridComponent;
