# Low-Level GUI Components (ecc-gui-elements)

Collection of low-level GUI elements like Buttons, Icons or Alerts.

## Elements

Consists of

- `MaterialMixin`: A Mixin which forces material design lite components to rerender if the React Component gets updated.
- `Alert`: A message box which is optionally dismissable.
- `Button`: A simple Button which also may contain icons
- `Checkbox`: A checkbox with optional description
- `Dialog`: A message box with Buttons for confirmation and cancelation
- `BaseDialog`: A custom message box with optional Buttons
- `Icon`: Icons with optional tooltips. Uses [mdl icons](https://design.google.com/icons/) which can be used with their ligature names.
- `Nothing`: Literally Nothing
- `Progressbar`: Progressbar which may be placed globally or locally in a component
- `Spinner`: Progressbar which may be placed globally or locally in a component
- `Switch`: A simple binary switch (a nicer checkbox)
- `Error`, `Info`, `Success` and `Warning` are wrappers around `Alert` which already set the appropriate styles for that kind of Alert.
- `Tabs`: A tabs container which manages tabbing behaviour
- `Version`: A normalised string output of product version

## Usage

Usage is as simple as importing and rendering the components

### Alert (Error, Info, Success and Warning)

```js
import { Alert, Error, Info, Success, Warning } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    onDismiss(){ },
    render() {
        return (
            <Alert border={true} vertSpacing={true} handlerDismiss={this.onDismiss}>
                <p>This is a</p>
                <p>untyped message.</p>
            </Alert>
            <Info border={true} vertSpacing={true} >
                info
            </Info>
            <Success border={true} vertSpacing={true} >
               success
            </Success>
            <Warning border={true} vertSpacing={true} >
                warning
            </Warning>
            <Error handlerDismiss={this.onDismiss} labelDismiss="remove error" vertSpacing={true} >
                error with tooltip
            </Error>
        )
    },
    // ....
});
```

### Button and Icon

```js
import {Button, Icon} from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Button raised={true} accent ripple={false}>A Button</Button>
            <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="mini">
                <Icon name="mood" />
            </Button>
            <Button iconName="more_vert" tooltip="more tooltip" />
            <Icon name="cloud_download" tooltip="cloudy clouds" />
        )
    },
    // ....
});
```

### Checkbox and Switch

```js
import { Checkbox, Switch} from 'ecc-gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Switch id="5" ripple={true} />
            <Switch checked>
                This is checked by default
            </Switch>
            <Checkbox id="6" ripple={true} />
            <Checkbox label="Checkbox with label" />
            <Checkbox disabled>
                Disabled Checkbox with label
            </Checkbox>
            <Checkbox checked>
                <div className="test">Checkbox 3 Text</div>
            </Checkbox>
        )
    },
    // ....
});
```

### Dialog

```js
import { Button, Dialog } from 'ecc-gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Dialog title="Dialog Title"
                    active={true}
                    modal={true}
                    size="mini"
                    cancelButton={<Button>Cancel</Button>}
                    confirmButton={<Button>Yes</Button>}
            >
                <p>Dialog Content</p>
            </Dialog>
        )
    },
    // ....
});

```

### BaseDialog

```js
import { Button, BaseDialog } from 'ecc-gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <BaseDialog title="Dialog Title"
                    active={true}
                    modal={true}
                    titleCancelButton={this.close}
                    size="mini"
                    buttonRow={[
                        <Button>Cancel</Button>,
                        <Button>Yes</Button>,
                        <Button>More</Button>
                    ]}
            >
                <p>Dialog Content</p>
            </BaseDialog>
        )
    },
    // ....
});

```

### Nothing

```js
import { Nothing } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Nothing />
        )
    },
    // ....
});

```

### Progressbar

```js
import { Progressbar } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
                <Progressbar progress={85} />
                <Progressbar appearGlobal={true} indeterminate={true} progress={95} />
                <Progressbar appearLocal={true} progress={15} />
        )
    },
    // ....
});
```

### Spinner

The Spinner is global by default.

```js
import { Spinner } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Spinner appearInline={true} />
            <Spinner appearLocal={true} />
            <Spinner />
        )
    },
    // ....
});

```

### Tabs

```js
import { Tabs } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Tabs
                prefixTabNames={'ecc-view-resource-panel-tab'}
                activeTab={'historyview'}
                tabs={[{tabTitle: 'name', tabContent: value}]}
                onTabClick={this.TabClick}
            />
        )
    },
    // ....
});

```

### Version

```js
import { Version } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Version
                version={'v1.1.0'}
            />
        )
    },
    // ....
});
