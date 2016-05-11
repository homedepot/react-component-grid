import React, { PropTypes } from 'react';

const ItemComponent = props => (
	(props.quantity === 1) ? (<div>{props.baseUnit}</div>) : (<div>{props.baseUnit}s</div>)
);

const QuantityComponent = props => {
    const baseUnitDisplay = ItemComponent(props);
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
    baseUnit: PropTypes.string.isRequired
};

ItemComponent.propTypes = {
    quantity: PropTypes.string.isRequired,
    baseUnit: PropTypes.string.isRequired
};

export default QuantityComponent;
