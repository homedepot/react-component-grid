import React, { Component, PropTypes } from 'react';

export default class GridColumn extends Component {
    render() {
        return (
            <div style={{ flex: '1 0 0px' }}>
                { this.props.children }
            </div>
        );
    }
}

GridColumn.propTypes = {
    children: PropTypes.object.isRequired
};
