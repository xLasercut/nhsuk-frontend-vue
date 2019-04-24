import { mount } from '@vue/test-utils'
import {
	NhsBreadcrumb,
	NhsBreadcrumbItem,
	NhsBreadcrumbBacklink
} from '../../src/components/breadcrumb'

describe('breadcrumb tests', () => {
  it('test breadcrumb props', () => {
    const wrapper = mount(NhsBreadcrumb, {
      propsData: {
        ariaLabel: 'test-label',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.attributes()['aria-label']).toBe('test-label')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test breadcrumb item props', () => {
    const wrapper = mount(NhsBreadcrumbItem, {
      propsData: {
        href: '/test',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').attributes().class).toBe('nhsuk-breadcrumb__link')
    expect(wrapper.find('a').attributes().test).toBe('test')
  })

  it('test breadcrumb item no href', () => {
    const wrapper = mount(NhsBreadcrumbItem)

    expect(wrapper.contains('a')).toBe(false)
    expect(wrapper.contains('span')).toBe(true)
    expect(wrapper.find('span').attributes().class).toBe('nhsuk-breadcrumb__link')
  })

  it('test breadcrumb back link props', () => {
    const wrapper = mount(NhsBreadcrumbBacklink, {
      propsData: {
        href: '/test',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').attributes().class).toBe('nhsuk-breadcrumb__backlink')
    expect(wrapper.find('a').attributes().test).toBe('test')
  })
})