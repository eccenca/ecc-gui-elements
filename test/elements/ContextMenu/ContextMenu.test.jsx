import React from 'react';
import { shallow } from 'enzyme';
import { ContextMenu } from '../../../src/elements/ContextMenu/ContextMenu';
import { MenuItem } from '../../../index';

const selector = '.contextmenu-container';

describe('ContextMenu', () => {
    let wrapper;
    it('should render the ContextMenu component', () => {
        wrapper = shallow(<ContextMenu />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the contextMenu component with MenuItem', () => {
        wrapper = shallow(
            <ContextMenu
                key="contextmenu"
                className="uitest-table__contextmenu"
            >
                <MenuItem key="1">Menu item One</MenuItem>
                <MenuItem key="2">Second Menu item</MenuItem>
            </ContextMenu>
        );
        expect(wrapper.find('.item-menu-item-one')).toHaveLength(1);
        expect(wrapper.find('.item-second-menu-item')).toHaveLength(1);
    });
});
