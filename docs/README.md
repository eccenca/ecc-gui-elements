# Low-Level GUI elements (@eccenca/gui-elements)

Collection of shared GUI elements and mixins.

## Mixins

- `MaterialMixin`: A mixin which forces material design lite components to rerender if the React Component gets updated.
- `PerformanceMixin`: A mixin that provides default functionality for shouldComponentUpdate() to prevent unnecessary renderings.
- `ScrollingMixin`: A mixin that provides methods to scroll mounted React components into the viewport.

### PerformanceMixin

The performance mixin provides a default process to test if a component need to be updated before it is rendered. It may be used to improve performance by preventeing unnecessary re-renderings of child components that did not changed.

Include mixin into your widget component:

```js
import {PerformanceMixin} from '@eccenca/gui-elements';
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

### ScrollingMixin

The scrolling mixin provides methods to scroll a mounted React element or component into the visible viewport of a scrollable area:

* `scrollIntoView()`: use this method within a component to scroll it into the visible viewport
* `ScrollingMixin.scrollElementIntoView(ReactOrDomElement)`: use this method from outside an element to scroll it into the visible viewport

```js
import {ScrollingMixin} from '@eccenca/gui-elements';
const Widget = React.createClass({
    mixins: [ScrollingMixin],
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
```

It is important that the component height can be calculated correctly, `scrollIntoView()` should be used after all contents are loaded.

Use another method from the mixin to scroll other elements into the viewport.
It's important to use references to active DOM elements or mounted React components, e.g. by using the React ref pattern.

```js
// use it from outside of the component that needs to be scrolled into the visible viewport
import {Card, Button, ScrollingMixin} from '@eccenca/gui-elements';
const Widget = React.createClass({
    handleScroll() {
        const options = {
            // animationTime: 500, // (optional) integer, time in milliseconds
            // topOffset: 0, // (optional) integer, pixels to offset top alignment
            // callbackFinished: function(result) {}, // (optional) function, result parameter is currently 'cancelled' or 'completed'
        }
        ScrollingMixin.scrollElementIntoView(
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

### undefined

#### Properties
- **children** (node, *required*) -
- **className** (string) -
- **handlerDismiss** (func) -
- **labelDismiss** (string) -
- **iconDismiss** (string) -
- **type** (string) -
- **border** (bool) -
- **vertSpacing** (bool) -

### undefined

#### Properties
- **children** (node, *required*) -

### undefined

#### Properties
- **children** (node, *required*) -

### undefined

#### Properties
- **children** (node, *required*) -

### undefined

#### Properties
- **children** (node, *required*) -

### AutoCompleteBox

#### Properties
- **handleValueChange** (func) - pass Textfield user input to parent component (e.g. to update options)
- **className** (string) - Insert a custom className to element

### undefined

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

### undefined

Read the [GUI spec about button usage](https://confluence.brox.de/display/ECCGMBH/GUI+Specifications##GUISpecifications-Buttons).

```js
import {Button} from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Button>
                Flat button
            </Button>

            // use the button parameters according to MDL-API, @see https://getmdl.io/components/index.html##buttons-section
            <Button
                raised
                accent
                colored
                ripple
                disabled
            >
                Button label
            </Button>

            // you can apply all other button properties on icon buttons, too (e.g. affirmative, accent, ripple, ...)
            <Button
                iconName="more_vert"
                tooltip="This is a Test!"
                fabSize="mini"
            />
        )
    },
    // ....
});
```

#### Properties
- **children** (node) -
- **className** (string) - string (optional): additional CSS class name
- **disabled** (bool) - boolean (default: false): button is disabled and cannot get used to trigger an action
- **fabSize** (string) - string 'mini|large' (optional): use fabSize only if it is a Material Design floating action button (FAB)
- **iconName** (string) - string (optional): icon name if it is an Material Design icon button

    We defined some canonical names for icons and their meanings:

    - 'edit': edit data
    - 'remove': remove data
    - 'arrow_nextpage': go to next page
    - 'arrow_prevpage': go to previous page
    - 'arrow_lastpage': go to last page
    - 'arrow_firstpage': go to first page
    - 'arrow_dropdown': open dropdown select
    - 'expand_more': expand GUI element to show more details
    - 'expand_less': reduce GUI element to show less details
    - 'menu_more': open context menu
    - 'filter': filter data
    - 'sort': sort data
    - 'hide': hide (or close/remove) GUI elements
    - 'access_forbidden': no access to read and write data

    For other symbols and icon names @see https://material.io/icons/
- **ripple** (bool) - boolean (default: false): activate ripple effect on button
- **tooltip** (node|bool) - React node or boolean (optional): tooltip text, some icons have fallback tooltips, set it to false if you need to prevent them
- **affirmative** (bool) -
- **dismissive** (bool) -
- **disruptive** (bool) -

### undefined

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

### undefined

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

### undefined

`<ProgressButton/>` is a special version of the `<Button/>` element that can be used to visualize a running process.
It is shown as a raised disabled button but this behaviour can be overwritten, using the `raised` and `disabled` paramters from the `<Button/>` element.

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
                progress={50}
                progressTopic={rxmq.channel('yourchannel').subject('progressNumber')}
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

You can use `progress` and `progressTopic` options directly on `<AffirmativeButton/>`, `<DismissiveButton/>` and `<DisruptiveButton/>` elements.

#### Properties
- **progress** (number) - integer (default: 0): progress number 0..100, if not set or 0 then an infinite progress bar is used
- **progressTopic** (object) - message queue subject (optional): channel subject that are used to update information about progress,
    if given that the button element listens to it for update objects that include `progressNumber` property with a value between 0 and 100
- **tooltip** (string) - string (optional): tooltip for progress bar
    if a progress number is known (via option or message queue) then the tooltip is extenden by a colon, the value and a percent char
- **lastUpdate** (string) - string (optional): text info that shows information about the last known update on the process

### undefined

#### Properties
- **className** (string) -
- **shadow** (number, default: 1) -
- **stretch** (bool, default: true) -
- **fixedActions** (bool, default: false) -
- **reducedSize** (bool, default: false) -

### undefined

#### Properties
- **border** (bool, default: true) -
- **fixed** (bool, default: false) -

### undefined

#### Properties
- **className** (string) -
- **border** (bool, default: true) -
- **documentLevel** (string) -

### undefined

#### Properties
- **actions** (array, *required*) -
- **className** (string) -
- **fabSize** (string, default: 'large') -
- **fixed** (bool, default: false) -
- **iconName** (string, default: 'add') -

### Checkbox

#### Properties
- **checked** (bool, *required*) -
- **onChange** (func, *required*) -

### undefined

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

### undefined

This Component creates a date and time input field based on DateField.

#### Properties
- **timeFormat** (, default: 'HH:mm') -
- **dateFormat** (, default: 'DD-MM-YYYY') -

### undefined

This Component creates a customizable dialog.

#### Properties
- **active** (bool, *required*) - Define if dialog is displayed.
- **className** (string) - Custom dialog classname.
- **modal** (bool) - Defines dialog as modal.
- **size** (string) - Size of dialog.
- **buttonRow** (, *required*) - Contain buttons for action row.
- **title** (node) - Title of dialog.
- **titleCancelButton** (func) - Add cancel button to title.

### undefined

This Component creates a confirmation dialog based on BaseDialog.

#### Properties
- **active** (bool, *required*) -
- **className** (string) -
- **modal** (bool) -
- **size** (string) -
- **cancelButton** (element, *required*) -
- **confirmButton** (element, *required*) -
- **title** (node) -

### Footer

#### Properties
- **company** (string, *required*) -
- **version** (string, *required*) -
- **companyUrl** (string, *required*) -
- **workspace** (string) -

### undefined

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

### undefined

#### Properties
- **className** (string) -
- **description** (string) -
- **inline** (bool) -
- **label** (string) -

### undefined

#### Properties

### undefined

This component provides a pagination for switching through lists of results

#### Properties
- **offset** (number, *required*) - contains actual start value which is shown
- **limit** (number, *required*) - contains number of max shown elements per page
- **totalResults** (number, *required*) - contains total number of results
- **onChange** (func, *required*) - contains method which is called if offset have to change by user
- **offsetAsPage** (bool, default: false) - if true provides site information as "pages" instead of "numbers of elements"
Note: if offsetAsPage=true and offset is not a multiple from limit
the page output gets wierd for the last page
- **isTopPagination** (bool) - define position of page change dropdown/dropup
- **newLimitText** (string) - text displayed next to limit changer selectbox
- **limitRange** (array, default: [5, 10, 25, 50, 100, 200]) - possible page sizes

### undefined

#### Properties
- **appearGlobal** (bool, default: false) -
- **appearLocal** (bool, default: false) -
- **className** (string) -

### Radio

#### Properties

### RadioGroup

#### Properties

### undefined

#### Properties
- **appearGlobal** (bool, default: true) -
- **appearInline** (bool, default: false) -
- **appearLocal** (bool, default: false) -
- **className** (string) -

### undefined

#### Properties
- **prefixTabNames** (string, default: 'tabBar') -
- **activeTab** (string) -
- **tabs** (array) -
- **onTabClick** (func) -

### Switch

#### Properties
- **checked** (bool, *required*) -
- **onChange** (func, *required*) -

### undefined

#### Properties
- **version** (string, *required*) -

## Channels

Currently we do not provide public channels by the gui elements.

