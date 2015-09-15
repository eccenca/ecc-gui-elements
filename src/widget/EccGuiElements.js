import React from 'react';
import _ from 'lodash';
import {IntlMixin} from 'ecc-mixins';

const EccGuiElements = React.createClass({
    mixins: [IntlMixin],

    // define property types
    propTypes: {
        // TODO
    },
    // initilize state
    getInitialState() {
        return this.props;
    },
    // handle new props
    componentWillReceiveProps(props) {
        if (!_.isEqual(this.state, props)) {
            this.setState(props);
        }
    },
    // template rendering
    render() {

        const FormattedMessage = IntlMixin.elements.FormattedMessage;

        return (
            <div className="eccGuiElements-component">
                I am component
                <FormattedMessage message={this.getIntlMessage('test')} />
            </div>
        );
    },
});

export default EccGuiElements;
