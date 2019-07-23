# NHS.UK frontend vue Changelog

## 1.1.1 - Unreleased

- Updated frontend library version to 2.3.0

## 1.1.0 - 9th July 2019

:new: **New features**
- Added `search-config` prop to Header (allows for custom header search)
- Added `delay` prop to Feeback Banner

## 1.0.1 - 6th July 2019

:wrench: **Fixes**

- Fixed form components rendering html attributes when attributes are empty

## 1.0.0 - 5th July 2019

First Beta version of the component library. All older versions are now deprecated.

:boom: **Breaking changes**
- All form components are rewritten to include label/hint/error components
- `table` component now require `table-item` components in slots
- `summary-list` component now require `summary-list-item` components in slots


:new: **New features**
- Ported all components from frontend library
- Ported backstop test from frontend library