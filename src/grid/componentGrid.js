import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import GridRow from './gridRow';
import GridColumn from './gridColumn';

export default class ComponentGrid extends Component {
    render() {
    	const { data } = this.props;

    	const columns = Object.keys(data[0]);

    	const tableRows = data.map(function(data, r) {
      		const tableColumns = columns.map(function(column, i) {
      			const fieldValue = data[column];
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
