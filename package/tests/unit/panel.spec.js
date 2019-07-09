import { mount } from '@vue/test-utils'
import { NhsPanel, NhsPanelGroup } from '../../src/components/panel'

describe('panel tests', () => {
  it('test panel default props', () => {
    const wrapper = mount(NhsPanel, {
      propsData: {
        label: 'label'
      }
    })

    expect(wrapper.contains('h3')).toBe(true)
    expect(wrapper.find('.nhsuk-panel--grey').exists()).toBe(false)
  })

  it('test panel props', () => {
    const wrapper = mount(NhsPanel, {
      propsData: {
        label: 'label',
        headingLevel: 1,
        color: 'grey',
        test: 'test'
      }
    })

    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.find('.nhsuk-panel--grey').exists()).toBe(true)
    expect(wrapper.find('.nhsuk-panel-with-label__label').text()).toBe('label')
    expect(wrapper.find('.nhsuk-panel-with-label').attributes().test).toBe('test')
  })

  it('test panel slots', () => {
    const wrapper = mount(NhsPanel, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-panel-with-label').exists()).toBe(false)
    expect(wrapper.find('.nhsuk-panel').text()).toBe('test')
  })

  it('test panel group', () => {
    const wrapper = mount(NhsPanelGroup, {
      propsData: {
        column: '2'
      },
      slots: {
        default: '<a>test</a>'
      }
    })

    expect(wrapper.find('.nhsuk-grid-column-one-half').exists()).toBe(true)
    expect(wrapper.find('.nhsuk-panel-group__item').text()).toBe('test')
  })
})