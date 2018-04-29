import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

class GridColumnComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props.children, nextProps.children);
    }
    render() {
        const flexSize = this.props.flexGrow || '1';
        const flexShrink = this.props.flexShrink || '0';
        const flexBasis = this.props.flexBasis || '0px';
        const style = this.props.useDefaultStyle ? { flex: `${flexSize} ${flexShrink} ${flexBasis}` } : {};
        return (
          <div style={{ ...this.props.style, ...style }} className={this.props.className}>
            {this.props.children}
          </div>
        );
    }
}

GridColumnComponent.propTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
    className: PropTypes.string,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    flexBasis: PropTypes.string,
    useDefaultStyle: PropTypes.bool
};

export default GridColumnComponent;
