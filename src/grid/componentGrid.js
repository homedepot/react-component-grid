import React, { PropTypes } from 'react';

import GridHeader from './gridHeader';
import GridBody from './gridBody';

const ComponentGridComponent = props => {
    const { data, columns, rowClickHandler } = props;

    return (
        <div>
            <GridHeader columns={columns} />
            <GridBody data={data} columns={columns} rowClickHandler={rowClickHandler} />
        </div>
    );
};

ComponentGridComponent.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowClickHandler: PropTypes.func
};

export default ComponentGridComponent;
