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
        test: 'test'
      }
    })

    expect(wrapper.attributes()['aria-label']).toBe('test-label')
    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('test-text')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test contents slots', () => {
    const wrapper = mount(NhsContents, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-contents-list__list').text()).toBe('test')
  })

  it('test contents item props', () => {
    const wrapper = mount(NhsContentsItem, {
      propsData: {
        href: '/test',
        test: 'test'
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

  it('test contents item slots', () => {
    const wrapper = mount(NhsContentsItem, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-contents-list__item').text()).toBe('test')
  })
})