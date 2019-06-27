import { mount } from '@vue/test-utils'
import { NhsExpander, NhsExpanderGroup } from '../../src/components/expander'

describe('expander tests', () => {
  it('test expander props', () => {
    const wrapper = mount(NhsExpander, {
      propsData: {
        text: 'test-text',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('.nhsuk-details__summary-text').text()).toBe('test-text')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test expander group slots', () => {
    const wrapper = mount(NhsExpanderGroup, {
      slots: {
        default: '<span id="test">test</span>'
      }
    })

    expect(wrapper.find('#test').text()).toBe('test')
  })
})