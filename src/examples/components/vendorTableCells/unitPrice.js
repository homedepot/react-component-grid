import React, { PropTypes } from 'react';

const BulkPricingComponent = bulkPricing => (
	bulkPricing ? (<div>BULK PRICING</div>) : null
);

const UnitPriceComponent = props => {
    const bulkPricing = BulkPricingComponent(props.bulkPricing);
    return (
		<div>
			<div>
				${ props.unitPrice }
			</div>
			<div>
				per { props.baseUnit }
			</div>
			<div>
				{ bulkPricing }
			</div>
		</div>
	);
};


UnitPriceComponent.propTypes = {
    unitPrice: PropTypes.string.isRequired,
    bulkPricing: PropTypes.bool.isRequired,
    baseUnit: PropTypes.string.isRequired
};

export default UnitPriceComponent;
