import React from 'react';
import { shallow } from 'enzyme';
import {
    BreadcrumbItem,
    BreadcrumbList,
} from '../../../src/elements/Breadcrumbs/index';

const selectors = {
    BREADCRUMB_ITEM: 'li.ecc-breadcrumbs__item',
    BREADCRUMB_BUTTON: '.ecc-breadcrumbs__button',
    BREADCRUMB_LIST: '.ecc-breadcrumbs',
};
const breadcrumbItemButton = () =>
    shallow(<BreadcrumbItem>Button</BreadcrumbItem>);

const breadcrumbItemLink = () =>
    shallow(<BreadcrumbItem href="/">Link</BreadcrumbItem>);

describe('Breadcrumb', () => {
    let wrapper;

    it('should Breadcrumb item be visible', () => {
        wrapper = breadcrumbItemButton();
        expect(wrapper.find(selectors.BREADCRUMB_ITEM)).toHaveLength(1);
    });

    it('should Breadcrumb button be visible', () => {
        wrapper = breadcrumbItemButton();
        expect(wrapper.find(selectors.BREADCRUMB_BUTTON)).toHaveLength(1);
        expect(wrapper.find(selectors.BREADCRUMB_BUTTON).text()).toEqual('Button');
    });

    it('should Breadcrumb link be visible', () => {
        wrapper = breadcrumbItemLink();
        expect(wrapper.find('a').get(0).props.href).toEqual('/');
        expect(wrapper.find(selectors.BREADCRUMB_ITEM).text()).toEqual('Link');
    });

    it('should render the breadCrumbList component', () => {
        wrapper = shallow(
            <BreadcrumbList className="my-own-class">
                <BreadcrumbItem
                    onClick={() => {}}
                >
                    Button
                </BreadcrumbItem>
            </BreadcrumbList>
        );
        expect(wrapper.find(selectors.BREADCRUMB_LIST)).toHaveLength(1);
    });
});
