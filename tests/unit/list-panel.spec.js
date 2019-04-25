import { mount } from '@vue/test-utils'
import {
  NhsListPanel,
  NhsListPanelItem
} from '../../src/components/list-panel'

describe('list panel tests', () => {
  it('test list panel default props', () => {
    const wrapper = mount(NhsListPanel)

    expect(wrapper.contains('.nhsuk-list-panel__label')).toBe(false)
    expect(wrapper.contains('.nhsuk-list-panel--results-items__no-results')).toBe(false)
    expect(wrapper.contains('.nhsuk-back-to-top')).toBe(false)
    expect(wrapper.contains('.nhsuk-list-panel__box--with-label')).toBe(false)
    expect(wrapper.contains('.nhsuk-list-panel__box')).toBe(true)
  })

  it('test list panel props', () => {
    const wrapper = mount(NhsListPanel, {
      propsData: {
        label: 'label',
        id: 'heading-id',
        headingLevel: 1,
        backToTop: true,
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.find('h1').attributes().id).toBe('heading-id')
    expect(wrapper.find('.nhsuk-list-panel__label').text()).toBe('label')
    expect(wrapper.contains('.nhsuk-back-to-top')).toBe(true)
    expect(wrapper.contains('.nhsuk-list-panel__box--with-label')).toBe(true)
  })

  it('test list panel disabled', () => {
    const wrapper = mount(NhsListPanel, {
      propsData: {
        disabled: true,
        message: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-list-panel--results-items__no-results').text()).toBe('test')
  })

  it('test list panel back to top click', () => {
    const wrapper = mount(NhsListPanel, {
      propsData: {
        backToTop: true
      }
    })

    wrapper.find('a').trigger('click')
    expect(wrapper.emitted()['back-to-top'].length).toBe(1)
  })

  it('test list panel item props', () => {
    const wrapper = mount(NhsListPanelItem, {
      propsData: {
        href: '/test',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('.nhsuk-list-panel__link').attributes().test).toBe('test')
  })
})