import React from 'react';
import cx from 'classnames';

export const BreadcrumbList = React.createClass({

    // define property types
    propTypes: {
        className: React.PropTypes.string,
    },

    render() {
        const {children, className, ...otherProps} = this.props;

        return (
            <ol
                className={
                    cx(
                        'ecc-breadcrumbs',
                        className
                    )
                }
                {...otherProps}
            >
                {children}
            </ol>
        );
    },
});

export const BreadcrumbItem = React.createClass({

    // define property types
    propTypes: {
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
                ...otherProps
            },
            children
        );

        return (
            <li
                className={
                    cx(
                        'ecc-breadcrumbs__item',
                        className
                    )
                }
            >
                {crumbButton}
            </li>
        );
    },
});
