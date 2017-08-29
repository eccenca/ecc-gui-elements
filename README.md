# Low-Level GUI Components (ecc-gui-elements)

Collection of shared GUI elements and mixins.

## Mixins

- `MaterialMixin`: A mixin which forces material design lite components to rerender if the React Component gets updated.
- `PerformanceMixin`: A mixin that provides default functionality for shouldComponentUpdate() to prevent unnecessary renderings.

### PerformanceMixin

The performance mixin provides a default process to test if a component need to be updated before it is rendered. It may be used to improve performance by preventeing unnecessary re-renderings of child components that did not changed.

Include mixin into your widget component:

```js
import {PerformanceMixin} from 'ecc-gui-elements';
const Widget = React.createClass({
    mixins: [PerformanceMixin],
    // ...
});
```

In GUI elments import it directly from the source file, use the include path relative to the folder of the widget:

```js
import PerformanceMixin from '../mixins/PerformanceMixin';
```
**Debug log:** set `window.enablePerformanceMixingLog = true` in the ui tests script to enable the log output of the perfermance mixin to the development console.

## Core styles

Style core for all projects.
Includes libraries from:

- [Material Design Lite](https://github.com/google/material-design-lite/)
- [Material Design icons](http://google.github.io/material-design-icons/)
- [Roboto Font](https://github.com/FontFaceKit/roboto)

### Include full SCSS into application

Add this into your main scss.

```scss
@import '~ecc-gui-elements/src/main';
```

### Use configuration in SCSS

You can import the global default configuration by using it from `ecc-gui-elements`:

```scss
@import '~ecc-gui-elements/src/configuration.default';
```

### Include ready to use CSS

- Copy `/dist` folder and use `style-core.css`


## Helpers

Include helper function in your Sass files:

```scss
@import "~ecc-gui-elements/src/scss/helpers";
```

Helper automatically included if the default configuration is loaded.

- `to_color()`: function to transform string into color value type

### to_color($color_value)

Returns correct Sass color value, even if `$color_value` parameter is a string value.

Examples:

```
to_color("#fff") => white
to_color("rgb(255, 255, 255)") => white
to_color("255, 255, 255") => white
```

Parameters:

* `$color_value` (Sass::Script::Value::String) or (Sass::Script::Value::Color)

Returns:

* (Sass::Script::Value::Color)


## GUI elements

- `Alert`: A message box which is optionally dismissable, includes `Error`, `Info`, `Success` and `Warning`.
- `BaseDialog`: A custom message box with optional Buttons
- `Button`: A simple Button which also may contain icons
- `Card`: An application card section including title, menu, content section and button row
- `Content`: container for all page content elements beside header, drawer and footer
- `Checkbox`: A checkbox with optional description
- `Chip`: A chip element for visualized status
- `ConfirmationDialog`: A message box with Buttons for confirmation and cancelation
- `ContextMenu`: A context menu with menu items
- `FloatingActionList`: provides FAB functionality for one and more actions, mainly for usage within cards
- `Icon`: Icons with optional tooltips. Uses [mdl icons](https://design.google.com/icons/) which can be used with their ligature names.
- `Layout`: container of the MDL application
- `NotAvailable`: very simple element to use as "not available" placeholder information
- `Nothing`: Literally Nothing
- `Progressbar`: Progressbar which may be placed globally or locally in a component
- `RadioGroup` and `Radio`: A radio button with optional label and grouping
- `SelectBox`: A selection box for choosing predefined values
- `Spinner`: Progressbar which may be placed globally or locally in a component
- `Switch`: A simple binary switch (a nicer checkbox)
- `Tabs`: A tabs container which manages tabbing behaviour
- `Version`: A normalised string output of product version
- `Pagination`: A page control element
- `TextField`: A TextField with floating label. Wrapper around [React-MDL Textfield]()

Usage is as simple as importing and rendering the components.

### Alert (Error, Info, Success and Warning)

```js
import { Alert, Error, Info, Success, Warning } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    onDismiss(){ },
    render() {
        return (
            <Alert
                border={true} // true|false, default is false
                vertSpacing={true} // true|false, default is false
                handlerDismiss={this.onDismiss} // function, onClick handler, necessary if icon button should be rendered
                labelDismiss="label for handler" // string, default: "Hide"
                iconDismiss="expand_less" // string, default: "close"
            >
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

### Button

Read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications#GUISpecifications-Buttons).

```js
import {Button, AffirmativeButton, DismissiveButton, DisruptiveButton} from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Button>
                Simple flat button
            </Button>

            // according MDL-API, @see https://getmdl.io/components/index.html#buttons-section
            <Button
                raised={true} // true | false (default), use it in cases when flat buttons not exposed enough
                accent={true} // true | false (default), use configured accent color
                colored={true} // true | false (default), use configured primary color
                ripple={false} // true | false (default), activate ripple effect on button
            >
                A Button
            </Button>

            // Icon button and Floating action button (FAB)
            <Button
                iconName="more_vert" // icon name, @see https://material.io/icons/
                tooltip="This is a Test!" // tooltip, some icons have fallback tooltips, set it to false if you need to prevent them
                fabSize="mini" // use fabSize only if it is a FAB. "mini" | "large" (default)
                // you can apply all other button properties on icon buttons, too (e.g. affirmative, accent, ripple, ...)
            />

            // use button elements to specify meaning of triggered action
            // you can combine it with button properties like raised, iconName and ripple
            <AffirmativeButton>
                Affirmative action
            </AffirmativeButton>
            <DismissiveButton
                raised={true}
            >
                Dismissive action
            </DismissiveButton>
            <DisruptiveButton
                iconName="delete"
                tooltip="Remove data"
            />
        )
    },
    // ....
});
```
### Card

```js
import {
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions
} from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Card
                className={'my-own-class'} // string, element can be enhanced with additional CSS classes
                stretch={false|true} // boolean, should the card element use full width of available space, default: true
                shadow={0..8} // integer, z-coordinate of card, amount of shadow applied to the card, 0 (off), 1 (2dp) to 8 {24dp}, default: 1
                fixedActions={false|true} // boolean, if the card contains a fixed CardActions button row, default: false
            >
                <CardTitle
                    className="my-own-class"
                    border={false|true} // boolean, horizontal border under title, default: true
                    documentLevel={'h1'..'h6'} // string, headline level of title, parameter only used if title content is a string (not a react/dom element), default: 'h2'
                >
                    Card title
                </CardTitle>
                <CardMenu
                    className="my-own-class"
                >
                    <!-- use the ContextMenu element here, or simple one or more icon buttons, no restrictions here -->
                    <ContextMenu>
                        <MenuItem>Menu item 1</MenuItem>
                        <MenuItem>Menu item 2</MenuItem>
                    </ContextMenu>
                </CardMenu>
                <CardContent
                    className="my-own-class"
                >
                    <!-- the content of the application card, no restriction here -->
                </CardContent>
                <CardActions
                    className="my-own-class"
                    border={false|true} // boolean, horizontal border top of button row, default: true
                    fixed={false|true} // boolean, if button row should be always visible sticky on botton when card is partly shown, default: false
                >
                    <!-- no restrictions on action buttons here -->
                </CardActions>
            </Card>
        )
    },
    // ....
});
```

### Content

```js
import {Content} from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Content
                component={'main'} // string, element or function that defines the (HTML) element used for the content, default: 'div'
            >
                <p>Your content is here.</p>
            </Content>
        )
    },
    // ....
});
```

### FloatingActionList

The `<FloatingActionList />` element provides functionality for a quick adaption of the floating action button (FAB) pattern from Material Design.
It can be configured with a single action handler or a list of them. Then it opens a list of provided actions when activated, with a single action it will trigger the configured event handler immediately.
The position of the FAB is always the right bottom corner within the card but there is an `fixed` option to made it always visible in case the card is not fully shown in the viewport.
When there is already a fixed `<CardActions />` element in use put the `<FloatingActionList />` in it to use it fixed.

```js
import {
    Card,
    CardTitle,
    CardContent,
    CardActions,
    FloatingActionList
} from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <div>
                <Card>
                    <CardTitle>
                        Card title
                    </CardTitle>
                    <CardContent>
                        <!-- ... -->
                    </CardContent>
                    <FloatingActionList
                        className={'my-own-class'} // string, element can be enhanced with additional CSS classes
                        fabSize={'mini|larege'} // string, what FAB size should be used, default: 'large'
                        fixedActions={false|true} // boolean, if FAB should be always visible sticky on botton when card is only partly shown, default: false
                        iconName={'add'} // string, name of icon what is used for the FAB before the list of actions is used, default: 'add', or if only one action is given the action icon is used.
                        actions={
                            [
                                // array of objects that define icon, label and handler method of each action
                                {
                                    icon: 'info',
                                    label: 'Open ConfirmationDialog',
                                    handler: this.openConfirmationDialog
                                },
                                {
                                    icon: 'info',
                                    label: 'Open BaseDialog',
                                    handler: this.openBaseDialog
                                },
                            ]
                        }
                    />
                </Card>
                <Card fixedActions={true}>
                    <CardTitle>
                        Card title
                    </CardTitle>
                    <CardContent>
                        <!-- ... -->
                    </CardContent>
                    <CardActions fixed={true}>
                        <!-- if a fixed button row is used then include the action list there if it need to be fixed, too. -->
                        <FloatingActionList
                            actions={
                                [
                                    {
                                        icon: 'info',
                                        label: 'Open ConfirmationDialog',
                                        handler: this.openConfirmationDialog
                                    },
                                ]
                            }
                        />
                    </CardActions>
                </Card>
            </div>
        )
    },
    // ....
});
```

### Icon

```js
import {Icon} from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Icon
                name="cloud_download" // icon name, @see https://material.io/icons/
                tooltip="cloudy clouds" // tooltip, some icons have fallback tooltips, set it to false if you need to prevent them
            />
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

### Chip and ChipVisual

`<Chip/>` and `<ChipVisual/>` are a wrapper around react-mdl's `<Chip/>` and `<ChipContact/>`.

`<Chip/>` is essentially the same as in react-mdl, but does not allow of `onClose`.

`<ChipVisual/>` supports images, icons and text labels.

```jsx
import { ChipVisual, Chip } from 'ecc-gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <div>
                <Chip>plain chip</Chip>
                <Chip
                    href={'http://example.com/'} // string, Chip is now rendered as HTML link anchor, can be combined with onClick
                >
                    Chip with URI
                </Chip>
                <Chip
                    onClick={() => console.log('#1 chip clicked')} // click handler, default: false
                >
                    <ChipVisual
                        image="https://placekitten.com/500/500" // image URL, default false
                    />
                    clickable with image visual
                </Chip>
                <Chip
                    onClick={() => console.log('#2 chip clicked')}
                >
                    <ChipVisual
                        label="AB" // string with max. 2 chars, default: false
                        bgColor="teal" // MD color names, e.g. red, red-50, ... @see https://material.io/guidelines/style/color.html
                        textColor="white" // MD color names, e.g. red, red-50, ... @see https://material.io/guidelines/style/color.html
                    />
                    clickable with text visual
                </Chip>
                <Chip>
                    <ChipVisual>
                        <Icon name="done" tooltip="test" />
                    </ChipVisual>
                    plain chip with icon
                </Chip>
            </div>
        )
    },
    // ....
});
```

### RadioGroup and Radio

```js
import { Radio, RadioGroup} from 'ecc-gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <RadioGroup
                onChange={this.updateRadio}
                value={this.state.selectedRadio}
                container="div" // default: "ul"
                childContainer="div" // default "li"
                ripple={true|false(default)}
            >
                <Radio
                    value={1}
                    label="Radio 1 Text"
                />
                <Radio
                    disabled
                    value={2}
                >
                    Radio 2 Text
                </Radio>
                <Radio
                    value={3}
                >
                    <div className="test">Radio 3 Text <br/>Line 2</div>
                </Radio>
            </RadioGroup>
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
                iconName="menu_more(default)"
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

### Layout

```js
import { Layout } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Layout
                fixedDrawer={false|true} // drawer always visible and open in larger screensdrawer always visible and open in larger screens, default: false
                fixedHeader={false|true} // header always visible, even in small screens, default: false
                fixedTabs={false|true} // fixed tabs instead of the default scrollable tabs, default: false
            >
                ...
            </Layout>
        )
    },
    // ....
});

```

### NotAvailable

Use that element as very simple "not available" placeholder information, e.g. in empty table cells or statistic overviews.
It currently only supports short label strings and long descriptions using the title attribute.

```js
import { NotAvailable } from 'ecc-gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <NotAvailable
                label="N/A" // short label that is shown, default: 'n/a'
                description="Not available element" // long description that is only shown on hover
                inline={false|true} // show it as inline text element, default: false
            />
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
                offset={0} // initial first shown element
                limit={10} // initial number of shown elements per page
                totalResults={31} // max elements
                offsetAsPage={false} // display number of pages instead number of elements
                newLimitText={'Elements per page'} // if not set number of elements selection is hidden
                limitRange={[10, 25, 50, 100]} // possible number of elements selections, default: [5, 10, 25, 50, 100, 200]
                isTopPagination={true} // is pagination on top of the site (pages selection opens to bottom), default is false
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
                placeholder="Label for SelectBox"
                options={['label1', 3]}
                optionsOnTop={true} // option list opens up on top of select input (default: false)
                value={this.state.value}
                onChange={this.selectBoxOnChange}
                creatable={true} // allow creation of new values
                promptTextCreator={(newLabel) => ('New stuff: ' + newLabel)} // change default "Create option 'newLabel'" to "New stuff: 'newLabel'"
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

- ``placeholder`` label is used within MDL floating label layout

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
                error="Please correct your input" // optional, error message
                stretch={false} // do not use full width (default: true)
                multiline={true} // use a text area (default: false)
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
