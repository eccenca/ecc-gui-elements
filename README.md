# Low-Level GUI Components (@eccenca/gui-elements)

Collection of shared GUI elements and hocs.

## Mixins
- `ScrollingHOC`: It provides methods to scroll mounted React components into the viewport.

### ScrollingHOC

The scrolling mixin provides methods to scroll a mounted React element or component into the visible viewport of a scrollable area:

* `scrollIntoView()`: use this method within a component to scroll it into the visible viewport
* `ScrollingMixin.scrollElementIntoView(ReactOrDomElement)`: use this method from outside an element to scroll it into the visible viewport

```js
import { ScrollingHOC } from '@eccenca/gui-elements';
const Widget = React.createClass({

    componentDidMount() {
        const options = {
            animationTime: 500, // (optional) integer, time in milliseconds
            topOffset: 0, // (optional) integer, pixels to offset top alignment
            callbackFinished: function(result) {}, // (optional) function, result parameter is currently 'cancelled' or 'completed',
            scrollX: true // (optional) boolean, whether overflowX should be checked to decide whether an element is scrollable,
            scrollY: true // (optional) boolean, whether overflowY should be checked to decide whether an element is scrollable,
        }
        this.scrollIntoView(
            options // optional
        );
    },
    // ...
});
export default ScrollingHOC(Widget)
```

It is important that the component height can be calculated correctly, `scrollIntoView()` should be used after all contents are loaded.

Use another method from the mixin to scroll other elements into the viewport.
It's important to use references to active DOM elements or mounted React components, e.g. by using the React ref pattern.

```js
// use it from outside of the component that needs to be scrolled into the visible viewport
import {Card, Button, ScrollingHOC} from '@eccenca/gui-elements';
const Widget = React.createClass({
    handleScroll() {
        const options = {
            // animationTime: 500, // (optional) integer, time in milliseconds
            // topOffset: 0, // (optional) integer, pixels to offset top alignment
            // callbackFinished: function(result) {}, // (optional) function, result parameter is currently 'cancelled' or 'completed'
        }
        this.props.scrollElementIntoView(
            this.myCard,
            options, // optional parameter
        );
    },
    // ...
    render() {
        return <div>
            <Card ref={card => this.myCard = card}>
                <!-- ... -->
            </Card>
            <Button
                onClick
            >
                Scroll card into viewport
            </Button>
        </div>
    },
});
```

## Core styles

Style core for all projects.
Includes libraries from:

- [Material Lite One](https://github.com/eccenca/material-lite-one)
- [Material Design icons](http://google.github.io/material-design-icons)
- [Roboto Font](https://github.com/FontFaceKit/roboto)

### Include full SCSS into application

Add this into your main scss.

```scss
@import '~@eccenca/gui-elements/src/main';
```

### Use configuration in SCSS

You can import the global default configuration by using it from `@eccenca/gui-elements`:

```scss
@import '~@eccenca/gui-elements/src/configuration.default';
```

#### Justify default configuration

Base configuration can be defined by only 7 variables, they need to be set before importing `~@eccenca/gui-elements/src/configuration.default`.

- Colors:
    - `$ecc-color-primary`:
    - `$ecc-color-primary-contrast`:
    - `$ecc-color-accent`:
    - `$ecc-color-accent-contrast`:
- Sizes:
    - `$ecc-size-typo-base`:
    - `$ecc-size-typo-base-lineheight`:
    - `$ecc-size-type-levelratio`:

If necessary you can pre-define all SCSS variables with your own values, please have a look into `src/onfiguration.default` and `src/configuration.mdl` in `@eccenca/gui-elements` for a full list, otherwise they are set by default to base colors (e.g. for alerts) or calculated based on the mentioned variables above.

### Include ready to use CSS

- Copy `/dist` folder and use `style-core.css`


## Helpers

Include helper function in your Sass files:

```scss
@import "~@eccenca/gui-elements/src/scss/helpers";
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
- `AutoCompleteBox`: A auto-completion box (wrapper around `SelectBox`) which renders label, value and an optional description.
- `BaseDialog`: A custom message box with optional Buttons
- `Button`: A simple Button which also may contain icons
- `BreadcrumbList`: A simple element to create breadcrumb navigation
- `Card`: An application card section including title, menu, content section and button row
- `Content`: container for all page content elements beside header, drawer and footer
- `Checkbox`: A checkbox with optional description
- `Chip`: A chip element for visualized status
- `ConfirmationDialog`: A message box with Buttons for confirmation and cancellation
- `ContextMenu`: A context menu with menu items
- `DateField`: A date field input with calendar picker
- `DateTimeField`: A date and time field input with calendar picker
- `FloatingActionList`: provides FAB functionality for one and more actions, mainly for usage within cards
- `Icon`: Icons with optional tooltips. Uses [mdl icons](https://design.google.com/icons/) which can be used with their ligature names.
- `Layout`: container of the MDL application
- `NotAvailable`: very simple element to use as "not available" placeholder information
- `Nothing`: Literally Nothing
- `Pagination`: A page control element
- `Progressbar`: Progressbar which may be placed globally or locally in a component
- `RadioGroup` and `Radio`: A radio button with optional label and grouping
- `SelectBox`: A selection box for choosing predefined values
- `Spinner`: Progressbar which may be placed globally or locally in a component
- `Switch`: A simple binary switch (a nicer checkbox)
- `Table`: A simple table which can be enriched with react elements as content.
- `Tabs`: A tabs container which manages tabbing behaviour
- `TextField`: A text field with floating label. Wrapper around [React-MDL Textfield]()
- `Version`: A normalised string output of product version

Usage is as simple as importing and rendering the components.

### Alert (Error, Info, Success and Warning)

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

### AutoCompleteBox

The AutoCompleteBox wraps `SelectBox`, it takes the same properties. The key differences are:

- rendering of multi-line options with label, value and description.
    - If value and label are the same, only one is rendered
    - descriptions are optional
- the options have to be an array of objects
- it is always searchable, while a SelectBox can be de-activated

```js
import { AutoCompleteBox } from '@eccenca/gui-elements';

const Page = React.createClass({
    getInitialState(){
      return {
          value: null,
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
            <AutoCompleteBox
                placeholder="Label for AutoCompleteBox"
                options={[{label: 'Label', description: 'This is a description', value: '5000 Examples'}]}
                optionsOnTop={true} // option list opens up on top of select input (default: false)
                value={this.state.value}
                onChange={this.selectBoxOnChange}
                creatable={true} // allow creation of new values
                multi={true} // allow multi selection
                clearable={false} // hide 'remove all selected values' button
                handleValueChange={(value) => console.log(value)} // pass user input directly to parrent
                showLabel={true} // define if label in options should be shown (default: true)
                showValue={true} // define if value in options should be shown (default: true)
                showDescription={true} // define if description in options should be shown (default: true)
            />
        )
    },
});

```

### Button

Read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications#GUISpecifications-Buttons).

```js
import {Button, AffirmativeButton, DismissiveButton, DisruptiveButton} from '@eccenca/gui-elements';

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

Some special class names provide extra functionality:

* `mdl-button--clearance`: add it to buttons that clear input fields or whole input blocks, works with all button types.

#### ProgressButton

There is a special version of the Button element that can be used to visualize a running process. `<ProgressButton/>` elements are shown as raised disabled buttons but this behaviour can be overwritten.

```js
import {ProgressButton} from '@eccenca/gui-elements';
import rxmq from 'ecc-messagebus';

// channel event which updates progressTopic
rxmq.channel('yourchannel').subject('progressNumber').onNext({
    progress: 30, // integer, progress in percentage
    lastUpdate: 'August 31st 2017, 9:48:24 am.', // string which should be a date, require tooltip to be set
});

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <ProgressButton
                progress={0..100} // integer, if not set or 0 then an infinite progress bar is used, default: 0
                progressTopic={rxmq.channel('yourchannel').subject('progressNumber')} // message queue subject, if given that the button element listens to it for update objects that include `progressNumber` property with a value between 0 and 100
                tooltip={'running'} // string, tooltip for progress bar, if a progress number is known (via option or message queue) then the tooltip is extenden by a colon, the value and a percent char
                raised={true|false} // boolean, default: true
                disabled={true|false} // boolean, default: true
            >
                Working!
            </ProgressButton>
        )
    },
    // ....
});
```

You can use `progress` and `progressTopic` options directly on `<AffirmativeButton/>`, `<DismissiveButton/>` and `<DisruptiveButton/>` elements.

### Breadcrumb

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
                className={'my-own-class'} // (optional) string, element can be enhanced with additional CSS classes
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

### Card

```js
import {
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions
} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Card
                className={'my-own-class'} // string, element can be enhanced with additional CSS classes
                stretch={false|true} // boolean, should the card element use full width of available space, default: true
                shadow={0..8} // integer, z-coordinate of card, amount of shadow applied to the card, 0 (off), 1 (2dp) to 8 {24dp}, default: 1
                fixedActions={false|true} // boolean, if the card contains a fixed CardActions button row, default: false
                reducedSize={false|true} // boolean, renders the card with reduced paddings and marging, default: false
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
import {Content} from '@eccenca/gui-elements';

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
} from '@eccenca/gui-elements';

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
                        openToBottom={boolReturningFunction} // Function returning a bool value, action menu list is shown at the bottom of the FAB for boolean true, default: function that always returns false
                        allowSingleItemList={false|true} // boolean, opens a menu after click on FAB even if there is onle one action in the list, otherwise the FAB directly triggers that action, default: false
                        fabSize={'mini|large'} // string, what FAB size should be used, default: 'large'
                        fixed={false|true} // boolean, if FAB should be always visible sticky on botton when card is only partly shown, default: false
                        iconName={'add'} // string, name of icon what is used for the FAB before the list of actions is used, default: 'add', or if only one action is given and `allowSingleItemList` is false then the action icon is used.
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
                                    handler: this.openBaseDialog,
                                    disabled: true
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
import {Icon} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Icon
                name="cloud_download" // icon name, @see https://material.io/icons/
                tooltip="cloudy clouds" // tooltip, some icons have fallback tooltips, set it to false if you need to prevent them
                badge="5" // Badge, as shown in https://getmdl.io/components/index.html#badges-section
            />
        )
    },
    // ....
});
```

### Checkbox and Switch

```js
import { Checkbox, Switch} from '@eccenca/gui-elements';
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

```js
import { ChipVisual, Chip } from '@eccenca/gui-elements';
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
import { Radio, RadioGroup} from '@eccenca/gui-elements';
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
import { Button, ConfirmationDialog } from '@eccenca/gui-elements';
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
import { Button, BaseDialog } from '@eccenca/gui-elements';
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
import { ContextMenu, MenuItem } from '@eccenca/gui-elements';
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

### DateField

```js
import { DateField } from '@eccenca/gui-elements';

const Page = React.createClass({
    // value is the date shown to the user
    // rawValue is the ISO 8601 representation if value is valid
    // isValid indicates if given value matches the defined representation
    onChange({value, rawValue, isValid, name}) {
        this.setState({
            [name]: value,
        })
    },
    // template rendering
    render() {
        return (
            <DateField
                onChange={this.onChange}
                name="dateValue"
                value={this.state.dateValue} // Should be a moment.js value for consistent handling
                placeholder="Please set a date" // optional (default: '')
                dateFormat="DD-MM-YYYY" // validate date format, optional (default 'DD-MM-YYYY')
                closeOnSelect={true} // auto close picker when a date is selected, optional (default: false)
                input={false} // hide the input element (picker will be always displayed), optional (default: true)
                disabled={true} // prevent selecting a date, optional (default: false)
                inputClassName="customDateName"// extra class name on input element, optional (default: '')
            />
        )
    },
    // ....
});

```

### DateTimeField

```js
import { DateTimeField } from '@eccenca/gui-elements';

const Page = React.createClass({
    // value is the date shown to the user
    // rawValue is the ISO 8601 representation if value is valid
    // isValid indicates if given value matches the defined representation
    onChange({value, rawValue, isValid, name}) {
        this.setState({
            [name]: value,
        })
    },
    // template rendering
    render() {
        return (
            <DateTimeField
                onChange={this.onChange}
                name="dateTimeValue"
                value={this.state.dateTimeValue} // Should be a moment.js value for consistent handling
                label="Label for DateTime input" // optional
                placeholder="Pls set a date" // optional (default: '') and only used if there is no label
                dateFormat="DD-MM-YYYY" // validate date format, optional (default 'DD-MM-YYYY')
                timeFormat="hh:mm a Z", // validate time format, optional (default 'hh:mm a')
                closeOnSelect={true} // auto close picker when a date is selected, optional (default: false)
                input={false} // hide the input element (picker will be always displayed), optional (default: true)
                disabled={true} // prevent selecting a date, optional (default: false)
                stretch={false} // use full width for input field (default: true)
                error="This is a error message" // optional string
                inputClassName="customDateName"// extra class name on input element, optional (default: '')
            />
        )
    },
    // ....
});

```

### Layout

```js
import { Layout } from '@eccenca/gui-elements';

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
It currently only supports short label strings and long descriptions used as tooltip addition.

```js
import { NotAvailable } from '@eccenca/gui-elements';

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
import { Nothing } from '@eccenca/gui-elements';

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
import { Pagination } from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Pagination
                offset={0} // initial first shown element
                limit={10} // initial number of shown elements per page
                totalResults={31} // max elements
                showElementOffsetPagination={true} // show element offset numbers as pagination information, default: false (show page offsets)
                newLimitText={'Elements per page'} // if not set number of elements selection is hidden
                limitRange={[10, 25, 50, 100]} // possible number of elements selections, default: [5, 10, 25, 50, 100, 200]
                isTopPagination={true} // is pagination on top of the site (pages selection opens to bottom), default is false
                showPageInput={true} // the current page number can be edited to jump directly there, default: false
            />
        )
    },
    // ....
});

```

### Progressbar

```js
import { Progressbar } from '@eccenca/gui-elements';

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
import { Spinner } from '@eccenca/gui-elements';

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
Please refer to all available properties in the linked documentation.

The SelectBox behaves like a [controlled input](https://facebook.github.io/react/docs/forms.html#controlled-components)

```js
import { SelectBox } from '@eccenca/gui-elements';

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
                searchable={true} // whether to behave like a type-ahead or not
            />
        )
    },
});

```
Note:

- if objects are used in multi selectable options you can add {"clearableValue": false} to it to hide delete button for this specifc object

- if "creatable" is set new values will be applied on Enter, Tab and Comma (",")

- ``placeholder`` label is used within MDL floating label layout

### Table

Provides a simple table which can be enriched with react elements as content.

 ```js
 import {Table} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ....
    // template rendering
    render() {
        return (
            <Table
                multiline={true} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                fullWidth={true} // boolean true or false, table uses full width even if it could be smaller (optional, default: false)
                className="my-table-class" // string, additional CSS classes (optional, default: "")
            >
                <!-- your table content (optional) -->
            </table>
        )
    },
    // ....
};
 ```

#### Properties
- **children** (node) -
- **className** (string) - string (optional): additional CSS class name
- **fullWidth** (bool, default: false) - use full width even for smaller tables
- **multiline** (bool, default: false) - allow linebreaks and multilined content in table cells

### Table body

Provides table body element that can be enriched by sub elements.

 ```js
 import {TableBody} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ....
    // template rendering
    render() {
        return (
            <TableBody
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for CSS class descriptions
            >
                <!-- table rows -->
            </TableBody>
        )
    },
    // ....
};
 ```

#### Properties
- **children** (node) -
- **className** (string) - string (optional): additional CSS class name
- **multiline** (bool, default: false) - allow linebreaks and multilined content in table cells

### Table cell

Provides table cell element that can be enriched by sub elements.

 ```js
 import {TableCell} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ...
    // template rendering
    // use it inside the correct Table elements
    render() {
        return (
            <TableCell
                isHead={true} // boolean, if the table cell contains a table head for the column or row (optional, default: false)
                likeHead={true} // boolean, if a normal table cell should be look like a head element (optional, default: false)
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for additional CSS class descriptions
            >
                <!-- content -->
            </TableCell>
        )
    },
    // ...
};
 ```

#### Properties
- **children** (node) -
- **className** (string, default: '') - optional CSS class
- **isHead** (bool, default: false) - table cell is head for column or row
- **likeHead** (bool, default: false) - table cell looks like header cell
- **multiline** (bool, default: false) - allow linebreaks and multilined content in table cells

### Table head

Provides table head element that can be enriched sub elements.

 ```js
 import {TableHead} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ....
    // template rendering
    render() {
        return (
            <TableHead
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for CSS class descriptions
            >
                <!-- head row -->
            </TableHead>
        )
    },
    // ....
};
 ```

#### Properties
- **children** (node) -
- **className** (string) - string (optional): additional CSS class name
- **multiline** (bool, default: false) - allow linebreaks and multilined content in table cells

### Table row

Provides table row element that can be enriched by sub elements.

 ```js
 import {TableRow} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // ...
    // template rendering
    // use it inside the correct Table elements
    render() {
        return (
            <TableRow
                multiline={false} // boolean true or false, allow linebreaks and multilined content in table cells (optional, default: false)
                className="my-own-class" // string, used for additional CSS class descriptions
            >
                <!-- content -->
            </TableRow>
        )
    },
    // ...
};
 ```

#### Properties
- **children** (node) -
- **className** (string, default: '') - optional CSS class
- **multiline** (bool, default: false) - allow linebreaks and multilined content in table cells

### Tabs

```js
import { Tabs } from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Tabs
                prefixTabNames={'ecc-view-resource-panel-tab'}
                activeTab={'historyview'}
                tabs={[{tabId: 'name', tabTitle: 'Name', tabContent: value}]}
                onTabClick={this.TabClick}
            />
        )
    },
    // ....
});

```

### TextField

```js
import { TextField } from '@eccenca/gui-elements';

const Page = React.createClass({
    // event is the original react onChange event
    // value is event.target.value (a shortcut for convienience)
    onChange({value, event, value}) {
        this.setState({
            [name]: value,
        })
    },
    // template rendering
    render() {
        return (
            <TextField
                onChange={this.onChange}
                name="textfield"
                value={this.state.textfield} // Should be a moment.js value for consistent handling
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

### Tooltip

You need to add wrapper to some elements, e.g. icons or checkboxes, to prevent unexepected behaviour. Use `<span>` for inline elements and `<div>` for block elments. If you have `tooltip` options, e.g. on icons, then use that parameter instead of the `<Tooltip/>` element.

```js
import {Tooltip} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Tooltip
                label="This is the tooltip text." // content used for tooltip, string or dom/react element
                position="bottom" // string: top|left|bottom|right, default: bottom
                large={false} // true or false, default: false
            >
                <p>I have a tooltip.</p>
            </Tooltip>
        )
    },
    // ....
});
```

### Version

```js
import { Version } from '@eccenca/gui-elements';

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
