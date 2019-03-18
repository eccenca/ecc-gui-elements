import _ from "lodash";
import cx from "classnames";
import React from "react";
import basicClassCreator from "react-mdl/lib/utils/basicClassCreator";


const ChipContact = basicClassCreator(
    'ChipContact',
    'mdl-chip__contact',
    'span'
);
// Chip Component
const ChipVisual = props => {
    const {
        image = false,
        label = false,
        className = '',
        bgColor = false,
        textColor = false,
        children = false,
    } = props;


    if (image) {
        return (
            <ChipContact style={{background: `url("${image}") 0 0 / cover`}} />
        );
    }

    if (__DEBUG__) {
        if (
            label !== false &&
            (!_.isString(label) || label.length === 0 || label.length > 2)
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
export default ChipVisual;
