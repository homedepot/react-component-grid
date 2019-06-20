import React from 'react';
import PropTypes from 'prop-types';

const LeadTimeComponent = leadTime => (
    <div>
        <div>
            { leadTime }
        </div>
        <div>
            Business Days
        </div>
    </div>
);


LeadTimeComponent.propTypes = {
    leadTime: PropTypes.string.isRequired
};

export default LeadTimeComponent;
