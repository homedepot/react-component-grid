import React from 'react';
import PropTypes from 'prop-types';

const RowFooterComponent = data => (
    <div>
        {data}
    </div>
);

RowFooterComponent.propTypes = {
    data: PropTypes.string.isRequired
};

export default RowFooterComponent;
