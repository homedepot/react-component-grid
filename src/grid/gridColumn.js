import React, { PropTypes } from 'react';
import _ from 'lodash';

const GridColumnComponent = props => {
    let styles = { flex: '1 0 0px' };
    _.forEach(props.styles, (style) => {
        styles[style.name] = style.value;
    });
    return (
        <div style={styles}>
            { props.children }
        </div>
	);
};

GridColumnComponent.propTypes = {
    children: PropTypes.object.isRequired,
    styles: PropTypes.array
};

export default GridColumnComponent;
