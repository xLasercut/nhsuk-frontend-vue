import { mount } from '@vue/test-utils'
import NhsExpander from '../../src/components/expander'

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
})