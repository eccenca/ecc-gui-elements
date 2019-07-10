# Low-Level GUI elements (@eccenca/gui-elements)

Collection of shared GUI elements and hocs.

## HOC

- `ScrollingHOC`: A higher-order component that provides methods to scroll mounted React components into the viewport.

### ScrollingHOC

The scrolling HOC provides methods to scroll a mounted React element or component into the visible viewport of a scrollable area:

* `scrollIntoView()`: use this method within a component to scroll it into the visible viewport
* `ScrollingHOC.scrollElementIntoView(ReactOrDomElement)`: use this method from outside an element to scroll it into the visible viewport

```js
import {ScrollingHOC} from '@eccenca/gui-elements';
const Widget = React.createClass({
    componentDidMount() {
        const options = {
            animationTime: 500, // (optional) integer, time in milliseconds
            topOffset: 0, // (optional) integer, pixels to offset top alignment
            callbackFinished: function(result) {}, // (optional) function, result parameter is currently 'cancelled' or 'completed',
            scrollX: true, // (optional) boolean, whether overflowX should be checked to decide whether an element is scrollable,
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
        ScrollingHOC.scrollElementIntoView(
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

- [Material Design Lite](https://github.com/google/material-design-lite/)
- [Material Design icons](http://google.github.io/material-design-icons/)
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

### AffirmativeButton

Use the `<AffirmativeButton />` element for all buttons that trigger affirmative actions, e.g. confirming "Save data."
For more information read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications##GUISpecifications-Buttons).
It is possible to combine it with `<Button />` parameters like `disabled`, `raised`, `iconName` and `ripple`.

```js
import {AffirmativeButton} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <AffirmativeButton>
                Affirmative action
            </AffirmativeButton>
        )
    },
    // ....
});
```

#### Properties

### Alert

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

#### Properties
- **children** (node, *required*) - 
- **className** (string) - string (optional): additional CSS class name
- **handlerDismiss** (func) - function (optional): handler that provides dismiss functionality for the message, this it not handled by the
    element itself
- **labelDismiss** (string) - string (optional): tooltip text that is shown on dismiss button, default is 'Hide'
- **iconDismiss** (string) - string (optional): icon that is used for dismiss button, default icon is `hide`
- **type** (string) - string (optional): type of the alert message, one of `info`, `success`, `warning` and `error`, otherwise the
    alert is not typed and appeares without special color scheme
- **border** (bool) - boolean (optional): adds a small border to the alert message, default it appears without border
- **vertSpacing** (bool) - boolean (optional): adds top and bottom margins to the alert message, default it appears without additional
    whitespace around it
- **reducedHeight** (bool) - boolean (optional): forces alert message to be not larger than 50% of the viewport and adds scrollbars on
    overflows, otherwise it takes as much vertical space as content needs

### AutoCompleteBox

#### Properties
- **handleValueChange** (func) - pass Textfield user input to parent component (e.g. to update options)
- **className** (string) - Insert a custom className to element
- **inputRestriction** (func) - Allow to manipulate inserted user input string before using it
- **showLabel** (bool, default: true) - Define if the label is shown in option's dropdown
- **showValue** (bool, default: true) - Define if the value is shown in option's dropdown
- **showDescription** (bool, default: true) - Define if the description is shown in option's dropdown

### BaseDialog

This Component creates a customizable dialog.

#### Properties
- **active** (bool, *required*) - Define if dialog is displayed.
- **className** (string) - Custom dialog classname.
- **modal** (bool) - Defines dialog as modal.
- **size** (string) - Size of dialog.
- **buttonRow** (, *required*) - Contain buttons for action row.
- **title** (node) - Title of dialog.
- **titleCancelButton** (func) - Add cancel button to title.

### BreadcrumbItem

#### Properties
- **className** (string) - additional CSS class name

### BreadcrumbList

The are two simple React elements to create breadcrumb navigation.

 ```js
 import {
    BreadcrumbList,
    BreadcrumbItem,
} from '@eccenca/gui-elements';

 class Page extends React.Component {
    // template rendering
    render() {
        return (
            <BreadcrumbList
                className={'my-own-class'}
            >
                <BreadcrumbItem
                    onClick={function(){}} // (optional) function, breadcrumb is rendered as HTML button element
                >
                    Button
                </BreadcrumbItem>
                <BreadcrumbItem
                    href="##" // (optional) string, breadcrumb is rendered as HTML link anchor
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
};
 ```

#### Properties
- **className** (string) - additional CSS class name

### Card

#### Properties
- **className** (string) - 
- **shadow** (number, default: 1) - 
- **stretch** (bool, default: true) - 
- **fixedActions** (bool, default: false) - 
- **reducedSize** (bool, default: false) - 

### CardActions

#### Properties
- **border** (bool, default: true) - 
- **fixed** (bool, default: false) - 

### CardTitle

#### Properties
- **className** (string) - 
- **border** (bool, default: true) - 
- **documentLevel** (string) - 

### Checkbox input

```js
import { Checkbox } from '@eccenca/gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Checkbox
                checked={true} // Boolean (required), describes the checked state of Checkbox, default: false
                className="my-checkbox-class" // String (optional), additional CSS class names
                disabled={true} // Boolean (optional), describes if Checkbox is disabled, default: false
                hideLabel{true} // Boolean (optional), describes if Checkbox label is not visible, default: false
                label={"My checkbox label"} // String (optional), label that describes the input checkbox for the user
                onChange={this.myCheckboxHandlerMethod} // function (required), update handler for changes on Checkbox
                ripple={true} // Boolean (optional), MDL ripple effect is used on Checkbox, default: false
            />
            <Checkbox>
                <div className="my-checkbox-label"><p>Use child elements instead of a label property.</p></div>
            </Checkbox>
        )
    },
    // ....
});
```

#### Properties
- **checked** (bool, *required*) - describes the checked state of Checkbox
- **className** (string, default: null) - additional CSS class names
- **disabled** (bool, default: false) - describes if Checkbox is disabled
- **hideLabel** (bool, default: false) - describes if Checkbox label is not visible
- **label** (string|element, default: null) - label that describes the input checkbox for the user
- **onChange** (func, *required*) - update handler for changes on Checkbox
- **ripple** (bool, default: false) - MDL ripple effect is used on Checkbox

### Chip

#### Properties
- **className** (string) - additional CSS class name
- **onClick** (func) - Click handler
- **onClose** (func) - Close handler
- **href** (string) - Chip is rendered as HTML link anchor

### ChipVisual

#### Properties
- **className** (string, default: '') - additional CSS class name
- **image** (string, default: '') - Image prop
- **label** (string, default: '') - label name prop
- **bgColor** (string, default: '') - additional css color prop
- **textColor** (string, default: '') - additional css text color prop
- **children** (object) - Chip children prop

### ConfirmationDialog

This Component creates a confirmation dialog based on BaseDialog.

#### Properties
- **active** (bool, *required*) - 
- **className** (string) - 
- **modal** (bool) - 
- **size** (string) - 
- **cancelButton** (element, *required*) - 
- **confirmButton** (element, *required*) - 
- **title** (node) - 

### DateField

#### Properties
- **label** (string) - 
- **value** (string|object) - 
- **onChange** (func, *required*) - 
- **timeFormat** (string|bool, default: false) - 
- **dateFormat** (string|bool, default: 'YYYY-MM-DD') - 
- **placeholder** (string) - 
- **disabled** (bool) - 
- **inputClassName** (string) - 
- **input** (bool) - 
- **closeOnSelect** (bool) - 

### DateTimefield

This Component creates a date and time input field based on DateField.

#### Properties
- **timeFormat** (, default: 'HH:mm') - 
- **dateFormat** (, default: 'DD-MM-YYYY') - 

### DismissiveButton

Use the `<DismissiveButton />` element for all buttons that trigger dismissive actions, e.g. cancelling edit forms.
For more information read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications##GUISpecifications-Buttons).
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

#### Properties

### DisruptiveButton

Use the `<DisruptiveButton />` element for all buttons that trigger disruptive actions, e.g. confirming "Remove data."
For more information read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications##GUISpecifications-Buttons).
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

#### Properties

### Error

#### Properties
- **children** (node, *required*) - 

### FloatingActionList

The `<FloatingActionList />` element provides functionality for a quick adaption of the floating action button (FAB) pattern from Material Design.
It can be configured with a single action handler or a list of them. Then it opens a list of provided actions when activated, with a single action it will trigger the configured event handler immediately on default.
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

#### Properties
- **actions** (array, *required*) - array (required): list of action objects, each can have `icon`, `label`, `handler` and `disabled` properties
- **className** (string) - string (optional): additional CSS class name
- **fabSize** (string, default: 'large') - string (optional): `large` (default) or `mini` FAB size
- **fixed** (bool, default: false) - boolean (optional): `true` sets FAB always visible sticky on botton when card is only partly shown, default: `false`
- **iconName** (string, default: 'add') - string (optional): name of icon what is used for the FAB before the list of actions is used, default: 'add', or if only one action is given and `allowSingleItemList` is false then the action icon is used.
- **allowSingleItemList** (bool, default: false) - boolean (optional): opens a menu after click on FAB even if there is onle one action in the list, otherwise the FAB directly triggers that action, default: false
- **openToBottom** (func, default: function() { return false; }) - boolean (optional): action menu list is shown at the bottom of the FAB, default: `false`

### Footer

```js
import {Footer} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            // all properties are optional, if one is given then a additional
            // footer line is generated on top of the other children elements
            <Footer
                version="vX.Y.Z"
                company="Company name"
                companyUrl="https://company.example.com/"
                workspace="Workspace title"
                userName="User account id"
            >
                <!--
                    any children elements
                    it is recommended to use MDL sub elements for footer here
                    @see https://getmdl.io/components/index.html##layout-section/footer
                -->
            </Footer>
        )
    },
    // ....
});
```

#### Properties
- **company** (string, default: '') - string (optional): company name
- **companyUrl** (string, default: '') - string (optional): URL of company website
- **version** (string, default: '') - string (optional): version identifier
- **workspace** (string, default: '') - string (optional): idientifier of current workspace
- **userName** (string, default: '') - string (optional): identifier of currently logged in user

### Icon

import {Icon} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Icon
                name="cloud_download" // icon name, @see https://material.io/icons/
                tooltip="cloudy clouds" // tooltip, some icons have fallback tooltips, set it to false if you need to prevent them
                badge="5" // Badge, as shown in https://getmdl.io/components/index.html##badges-section
            />
        )
    },
    // ....
});
```

#### Properties
- **className** (string) - 
- **name** (string, *required*) - 
- **tooltip** (node|bool) - 

### Info

#### Properties
- **children** (node, *required*) - 

### NotAvailable

Use that element as very simple "not available" placeholder information, e.g. in empty table cells or statistic
overviews. It currently only supports short label strings and long descriptions used as tooltip addition.

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

#### Properties
- **className** (string, default: '') - string (optional): additional CSS class name
- **description** (string, default: '') - string (optional): long description that is only shown on hover, default: empty string when label is given,
    otherwise "not available"
- **inline** (bool, default: false) - boolean (default: false): show it as inline text element, default: false
- **label** (string, default: 'n/a') - string (optional): short label that is shown, default: 'n/a'

### Pagination

This component provides a pagination for switching through lists of results

#### Properties
- **offset** (number, *required*) - contains actual start value which is shown
- **limit** (number, *required*) - contains number of max shown elements per page
- **totalResults** (number, default: undefined) - contains total number of results. The value must be positive or undefined.
- **onChange** (func, *required*) - contains method which is called if offset have to change by user
- **showElementOffsetPagination** (bool, default: false) - show element offset numbers as pagination information
- **isTopPagination** (bool, default: false) - define position of page change dropdown/dropup
- **newLimitText** (string, default: '') - text displayed next to limit changer selectbox
- **limitRange** (array, default: [5, 10, 25, 50, 100, 200]) - possible page sizes
- **disabled** (bool, default: false) - if true all buttons and inputs fields are disabled and visibility is decreased
- **showPageInput** (bool, default: false) - the current page number can be edited to jump directly there, works only with
`showElementOffsetPagination===false`
- **hideTotalResults** (bool, default: false) - hide info about number of total results
- **pendingTotal** (bool, default: false) - show a spinner if true and totalResults is not set
- **className** (string, default: '') - additional class names

### ProgressButton

`<ProgressButton/>` is a special version of the `<Button/>` element that can be used to visualize a running process.
It is shown as a raised disabled button but this behaviour can be overwritten, using the `raised`
 and `disabled` paramters from the `<Button/>` element.

```js
import {ProgressButton} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <ProgressButton
                progress={50}
                lastUpdate={'August 31st 2017, 9:48:24 am.'}
                tooltip={'running'}
                raised={false}
            >
                Working!
            </ProgressButton>
        )
    },
    // ....
});
```

You can use `progress` option directly on `<AffirmativeButton/>`, `<DismissiveButton/>`
 and `<DisruptiveButton/>` elements.

#### Properties
- **progress** (number) - integer (default: 0): progress number 0..100, if not set or 0 then an infinite progress bar is used
- **tooltip** (string) - message queue subject (optional): channel subject that are used to update information about progress,
    if given that the button element listens to it for update objects that include `progressNumber`
    property with a value between 0 and 100
- **lastUpdate** (string) - string (optional): text info that shows information about the last known update on the process

### Progressbar

#### Properties
- **appearGlobal** (bool, default: false) - 
- **appearLocal** (bool, default: false) - 
- **className** (string) - 

### Radio select

```js
import { Radio } from '@eccenca/gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Radio
                checked={true} // Boolean (required), describes the checked state of Radio, default: false
                className="my-radioselect-class" // String (optional), additional CSS class names
                disabled={true} // Boolean (optional), describes if Radio is disabled, default: false
                hideLabel{true} // Boolean (optional), describes if Radio label is not visible, default: false
                name="optionname" // String (required), name of input that Radio select is related to
                label={"My radio label"} // String (optional), label that describes the Radio select for the user
                onChange={this.myRadioSelectHandlerMethod} // function (required), update handler for changes on Radio select element
                ripple={true} // Boolean (optional), MDL ripple effect is used on Radio element, default: false
                value={1} // String or Number (required), value for input when Radio is selected
            />
            <Radio>
                <div className="my-radioselect-label"><p>Use child elements instead of a label property.</p></div>
            </Radio>
        )
    },
    // ....
});
```

#### Properties
- **checked** (bool, *required*) - describes the selected state of Radio
- **className** (string, default: null) - additional CSS class names
- **disabled** (bool, default: false) - describes if Radio is disabled
- **hideLabel** (bool, default: false) - describes if Radio label is not visible
- **name** (string, *required*) - name of input that Radio select is related to
- **label** (string|element, default: null) - label that describes the Radio select for the user
- **onChange** (func, default: undefined) - update handler for changes on Radio select element
- **ripple** (bool, default: false) - MDL ripple effect is used on Radio element
- **value** (string|number, *required*) - value for input when Radio is selected

### RadioGroup

#### Properties

### Spinner

#### Properties
- **appearGlobal** (bool, default: true) - 
- **appearInline** (bool, default: false) - 
- **appearLocal** (bool, default: false) - 
- **className** (string) - 

### Success

#### Properties
- **children** (node, *required*) - 

### Switch

#### Properties
- **checked** (bool, *required*) - 
- **onChange** (func, *required*) - 

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
                scrollTableOverflow={true} // boolean true or false, add scrollbars to table when it overflows available space (optional, default: false)
                preventCellOverflow={true} // boolean true or false, prevent overflowing content in table cells (optional, default: false)
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
- **scrollTableOverflow** (bool, default: false) - add scrollbars to table when it overflows available space
- **preventCellOverflow** (bool, default: false) - prevent overflowing content in table cells

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
                preventCellOverflow={true} // boolean true or false, prevent overflowing content in table cells (optional, default: false)
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
- **preventCellOverflow** (bool, default: false) - prevent overflowing content in table cells

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
                preventCellOverflow={true} // boolean true or false, prevent overflowing content in table cells (optional, default: false)
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
- **preventCellOverflow** (bool, default: false) - prevent overflowing content in table cells

### Tabs

#### Properties
- **prefixTabNames** (string, default: 'tabBar') - 
- **activeTab** (string) - 
- **tabs** (array) - 
- **onTabClick** (func) - 

### Version

#### Properties
- **version** (string, *required*) - 

### Warning

#### Properties
- **children** (node, *required*) - 

## Channels

Currently we do not provide public channels by the gui elements.

