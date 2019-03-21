import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import basicClassCreator from 'react-mdl/lib/utils/basicClassCreator';
import _ from 'lodash';
import ChipVisual from './ChipVisual';

/**
 The are two simple React elements to create Chip and ChipVisual.

 ```js
 import {
    Chip,
    ChipVisual,
} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // template rendering
    render() {
        return (
            <div>
                <Chip onClick={() => console.log('#1 chip clicked')}>
                    <ChipVisual
                        image="https://placekitten.com/500/500"
                    />
                clickable with image visual
                </Chip>
            </div>
        );
    }
}
 ```
 */
const ChipContact = basicClassCreator(
    'ChipContact',
    'mdl-chip__contact',
    'span'
);
const ChipText = basicClassCreator('ChipText', 'mdl-chip__text', 'span');

// Chip Component
const Chip = props => {
    const {
        className, onClose, children, ...otherProps
    } = props;
    const childrenArray = React.Children.toArray(children);
    const contactIndex = _.findIndex(childrenArray,
        c => c.type === ChipContact || c.type === ChipVisual);
    const chipContent = [];
    delete otherProps.tooltip;

    if (contactIndex >= 0) {
        chipContent.push(
            childrenArray[contactIndex],
            <ChipText key="text">
                {childrenArray
                    .slice(0, contactIndex)
                    .concat(childrenArray.slice(contactIndex + 1))}
            </ChipText>
        );
    } else {
        chipContent.push(<ChipText key="text">{children}</ChipText>);
    }

    if (__DEBUG__) {
        if (onClose) {
            console.warn(
                'At the moment our chips do not allow for a chip action (like close).'
                    + 'If you think, you need one please start a discussion around that topic.'
            );
            // chipContent.push(
            //     <button key="btn" type="button" className="mdl-chip__action" onClick={onClose}>
            //         <Icon name="cancel" />
            //     </button>
            // );
        }
    }

    let chipType = otherProps.onClick ? 'button' : 'span';
    chipType = otherProps.href ? 'a' : chipType;

    return React.createElement(
        chipType,
        {
            className: cx(
                'mdl-chip',
                {
                    'mdl-chip--contact': contactIndex > -1,
                    'mdl-chip--deletable': !!onClose,
                },
                className
            ),
            ...otherProps,
        },
        chipContent
    );
};

Chip.propTypes = {
    /**
     additional CSS class name
     */
    className: PropTypes.string,
    /**
     Click handler
     */
    onClick: PropTypes.func,
    /**
     Close handler
     */
    onClose: PropTypes.func,
    /**
     Chip is rendered as HTML link anchor
     */
    href: PropTypes.string,
};

export default Chip;
