import React, { PropTypes } from 'react';

const RowFooterComponent = data => (
  <div>
    {data}
  </div>
);

RowFooterComponent.propTypes = {
    data: PropTypes.string.isRequired
};

export default RowFooterComponent;
