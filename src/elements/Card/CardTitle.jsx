import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import ReactMDLCardTitle from 'react-mdl/lib/Card/CardTitle';
import PropTypes from 'prop-types';

class CardTitle extends Component{
    displayName: 'CardTitle';

    // define property types
    static propTypes = {
        className: PropTypes.string,
        border: PropTypes.bool,
        documentLevel: PropTypes.string,
    };

    static defaultProps = {
            border: true
    };

    render() {
        const {
            className,
            border,
            children,
            documentLevel,
            ...otherProps
        } = this.props;

        const classes = classNames(
            {
                'mdl-card--border': border === true,
            },
            className
        );

        let title = children;
        if (!_.isUndefined(documentLevel) && _.isString(children)) {
            switch (documentLevel) {
                case 'h1':
                    title = (
                        <h1 className="mdl-card__title-text">{children}</h1>
                    );
                    break;
                case 'h2':
                    title = (
                        <h2 className="mdl-card__title-text">{children}</h2>
                    );
                    break;
                case 'h3':
                    title = (
                        <h3 className="mdl-card__title-text">{children}</h3>
                    );
                    break;
                case 'h4':
                    title = (
                        <h4 className="mdl-card__title-text">{children}</h4>
                    );
                    break;
                case 'h5':
                    title = (
                        <h5 className="mdl-card__title-text">{children}</h5>
                    );
                    break;
                case 'h6':
                    title = (
                        <h6 className="mdl-card__title-text">{children}</h6>
                    );
                    break;
                default:
                    title = children;
                    break;
            }
        }

        return (
            <ReactMDLCardTitle className={classes} {...otherProps}>
                {title}
            </ReactMDLCardTitle>
        );
    }
}

export default CardTitle;
