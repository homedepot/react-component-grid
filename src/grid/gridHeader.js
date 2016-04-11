import React, { Component, PropTypes } from 'react';

export default class GridHeader extends Component {
    render() {
        return (
            <div>
                Header!
            </div>
        );
    }
}

GridHeader.propTypes = {
    children: PropTypes.object.isRequired
};
