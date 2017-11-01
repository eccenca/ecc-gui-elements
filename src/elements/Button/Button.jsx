import React from 'react';
import classNames from 'classnames';
import ReactMDLButton from 'react-mdl/lib/Button';
import ReactMDLFabButton from 'react-mdl/lib/FABButton';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import Icon from '../Icon/Icon';
import PerformanceMixin from '../../mixins/PerformanceMixin';

/**
Read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications#GUISpecifications-Buttons).

```js
import {Button} from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Button>
                Flat button
            </Button>

            // use the button parameters according to MDL-API, @see https://getmdl.io/components/index.html#buttons-section
            <Button
                raised
                accent
                colored
                ripple
                disabled
            >
                Button label
            </Button>

            // you can apply all other button properties on icon buttons, too (e.g. affirmative, accent, ripple, ...)
            <Button
                iconName="more_vert"
                tooltip="This is a Test!"
                fabSize="mini"
            />
        )
    },
    // ....
});
```
*/
const Button = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.node
        ]),
        /**
            string (optional): additional CSS class name
        */
        className: React.PropTypes.string,
        /**
            boolean (default: false): button is disabled and cannot get used to trigger an action
        */
        disabled: React.PropTypes.bool,
        /**
            string 'mini|large' (optional): use fabSize only if it is a Material Design floating action button (FAB)
        */
        fabSize: React.PropTypes.string,
        /**
            string (optional): icon name if it is an Material Design icon button

            We defined some canonical names for icons and their meanings:

            - 'edit': edit data
            - 'remove': remove data
            - 'arrow_nextpage': go to next page
            - 'arrow_prevpage': go to previous page
            - 'arrow_lastpage': go to last page
            - 'arrow_firstpage': go to first page
            - 'arrow_dropdown': open dropdown select
            - 'expand_more': expand GUI element to show more details
            - 'expand_less': reduce GUI element to show less details
            - 'menu_more': open context menu
            - 'filter': filter data
            - 'sort': sort data
            - 'hide': hide (or close/remove) GUI elements
            - 'access_forbidden': no access to read and write data

            For other symbols and icon names @see https://material.io/icons/
        */
        iconName: React.PropTypes.string,
        /**
            boolean (default: false): activate ripple effect on button
        */
        ripple: React.PropTypes.bool,
        /**
            React node or boolean (optional): tooltip text, some icons have fallback tooltips, set it to false if you need to prevent them
        */
        tooltip: React.PropTypes.oneOfType([
            React.PropTypes.node,
            React.PropTypes.bool
        ]),

        // internal properties, used by button sub types

        affirmative: React.PropTypes.bool,
        dismissive: React.PropTypes.bool,
        disruptive: React.PropTypes.bool,
    },

    // TODO: use translations
    /*eslint camelcase: 0 */
    canonicalTooltips: {
        'edit': 'Edit',
        'remove': 'Remove',
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
        'access_forbidden': 'No write access',
        'delete': 'Remove',
    },

    // template rendering
    render() {

        /* TODO:

        * add label/content as tooltip for icon/fab buttons
        * add label as tooltip if children content is available

        */

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
