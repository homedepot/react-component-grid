import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ComponentGrid from '../../grid/componentGrid';

export default class App extends Component {
    render() {
        const data = [
            {   id:  1,
                name: 'stuff' },
            {   id:  2,
                name: 'more stuff' },
        ];
        return (
            <div>
                <h1>Example</h1>
                <ComponentGrid data={data}
                />
            </div>
        );
    }
}

App.propTypes = {
};
