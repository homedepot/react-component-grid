import React from 'react';
import PropTypes from 'prop-types';

const ProductDescriptionComponent = name => (
    <div>
        {name}
    </div>
);

ProductDescriptionComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default ProductDescriptionComponent;
