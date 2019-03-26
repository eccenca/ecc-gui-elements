import _ from 'lodash';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import basicClassCreator from 'react-mdl/lib/utils/basicClassCreator';

const ChipContact = basicClassCreator(
    'ChipContact',
    'mdl-chip__contact',
    'span'
);
// ChipVisual Component
const ChipVisual = props => {
    const {
        image,
        label,
        className,
        bgColor,
        textColor,
        children,
    } = props;


    if (image) {
        return (
            <ChipContact style={{ background: `url("${image}") 0 0 / cover` }} />
        );
    }

    if (__DEBUG__) {
        if (
            label !== false
            && (!_.isString(label) || label.length === 0 || label.length > 2)
        ) {
            console.warn(
                `A ChipVisual label should be a string with a length of 1 or 2, and not "${label}"`
            );
        }
    }

    const classColors = {};
    classColors[`mdl-color--${bgColor}`] = bgColor;
    classColors[`mdl-color-text--${textColor}`] = textColor;

    return (
        <ChipContact className={cx(classColors, className)}>
            {label || children}
        </ChipContact>
    );
};

ChipVisual.propTypes = {
    /**
     additional CSS class name
     */
    className: PropTypes.string,
    /**
     Image prop
     */
    image: PropTypes.string,
    /**
     label name prop
     */
    label: PropTypes.string,
    /**
     additional css color prop
     */
    bgColor: PropTypes.string,
    /**
     additional css text color prop
     */
    textColor: PropTypes.string,
    /**
     Chip children prop
     */
    children: PropTypes.object,
};

ChipVisual.defaultProps = {
    image: '',
    label: '',
    className: '',
    bgColor: '',
    textColor: '',
};


export default ChipVisual;
