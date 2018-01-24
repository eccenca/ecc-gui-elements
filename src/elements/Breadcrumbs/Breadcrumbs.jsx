import React from 'react';
import cx from 'classnames';

/**
The are two simple React elements to create breadcrumb navigation.

```js
import {
    BreadcrumbList,
    BreadcrumbItem,
} from '@eccenca/gui-elements';

const Page = React.createClass({
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
});
```
*/
export const BreadcrumbList = React.createClass({
    // define property types
    propTypes: {
        /**
            string (optional): additional CSS class name
        */
        className: React.PropTypes.string,
    },

    render() {
        const {children, className, ...otherProps} = this.props;

        return (
            <ol className={cx('ecc-breadcrumbs', className)} {...otherProps}>
                {children}
            </ol>
        );
    },
});

export const BreadcrumbItem = React.createClass({
    // define property types
    propTypes: {
        /**
            string (optional): additional CSS class name
        */
        className: React.PropTypes.string,
    },

    render() {
        const {children, className, ...otherProps} = this.props;

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
    },
});
