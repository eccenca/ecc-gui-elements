/* eslint camelcase: 0 */
import React from 'react';
import classNames from 'classnames';
import Tooltip from '../Tooltip/Tooltip';
import PerformanceMixin from './../../mixins/PerformanceMixin';
import ligatureCodes from './icontable.json';

const Icon = React.createClass({
    mixins: [PerformanceMixin],

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

        let name = this.props.name;
        let tooltip = this.props.tooltip;

        if (name === 'add' && otherProps && otherProps.id) {
            console.log(otherProps);
        }

        if (
            !tooltip &&
            tooltip !== false &&
            typeof this.canonicalTooltips[name] !== 'undefined'
        ) {
            tooltip = this.canonicalTooltips[name];
        } else {
            // TODO: add debug warning about missing tooltip
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
        if (typeof ligatureCodes[name] !== 'undefined') {
            name = `&#x${ligatureCodes[name]};`;
        } else {
            if (__DEBUG__) {
                console.error(`"${name}" is not a valid icon name.`);
            }
            name = `&#x${ligatureCodes.error};`;
        }

        const classes = classNames(
            'material-icons',
            {'mdl-badge mdl-badge--overlap': badge},
            className
        );

        let icon = (
            <i
                className={classes}
                data-badge={badge}
                {...otherProps}
                dangerouslySetInnerHTML={{__html: name}}
            />
        );

        if (tooltip) {
            icon = <Tooltip label={tooltip}>{icon}</Tooltip>;
        }

        return icon;
    },
});

export default Icon;
