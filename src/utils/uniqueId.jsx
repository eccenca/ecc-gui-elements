import React from 'react';
import _ from 'lodash';

/**
 *
 * Adds unique id as prop to a React Component
 *
 * @example
 * //this.props.uniqueId is undefined
 * Foo = React.createClass({})
 *
 * //this.props.uniqueId is defined
 * FooWithUniqueId = uniqueId(Foo, {prefix: 'yep', targetProp: 'uniqueId'})
 *
 * @param {React.Component} WrappedComponent which should be extended with a unique Id
 * @param {String} [prefix=''] prefix for the generated unique id
 * @param {String} [targetProp='id'] prop which contains the generated unique id
 * @returns {uniqueIdComponent} Decorated WrappedComponent with id prop
 */
const uniqueId = (WrappedComponent, {prefix = '', targetProp = 'id'}) => {
    class uniqueIdComponent extends React.Component {

        id = {};

        componentWillMount() {
            _.set(this.id, targetProp, _.uniqueId(prefix));
        }

        render() {
            return <WrappedComponent {...this.props} {...this.id}/>;
        }
    }

    return uniqueIdComponent;
};

export default uniqueId;
