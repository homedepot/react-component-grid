import React, { PropTypes } from 'react';
import isEqual from 'lodash/isEqual';

export default class GridRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props.children, nextProps.children);
    }
    _onClick() {
        const { rowClickHandler } = this.props;
        if (rowClickHandler) {
            rowClickHandler(this.props.id);
        }
    }
    render() {
        return (
            <div className={this.props.rowClass} style={{ display: 'flex' }} onClick={this._onClick}>
                {this.props.children}
            </div>
        );
    }
}

GridRowComponent.propTypes = {
    id: PropTypes.string.isRequired,
    rowClickHandler: PropTypes.func,
    rowClass: PropTypes.string
};
