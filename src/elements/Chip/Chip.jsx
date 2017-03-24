import React from 'react';
import PerformanceMixin from './../../mixins/PerformanceMixin';
import classnameSeperator from './../../utils/classnameSeperator';
import ReactMDLChip from 'react-mdl/lib/Chip';
import _ from 'lodash';

/* proposial:

<Chip
    onClick
    className
    label
>
    <ChipVisual>
    </ChipVisual>
    Irgendwas
</Chip>

*/

const Chip = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        /**
        * click event
        */
        onClick: React.PropTypes.func,
        /**
        * content of main chip part
        */
        label: React.PropTypes.string,
        /**
        * content of left-sided 'icon'
        */
        iconContent: React.PropTypes.node,
        /**
        * add class names
        */
        className: React.PropTypes.string,
        /**
        * class name of left-sided icon
        */
        iconClassName: React.PropTypes.string,

    },

    contactProperties: {
        // ----chip-icon-----
        // background color
        // --sketch colors--
        'bg-icon-blue': 'chip-icon-blue',
        'bg-icon-green': 'chip-icon-green',
        // --subscription colors--
        'bg-icon-subscribed': 'chip-icon-dark-green',
        'bg-icon-unsubscribed': 'chip-icon-blue-grey',
        'bg-icon-denied': 'chip-icon-red',
        'bg-icon-requested': 'chip-icon-yellow',

        // text color
        //'tc-white': 'chip-icon-text-white',
        'tc-icon-white': 'mdl-color-text--white',
    },

    chipProperties: {
        // background color
        'bg-chip-blue': 'mdl-chip--blue',
        'bg-chip-green': 'mdl-chip--green',

        // text color
        'tc-chip-blue': 'mdl-chip--text-blue',
        'tc-chip-green': 'mdl-chip--text-green',
    },
    render() {
        const {
            onClick = false,
            label,
            className,
            iconContent,
            iconClassName
        } = this.props;

        const chipLabel = (
            label ? (
                <span className="mdl-chip__text">
                    {label}
                </span>
            ) : false
        );

        const chipClassName = (
            'mdl-chip' +
            // if left-sided content exist
            (iconContent || iconClassName ? ' mdl-chip--contact' : '') +
            (onClick ? ' cursor-as-hand' : '') +
            // custom class names
            (_.isEmpty(className) ? '' : ' ' + classnameSeperator(className, this.chipProperties))
        );

        // left-sided icon
        const icon = (
            iconContent || iconClassName ? (
                <span className={'mdl-chip__contact ' + additionalIconClassName}>
                    {iconContent}
                </span>
            )
            : false
        );

        return (
            <div>
                <button
                    type="button"
                    className={chipClassName}
                    onClick={onClick ? onClick : false}
                >
                    {icon}
                    {chipLabel}
                </button>
            </div>
        );
    },
});

export default Chip;
