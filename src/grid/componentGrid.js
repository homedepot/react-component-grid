import React from 'react';
import PropTypes from 'prop-types';

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
    rowFooter,
    rowWrapperComponent,
  } = props;

  console.log('HELLO FROM THE GRID!!!!!!!');

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
        rowWrapperComponent={rowWrapperComponent}
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
  rowWrapperComponent: PropTypes.func,
};

export default ComponentGridComponent;
