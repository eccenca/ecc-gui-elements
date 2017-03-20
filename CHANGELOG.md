# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog's Format](http://keepachangelog.com/).

## [Unreleased]

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
