import React, { PropTypes } from 'react';

const LineNumberComponent = lineNumber => (
	<div>
		<div>
			{ lineNumber }
		</div>
	</div>
);


LineNumberComponent.propTypes = {
    lineNumber: PropTypes.number.isRequired
};

export default LineNumberComponent;
