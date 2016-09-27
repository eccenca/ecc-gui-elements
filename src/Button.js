import React from 'react';
import classNames from 'classnames';
import ReactMDLButton from 'react-mdl/lib/Button';
import ReactMDLFabButton from 'react-mdl/lib/FABButton';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import MaterialMixin from './mixins/MaterialMixin';
import Icon from './Icon';

/* TODO:

* add label/content as tooltip for icon/fab buttons
* add label as tooltip if children content is available

*/

const Button = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        tooltip: React.PropTypes.oneOfType([
            React.PropTypes.node,
            React.PropTypes.bool
        ]),
        fabSize: React.PropTypes.string,
        iconName: React.PropTypes.string,
        ripple: React.PropTypes.bool,
    },

    // TODO: use translations
    /*eslint camelcase: 0 */
    canonicalTooltips: {
        'edit': 'Edit',
        'delete': 'Delete',
        'arrow_nextpage': 'Next Page',
        'arrow_prevpage': 'Previous Page',
        'arrow_lastpage': 'Last Page',
        'arrow_firstpage': 'First Page',
        'arrow_dropdown': 'Open',
        'expand_more': 'Show More',
        'expand_less': 'Show Less',
        'menu_more': 'Open Menu',
        'filter': 'Filter Data',
        'sort': 'Sort Data',
        'hide': 'Hide',
        'access_forbidden': 'No Access',
    },

    // template rendering
    render() {

        const {
            className,
            fabSize,
            iconName,
            tooltip: defaultTooltip,
            children: defaultChildren,
            ripple: defaultRipple,
            ...otherProps
        } = this.props;

        const classes = classNames(
            {
                'mdl-button--icon': typeof iconName !== 'undefined',
            },
            className
        );
        const ripple = defaultRipple === true; // disable ripple by default

        let tooltip = defaultTooltip;
        // if tooltip is empty check for default one
        if (!tooltip && tooltip !== false && (typeof this.canonicalTooltips[iconName] !== 'undefined')) {
            tooltip = this.canonicalTooltips[iconName];
        }

        let button = '';
        let buttonContent = defaultChildren;
        if (iconName) {
            buttonContent = (
                // if tooltip already exist send 'false' to prevent adding additional default tooltip in <Icon/>
                <Icon name={iconName} tooltip={(tooltip || tooltip === false) ? false : ''}/>
            );
        }

        if (fabSize) {
            button = (
                <ReactMDLFabButton className={classes} ripple={ripple} mini={fabSize === 'mini'} {...otherProps}>
                    {buttonContent}
                </ReactMDLFabButton>
            );
        }
        else {
            button = (
                <ReactMDLButton className={classes} ripple={ripple} {...otherProps}>
                    {buttonContent}
                </ReactMDLButton>
            );
        }

        if (tooltip) {
            button = (
                <ReactMDLTooltip label={tooltip}>{button}</ReactMDLTooltip>
            );
        }

        return button;
    },
});

export default Button;
