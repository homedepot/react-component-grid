import React from 'react';
import PropTypes from 'prop-types';

const itemComponent = props => (
    (props.quantity === 1) ? (
        <div>{props.baseUnit}</div>
    ) : (
        <div>
            {props.baseUnit}
            s
        </div>
    )
);

const QuantityComponent = (props) => {
    const baseUnitDisplay = itemComponent(props);
    return (
        <div>
            <div>
                { props.quantity }
            </div>
            <div>
                { baseUnitDisplay }
            </div>
        </div>
    );
};

QuantityComponent.propTypes = {
    quantity: PropTypes.string.isRequired,
};

itemComponent.propTypes = {
    quantity: PropTypes.string.isRequired,
    baseUnit: PropTypes.string.isRequired,
};

export default QuantityComponent;
