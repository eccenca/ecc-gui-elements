import React from 'react';
import _ from 'lodash';
import {IntlMixin} from 'ecc-mixins';
import Template from './template.jsx';

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
    render: Template,
});

export default EccGuiElements;
