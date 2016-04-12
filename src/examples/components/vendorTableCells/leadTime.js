import React, { PropTypes } from 'react';

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
