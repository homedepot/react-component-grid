import React, { PropTypes } from 'react';

import GridHeader from './gridHeader';
import GridBody from './gridBody';

const ComponentGridComponent = props => {
    const { data, columns, headerClass, rowClickHandler, style } = props;

    return (
        <div style={style}>
            <GridHeader headerClass={headerClass} columns={columns} />
            <GridBody data={data} columns={columns} rowClickHandler={rowClickHandler} />
        </div>
    );
};

ComponentGridComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func,
    headerClass: PropTypes.string,
    style: PropTypes.object
};

export default ComponentGridComponent;
