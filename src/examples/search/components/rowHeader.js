import React from 'react';
import PropTypes from 'prop-types';

const RowHeaderComponent = data => (
  <div>
    {data}
  </div>
);

RowHeaderComponent.propTypes = {
    data: PropTypes.string.isRequired
};

export default RowHeaderComponent;
