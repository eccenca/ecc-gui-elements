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

<!-- <<Component_Head>> -->

## Channels

Currently we do not provide public channels by the gui elements.

<!-- <<Component_Channels>> -->
