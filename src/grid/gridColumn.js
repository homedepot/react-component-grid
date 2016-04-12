import React, { PropTypes } from 'react';

const GridColumnComponent = props => (
    <div style={{ flex: '1 0 0px' }}>
        { props.children }
    </div>
);

GridColumnComponent.propTypes = {
    children: PropTypes.object.isRequired
};

export default GridColumnComponent;
