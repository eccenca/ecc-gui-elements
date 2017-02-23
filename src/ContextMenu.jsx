import React from 'react';
import _ from 'lodash';
import ReactMDLMenu from 'react-mdl/lib/Menu';
import {MenuItem} from 'react-mdl/lib/Menu';
import Button from './elements/Button/Button';
import PerformanceMixin from './mixins/PerformanceMixin';

/**
* This component provides a context menu
* @type {[type]}
*/
const ContextMenu = React.createClass({
    mixins: [PerformanceMixin],

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
            tooltip: 'open menu',
        };
    },

    render() {
        const {
            align,
            className,
            iconName,
            ripple,
            tooltip,
            ...otherProps
        } = this.props;

        let menuItems = _.cloneDeep(this.props.children);
        const target = this.props.target || _.uniqueId('app-contextmenu-');

        if (typeof menuItems !== 'undefined') {
            if (!Array.isArray(menuItems)) {
                menuItems = [menuItems];
            }
            // check for classNames
            menuItems = _.map(menuItems, (obj, idx) => {
                if (obj) {
                    // add className if none exist
                    if (!_.has(obj, 'props.className') && (typeof obj.props.children !== 'undefined')) {
                        obj.props.className = `item-${_.kebabCase(obj.props.children)}`;
                    }
                    obj.key = `MenuItem.${idx}`;
                    return obj;
                }
            });

        };

        return (menuItems.length > 0) ? (
            <div className={'contextmenu-container'}>
                <Button
                    iconName={iconName ? iconName : 'menu_more'}
                    id={target}
                    tooltip={tooltip ? false : false}
                />
                <ReactMDLMenu
                    align={align}
                    className={className}
                    ripple={ripple}
                    target={target}
                    {...otherProps}
                >
                    {menuItems}
                </ReactMDLMenu>
            </div>
        ) : false;
    }
});

export default {
    ContextMenu,
    MenuItem
};
