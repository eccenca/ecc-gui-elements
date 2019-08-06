import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../src/elements/Card/Card';
import CardActions from '../../../src/elements/Card/CardActions';
import CardTitle from '../../../src/elements/Card/CardTitle';

describe('Card Component', () => {
    let wrapper;
    it('should render the Card component', () => {
        wrapper = shallow(<Card />);
        expect(wrapper.find('Card')).toHaveLength(1);
    });

    it('should render the CardActions component', () => {
        wrapper = shallow(<CardActions />);
        expect(wrapper.find('CardActions')).toHaveLength(1);
    });

    it('should render the CardTitle component', () => {
        wrapper = shallow(<CardTitle />);
        expect(wrapper.find('CardTitle')).toHaveLength(1);
    });
});
