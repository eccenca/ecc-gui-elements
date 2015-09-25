import React from 'react';
import classNames from 'react-mdl/node_modules/classnames';
import mdlUpgrade from 'react-mdl/lib/utils/mdlUpgrade';
import ReactMDLButton from 'react-mdl/lib/Button';
import ReactMDLFabButton from 'react-mdl/lib/FABButton';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
import Icon from './Icon';

/* TODO:

* add label/content as tooltip for icon/fab buttons
* add label as tooltip if children content is available

*/

const Button = React.createClass({
    // define property types
    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        tooltip: React.PropTypes.oneOfType([
            React.PropTypes.node
        ]),
        fabSize: React.PropTypes.string,
        iconName: React.PropTypes.string,
        ripple: React.PropTypes.bool,
    },

    // template rendering
    render() {

        const {className, tooltip, fabSize, iconName, ...otherProps} = this.props;
        const classes = classNames(
            {
                'mdl-button--icon': typeof iconName !== 'undefined',
            },
            className
        );
        const ripple = this.props.ripple === true; // disable ripple by default

        let button = '';
        let buttonContent = this.props.children;
        if (iconName) {
            buttonContent = (
                <Icon name={iconName} />
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

export default mdlUpgrade(Button);

