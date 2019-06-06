import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';

/**
```js
import { Alert, Error, Info, Success, Warning } from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    onDismiss(){ },
    render() {
        return (
            <Alert
                border={true} // true|false, default is false
                vertSpacing={true} // true|false, default is false
                handlerDismiss={this.onDismiss} // onClick handler, necessary if icon button should be rendered
                labelDismiss="label for handler" // string, default: "Hide"
                iconDismiss="expand_less" // string, default: "close"
                reducedHeight={true} // true|false, default is false
            >
                <p>This is a</p>
                <p>untyped message.</p>
            </Alert>
            <Info border vertSpacing>
                info
            </Info>
            <Success border vertSpacing>
               success
            </Success>
            <Warning border vertSpacing>
                warning
            </Warning>
            <Error
                handlerDismiss={this.onDismiss}
                labelDismiss="remove error"
                vertSpacing
            >
                error with tooltip
            </Error>
        )
    },
    // ....
});
```
*/

const Alert = props => {
    const {
        className,
        border,
        handlerDismiss,
        labelDismiss,
        iconDismiss,
        type,
        vertSpacing,
        reducedHeight,
        children,
        ...otherProps
    } = props;

    const classes = classNames(
        'mdl-alert',
        {
            'mdl-alert--info': type === 'info',
            'mdl-alert--success': type === 'success',
            'mdl-alert--warning': type === 'warning',
            'mdl-alert--danger': type === 'error',
            'mdl-alert--border': border,
            'mdl-alert--spacing': vertSpacing,
            'mdl-alert--reducedheight': reducedHeight,
            'mdl-alert--dismissable': typeof handlerDismiss !== 'undefined',
        },
        className
    );

    let dismiss = false;
    if (handlerDismiss) {
        dismiss = (
            <div className="mdl-alert__dismiss">
                <Button
                    type="button"
                    iconName={iconDismiss || 'hide'}
                    tooltip={labelDismiss || 'Hide'}
                    onClick={handlerDismiss}
                />
            </div>
        );
    }
    return (
        <div className={classes} {...otherProps}>
            <div className="mdl-alert__content">{children}</div>
            {dismiss}
        </div>
    );
};

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    /**
        string (optional): additional CSS class name
    */
    className: PropTypes.string,
    /**
        function (optional): handler that provides dismiss functionality for the message, this it not handled by the
        element itself
    */
    handlerDismiss: PropTypes.func,
    /**
        string (optional): tooltip text that is shown on dismiss button, default is 'Hide'
    */
    labelDismiss: PropTypes.string,
    /**
        string (optional): icon that is used for dismiss button, default icon is `hide`
    */
    iconDismiss: PropTypes.string,
    /**
        string (optional): type of the alert message, one of `info`, `success`, `warning` and `error`, otherwise the
        alert is not typed and appeares without special color scheme
    */
    type: PropTypes.string,
    /**
        boolean (optional): adds a small border to the alert message, default it appears without border
    */
    border: PropTypes.bool,
    /**
        boolean (optional): adds top and bottom margins to the alert message, default it appears without additional
        whitespace around it
    */
    vertSpacing: PropTypes.bool,
    /**
        boolean (optional): forces alert message to be not larger than 50% of the viewport and adds scrollbars on
        overflows, otherwise it takes as much vertical space as content needs
    */
    reducedHeight: PropTypes.bool,
};

Alert.displayName = 'Alert';

export default Alert;
