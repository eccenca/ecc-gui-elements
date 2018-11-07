# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog's Format](http://keepachangelog.com/).

## [Unreleased]

TODO: add at least one Added, Changed, Deprecated, Removed, Fixed or Security section

## [3.1.0] 2018-11-07

### Fix
- version

## [2.32.0] 2018-11-07

### Added
- `scrollTableOverflow` option for `<Table />`, this is now not enabled by default
- `preventCellOverflow` option for `<Table />`, this is now not enabled by default
- `showPageInput` option for `<Pagination />`, enables direct jump to page number
- `disabled` option for `<Pagination />`, allows disabling the pagination controls
- show number of results in `<Pagination />` and option to hide it

### Changed
- `<Pagination />` shows page offset by default now, can be changed by `showElementOffsetPagination` option

## [3.0.0] 2018-10-23

### Added
- add new GUI elements: `<Table/>`, `<TableHead/>`, `<TableBody/>`, `<TableRow/>`, `<TableCell/>`
- add `hideLabel` option to `<Checkbox/>` and `<Radio/>` elements, when true then labels are not visible but accessible

### Changed
- Pagination: left default alignement and smaller font sizes
- Data Table: styles now provided by new `<Table/>` element

### Removed
- remove support for `$color-primary-dark`, `$ecc-typo-display-3-font-size`, `$ecc-typo-display-2-font-size`, `$ecc-typo-display-1-font-size`, `$ecc-typo-headline-font-size`, `$ecc-typo-title-font-size`, `$ecc-typo-subhead-font-size` and remove the info about their deprecation

## [2.31.4] 2018-06-13

### Added
- possibility for `AutoCompleteBox` to directly pass user input to parent component with `handleValueChange`

## [2.31.3] 2018-04-20

### Fixed
- replace native array method for IE11 compatibility

## [2.31.2] 2018-04-16

### Fixed
- replace native array method for IE11 compatibility

## [2.31.1] 2018-03-19

### Changed
- use unsubscribe instead of dispose (breaking change in rx)

## [2.31.0] 2018-02-28

### Added
- Footer Component

## [2.30.0] 2018-02-07

### Added
- make option for <Card /> available to get rendered with reduced size, paddings, margins
- flex layout support for CardMenu that is part of CardTitle
- CardMenu layout for reduced Cards

### Changed
- small adjustment od CardMenu position (littlebit more right and top)

## [2.29.1] 2018-01-24

### Fixed
- Fonts can now be resolved correctly (still pointed `ecc-gui-elements`)
- Examples and README still pointed to `ecc-gui-elements`

## [2.29.0] 2018-01-24

### Changed
- Fixed registry to be `https://registry.npmjs.org/`
- Name to `@eccenca/gui-elements`

## [2.28.1] 2018-01-15

### Fixed
- use correct max height on scroll bars for FloatingActionList menus with more than six action items

## [2.28.0] 2018-01-10

### Added
- Support for badges on icons (`badge`)

### Changed
- Updated roboto
- Switched from code points to ligatures for icon font

### Fixed
- Disable false warnings, if deprecated `delete` Icon is used

### Removed
- removed eot and ttf versions of fonts

## [2.27.0] 2017-12-18

### Added
- `AutoCompleteBox` wrapper around `SelectBox`
- `name` property to `SelectBox`, which is also returned in the onChange event as a second parameter:
    ```
    <SelectBox
        name="selectBoxValue"
        value={this.state.selectBoxValue}
        onChange={(value, name) => this.setState({[name]: value})}
    >
    ```
- `name` property support to `Checkbox`, `RadioGroup`, `Switch`, `TextField` and `DateField`, which is also returned in the onChange event:
    ```
    <Checkbox
        name="checkbox"
        value={this.state.checkbox}
        onChange={({value, name}) => this.setState({[name]: value})}
    >
    ```

## [2.26.0] 2017-12-12

### Added
- provide class `.mdl-button-clearance` for buttons, see `README.md` for more info

### Fixed
- react-select version set to `v1.0.1`, waiting for [this PR](https://github.com/JedWatson/react-select/pull/2198) to land

## [2.25.2] 2017-12-06

### Fixed
- `<FloatingActionList/>`: remove active state before re-rendering with new options

## [2.25.1] 2017-12-04

### Fixed
- add more secifity to DateTime element styles

## [2.25.0] 2017-12-04

### Changed
- Set default time format to 24-hour format for date input

## [2.24.3] 2017-12-04

### Fixed
- adjust position of fixed <CardActions> regarding wrapping layout classes from applications
- increase specifity of DateTime element styles

## [2.24.2] 2017-11-30

### Fixed
- render `<SelectBox/>` options over other elements

## [2.24.1] 2017-11-29

### Fixed
- harden style of DateTime element to prevent problems when used in data tables

## [2.24.0] 2017-11-28

### Added
- provide <Tooltip /> element for separate tooltips, usable in combination with all other elements independently
- use tooltip element for buttons, icons and n/a elements

### Fixed
- use error icon for icons with unknown icon name

## [2.23.2] 2017-11-27

### Fixed
- calculation of current page in case of 0 results

## [2.23.1] 2017-11-23

### Fixed
- auto scroll always to top of element to prevent problems in cases when the element is higher than the viewport

## [2.23.0] 2017-11-23

### Added
- `DateTimeField` and `DateField` components

## [2.22.0] 2017-11-20

### Fixed
- use icon from `<FloatingActionList/>` on one item lists as fallback if the single action item has no icon configured

## [2.21.0] 2017-11-02

### Fixed
- fix the fallback tooltip for the delete/remove icon to "Remove."

### Added
- insert canonical icons and fallback tooltips for 'save', 'confirm', 'cancel', 'adjust' and 'settings'

## [2.20.1] 2017-10-16

### Fixed
- Remove reference to original material-design-lite

## [2.20.0] 2017-10-04

### Changed
- Migrate to new fork of mdl

## [2.19.0] 2017-09-06

### Added
- 'ScrollingMixin' mixin to scroll elements into the visible viewport of scrollable areas
- provide `<BreadcrumbList/>` and `<BreadcrumbItem/>` to create breadcrumb navigations

## [2.18.2] 2017-08-31
### Added
- `<ProgressButton />` event `progressTopic` can now additionally contain param `lastUpdate`.

## [2.18.1] 2017-08-29

### Removed
- Circular dependency on ecc-mixins

### Fixed
- How subscriptions in progress buttons are handled

## [2.18.0] 2017-08-29

### Added
- `<Chip/>` element support `href` option now, if given it is rendered as HTML link anchor
- `<ProgressButton />` element to show feedback of running backround processes to user in button
- `progress` and `progressTopic` for `<AffirmativeButton/>`, `<DismissiveButton/>` and `<DisruptiveButton/>` elements

## [2.17.1] 2017-08-22

### Fixed
- use correct inline imports

## [2.17.0] 2017-08-21

### Added
- `<Card />` element including sub elements to insert application card sections, see readme doc
- `<FloatingActionList />` element that provides simple FAB functionality, e.g. for cards

### Fixed
- size of large Floating Action Button (FAB) is now rendered corrently
- use MDL color syntax and revert prior fixes using double MDL files

## [2.16.2] 2017-08-10

### Fixed
- Remove gulp tasks from peer dependency

## [2.16.1] 2017-08-10

### Fixed
- reset margin of alerts to 1 REM (https://www.youtube.com/watch?v=xwtdhWltSIg)

## [2.16.0] 2017-08-10

## Changed
- Added patched versions of MDL libraries that are using real colors

### Fixed
- Resolve gui-elements to itself with the help of webpack aliases

## [2.15.3] 2017-08-08

### Added
- introduce `ecc` prefixed variables for global configuration stack of colors and sizes

### Fixed
- improve cursor position on focused `<SelectBox />` elements and narrow active select option

## [2.15.2] 2017-07-21
### Fixed
- `SelectBox` now pass `isOptionUnique` correctly

## [2.15.1] 2017-07-06
### Fixed
- documentation of `<Pagination />`

## [2.15.0] 2017-06-28

### Added
- add `<Alert/>` parameter to set icon used for handler button

### Changed
- update react-mdl and react-select to newest version
- Async Selects do not normalize input per default

### Fixed
- correct icon size and alignment in textfield label

## [2.14.0] 2017-06-23

### Added

- SelectBox can now be async

### Fixed
- optical adjustment of margin/padding for textarea textfields compared to single line textfields

## [2.13.0] 2017-06-20

### Added
- provide very simple `<NotAvailable />` element for configurable "not available" placeholder information

## [2.12.1] 2017-06-14
### Removed
- Dependencies which are unneeded after the vis removal

## [2.12.0] 2017-06-13

### Removed
- Timeline and vis dependency (Potentially breaking, no major change, as we migrated all components)

## [2.11.7] 2017-04-26

### Fixed
- prevent overflow of hovered menu items

## [2.11.6] 2017-04-24

### Fixed
- tooltips for no-access icons changed

## [2.11.5] 2017-04-12
### Fixed
- click on an already active Tab will no longer trigger rerender

## [2.11.4] 2017-03-29
### Fixed
- reduce icon size in chips to font size of parent element

## [2.11.3] 2017-03-28
### Fixed
- use separated chip scss stylesheet to include patches
- fix layout to use Chips on smaller spaces
- allow additional class names for `<ChipVisual/>` elements
- enable icons as content in `<ChipVisual/>` elements

## [2.11.2] 2017-03-24
### Fixed
- Only use vis css which is really needed

## [2.11.1] 2017-03-24
### Fixed
- made npm package ~3MB smaller by not including useless vis code
- remove faulty code from BaseDialog

## [2.11.0] 2017-03-24
### Added
- provide own `<Chip/>` and `<ChipVisual/>` element

## [2.10.0] 2017-03-21
### Added
- insert helper for justified usage of color definitions as strings and color types

## [2.9.1] 2017-03-21
### Fixed
- Unignore lib folder in npmignore

## [2.9.0] 2017-03-20

This release includes all changes included in `3.0.0`

### Changed
- `vis` dependency is managed as submodule again:
    - update to `vis@4.19.1`
    - update of `vis` license
    - removal of `vis` dependency from package.json

## [3.0.0] 2017-03-16 (deprecated)

This release has been deprecated and should not be used. Please use the a release `>= 2.9.0` to include the changes listed below

### Changed
- update to `material-design-lite@1.3.0`
    - with this update we use the official `material-design-lite` repo instead of an old fork
- update to `react-mdl@1.9.0`
- removed usage of eccenca clone of MDL, use JS directly from React-MDL
- use visjs Timeline via import from `package.json`
- restructure scss imports

### Added
- elements for `<Layout/>` and `<Content/>` containers

## [2.8.2] 2017-03-08
### Fixed
- revert to old Tabs workflow regarding to accidentally changes of behaviour with empty tabs content and non-avtive tabs

## [2.8.1] 2017-03-01
### Fixed
- Re-enable mixin side effect

## [2.8.0] 2017-02-24
### Fixed
- improve rendering of `ContextMenu`, prevent re-rendering cascade (replace react-mdl element)
- add prop `valign` with defauly `bottom` to `ContextMenu`

### Added
- `PerformanceMixin` provides default checks for shouldComponentUpdate() to prevent unnecessary renderings

## [2.7.0] 2017-02-13

### Added
- new elements for `<Radio/>` and `<RadioGroup/>`

## [2.6.2] 2017-02-07

### Fixed
- `<ContextMenu/>` with only one MenuItem does not break the application anymore

## [2.6.1] 2017-02-03

### Fixed
- use correct capitalization for fallback tooltips of icons and buttons

## [2.6.0] 2017-01-31

### Added
- new button elements: `<AffirmativeButton/>`, `<DismissiveButton/>`, `<DisruptiveButton/>`

## [2.5.0] 2017-01-24

### Fixed
- improve layout of multi select values to prevent box overflows

### Changed
- move remove button of multi select values to left side again

## [2.4.0] 2017-01-23

### Added
-   add config option to overwrite default icon of context menu element

## [2.3.1] 2017-01-11
### Fixed
-   Added missing licenses for `material-design-icons`, `roboto` and `vis`
-   Tabs: No Error is thrown anymore if onTabClick is undefined

## [2.3.0] 2017-01-09
### Added
-   classnames for `Pagination`, `ContextMenu` and `Dialog` buttons

## [2.2.0] 2016-12-01
### Changes
-   add stretch option (default: true) to TextField element
-   add multiline option (default: false) to TextField element

## [2.1.0] 2016-12-01
### Added
-   SelectBox now has the `optionsOnTop` property (boolean, default `false`). If set to `true`, the dropdown will open to the top
-   Pagination now has the `isTopPagination` property (boolean, default `false`). If set to `true`, the limit selector will open to the bottom

### Changed
-   SelectBox uses MDL floating label pattern

## [2.0.0] 2016-11-28
### Breaking
-   Removed `<Dialog>`. Please use `<ConfirmationDialog>` or `<BaseDialog>` instead:

    ```jsx
    //Converting old Dialog to ConfirmationDialog:
    <Dialog cancelButton={...} confirmButton={...}/>
    // =>
    <ConfirmationDialog cancelButton={...} confirmButton={...}/>

    //If you used Dialog with just one button, please use BaseDialog instead:
    <Dialog confirmButton={this.exampleButton}/>
    // =>
    <BaseDialog buttonRow={[this.exampleButton]}/>
    ```

-   Checkbox/Switch have been changed to a controlled input.

    Furthermore the onChange function has been changed:

    ```jsx
    //New Usage

    let isChecked = false;

    const handleChange(data) => {

        const {
            //contains the react synthetic event
            event,
            //contains the content of the value prop
            rawValue,
            // contains true or false
            value,
        } = data;

        isChecked = value;

    }

    <Checkbox
        onChange={handleChange}
        checked={isChecked}
        value="foo"
    />
    ```

-   Pagination has now a simpler onChange handler:

    ```jsx
    //before
    <Pagination
        handleNewLimit={(limit) => console.log(limit)}
        handleNewOffset={(offset) => console.log(offset)}
    />
    //after
    <Pagination
        onChange={({offset, limit}) => console.log(offset, limit)}
    />
    ```

### Changed
- Disabled buttons do not show their tooltip anymore
- `SelectBox` now support multi selection and new value creation

## [1.17.3] 2016-11-24
### Changed
- Reverted Changes to Confirmation Dialog, as a Confirmation Dialog should always have two buttons [per spec](https://material.google.com/components/dialogs.html#dialogs-confirmation-dialogs).

## [1.17.1] 2016-11-15
### Fixed
- Missing mdl icons are now shown again

### Changed
- bumped `ecc-uitest-helpers`

## [1.17.0] 2016-11-15
### Changed
- Merged `ecc-style-core@1.7.5` into this project, with complete history.
  You can find the `ecc-style-core` changelog at the end of this file.

## [1.16.4] 2016-11-07
### Fixed
- readd `Tabs` className

## [1.16.3] 2016-11-07
### Fixed
- issue with not shown `Tabs` content caused by className troubles

## [1.16.2] 2016-11-02
### Fixed
- add mdl class for tab panels to tab content section

## [1.16.1] 2016-10-28
### Fixed
- Fixed incorrect context menu style.

## [1.16.0] 2016-10-24
### Fixed
- `Pagination`: 'Last Page' button now returns correct offset if number of total results is a multiple of limit

## [1.15.0] 2016-10-18
### Changed
- Updated to `lodash@4`, `react-select@1.0.0-rc.2` and `classnames@^2.2.5`
- `Switch` and `Checkbox` now use `uniqueId` Higher Order Component

### Added
- `TextField` component
- `uniqueId` Higher Order Component

## [1.14.4] 2016-10-06
### Fixed
- `ContextMenu`: using more than one ContextMenu element per side without setting `target` results in the same id for every element
- `Pagination`: if no data exists offset was 0 instead of 1

## [1.14.3] 2016-09-27
### Fixed
- `Button`: forwarded info about to prevented tooltip to icon if used

## [1.14.2] 2016-09-27
### Fixed
- `ContextMenu`: fixed bug that it did not work properly with only one menu item

## [1.14.1] 2016-09-26
### Fixed
- `Pagination`: 'Last Page' button returned wrong offset

## [1.14.0] 2016-09-21
### Added
- `ContextMenu` element

## [1.13.0] 2016-09-12
### Added
- `Pagination` element

## [1.12.0] 2016-09-05
### Changed
-   TimeLine: Instead of including the `vis` library completely,
    we just build the relevant parts directly from a submodule.

    If you want or need to update the `vis` dependency, please forward the submodule in `lib/vis` and run `npm run prepublish`.

## [1.11.2] 2016-08-30
### Fixed
- SelectBox: fixed type handling for strings and numbers
- SelectBox: correctly export react-select styles

## [1.11.1] 2016-08-28
### Changed
- Tabs onTabClick propType is now optional
- removed checks for changed content from Tabs regarding to some irregular behavior. Content should now check props changes by its own

## [1.11.0] 2016-08-18
### Added
- SelectBox, which is a wrapper around react-select

### Fixed
- pushing wrong properties into Buttons

## [1.10.1] 2016-06-30
### Fixed
- switch button order of confirmationDialog due to mdl guideline

## [1.10.0] 2016-06-17
### Added
- alternative dialog with customizable action row

### Changed
- renamed Dialog into ConfirmationDialog

### Deprecated
- Dialog should be renamed to ConfirmationDialog

### Fixed
- removed class from react tabs to prevent null errors

## [v1.9.0] 2016-05-23
### Added
- Add Version to provide standard output of product version.

## [v1.8.0] 2016-05-17
### Changed
- Upgrade React development version to v15.
- Upgrade devvtools.

## ecc-style-core history

`ecc-style-core` was merged into this project. You can find the history here:

### [ecc-style-core@1.7.5] 2016-09-27

#### Fixed
- Improve visibility of tooltips by darker background and light border

### [ecc-style-core@1.7.4] 2016-09-21

#### Fixed
- (Workaround) do not show tooltips for disabled buttons, @see https://openproject.brox.de/work_packages/11918

### [ecc-style-core@1.7.3] 2016-09-13

#### Fixed
- Disabled animation of tooltips, as it causes problems in Chrome 53

### [ecc-style-core@1.7.2] 2016-09-12

#### Fixed
- Fix Page Size Selection in Pagination in Chrome

### [ecc-style-core@1.7.1] 2016-09-12

#### Fixed
- Tooltips are not blurry anymore in Chrome 53

### [ecc-style-core@1.7.0] 2016-09-08

#### Added
- basic styles for Pagination element

### [ecc-style-core@1.6.0] 2016-06-27

#### Added
- Added `ecc-dotfiles` dev dependency

#### Removed
- `mdl-stepper` dependency due to license problems. Was not used anyway
