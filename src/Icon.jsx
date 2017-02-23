/*eslint camelcase: 0 */
import React from 'react';
import classNames from 'classnames';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import PerformanceMixin from './mixins/PerformanceMixin';


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

    // cononical icons
    // TODO: some icons are broken, probably because of bug in material icons release
    // @see https://github.com/google/material-design-icons/issues/311
    canonicalIcons: {
        'edit': 'mode_edit',
        'delete': 'delete',
        'arrow_nextpage': 'navigate_next',
        'arrow_prevpage': 'navigate_before',
        'arrow_lastpage': 'skip_next', // TODO: workaround for 'last_page',
        'arrow_firstpage': 'skip_previous', // TODO: workaround for 'first_page',
        'arrow_dropdown': 'arrow_drop_down',
        'expand_more': 'expand_more',
        'expand_less': 'expand_less',
        'menu_more': 'more_vert',
        'filter': 'filter_list',
        'sort': 'swap_vert',
        'hide': 'close',
        'access_forbidden': 'lock_outline',
    },

    // TODO: use translations
    canonicalTooltips: {
        'edit': 'Edit',
        'delete': 'Delete',
        'arrow_nextpage': 'Next page',
        'arrow_prevpage': 'Previous page',
        'arrow_lastpage': 'Last page',
        'arrow_firstpage': 'First page',
        'arrow_dropdown': 'Open',
        'expand_more': 'Show more',
        'expand_less': 'Show less',
        'menu_more': 'Open menu',
        'filter': 'Filter data',
        'sort': 'Sort data',
        'hide': 'Hide',
        'access_forbidden': 'No access',
    },

    // template rendering
    render() {
        const {className, otherProps} = this.props;

        // change ligatures to char codes for browser compatibility (eg for IE9)
        const ligaturcodes = require('../icontable.json');

        let name = this.props.name;
        let tooltip = this.props.tooltip;

        if (!tooltip && tooltip !== false && (typeof this.canonicalTooltips[name] !== 'undefined')) {
            tooltip = this.canonicalTooltips[name];
        } else {
            // TODO: add debug warning about missing tooltip
        }

        if (typeof this.canonicalIcons[name] !== 'undefined') {
            name = this.canonicalIcons[name];
        } else {
            // TODO: add warning about usage of non-canonical icons
        }
        if (typeof ligaturcodes[name] !== 'undefined') {
            name = ligaturcodes[name];
        } else {
            // TODO: add error about unknown ligature code/icon name
        }

        const classes = classNames('material-icons', className);

        let icon = (
                <i className={classes} {...otherProps}
                  dangerouslySetInnerHTML={{__html: `&#x${name};`}} />
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
