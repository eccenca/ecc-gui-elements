import React from 'react';
import _ from 'lodash';
import {IntlMixin} from 'ecc-mixins';
import Template from './template.jsx';
import intlData from '../locales';
import eccGuiElementsChannel from '../store';

const EccGuiElementsComponent = React.createClass({
    intlData,

    mixins: [IntlMixin],

    // define property types
    propTypes: {
        // TODO
    },
    // define default property values
    getDefaultProps() {
        return {
            // TODO
        };
    },
    // initilize state
    getInitialState() {
        // return state
        return this.props;
    },
    // handle new props
    componentWillReceiveProps(props) {
        this.setState(_.extend(
            {},
            // get cached getDefaultProps() values
            this.constructor.defaultProps,
            props,
            {
                // TODO
            },
        ));
    },
    // template rendering
    render: Template,
});

export default EccGuiElementsComponent;
