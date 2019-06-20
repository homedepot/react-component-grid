import React from 'react';
import PropTypes from 'prop-types';

const FeesComponent = (props) => {
    const feesComponent = (props)
        ? (
            <div>
                <div>
                    { props.explanation }
                </div>
                <div>
                    <i className="fa fa-question" />
                    {' Explain'}
                </div>
            </div>
        ) : (
            <div />
        );
    return feesComponent;
};

FeesComponent.propTypes = {
    explanation: PropTypes.string.isRequired
};

export default FeesComponent;
