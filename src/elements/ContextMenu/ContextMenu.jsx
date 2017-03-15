import React from 'react';
import _ from 'lodash';
import ReactMDLMenu from 'react-mdl/lib/Menu';
import {MenuItem} from 'react-mdl/lib/Menu';
import Button from './../../elements/Button/Button';
import classNames from 'classnames';
import PerformanceMixin from './../../mixins/PerformanceMixin';

/**
* This component provides a context menu
* @type {[type]}
*/
const ContextMenu = React.createClass({
    mixins: [PerformanceMixin],

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
            iconName,
            tooltip,
            target,
            ...otherProps
        } = this.props;

        const menuItemsCopy = Array.isArray(children) ? children : [children];
        const menuId = target || _.uniqueId('app-contextmenu-');

        const menuItems = _.map(menuItemsCopy, (obj, idx) => {
            if (obj) {
                if (_.has(obj, 'props.className') && obj.key) {
                    return obj;
                }

                const objExtension = {};

                // add className if none exist
                if (!_.has(obj, 'props.className') && _.has(obj, 'props.children')) {
                    objExtension.className = `item-${_.kebabCase(obj.props.children)}`;
                }

                // add key
                if (!obj.key) {
                    objExtension.key = `MenuItem.${idx}`;
                }

                const objResult = Object.assign(
                    {},
                    obj,
                    (
                        objExtension.key ?
                            {key: objExtension.key} :
                            {key: obj.key}
                    ),
                    (
                        objExtension.className ?
                            {props: Object.assign(
                                {},
                                obj.props,
                                {className: objExtension.className}
                            )} :
                            {props: obj.props})
                )

                return objResult;
            }
        });

        const menulist = (menuItems.length > 0) ? (
            <ReactMDLMenu
                target={menuId}
                {...otherProps}
            >
                {menuItems}
            </ReactMDLMenu>
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
