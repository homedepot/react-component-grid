import React, { PropTypes } from 'react';

const GridColumnComponent = props => {
    const style = { flex: '1 0 0px' };
    return (
        <div style={{ ...props.style, ...style }} className={props.className}>
            { props.children }
        </div>
	);
};

GridColumnComponent.propTypes = {
    children: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};

export default GridColumnComponent;
