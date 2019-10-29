import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../../src/elements/Table/Table';
import TableBody from '../../../src/elements/Table/TableBody';
import TableCell from '../../../src/elements/Table/TableCell';
import TableHead from '../../../src/elements/Table/TableHead';
import TableRow from '../../../src/elements/Table/TableRow';

describe('Table test', () => {
    let wrapper;
    describe('Table', () => {
        it('should render the Table component', () => {
            wrapper = shallow(
                <Table
                    fullWidth={true}
                    preventCellOverflow={true}
                    scrollTableOverflow={true}
                    multiline={false}
                />
            );
            expect(wrapper.exists()).toBe(true);
            expect(wrapper.find('table')).toHaveLength(1);
        });
    });

    describe('TableBody', () => {
        it('should render the TableBody component', () => {
            wrapper = shallow(<TableBody multiline={true} />);
            expect(wrapper.exists()).toBe(true);
            expect(wrapper.find('tbody')).toHaveLength(1);
        });
    });

    describe('TableCell', () => {
        it('should render the TableCell component', () => {
            wrapper = shallow(
                <TableCell multiline={true} />
            );
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('TableHead', () => {
        it('should render the TableHead component', () => {
            wrapper = shallow(
                <TableHead multiline={true} preventCellOverflow={true} />
            );
            expect(wrapper.exists()).toBe(true);
            expect(wrapper.find('thead')).toHaveLength(1);
        });
    });

    describe('TableRow', () => {
        it('should render the TableRow component', () => {
            wrapper = shallow(<TableRow preventCellOverflow={true} />);
            expect(wrapper.exists()).toBe(true);
            expect(wrapper.find('tr')).toHaveLength(1);
        });
    });
});
