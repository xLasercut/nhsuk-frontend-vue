import { mount } from '@vue/test-utils'
import NhsDetails from '../../src/components/details'

describe('details tests', () => {
  it('test details props', () => {
    const wrapper = mount(NhsDetails, {
      propsData: {
        text: 'test-text',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.find('.nhsuk-details__summary-text').text()).toBe('test-text')
  })
})