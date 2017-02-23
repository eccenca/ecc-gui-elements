import React from 'react';
import _ from 'lodash';
import ReactMDLMenu from 'react-mdl/lib/Menu';
import {MenuItem} from 'react-mdl/lib/Menu';
import Button from './elements/Button/Button';
import classNames from 'classnames';
import MaterialMixin from './mixins/MaterialMixin';
import PerformanceMixin from './mixins/PerformanceMixin';

console.log(ReactMDLMenu);

/**
* This component provides a context menu
* @type {[type]}
*/
const ContextMenu = React.createClass({
    mixins: [MaterialMixin, PerformanceMixin],

    propTypes: {
        align: React.PropTypes.string,
        valign: React.PropTypes.string,
        className: React.PropTypes.string,
        ripple: React.PropTypes.bool,
        target: React.PropTypes.string,
        tooltip: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            align: 'right',
            valign: 'bottom',
            ripple: false,
            tooltip: 'open menu',
        };
    },

    render() {
        const {
            children,
            className,
            align,
            valign,
            ripple,
            iconName,
            tooltip,
            target,
            ...otherProps
        } = this.props;

        let menuItems = _.cloneDeep(children);
        const menuId = target || _.uniqueId('app-contextmenu-');

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

        /* we may switch back to Menu of react-mdl later */
        /*
        <ReactMDLMenu
            target={menuId}
            {...otherProps}
        >
            {menuItems}
        </ReactMDLMenu>
        */
        const menulist = (menuItems.length > 0) ? (
            <ul
                className={
                    classNames(
                        'mdl-menu mdl-js-menu',
                        'mdl-menu--' + valign + '-' + align,
                        {
                            'mdl-js-ripple-effect': ripple
                        },
                        className
                    )
                }
                htmlFor={menuId}
                {...otherProps}
            >
                {menuItems}
            </ul>
        ) : false;

        return (menulist) ? (
            <div className={'contextmenu-container'}>
                <Button
                    iconName={iconName ? iconName : 'menu_more'}
                    id={menuId}
                    tooltip={tooltip ? false : false}
                />
                {menulist}
            </div>
        ) : false;
    }
});

export default {
    ContextMenu,
    MenuItem
};
