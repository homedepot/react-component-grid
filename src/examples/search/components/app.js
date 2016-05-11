import React, { Component } from 'react';

import SourceList from './searchTableCells/sourceList';
import ProductImage from './searchTableCells/productImage';
import ProductDescription from './searchTableCells/productDescription';

import ComponentGrid from '../../../grid/componentGrid';

export default class App extends Component {
    _onRowClick(id) {
        console.log(id);
    }
    render() {
        const data = [
            {
                rowNumber: 1,
                id: 123213,
                sources: [{ name: 'Boise Cascade', imageUrl: 'http://cdn-5.famouslogos.us/images/boise-cascade-logo.jpg' }],
                name: 'Shovel',
                additionalDescription: 'Rad Shovel XYZ',
                image: { url: 'http://content.hdquotecenter.com/cdn/public/ergon/388/391/19/706/4ETIIZEZTSWWER4RZZHVE40V2C.jpg?h=160&w=160&mode=pad', alt: 'image', maxWidth: '50px' },
                rowClass: 'text-muted'
            },
            {
                rowNumber: 2,
                id: 123214,
                sources: [{ name: 'Boise Cascade', imageUrl: 'http://cdn-5.famouslogos.us/images/boise-cascade-logo.jpg' }],
                name: 'Axe',
                additionalDescription: 'Crazy Good Axe JKL',
                image: { url: 'http://content.hdquotecenter.com/cdn/public/ergon/388/391/19/706/4ETIIZEZTSWWER4RZZHVE40V2C.jpg?h=160&w=160&mode=pad', alt: 'image', maxWidth: '50px' },
                rowClass: 'text-muted'
            },
        ];

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

App.propTypes = {
};
