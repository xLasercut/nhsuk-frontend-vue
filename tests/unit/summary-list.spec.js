import { mount } from '@vue/test-utils'
import { NhsSummaryList, NhsSummaryListItem } from '../../src/components/summary-list'

describe('summary list test', () => {
  it('test summary list default props', () => {
    const wrapper = mount(NhsSummaryList, {
      propsData: {
        data: []
      }
    })

    expect(wrapper.find('.nhsuk-summary-list--no-border').exists()).toBe(false)
  })

  it('test summary list props', () => {
    const wrapper = mount(NhsSummaryList, {
      propsData: {
        data: [],
        border: false
      }
    })

    expect(wrapper.find('.nhsuk-summary-list--no-border').exists()).toBe(true)
  })

  it('test summary list slots', () => {
    const wrapper = mount(NhsSummaryList, {
      propsData: {
        data: [
          {
            type: 'test2'
          }
        ]
      },
      slots: {
        item: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-summary-list__row').text()).toBe('test')
  })

  it('test summary list item props', () => {
    const types = {
      'key': 'dt',
      'value': 'dd',
      'actions': 'dd'
    }

    for (var type in types) {
      const wrapper = mount(NhsSummaryListItem, {
        propsData: {
          type: type
        }
      })

      expect(wrapper.find(`.nhsuk-summary-list__${type}`).exists()).toBe(true)
      var html = `<${types[type]} class="nhsuk-summary-list__${type}"></${types[type]}>`
      expect(wrapper.find(`.nhsuk-summary-list__${type}`).html()).toBe(html)
    }
  })

  it('test summary list item slots', () => {
    const wrapper = mount(NhsSummaryListItem, {
      propsData: {
        type: 'key'
      },
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-summary-list__key').text()).toBe('test')
  })
})