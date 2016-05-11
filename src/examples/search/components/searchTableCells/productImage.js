import React, { PropTypes } from 'react';

const ProductImageComponent = image => (
  <div>
    <img src={image.url} alt={image.alt} style={{ maxWidth: image.maxWidth }} />
  </div>
);

ProductImageComponent.propTypes = {
    image: PropTypes.object.isRequired
};

export default ProductImageComponent;
