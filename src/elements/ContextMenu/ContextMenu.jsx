import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactMDLMenu, { MenuItem } from 'react-mdl/lib/Menu';

import Button from '../Button/Button';

/**
 * This component provides a context menu
 */
const ContextMenu = props => {
    const {
        children, iconName, tooltip, target, ...otherProps
    } = props;

    const menuItemsCopy = Array.isArray(children) ? children : [children];
    const menuId = target || _.uniqueId('app-contextmenu-');

    const menuItems = _.map(menuItemsCopy, (obj, idx) => {
        if (obj) {
            if (_.has(obj, 'props.className') && obj.key) {
                return obj;
            }

            const objExtension = {};

                // add className if none exist
            if (
                !_.has(obj, 'props.className')
                    && _.has(obj, 'props.children')
            ) {
                objExtension.className = `item-${_.kebabCase(
                    obj.props.children
                )}`;
            }

                // add key
            if (!obj.key) {
                objExtension.key = `MenuItem.${idx}`;
            }

            return Object.assign(
                {},
                obj,
                objExtension.key ? { key: objExtension.key } : { key: obj.key },
                objExtension.className
                    ? {
                        props: Object.assign({}, obj.props, {
                            className: objExtension.className,
                        }),
                    }
                    : { props: obj.props }
            );
        }
        return null;
    });

    const menulist = menuItems.length > 0 ? (
        <ReactMDLMenu target={menuId} {...otherProps}>
            {menuItems}
        </ReactMDLMenu>
    ) : (
        false
    );

    return menulist ? (
        <div className="contextmenu-container">
            <Button
                iconName={iconName || 'menu_more'}
                id={menuId}
                tooltip={false}
            />
            {menulist}
        </div>
    ) : (
        false
    );
};

ContextMenu.propTypes = {
    align: PropTypes.string,
    valign: PropTypes.string,
    className: PropTypes.string,
    ripple: PropTypes.bool,
    target: PropTypes.string,
    tooltip: PropTypes.string,
};

ContextMenu.defaultProps = {
    align: 'right',
    valign: 'bottom',
    ripple: false,
    tooltip: 'open menu',
};

ContextMenu.displayName = 'ContextMenu';

export default { ContextMenu, MenuItem };
