# NHS.UK frontend vue Changelog

## 5.0.0 - 30th Apr 2022

- Updated frontend library version to [6.1.0](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#610---12-january-2022)

:boom: **Breaking changes**

**Vue version change**
- Library rewritten in typescript and Vue 3 composition api. Will no longer support Vue 2
- Add typescript support and web-types support

**Nav A-Z**
- Font size and type change

**List Panel**
- Removed "back to top" functions of list panel

**Form**
- All form components now use inject, provide system
  - All component methods are provided by inject
- Checkboxes and Radios component conditional flag now requires boolean


## 4.1.0 - 14th Oct 2021

- Updated frontend library version to [5.2.0](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#520---22-september-2021)

## 4.0.0 - 27th Apr 2021

- Updated frontend library version to [5.0.0](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#500---16-march-2021)

:boom: **Breaking changes**
- Removed header search autocomplete
- Removed Footer with list columns variant

:new: **New features**
- Add `inputmode` and `spellcheck` options to the text input

## 3.0.0 - 23rd Nov 2020

- Updated frontend library version to [4.0.0](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#400---26-october-2020)

:boom: **Breaking changes**
- Table header now require an array of dictionaries: [docs](https://xlasercut.github.io/nhsuk-frontend-vue/#/information/table)
- Removed promo component
- Removed panel component

:new: **New features**
- Added card component. Please use this component instead of promo and panel components: [docs](https://xlasercut.github.io/nhsuk-frontend-vue/#/information/card)
- Added tag component. [docs](https://xlasercut.github.io/nhsuk-frontend-vue/#/information/tag)

## 2.2.0 - 12th Jun 2020

- Updated frontend library version to [3.1.0](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#310---24-april-2020)

## 2.1.2 - 10th Apr 2020

- Updated frontend library version to [3.0.4](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#304---24-march-2020)

## 2.1.1 - 18th Feb 2020

- Updated frontend library version to [3.0.3](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#303---17-february-2020)

## 2.1.0 - 16th Nov 2019

:boom: **Breaking changes**
- Reverted header transactional service to pre 2.0.0

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
