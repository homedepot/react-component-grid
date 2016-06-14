import reactDom from 'react-dom/server';
import React from 'react';
import dom from 'cheerio';
import expect from 'expect';

import componentToTest from '../../src/grid/componentGrid';
const render = reactDom.renderToStaticMarkup;

describe('gridColumn component', () => {
    const testElement = value => (<span>{value}</span>);

    const columns = [
        {
            data: 'value',
            component: testElement,
        }
    ];

    const data = [
        {
            value: 'Text A',
            id: 1,
        },
        {
            value: 'Text B',
            id: 2,
        },
    ];

    it('renders a simple, 2 row grid', () => {
        const props = {
            data,
            columns,
        };
        const element = componentToTest(props);
        const $ = dom.load(render(element));
        const spans = $('span');
        expect(spans.length).toEqual(2);
    });
});
