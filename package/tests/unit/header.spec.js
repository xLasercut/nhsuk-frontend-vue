import { mount } from '@vue/test-utils'
import {
  NhsHeader,
  NhsHeaderItem
} from '../../src/components/header'

describe('header tests', () => {
  it('test header item props', () => {
    const wrapper = mount(NhsHeaderItem, {
      propsData: {
        href: '/test',
        test: 'test'
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('.nhsuk-header__navigation-link').attributes().test).toBe('test')
  })

  it('test header item slots', () => {
    const wrapper = mount(NhsHeaderItem, {
      propsData: {
        href: '/test'
      },
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('a').text()).toBe('test')
  })

  it('test header default props', () => {
    const wrapper = mount(NhsHeader)

    expect(wrapper.contains('.nhsuk-header__menu')).toBe(false)
    expect(wrapper.contains('.nhsuk-header__search')).toBe(false)
    expect(wrapper.contains('.nhsuk-header__transactional-service-name')).toBe(false)
    expect(wrapper.find('.nhsuk-header__link').attributes().href).toBe('/')
    expect(wrapper.find('.nhsuk-header__link').attributes()['aria-label']).toBe('NHS homepage')
    expect(wrapper.attributes().class).toBe('nhsuk-header')
  })

  it('test header props', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        showNav: true,
        showSearch: true,
        homeHref: '/test',
        ariaLabel: 'test-label',
        whiteNav: true,
        whiteHeader: true,
        searchAction: 'search-action',
        searchInputName: 'search-input-name'
      }
    })

    expect(wrapper.contains('.nhsuk-header__menu')).toBe(true)
    expect(wrapper.contains('.nhsuk-header__search')).toBe(true)
    expect(wrapper.contains('.nhsuk-header__transactional-service-name')).toBe(false)
    expect(wrapper.find('.nhsuk-header__link').attributes().href).toBe('/test')
    expect(wrapper.find('.nhsuk-header__link').attributes()['aria-label']).toBe('test-label')
    expect(wrapper.contains('.nhsuk-header__service-name')).toBe(false)
    expect(wrapper.contains('.nhsuk-header--white')).toBe(true)
    expect(wrapper.contains('.nhsuk-header--white-nav')).toBe(true)
    expect(wrapper.find('.nhsuk-header__search-form').attributes().action).toBe('search-action')
    expect(wrapper.find('.nhsuk-search__input').attributes().name).toBe('search-input-name')
  })

  it('test header transactional long', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        transactional: true,
        service: {
          name: 'aaaaaaaaaaaaaaaaaaaaaaaa',
          href: '/test'
        }
      }
    })

    expect(wrapper.contains('.nhsuk-header__transactional-service-name')).toBe(true)
    expect(wrapper.find('.nhsuk-header__transactional-service-name--link').attributes().href).toBe('/test')
    expect(wrapper.find('.nhsuk-header__transactional-service-name--link').text()).toBe('aaaaaaaaaaaaaaaaaaaaaaaa')
    expect(wrapper.contains('.nhsuk-header__transactional-service-name--long')).toBe(true)
  })

  it('test header service', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        service: {
          name: 'test'
        }
      }
    })

    expect(wrapper.find('.nhsuk-header__service-name').text()).toBe('test')
    expect(wrapper.attributes().class).toBe('nhsuk-header')
  })

  it('test header organisation custom logo', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        organisation: {
          logoURL: '/test',
          name: 'test-name',
          split: 'test-name-split',
          descriptor: 'test-descriptor'
        }
      }
    })

    expect(wrapper.contains('.nhsuk-organisation-name')).toBe(false)
    expect(wrapper.contains('.nhsuk-organisation-name-split')).toBe(false)
    expect(wrapper.contains('.nhsuk-organisation-descriptor')).toBe(false)
    expect(wrapper.find('.nhsuk-org-logo').attributes().src).toBe('/test')
  })

  it('test header organisation standard logo', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        organisation: {
          name: 'test-name',
          split: 'test-name-split',
          descriptor: 'test-descriptor'
        }
      }
    })

    expect(wrapper.find('.nhsuk-organisation-name').text()).toBe('test-name\n    \n      test-name-split')
    expect(wrapper.find('.nhsuk-organisation-name-split').text()).toBe('test-name-split')
    expect(wrapper.find('.nhsuk-organisation-descriptor').text()).toBe('test-descriptor')
    expect(wrapper.contains('.nhsuk-org-logo')).toBe(false)
  })
})