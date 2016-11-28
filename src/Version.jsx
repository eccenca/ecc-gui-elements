// react
import React from 'react';
import MaterialMixin from './mixins/MaterialMixin';

const Version = React.createClass({

    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        version: React.PropTypes.string.isRequired,
    },
    // initilize state
    getInitialState() {
        // return state
        return this.props;
    },
 // template rendering
    render() {
        return (
            <span className="version-info" style={{marginLeft: '5px', marginRight: '5px'}}>
                {this.state.version}
            </span>
        );
    },
});

export default Version;
