import React from 'react';
import classNames from 'classnames';
import ReactMDLButton from 'react-mdl/lib/Button';
import ReactMDLFabButton from 'react-mdl/lib/FABButton';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import MaterialMixin from '../../mixins/MaterialMixin';
import Icon from '../../Icon';
import PerformanceMixin from '../../mixins/PerformanceMixin';


/* TODO:

* add label/content as tooltip for icon/fab buttons
* add label as tooltip if children content is available

*/

const Button = React.createClass({
    mixins: [MaterialMixin, PerformanceMixin],

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
        affirmative: React.PropTypes.bool,
        dismissive: React.PropTypes.bool,
        disruptive: React.PropTypes.bool,
    },

    // TODO: use translations
    /*eslint camelcase: 0 */
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
        'hide': 'hide',
        'access_forbidden': 'No access',
    },

    // template rendering
    render() {

        const {
            className,
            fabSize,
            iconName,
            affirmative,
            dismissive,
            disruptive,
            tooltip: defaultTooltip,
            children: defaultChildren,
            ripple: defaultRipple,
            ...otherProps
        } = this.props;

        const semanticConfig = {};

        if (affirmative === true) {
            semanticConfig.accent = true;
            semanticConfig.colored = false;
        }

        if (dismissive === true || disruptive === true) {
            semanticConfig.accent = false;
            semanticConfig.colored = false;
        }

        const classes = classNames(
            {
                'mdl-button--icon': typeof iconName !== 'undefined',
                'mdl-button--danger': disruptive === true,
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
                <ReactMDLFabButton
                    className={classes}
                    ripple={ripple}
                    mini={fabSize === 'mini'}
                    {...otherProps}
                    {...semanticConfig}
                >
                    {buttonContent}
                </ReactMDLFabButton>
            );
        }
        else {
            button = (
                <ReactMDLButton
                    className={classes}
                    ripple={ripple}
                    {...otherProps}
                    {...semanticConfig}
                >
                    {buttonContent}
                </ReactMDLButton>
            );
        }

        if (tooltip && !this.props.disabled) {
            button = (
                <ReactMDLTooltip label={tooltip}>{button}</ReactMDLTooltip>
            );
        }

        return button;
    },
});

export default Button;
