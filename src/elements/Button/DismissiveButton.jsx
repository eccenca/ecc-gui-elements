import React from 'react';
import Button from './Button';
import ProgressButton from './ProgressButton';


/**
Use the `<DismissiveButton />` element for all buttons that trigger dismissive actions, e.g. cancelling edit forms.
For more information read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications#GUISpecifications-Buttons).
It is possible to combine it with `<Button />` parameters like `disabled`, `raised`, `iconName` and `ripple`.

```js
import {DismissiveButton} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <DismissiveButton
                raised={true}
            >
                Dismissive action
            </DismissiveButton>
        )
    },
    // ....
});
```
*/

const DismissiveButton = props => {
    const { children, ...otherProps } = props;
    const useProgressButton = typeof otherProps.progress !== 'undefined';

    // remove unused propTypes from button
    if (!useProgressButton) {
        delete otherProps.progress;
    }

    if (__DEBUG__ && typeof otherProps.accent !== 'undefined') {
        console.warn(
            'Do not use <DismissiveButton/>  with accent property.'
        ); // eslint-disable-line no-console
    }

    if (__DEBUG__ && typeof otherProps.colored !== 'undefined') {
        console.warn(
            'Do not use <DismissiveButton/>  with colored property.'
        ); // eslint-disable-line no-console
    }

    if (__DEBUG__ && typeof otherProps.affirmative !== 'undefined') {
        console.warn(
            'Do not use <DismissiveButton/>  with affirmative property.'
        ); // eslint-disable-line no-console
    }

    if (__DEBUG__ && typeof otherProps.disruptive !== 'undefined') {
        console.warn(
            'Do not use <DismissiveButton/>  with disruptive property.'
        ); // eslint-disable-line no-console
    }

    // render button
    return useProgressButton ? (
        <ProgressButton {...otherProps} dismissive>
            {children}
        </ProgressButton>
    ) : (
        <Button {...otherProps} dismissive>
            {children}
        </Button>
    );
};

DismissiveButton.displayName = 'DismissiveButton';

export default DismissiveButton;
