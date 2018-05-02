import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

export default class GridRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
    }
    onClick() {
        const { rowClickHandler } = this.props;
        if (rowClickHandler) {
            rowClickHandler(this.props.id);
        }
    }
    render() {
        const {
            useDefaultStyle,
            rowWrapperComponent,
            rowClass,
            item,
            children,
        } = this.props;

        const style = useDefaultStyle ? { display: 'flex' } : {};
        const wrapperProps = {
            className: rowClass,
            style,
            onClick: this.onClick
        };

        // only set item property if this is a react component
        if (rowWrapperComponent) {
            wrapperProps.item = item;
        }

        const WrapperComponent = rowWrapperComponent || 'div';

        return (
          <WrapperComponent {...wrapperProps}>
            {children}
          </WrapperComponent>
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
    useDefaultStyle: PropTypes.bool,
    rowWrapperComponent: PropTypes.func,
    item: PropTypes.object,
};
