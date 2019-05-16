import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import ComponentToTest from '../../src/grid/componentGrid';

describe('PrintButton', () => {
    const testElement = value => (<span>{value}</span>);
    const generateTestInput = () => ({
        columns: [
            {
                data: 'value',
                component: testElement,
            }
        ],
        data: [
            {
                value: 'Text A',
                id: 1,
            },
            {
                value: 'Text B',
                id: 2,
            },
        ],
    });

    it('should render without crashing', () => {
        const props = generateTestInput();
        const target = shallow(<ComponentToTest {...props} />);
        expect(target.length).toEqual(1);
    });
    it('should render a simple, 2 row grid', () => {
        const props = generateTestInput();
        const target = mount(<ComponentToTest {...props} />);
        expect(target.find('span').length).toEqual(2);
    });
});

/*
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
*/
