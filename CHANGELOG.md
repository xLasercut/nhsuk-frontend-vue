# NHS.UK frontend vue Changelog

## 2.0.0 - 11th Nov 2019

- Updated frontend library version to [3.0.2](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#302---11-november-2019)

:boom: **Breaking changes**
- Deprecated NhsFeedback and NhsEmergencyAlert components
- Header component transactional service is now controlled by `transactional-service` prop instead of `service`

:new: **New features**
- Header component now accepts organisation logo/details (see [docs](https://xlasercut.github.io/nhsuk-frontend-vue/#/layout/header) for more details)


## 1.1.4 - 4th Nov 2019

- Updated frontend library version to 2.3.1

## 1.1.3 - 30th Sept 2019

:new: **New features**
- Added reset error methods to form components

:wrench: **Fixes**
- Fixed form component keydown and keyup events

## 1.1.2 - 27th Sept 2019

- Updated frontend library version to 2.3.1

:new: **New features**
- Added keydown and keyup events to input and textarea components
- Added focus method to select, input and textarea components

:wrench: **Fixes**
- Fixed form validate methods returning the opposite results

## 1.1.1 - 23rd July 2019

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