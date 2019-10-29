import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../../../src/elements/Pagination/Pagination';

const selectors = {
    PAGINATION: '.ecc-gui-elements__pagination',
    PAGINATION_INFO: '.ecc-gui-elements__pagination-pageInfo',
    PAGINATION_FIRST_PAGE:
        '.ecc-gui-elements__pagination-actions__first-page-button',
    PAGINATION_NEXT_PAGE:
        '.ecc-gui-elements__pagination-actions__next-page-button',
    PAGINATION_LAST_PAGE:
        '.ecc-gui-elements__pagination-actions__last-page-button',
    PAGINATION_PREVIOUS_PAGE:
        '.ecc-gui-elements__pagination-actions__prev-page-button',
    PAGINATION_LIMIT_SIZE: '.ecc-gui-elements__pagination-limit_size',
};
let wrapper;

describe('Pagination', () => {
    it('should renders the pagination component', () => {
        wrapper = shallow(
            <Pagination
                offset={10}
                limit={20}
                totalResults={200}
                onChange={() => {}}
            />
        );
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(`${selectors.PAGINATION} ${selectors.PAGINATION_INFO}`).text()).toContain('Page 1 of 10');
    });

    it('should successfully calls the onClick First page handler', () => {
        const onClickFirstMock = jest.fn();
        wrapper = shallow(
            <Pagination
                offset={15}
                limit={3}
                onChange={onClickFirstMock}
                totalResults={100}
            />
        );
        wrapper.find(selectors.PAGINATION_FIRST_PAGE).simulate('click');
        expect(onClickFirstMock.mock.calls).toHaveLength(1);
    });

    it('should successfully calls the onClack next page handler', () => {
        const onClickNextPage = jest.fn();
        wrapper = shallow(
            <Pagination
                offset={15}
                limit={3}
                onChange={onClickNextPage}
                totalResults={100}
            />
        );
        wrapper.find(selectors.PAGINATION_NEXT_PAGE).simulate('click');
        expect(onClickNextPage.mock.calls).toHaveLength(1);
    });

    it('should successfully calls the onClack last page handler', () => {
        const onClickLasttPage = jest.fn();
        wrapper = shallow(
            <Pagination
                offset={15}
                limit={3}
                onChange={onClickLasttPage}
                totalResults={100}
            />
        );
        wrapper.find(selectors.PAGINATION_LAST_PAGE).simulate('click');
        expect(onClickLasttPage.mock.calls).toHaveLength(1);
    });

    it('should successfully calls the onClickForward handler', () => {
        const onClickPreviousMock = jest.fn();
        wrapper = shallow(
            <Pagination
                offset={15}
                limit={3}
                onChange={onClickPreviousMock}
                totalResults={100}
            />
        );
        wrapper.find(selectors.PAGINATION_PREVIOUS_PAGE).simulate('click');
        expect(onClickPreviousMock.mock.calls).toHaveLength(1);
    });

    it('should successfully calls the onNewLimit handler', () => {
        const onNewLimitMock = jest.fn();
        wrapper = shallow(
            <Pagination
                offset={10}
                limit={3}
                limitRange={[1, 2, 3, 5, 10, 25, 50, 100, 200]}
                totalResults={200}
                newLimitText="Elements per Page"
                onChange={onNewLimitMock}
                showPageInput={true}
            />
        );
        expect(wrapper.find(selectors.PAGINATION_LIMIT_SIZE)).toHaveLength(1);
    });
});
