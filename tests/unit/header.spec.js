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
        attributes: {
          test: 'test'
        }
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
    const wrapper = mount(NhsHeader, {
      propsData: {
        transactionalService: {
          name: 'test'
        },
        showNav: true,
        showSearch: true
      }
    })

    expect(wrapper.contains('.nhsuk-header__menu')).toBe(true)
    expect(wrapper.contains('.nhsuk-header__search')).toBe(true)
    expect(wrapper.contains('.nhsuk-header__transactional-service-name')).toBe(false)
    expect(wrapper.find('.nhsuk-header__link').attributes().href).toBe('/')
    expect(wrapper.find('.nhsuk-header__link').attributes()['aria-label']).toBe('NHS homepage')
    expect(wrapper.attributes().class).toBe('nhsuk-header nhsuk-header--transactional')
  })

  it('test header props', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        transactionalService: {
          name: 'test'
        },
        showNav: false,
        showSearch: false,
        homeHref: '/test',
        ariaLabel: 'test-label'
      }
    })

    expect(wrapper.contains('.nhsuk-header__menu')).toBe(false)
    expect(wrapper.contains('.nhsuk-header__search')).toBe(false)
    expect(wrapper.contains('.nhsuk-header__transactional-service-name')).toBe(true)
    expect(wrapper.find('.nhsuk-header__link').attributes().href).toBe('/test')
    expect(wrapper.find('.nhsuk-header__link').attributes()['aria-label']).toBe('test-label')
    expect(wrapper.find('.nhsuk-header__transactional-service-name--link').attributes().href).toBe('/')
    expect(wrapper.contains('.nhsuk-header__transactional-service-name--long')).toBe(false)
    expect(wrapper.contains('.nhsuk-header__service-name')).toBe(false)
  })

  it('test header transactional', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        transactionalService: {
          name: 'test',
          href: '/test',
          longName: true
        },
        showNav: false,
        showSearch: false
      }
    })

    expect(wrapper.contains('.nhsuk-header__transactional-service-name')).toBe(true)
    expect(wrapper.find('.nhsuk-header__transactional-service-name--link').attributes().href).toBe('/test')
    expect(wrapper.find('.nhsuk-header__transactional-service-name--link').text()).toBe('test')
    expect(wrapper.contains('.nhsuk-header__transactional-service-name--long')).toBe(true)
  })

  it('test header service', () => {
    const wrapper = mount(NhsHeader, {
      propsData: {
        service: {
          name: 'test'
        },
        showNav: false,
        showSearch: false
      }
    })

    expect(wrapper.find('.nhsuk-header__service-name').text()).toBe('test')
    expect(wrapper.attributes().class).toBe('nhsuk-header')
  })
})