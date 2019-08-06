import React from 'react';
import { shallow } from 'enzyme';
import AffirmativeButton from '../../../src/elements/Button/AffirmativeButton';
import Button from '../../../src/elements/Button/Button';
import DismissiveButton from '../../../src/elements/Button/DismissiveButton';
import DisruptiveButton from '../../../src/elements/Button/DisruptiveButton';
import ProgressButton from '../../../src/elements/Button/ProgressButton';
import { CardContent } from '../../../src/elements/Card';

const buttonMock = jest.fn();

describe('Buttons', () => {
    let wrapper;

    it('should AffirmativeButton be visible', () => {
        wrapper = shallow(
            <AffirmativeButton iconName="hide" />
        );
        expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('should render the AffirmativeButton without error', () => {
        wrapper = shallow(
            <AffirmativeButton
                iconName="hide"
                onClick={buttonMock}
            />
        );
        wrapper.find('Button').simulate('click');
        expect(buttonMock.mock.calls).toHaveLength(1);
    });

    it('should render the button', () => {
        wrapper = shallow(
            <Button
                iconName="menu_more"
                affirmative={true}
                dismissive={true}
                fabSize="large"
            />
        );
        expect(wrapper.find('FABButton')).toHaveLength(1);
    });

    it('should render the DismissiveButton', () => {
        wrapper = shallow(
            <DismissiveButton>
                Dismissive
            </DismissiveButton>
        );
        expect(wrapper.find('Button')).toHaveLength(1);
        expect(wrapper.find('Button').get(0).props.dismissive).toEqual(true);
    });

    it('should render the DisruptiveButton', () => {
        wrapper = shallow(<DisruptiveButton>Disrupt</DisruptiveButton>);
        expect(wrapper.find('Button')).toHaveLength(1);
        expect(wrapper.find('Button').get(0).props.disruptive).toEqual(true);
    });

    it('should render the ProgressButton', () => {
        wrapper = shallow(
            <ProgressButton
                children="Affirm"
            />
        );
        expect(wrapper.find('Progressbar')).toHaveLength(1);
        expect(wrapper.find('Button').get(0).props.disabled).toEqual(true);
    });

    it('should render the CardContent', () => {
        const selector = '.mdl-card__content';
        wrapper = shallow(<CardContent />);
        expect(wrapper.find(selector)).toHaveLength(1);
    });
});
