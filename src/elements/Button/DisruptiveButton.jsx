import React from 'react';
import Button from './Button';
import ProgressButton from './ProgressButton';

/**
Use the `<DisruptiveButton />` element for all buttons that trigger disruptive actions, e.g. confirming "Remove data."
For more information read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications#GUISpecifications-Buttons).
It is possible to combine it with `<Button />` parameters like `disabled`, `raised`, `iconName` and `ripple`.

```js
import {DisruptiveButton} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <DisruptiveButton
                iconName="remove"
                tooltip="Remove data"
            />
        )
    },
    // ....
});
```
*/

const DisruptiveButton = props => {
    const { children, ...otherProps } = props;
    const useProgressButton = typeof otherProps.progress !== 'undefined';

    // remove unused propTypes from button
    if (!useProgressButton) {
        delete otherProps.progress;
    }

    if (__DEBUG__ && typeof otherProps.accent !== 'undefined') {
        console.warn(
            'Do not use <DisruptiveButton/>  with accent property.'
        ); // eslint-disable-line no-console
    }

    if (__DEBUG__ && typeof otherProps.colored !== 'undefined') {
        console.warn(
            'Do not use <DisruptiveButton/>  with colored property.'
        ); // eslint-disable-line no-console
    }

    if (__DEBUG__ && typeof otherProps.affirmative !== 'undefined') {
        console.warn(
            'Do not use <DisruptiveButton/>  with affirmative property.'
        ); // eslint-disable-line no-console
    }

    if (__DEBUG__ && typeof otherProps.dismissive !== 'undefined') {
        console.warn(
            'Do not use <DisruptiveButton/>  with dismissive property.'
        ); // eslint-disable-line no-console
    }

    // render button
    return useProgressButton ? (
        <ProgressButton {...otherProps} disruptive>
            {children}
        </ProgressButton>
    ) : (
        <Button {...otherProps} disruptive>
            {children}
        </Button>
    );
};
DisruptiveButton.displayName = 'DisruptiveButton';

export default DisruptiveButton;
