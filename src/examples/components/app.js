import React, { Component } from 'react';

import UnitPrice from './vendorTableCells/unitPrice';
import LeadTime from './vendorTableCells/leadTime';
import SourceName from './vendorTableCells/sourceName';

import ComponentGrid from '../../grid/componentGrid';

export default class App extends Component {
    render() {
        const data = [
            {   id:  1,
                source: { name: 'Boise Cascade', imageUrl: 'http://cdn-5.famouslogos.us/images/boise-cascade-logo.jpg' },
                pricing: { unitPrice: 36.28, baseUnit: 'board', bulkPricing: true },
                leadTime: 3,
                quantity: 64,
                fees: null,
                subtotal: 2321.92
            },
            {   id:  2,
                source: { name: 'International Wood Products', imageUrl: 'http://tricitylumber.com/files/2014/09/IVP.png?w=316&h=210&zc=2&cc=111111&a=t' },
                pricing: { unitPrice: 51.53, baseUnit: 'board', bulkPricing: false },
                leadTime: 5,
                quantity: 64,
                fees: 'Fees Waived',
                subtotal: 3285.12
            },
        ];

        const columns = [
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
            }
        ];

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Example</h1>
                </div>
                <div className="panel-body">
                    <ComponentGrid data={data} columns={columns} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
};
