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
                style: { maxWidth: '80px' },
                className: 'product-image',
                header: <div>Images</div>
            },
            {
                data: 'name',
                component: ProductDescription,
                style: { maxWidth: '200px' },
                header: 'Description'
            },
            {
                data: 'sources',
                component: SourceList,
                style: { maxWidth: '200px' }
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
                style={{ backgroundColor: '#EEE' }}
              />
            </div>
          </div>
        );
    }
}

List.propTypes = {
    rows: React.PropTypes.array.isRequired
};
