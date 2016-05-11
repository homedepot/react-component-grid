import React, { Component } from 'react';
import _ from 'lodash';

import List from './list';

export default class App extends Component {
    constructor(props) {
        super(props);
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
        this.addTenRows = this.addTenRows.bind(this);
        this.state = { data };
    }
    getRow(name) {
        return {
            rowNumber: 1,
            id: 123213,
            sources: [{ name: 'Boise Cascade', imageUrl: 'http://cdn-5.famouslogos.us/images/boise-cascade-logo.jpg' }],
            name,
            additionalDescription: 'Rad Shovel XYZ',
            image: { url: 'http://content.hdquotecenter.com/cdn/public/ergon/388/391/19/706/4ETIIZEZTSWWER4RZZHVE40V2C.jpg?h=160&w=160&mode=pad', alt: 'image', maxWidth: '50px' },
            rowClass: 'text-muted'
        };
    }
    addTenRows() {
        const newRows = _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], () =>
            this.getRow('added row')
        );
        const existingData = _.cloneDeep(this.state.data);
        const data = _.concat(existingData, newRows);
        this.setState({ data });
    }
    render() {
        return (
          <div>
            <List rows={this.state.data} />
            <button onClick={this.addTenRows}>Click me</button>
          </div>
        );
    }
}
