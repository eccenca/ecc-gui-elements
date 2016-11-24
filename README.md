# Low-Level GUI Components (ecc-gui-elements)

Collection of low-level GUI elements like Buttons, Icons or Alerts.

## Elements

Consists of

- `MaterialMixin`: A Mixin which forces material design lite components to rerender if the React Component gets updated.
- `Alert`: A message box which is optionally dismissable.
- `Button`: A simple Button which also may contain icons
- `Checkbox`: A checkbox with optional description
- `ConfirmationDialog`: A message box with Buttons for confirmation and cancelation
- `ContextMenu`: A context menu with menu items
- `BaseDialog`: A custom message box with optional Buttons
- `Icon`: Icons with optional tooltips. Uses [mdl icons](https://design.google.com/icons/) which can be used with their ligature names.
- `Nothing`: Literally Nothing
- `Progressbar`: Progressbar which may be placed globally or locally in a component
- `SelectBox`: A selection box for choosing predefined values
- `Spinner`: Progressbar which may be placed globally or locally in a component
- `Switch`: A simple binary switch (a nicer checkbox)
- `Error`, `Info`, `Success` and `Warning` are wrappers around `Alert` which already set the appropriate styles for that kind of Alert.
- `Tabs`: A tabs container which manages tabbing behaviour
- `Version`: A normalised string output of product version
- `Pagination`: A page control element
- `TextField`: A TextField with floating label. Wrapper around [React-MDL Textfield]()

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

### ConfirmationDialog

```js
import { Button, ConfirmationDialog } from 'ecc-gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <ConfirmationDialog title="Dialog Title"
                    active={true}
                    modal={true}
                    size="mini"
                    cancelButton={<Button>Cancel</Button>}
                    confirmButton={<Button>Yes</Button>}
            >
                <p>Dialog Content</p>
            </ConfirmationDialog>
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

### ContextMenu

```js
import { ContextMenu, MenuItem } from 'ecc-gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <ContextMenu
                align="left|right(default)"
                valign="top|bottom(default)"
                tooltip="for menu button(currently not supported)"
                target="idformymenu(auto generated if it is not given)"
            >
                <MenuItem>First Item</MenuItem>
                <MenuItem>Second Item</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
                <MenuItem>Another Menu Item</MenuItem>
                <MenuItem>Alright</MenuItem>
            </ContextMenu>
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

### Pagination

```js
import { Pagination } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Pagination
                offset={0}
                limit={10}
                actualResults={10}
                totalResults={31}
                handleNewOffset={handleNewPaginationOffset}
                handleNewLimit={handleNewPaginationLimit}
                offsetAsPage={false}
            />
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

### SelectBox

The SelectBox wraps [react-select](https://github.com/JedWatson/react-select) to use mixed content of strings and numbers as well as the default object type.

The SelectBox behaves like a [controlled input](https://facebook.github.io/react/docs/forms.html#controlled-components)

```js
import { SelectBox } from 'ecc-gui-elements';

const Page = React.createClass({
    getInitialState(){
      return {
          value: 8,
      };
    },
    selectBoxOnChange(value){
       this.setState({
           value
       });
    },
    // template rendering
    render() {
        return (
            <SelectBox
                options={['label1', 3]}
                value={this.state.value}
                onChange={this.selectBoxOnChange}
                creatable={true} // allow creation of new values
                multi={true} // allow multi selection
                clearable={false} // hide 'remove all selected values' button
            />
        )
    },
});

```
Note:

- if objects are used in multi selectable options you can add {"clearableValue": false} to it to hide delete button for this specifc object

- if "creatable" is set new values will be applied on Enter, Tab and Comma (",")

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

### TextField

```js
import { TextField } from 'ecc-gui-elements';

const Page = React.createClass({
    // event is the original react onChange event
    // value is event.target.value (a shortcut for convienience)
    onChange({value, event}) {
        this.setState({
            value,
        })
    },
    // template rendering
    render() {
        return (
            <TextField
                onChange={this.onChange}
                value={this.state.value}
                label="Textfield"
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
```

## Usage of core styles

Style core for all projects.
Includes libraries from:

- [Material Design Lite (forked)](https://github.com/eccenca/material-design-lite)
- [Material Design icons](http://google.github.io/material-design-icons/)
- [Roboto Font](https://github.com/FontFaceKit/roboto)

### via scss

Add this into your main scss.

```scss
@import '~ecc-gui-elements/src/main';
```

### configuration via scss

You can import the global default configuration by using it from `ecc-gui-elements`:

```scss
@import '~ecc-gui-elements/src/configuration.default';
```

### via css

- Copy `/dist` folder and use `style-core.css`
