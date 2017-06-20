import React from 'react';
import classNames from 'classnames';
import PerformanceMixin from '../../mixins/PerformanceMixin';

/* TODO:

* add option `iconName` to use icon
* use MDL Tooltip instead of simple title attribute

*/

const Button = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        className: React.PropTypes.string, // additional classname
        description: React.PropTypes.string, // long description
        // TODO iconName: React.PropTypes.string,
        inline: React.PropTypes.bool, // displayed as inline text
        label: React.PropTypes.string, // short description
    },

    // template rendering
    render() {

        const {
            className,
            description,
            inline,
            label,
            ...otherProps
        } = this.props;

        const classes = classNames(
            {
                'ecc-gui-elements__notavailable': true,
                'ecc-gui-elements__notavailable--inline': inline,
            },
            className
        );

        return (
            <span
                className={classes}
            >
                <span
                    className="ecc-gui-elements__notavailable-label"
                    title={description ? description : (label ? '' : 'not available')}
                >
                    {label ? label : 'n/a'}
                </span>
            </span>
        );
    },
});

export default Button;
