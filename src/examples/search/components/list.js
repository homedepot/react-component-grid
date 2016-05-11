import React, { Component } from 'react';
import _ from 'lodash';

import SourceList from './searchTableCells/sourceList';
import ProductImage from './searchTableCells/productImage';
import ProductDescription from './searchTableCells/productDescription';

import ComponentGrid from '../../../grid/componentGrid';

export default class List extends Component {
    _onRowClick(id) {
        console.log(id);
    }
    render() {
        const { rows } = this.props;
        const data = _.map(rows, (row, i) => (
            {
                rowNumber: i + 1,
                id: row.id,
                sources: row.sources,
                name: row.name,
                additionalDescription: row.additionalDescription,
                image: row.image,
                rowClass: row.rowClass
            },
        ));
        const columns = [
            {
                data: 'image',
                component: ProductImage,
                maxWidth: '10px',
                styles: [{ name: 'maxWidth', value: '80px' }]
            },
            {
                data: 'name',
                component: ProductDescription,
                styles: [{ name: 'maxWidth', value: '200px' }]
            },
            {
                data: 'sources',
                component: SourceList,
                styles: [{ name: 'maxWidth', value: '200px' }]
            }
        ];

        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1>Example - Search Results</h1>
            </div>
            <div className="panel-body">
              <ComponentGrid
                data={data}
                columns={columns}
                headerClass={'text-primary'}
                rowClickHandler={this._onRowClick}
              />
            </div>
          </div>
        );
    }
}

List.propTypes = {
    rows: React.PropTypes.array.isRequired
};
