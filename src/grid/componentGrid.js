import React, { Component, PropTypes } from 'react';

import GridHeader from './gridHeader';
import GridBody from './gridBody';

export default class ComponentGrid extends Component {
    render() {
        const { data } = this.props;

        return (
            <div>
                <GridHeader />
                <GridBody data={data} />
            </div>
        );
    }
}

ComponentGrid.propTypes = {
    data: PropTypes.array.isRequired
};
