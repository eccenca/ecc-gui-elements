import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// BreadcrumbList component
const BreadcrumbList = props => {
    const { children, className, ...otherProps } = props;

    return (
        <ol className={cx('ecc-breadcrumbs', className)} {...otherProps}>
            {children}
        </ol>
    );
};
BreadcrumbList.propTypes = {
    className: PropTypes.string,
};
export default BreadcrumbList;
