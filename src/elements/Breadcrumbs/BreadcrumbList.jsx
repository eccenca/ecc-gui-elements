import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
/**
 The are two simple React elements to create breadcrumb navigation.

 ```js
 import {
    BreadcrumbList,
    BreadcrumbItem,
} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // template rendering
    render() {
        return (
            <BreadcrumbList
                className={'my-own-class'}
            >
                <BreadcrumbItem
                    onClick={function(){}} // (optional) function, breadcrumb is rendered as HTML button element
                >
                    Button
                </BreadcrumbItem>
                <BreadcrumbItem
                    href="#" // (optional) string, breadcrumb is rendered as HTML link anchor
                >
                    Link
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Span
                </BreadcrumbItem>
            </BreadcrumbList>
        )
    },
    // ....
};
 ```
 */
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
    /**
     additional CSS class name
     */
    className: PropTypes.string,
};
export default BreadcrumbList;
