# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog's Format](http://keepachangelog.com/).

## [Unreleased]
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