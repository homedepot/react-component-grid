import React, { Component } from 'react';

import UnitPrice from './vendorTableCells/unitPrice';
import LeadTime from './vendorTableCells/leadTime';
import SourceName from './vendorTableCells/sourceName';
import LineNumber from './vendorTableCells/lineNumber';
import Quantity from './vendorTableCells/quantity';
import Fees from './vendorTableCells/fees';
import Subtotal from './vendorTableCells/subtotal';

import ComponentGrid from '../../grid/componentGrid';

export default class App extends Component {
    _onRowClick(id) {
        console.log(id);
    }
    render() {
        const data = [
            {   
                rowNumber: 1,
                id: 123213,
                source: { name: 'Boise Cascade', imageUrl: 'http://cdn-5.famouslogos.us/images/boise-cascade-logo.jpg' },
                pricing: { unitPrice: 36.28, baseUnit: 'board', bulkPricing: true },
                leadTime: 3,
                quantity: { quantity: 1, baseUnit: 'board' },
                fees: null,
                subtotal: 2321.92,
                rowClass: 'text-muted'
            },
            {   
                rowNumber: 1,
                id: 245454,
                source: { name: 'International Wood Products', imageUrl: 'http://tricitylumber.com/files/2014/09/IVP.png?w=316&h=210&zc=2&cc=111111&a=t' },
                pricing: { unitPrice: 51.53, baseUnit: 'board', bulkPricing: false },
                leadTime: 5,
                quantity: { quantity: 1, baseUnit: 'board' },
                fees: { explanation: 'Fees Waived' },
                subtotal: 3285.12,
                rowClass: 'text-primary'
            },
        ];

        const columns = [
            {
                data: 'rowNumber',
                header: '#',
                component: LineNumber,
                maxWidth: '10px',
                styles: [{ name: 'maxWidth', value: '20px' }]
            },
            {
                data: 'pricing',
                header: 'UnitPrice',
                component: UnitPrice
            },
            {
                data: 'leadTime',
                header: 'Lead Time',
                component: LeadTime
            },
            {
                data: 'source',
                header: 'Vendor Name',
                component: SourceName
            },
            {
                data: 'quantity',
                header: 'Quantity',
                component: Quantity
            },
            {
                data: 'fees',
                header: 'Fees',
                component: Fees
            },
            {
                data: 'subtotal',
                header: 'Subtotal',
                component: Subtotal
            }
        ];

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Example - Vendor Options</h1>
                </div>
                <div className="panel-body">
                    <ComponentGrid data={data} columns={columns} headerClass={'text-primary'} rowClickHandler={this._onRowClick} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
};
