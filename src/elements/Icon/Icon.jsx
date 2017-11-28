/*eslint camelcase: 0 */
import React from 'react';
import classNames from 'classnames';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import PerformanceMixin from './../../mixins/PerformanceMixin';


const Icon = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        className: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        tooltip: React.PropTypes.oneOfType([
            React.PropTypes.node,
            React.PropTypes.bool
        ]),
    },

    // cononical icon names
    canonicalIcons: {
        'edit': 'mode_edit',
        'remove': 'delete',
        'save': 'save',
        'confirm': 'check',
        'cancel': 'close',
        'arrow_nextpage': 'navigate_next',
        'arrow_prevpage': 'navigate_before',
        'arrow_lastpage': 'last_page',
        'arrow_firstpage': 'first_page',
        'arrow_dropdown': 'arrow_drop_down',
        'expand_more': 'expand_more',
        'expand_less': 'expand_less',
        'menu_more': 'more_vert',
        'adjust': 'tune',
        'filter': 'filter_list',
        'sort': 'swap_vert',
        'hide': 'close',
        'settings': 'settings',
        'access_forbidden': 'lock_outline',
        'delete': 'delete', // 'delete' is deprecated
    },

    // fallback tooltips for all canonocal icon names
    // TODO: use translations
    canonicalTooltips: {
        'edit': 'Edit',
        'remove': 'Remove',
        'save': 'Save',
        'confirm': 'Confirm',
        'cancel': 'Cancel',
        'arrow_nextpage': 'Next page',
        'arrow_prevpage': 'Previous page',
        'arrow_lastpage': 'Last page',
        'arrow_firstpage': 'First page',
        'arrow_dropdown': 'Open',
        'expand_more': 'Show more',
        'expand_less': 'Show less',
        'menu_more': 'Open menu',
        'adjust': 'Adjust settings',
        'filter': 'Filter data',
        'sort': 'Sort data',
        'hide': 'Hide',
        'settings': 'Administrate settings',
        'access_forbidden': 'No write access',
        'delete': 'Remove', // 'delete' is deprecated
    },

    // template rendering
    render() {
        const {className, otherProps} = this.props;

        // change ligatures to char codes for browser compatibility (eg for IE9)
        const ligaturcodes = require('./icontable.json');

        let name = this.props.name;
        let tooltip = this.props.tooltip;

        if (!tooltip && tooltip !== false && (typeof this.canonicalTooltips[name] !== 'undefined')) {
            tooltip = this.canonicalTooltips[name];
        } else {
            // TODO: add debug warning about missing tooltip
        }

        if (typeof this.canonicalIcons[name] !== 'undefined') {
            name = this.canonicalIcons[name];
            if (name === 'delete' && __DEBUG__) {
                console.warn('Do not us "delete" as icon name. Please use "remove" instead.');
            }
        } else {
            if (__DEBUG__) {
                console.log(
                    '%cFound usage of "' + name + '" as icon name. Use canonical icon names if possible.',
                    'color: orange'
                );
            }
        }
        if (typeof ligaturcodes[name] !== 'undefined') {
            name = '&#x' + ligaturcodes[name] + ';';
        } else {
            if (__DEBUG__) {
                console.error(
                    '"' + name + '" is not a valid icon name.'
                );
            }
            name = '&#x' + ligaturcodes['error'] + ';';
        }

        const classes = classNames('material-icons', className);

        let icon = (
                <i className={classes} {...otherProps}
                  dangerouslySetInnerHTML={{__html: name}} />
        );

        if (tooltip) {
            icon = (
                <ReactMDLTooltip label={tooltip}>{icon}</ReactMDLTooltip>
            );
        }

        return icon;
    },
});

export default Icon;
