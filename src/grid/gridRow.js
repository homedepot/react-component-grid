import React, { PropTypes } from 'react';
import isEqual from 'lodash/isEqual';

export default class GridRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
    }
    _onClick() {
        const { rowClickHandler } = this.props;
        if (rowClickHandler) {
            rowClickHandler(this.props.id);
        }
    }
    render() {
        const style = this.props.useDefaultStyle ? { display: 'flex' } : {};

        return (
          <div className={this.props.rowClass} style={style} onClick={this._onClick}>
            {this.props.children}
          </div>
        );
    }
}

GridRowComponent.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    rowClickHandler: PropTypes.func,
    rowClass: PropTypes.string,
    children: PropTypes.array,
    useDefaultStyle: PropTypes.bool
};
