import React from 'react';
import { shallow } from 'enzyme';
import ChipVisual from '../../../src/elements/Chip/ChipVisual';
// eslint-disable-next-line max-len
const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Junonia_almana_by_kadavoor.JPG/281px-Junonia_almana_by_kadavoor.JPG';

describe('ChipVisual', () => {
    let wrapper;

    it('should render the ChipVisual component', () => {
        wrapper = shallow(<ChipVisual />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the ChipVisual component with label property', () => {
        wrapper = shallow(<ChipVisual label="AB" className="test-class_name" />);
        expect(wrapper.find('ChipContact').get(0).props.children).toEqual('AB');
    });

    it('should render the ChipVisual component with bgColor property', () => {
        wrapper = shallow(<ChipVisual bgColor="teal" />);
        expect(wrapper.find('.mdl-color--teal')).toHaveLength(1);
    });

    it('should render the ChipVisual component with textColor property', () => {
        wrapper = shallow(<ChipVisual textColor="white" />);
        expect(wrapper.find('.mdl-color-text--white')).toHaveLength(1);
    });

    it('should render the ChipVisual component with children property', () => {
        wrapper = shallow(
            <ChipVisual>
                <img src={image} alt={image} />
            </ChipVisual>
        );
        expect(wrapper.find('ChipContact').get(0).props.children).toEqual(<img src={image} alt={image} />);
    });
});
