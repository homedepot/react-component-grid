import React from 'react';
import PropTypes from 'prop-types';

const SubtotalComponent = subtotal => (
    <div>
        <div>
            $
            { subtotal }
        </div>
    </div>
);

SubtotalComponent.propTypes = {
    subtotal: PropTypes.number.isRequired
};

export default SubtotalComponent;
