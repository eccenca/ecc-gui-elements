import React from 'react';
import { shallow } from 'enzyme';
import Chip from '../../../src/elements/Chip/Chip';
import ChipVisual from '../../../src/elements/Chip/ChipVisual';

const onClickMock = jest.fn();
const onCloseMock = jest.fn();
// eslint-disable-next-line max-len
const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Junonia_almana_by_kadavoor.JPG/281px-Junonia_almana_by_kadavoor.JPG';

describe('Chip', () => {
    let wrapper;

    it('should render the Chip component', () => {
        wrapper = shallow(<Chip />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the Chip component with click property', () => {
        wrapper = shallow(<Chip onClick={onClickMock} />);
        const chipButton = wrapper.find('button').at(0);
        chipButton.simulate('click');
        expect(onClickMock.mock.calls).toHaveLength(1);
    });

    it('should render the Chip component with onClose property', () => {
        wrapper = shallow(<Chip onClose={onCloseMock} />);
        const selector = '.mdl-chip--deletable';
        expect(wrapper.find(selector)).toHaveLength(1);
    });

    it('should render the Chip component with href property', () => {
        const url = 'http://example.com/';
        wrapper = shallow(<Chip href={url} />);
        expect(wrapper.find('.mdl-chip').get(0).props.href).toBe(url);
    });

    it('should render the Chip component with ChipVisual child', () => {
        wrapper = shallow(
            <Chip>
                <ChipVisual
                    image={image}
                    alt="My alternative label for the image."
                />
            </Chip>
        );
        expect(wrapper.find('span').children()).toHaveLength(2);
        expect(wrapper.find('ChipVisual').get(0).props.image).toBe(image);

    });
});
