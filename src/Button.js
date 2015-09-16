import React from 'react';
import classNames from 'react-mdl/node_modules/classnames';
import mdlUpgrade from 'react-mdl/lib/utils/mdlUpgrade';
import ReactMDLButton from 'react-mdl/lib/Button';
import ReactMDLFabButton from 'react-mdl/lib/FABButton';
import ReactMDLTooltip from 'react-mdl/lib/Tooltip';
//import ReactMDLIcon from 'react-mdl/lib/Icon';

/* TODO:

* add label/content as tooltip for icon/fab buttons
* add label as tooltip if children content is available

*/

const Button = React.createClass({
    // define property types
    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]).isRequired,
        className: React.PropTypes.string,
        tooltip: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        fabSize: React.PropTypes.string,
        ripple: React.PropTypes.bool,
    },

    // template rendering
    render() {

        const {className, tooltip, fabSize, ...otherProps} = this.props;
        const classes = classNames(className);
        const ripple = this.props.ripple === true; // disable ripple by default

        let button = '';

        if (fabSize) {
            button = (
                <ReactMDLFabButton className={classes} ripple={ripple} mini={fabSize === 'mini'} {...otherProps}>
                    {this.props.children}
                </ReactMDLFabButton>
            );
        }
        else {
            button = (
                <ReactMDLButton className={classes} ripple={ripple} {...otherProps}>
                    {this.props.children}
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

