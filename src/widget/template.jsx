import React from 'react';
import {IntlMixin} from 'ecc-mixins';

const FormattedMessage = IntlMixin.elements.FormattedMessage;

const render = function() {
    return (
        <div className="eccGuiElements-component">
            I am component
            <FormattedMessage message={this.getIntlMessage('test')} />
        </div>
    );
};

export default render;
