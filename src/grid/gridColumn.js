import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class GridColumn extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

GridColumn.propTypes = {
};
