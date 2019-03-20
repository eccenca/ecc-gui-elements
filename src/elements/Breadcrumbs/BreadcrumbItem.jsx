import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// BreadcrumbItem component
const BreadcrumbItem = props => {
    const { children, className, ...otherProps } = props;

    let crumbType = otherProps.onClick ? 'button' : 'span';
    crumbType = otherProps.href ? 'a' : crumbType;

    const crumbButton = React.createElement(
        crumbType,
        {
            className: 'ecc-breadcrumbs__button',
            ...otherProps,
        },
        children
    );

    return (
        <li className={cx('ecc-breadcrumbs__item', className)}>
            {crumbButton}
        </li>
    );
};
BreadcrumbItem.propTypes = {
    /**
     additional CSS class name
     */
    className: PropTypes.string,
};

export default BreadcrumbItem;
