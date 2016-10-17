import React, { PropTypes } from 'react';
import isEqual from 'lodash/isEqual';

class GridColumnComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props.children, nextProps.children);
    }
    render() {
        const flexSize = this.props.flexGrow || '1';
        const style = { flex: `${flexSize} 0 0px` };
        return (
          <div style={{ ...style, ...this.props.style }} className={this.props.className}>
            {this.props.children}
          </div>
        );
    }
}

GridColumnComponent.propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    flexGrow: PropTypes.number
};

export default GridColumnComponent;
