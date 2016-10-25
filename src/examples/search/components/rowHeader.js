import React, { PropTypes } from 'react';

const RowHeaderComponent = data => (
  <div>
    {data}
  </div>
);

RowHeaderComponent.propTypes = {
    data: PropTypes.string.isRequired
};

export default RowHeaderComponent;
