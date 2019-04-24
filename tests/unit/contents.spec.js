import { mount } from '@vue/test-utils'
import {
  NhsContents,
  NhsContentsItem
} from '../../src/components/contents'


describe('contents tests', () => {
  it('test contents default props', () => {
    const wrapper = mount(NhsContents)

    expect(wrapper.attributes()['aria-label']).toBe('Pages in this guide')
    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('Contents')
  })

  it('test contents props', () => {
    const wrapper = mount(NhsContents, {
      propsData: {
        ariaLabel: 'test-label',
        hiddenText: 'test-text',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.attributes()['aria-label']).toBe('test-label')
    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('test-text')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test contents item props', () => {
    const wrapper = mount(NhsContentsItem, {
      propsData: {
        href: '/test',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').attributes().test).toBe('test')
  })

  it('test contents item no href', () => {
    const wrapper = mount(NhsContentsItem, {
      propsData: {
        ariaCurrent: 'test-current'
      }
    })

    expect(wrapper.contains('a')).toBe(false)
    expect(wrapper.contains('span')).toBe(true)
    expect(wrapper.attributes()['aria-current']).toBe('test-current')
  })
})