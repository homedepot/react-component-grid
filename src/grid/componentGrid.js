import React, { PropTypes } from 'react';

import GridHeader from './gridHeader';
import GridBody from './gridBody';

const ComponentGridComponent = props => {
    const { data, columns, headerClass, rowClickHandler } = props;

    return (
        <div>
            <GridHeader headerClass={headerClass} columns={columns} />
            <GridBody data={data} columns={columns} rowClickHandler={rowClickHandler} />
        </div>
    );
};

ComponentGridComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func,
    headerClass: PropTypes.string
};

export default ComponentGridComponent;
