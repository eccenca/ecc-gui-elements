import React from 'react';
import _ from 'lodash';
import ReactMDLMenu from 'react-mdl/lib/Menu';
import {MenuItem} from 'react-mdl/lib/Menu';
import Button from './Button';
import MaterialMixin from './mixins/MaterialMixin';

/**
* This component provides a context menu
* @type {[type]}
*/
const ContextMenu = React.createClass({
    mixins: [MaterialMixin],

    propTypes: {
        align: React.PropTypes.string,
        className: React.PropTypes.string,
        ripple: React.PropTypes.bool,
        target: React.PropTypes.string,
        tooltip: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            align: 'right',
            ripple: false,
            target: _.uniqueId('app-contextmenu-'),
            tooltip: 'open menu',
        };
    },

    render() {
        const {
            align,
            children,
            className,
            ripple,
            target,
            tooltip,
            ...otherProps
        } = this.props;

        const menu = (typeof children !== 'undefined') ? (
            <ReactMDLMenu
                align={align}
                className={className}
                ripple={ripple}
                target={target}
                {...otherProps}
            >
                {children}
            </ReactMDLMenu>
        ) : false;

        return (
            <div style={{position: 'relative'}}>
                <Button
                    iconName="menu_more"
                    id={target}
                    tooltip={tooltip ? false : false}
                />
                {menu}
            </div>
        );
    }
});

export default {
    ContextMenu,
    MenuItem
};
