import React, { Component, PropTypes } from 'react';

export default class GridRow extends Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                { this.props.children }
            </div>
        );
    }
}

GridRow.propTypes = {
    children: PropTypes.object.isRequired
};
