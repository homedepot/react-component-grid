import React from 'react';
import PropTypes from 'prop-types';

const bulkPricingComponent = bulkPricing => (
    bulkPricing ? (<div>BULK PRICING</div>) : null
);

const UnitPriceComponent = (props) => {
    const bulkPricing = bulkPricingComponent(props.bulkPricing);
    return (
        <div>
            <div>
                $
                { props.unitPrice }
            </div>
            <div>
                {'per '}
                { props.baseUnit }
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
