import React, { Component } from 'react';
import _ from 'lodash';

import SourceList from './searchTableCells/sourceList';
import ProductDescription from './searchTableCells/productDescription';
import RowFooter from './rowFooter';
import RowHeader from './rowHeader';

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
                rowClass: row.rowClass,
                headerData: 'I am a header',
                footerData: 'I am a footer',
            }
        ));
        const columns = [
            {
                data: 'name',
                component: ProductDescription,
                header: '',
                flexGrow: 1
            },
            {
                data: 'additionalDescription',
                component: ProductDescription,
                header: 'Descriptions',
                flexGrow: 2
            },
            {
                data: 'sources',
                component: SourceList,
                header: 'Sources',
            }
        ];

        const rowHeader = {
            data: 'headerData',
            component: RowHeader
        };

        const rowFooter = {
            data: 'footerData',
            component: RowFooter
        };

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
                rowHeader={rowHeader}
                rowFooter={rowFooter}
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
