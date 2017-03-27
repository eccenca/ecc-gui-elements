import React, {PropTypes} from 'react';
import cx from 'classnames';
import basicClassCreator from 'react-mdl/lib/utils/basicClassCreator';
import _ from 'lodash';

export const ChipVisual = (props) => {

    const {
        image = false,
        label = false,
        className = '',
        bgColor = false,
        textColor = false,
    } = props;

    if (image) {
        return (
            <ChipContact style={{background: `url("${image}") 0 0 / cover`}}/>
        )
    }

    if (__DEBUG__) {
        if (!_.isString(label) || label.length === 0 || label.length > 2) {
            console.warn(`A ChipVisual label should be a string with a length of 1 or 2, and not ${label}`);
        }
    }

    const classColors = {};
    classColors['mdl-color--' + bgColor] = bgColor;
    classColors['mdl-color-text--' + textColor] = textColor;

    return (
        <ChipContact
            className={cx(
                classColors,
                className,
            )}
        >
            {label}
        </ChipContact>
    )

};


const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

const ChipContact = basicClassCreator('ChipContact', 'mdl-chip__contact', 'span');
const ChipText = basicClassCreator('ChipText', 'mdl-chip__text', 'span');


export const Chip = (props) => {
    const {className, onClick, onClose, style, children, ...otherProps} = props;

    const childrenArray = React.Children.toArray(children);
    const contactIndex = childrenArray.findIndex(c => c.type === ChipContact || c.type === ChipVisual);

    const chipContent = [];

    if (contactIndex >= 0) {
        chipContent.push(
            childrenArray[contactIndex],
            <ChipText key="text">
                {childrenArray
                    .slice(0, contactIndex)
                    .concat(childrenArray.slice(contactIndex + 1))
                }
            </ChipText>
        );
    } else {
        chipContent.push(
            <ChipText key="text">
                {children}
            </ChipText>
        );
    }

    if (__DEBUG__) {
        if (onClose) {
            console.warn(
                "At the moment our chips do not allow for a chip action (like close)." +
                "If you think, you need one please start a discussion around that topic."
            );
            // chipContent.push(
            //     <button key="btn" type="button" className="mdl-chip__action" onClick={onClose}>
            //         <Icon name="cancel" />
            //     </button>
            // );
        }
    }

    const elt = onClick ? 'button' : 'span';

    return React.createElement(elt, {
        className: cx('mdl-chip', {
            'mdl-chip--contact': contactIndex > -1,
            'mdl-chip--deletable': !!onClose,
        }, className),
        type: onClick ? 'button' : null,
        onClick,
        ...otherProps
    }, chipContent);
};

Chip.propTypes = propTypes;
