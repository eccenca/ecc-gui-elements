import React from 'react';
import { shallow } from 'enzyme';
import { Chip, ChipVisual } from '../../../src/elements/Chip/index';

const onClickMock = jest.fn();
const onCloseMock = jest.fn();

describe('Chip', () => {
    let wrapper;

    it('should click on the Chip component', () => {
        wrapper = shallow(<Chip onClick={onClickMock} />);
        const chipButton = wrapper.find('button').at(0);
        chipButton.simulate('click');
        expect(onClickMock.mock.calls).toHaveLength(1);
    });

    it('should execute the onClose functions', () => {
        wrapper = shallow(<Chip onClose={onCloseMock} />);
        const selector = '.mdl-chip--deletable';
        expect(wrapper.find(selector)).toHaveLength(1);
    });

    it('should render the ChipVisual component', () => {
        wrapper = shallow(<ChipVisual />);
        expect(wrapper.find('ChipContact')).toHaveLength(1);
    });
});
