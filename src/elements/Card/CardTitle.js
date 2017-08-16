import React from 'react';
import classNames from 'classnames';
import ReactMDLCardTitle from 'react-mdl/lib/Card/CardTitle';
import PerformanceMixin from '../../mixins/PerformanceMixin';

const CardTitle = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        className: React.PropTypes.string,
        border: React.PropTypes.bool,
        documentLevel: React.PropTypes.number,
    },

    getDefaultProps() {
        return {
            border: true,
        };
    },

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
                'mdl-card--border': (border === true)
            },
            className
        );

        let title = children;
        if ((typeof documentLevel !== 'undefinded') && (typeof children === 'string')) {
            switch (documentLevel) {
                case 1:
                    title = <h1 className="mdl-card__title-text">{children}</h1>;
                    break;
                case 2:
                    title = <h2 className="mdl-card__title-text">{children}</h2>;
                    break;
                case 3:
                    title = <h3 className="mdl-card__title-text">{children}</h3>;
                    break;
                case 4:
                    title = <h4 className="mdl-card__title-text">{children}</h4>;
                    break;
                case 5:
                    title = <h5 className="mdl-card__title-text">{children}</h5>;
                    break;
                case 6:
                    title = <h6 className="mdl-card__title-text">{children}</h6>;
                    break;
                default:
                    title = children;
                    break;
            }
        }

        return <ReactMDLCardTitle
            className={classes}
            {...otherProps}
        >
            {title}
        </ReactMDLCardTitle>;
    },
});

export default CardTitle;
