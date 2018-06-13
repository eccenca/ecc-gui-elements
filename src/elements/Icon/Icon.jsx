/* eslint camelcase: 0 */
import React from 'react';
import classNames from 'classnames';
import { includes } from 'lodash';
import Tooltip from '../Tooltip/Tooltip';
import PerformanceMixin from './../../mixins/PerformanceMixin';
import ligatureCodes from './icontable.json';

/**
import {Icon} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Icon
                name="cloud_download" // icon name, @see https://material.io/icons/
                tooltip="cloudy clouds" // tooltip, some icons have fallback tooltips, set it to false if you need to prevent them
                badge="5" // Badge, as shown in https://getmdl.io/components/index.html#badges-section
            />
        )
    },
    // ....
});
```
*/
const Icon = React.createClass({
    mixins: [PerformanceMixin],
    displayName: 'Icon',

    // define property types
    propTypes: {
        className: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        tooltip: React.PropTypes.oneOfType([
            React.PropTypes.node,
            React.PropTypes.bool,
        ]),
    },

    // cononical icon names
    canonicalIcons: {
        edit: 'mode_edit',
        remove: 'delete',
        save: 'save',
        confirm: 'check',
        cancel: 'close',
        arrow_nextpage: 'navigate_next',
        arrow_prevpage: 'navigate_before',
        arrow_lastpage: 'last_page',
        arrow_firstpage: 'first_page',
        arrow_dropdown: 'arrow_drop_down',
        expand_more: 'expand_more',
        expand_less: 'expand_less',
        menu_more: 'more_vert',
        adjust: 'tune',
        filter: 'filter_list',
        sort: 'swap_vert',
        hide: 'close',
        settings: 'settings',
        access_forbidden: 'lock_outline',
        delete: 'delete', // 'delete' is deprecated
    },

    // fallback tooltips for all canonocal icon names
    // TODO: use translations
    canonicalTooltips: {
        edit: 'Edit',
        remove: 'Remove',
        save: 'Save',
        confirm: 'Confirm',
        cancel: 'Cancel',
        arrow_nextpage: 'Next page',
        arrow_prevpage: 'Previous page',
        arrow_lastpage: 'Last page',
        arrow_firstpage: 'First page',
        arrow_dropdown: 'Open',
        expand_more: 'Show more',
        expand_less: 'Show less',
        menu_more: 'Open menu',
        adjust: 'Adjust settings',
        filter: 'Filter data',
        sort: 'Sort data',
        hide: 'Hide',
        settings: 'Administrate settings',
        access_forbidden: 'No write access',
        delete: 'Remove', // 'delete' is deprecated
    },

    // template rendering
    render() {
        const {className, badge = false, ...otherProps} = this.props;

        let name = otherProps.name;
        delete otherProps.name;

        let tooltip = otherProps.tooltip;
        delete otherProps.tooltip;

        if (!tooltip && tooltip !== false) {
            if (typeof this.canonicalTooltips[name] !== 'undefined') {
                tooltip = this.canonicalTooltips[name];
            } else if (__DEBUG__) {
                console.warn(`Icon "${name}" has no canonical tooltip defined`);
            }
        }

        if (typeof this.canonicalIcons[name] !== 'undefined') {
            if (name === 'delete' && __DEBUG__) {
                console.warn(
                    'Do not us "delete" as icon name. Please use "remove" instead.'
                );
            }
            name = this.canonicalIcons[name];
        } else if (__DEBUG__) {
            console.log(
                `%cFound usage of "${name}" as icon name. Use canonical icon names if possible.`,
                'color: orange'
            );
        }

        if (!includes(ligatureCodes, name)) {
            if (__DEBUG__) {
                console.error(`"${name}" is not a valid icon name.`);
            }
            name = 'error';
        }

        const classes = classNames(
            'material-icons',
            {'mdl-badge mdl-badge--overlap': badge},
            className
        );

        let icon = (
            <i className={classes} data-badge={badge} {...otherProps}>
                {name}
            </i>
        );

        if (tooltip) {
            icon = <Tooltip label={tooltip}>{icon}</Tooltip>;
        }

        return icon;
    },
});

export default Icon;
