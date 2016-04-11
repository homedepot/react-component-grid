import React, { Component, PropTypes } from 'react';

import GridRow from './gridRow';
import GridColumn from './gridColumn';

export default class ComponentGrid extends Component {
    render() {
        const { data } = this.props;

        const columns = Object.keys(data[0]);

        const tableRows = data.map(function (item, r) {
            const tableColumns = columns.map((column, i) => {
                const fieldValue = item[column];
                return (<GridColumn key={ i }>{ fieldValue }</GridColumn>);
            }, this);
            return (<GridRow key={ r }>{ tableColumns }</GridRow>);
        }, this);
        return (
            <div>
                { tableRows }
            </div>
        );
    }
}

ComponentGrid.propTypes = {
    data: PropTypes.array.isRequired 
};
