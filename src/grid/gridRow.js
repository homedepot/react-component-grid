import React, { PropTypes } from 'react';

const GridRowComponent = props => (
    <div style={{ display: 'flex' }}>
        { props.children }
    </div>
);

GridRowComponent.propTypes = {
    children: PropTypes.array.isRequired
};

export default GridRowComponent;
