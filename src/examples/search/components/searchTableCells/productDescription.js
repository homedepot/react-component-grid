import React, { PropTypes } from 'react';

const ProductDescriptionComponent = name => (
  <div>
    {name}
  </div>
);

ProductDescriptionComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default ProductDescriptionComponent;
