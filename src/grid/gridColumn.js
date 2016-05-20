import React, { PropTypes } from 'react';

const GridColumnComponent = props => {
    const flexSize = props.flexGrow || '1';
    const style = { flex: `${flexSize} 0 0px` };
    return (
      <div style={{ ...props.style, ...style }} className={props.className}>
        {props.children}
      </div>
	);
};

GridColumnComponent.propTypes = {
    children: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    flexGrow: PropTypes.number
};

export default GridColumnComponent;
