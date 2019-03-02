// react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Version extends Component{
    displayName: 'Version';

    constructor(props) {
        super(props);
        this.state = {
            ...props

        }
    }

    // define property types
    static propTypes = {
        version: PropTypes.string.isRequired,
    };

    // template rendering
    render() {
        return (
            <span
                className="version-info"
                style={{marginLeft: '5px', marginRight: '5px'}}>
                {this.state.version}
            </span>
        );
    }
}

export default Version;
