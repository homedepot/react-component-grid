import React, { PropTypes } from 'react';

const SubtotalComponent = subtotal => (
	<div>
		<div>
			${ subtotal }
		</div>
	</div>
);

SubtotalComponent.propTypes = {
    subtotal: PropTypes.number.isRequired
};

export default SubtotalComponent;
