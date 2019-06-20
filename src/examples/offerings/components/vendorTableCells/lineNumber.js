import React from 'react';
import PropTypes from 'prop-types';

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
