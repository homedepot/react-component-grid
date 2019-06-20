import React from 'react';
import PropTypes from 'prop-types';

const SourceNameComponent = props => (
    <div>
        <div>
            <img style={{ maxWidth: '60px' }} alt={props.name} src={props.imageUrl} />
        </div>
        <div>
            { props.name }
        </div>
    </div>
);

SourceNameComponent.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default SourceNameComponent;
