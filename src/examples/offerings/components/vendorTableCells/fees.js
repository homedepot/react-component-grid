import React, { PropTypes } from 'react';

const FeesComponent = props => {
    const feesComponent = (props) ?
    (
		<div>
			<div>
				{ props.explanation }
			</div>
			<div>
				<i className="fa fa-question"></i> Explain
			</div>
		</div>
	) :
	(<div></div>);
    return feesComponent;
};

FeesComponent.propTypes = {
    explanation: PropTypes.string.isRequired
};

export default FeesComponent;
