import React, { Component, PropTypes } from 'react';

import GridHeader from './gridHeader';
import GridBody from './gridBody';

export default class ComponentGrid extends Component {
    render() {
        const { data, columns } = this.props;

        return (
            <div>
                <GridHeader columns={columns} />
                <GridBody data={data} columns={columns} />
            </div>
        );
    }
}

ComponentGrid.propTypes = {
    data: PropTypes.array.isRequired
};
