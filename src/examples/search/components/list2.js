import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import SourceList from './searchTableCells/sourceList';
import ProductDescription from './searchTableCells/productDescription';
import ComponentGrid from '../../../grid/componentGrid';

export default class ListTwo extends Component {
    onRowClick() {
    }

    render() {
        const { rows } = this.props;
        const data = _.map(rows, (row, i) => (
            {
                rowNumber: i + 1,
                id: row.id,
                sources: row.sources,
                name: row.name,
                rowClass: 'flex-row',
                additionalDescription: row.additionalDescription
            }
        ));

        const columns = [
            {
                data: 'name',
                component: ProductDescription,
                header: 'Fixed width Column',
                className: 'col fixed-width-col'
            },
            {
                data: 'additionalDescription',
                component: ProductDescription,
                header: 'Flexible Width Column',
                className: 'col flex-width-col'
            },
            {
                data: 'sources',
                component: SourceList,
                header: 'Flexible Width Column',
                className: 'col flex-width-col'
            }
        ];

        return (
          <div className="panel panel-default">

            <div className="panel-heading">
              <h1>Example - Search Results List Two</h1>
            </div>

            <div className="panel-body">
              <ComponentGrid
                data={data}
                columns={columns}
                rowClickHandler={this.onRowClick}
                headerClass={'text-primary'}
                useDefaultStyle
              />
            </div>

          </div>
        );
    }
}

ListTwo.propTypes = {
    rows: PropTypes.array.isRequired
};
