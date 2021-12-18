import { mount } from '@vue/test-utils'
import NhsDetails from '../../src/components/details'

describe('details tests', () => {
  it('test details props', () => {
    const wrapper = mount(NhsDetails, {
      propsData: {
        text: 'test-text',
        test: 'test'
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.find('.nhsuk-details__summary-text').text()).toBe('test-text')
  })

  it('test details slots', () => {
    const wrapper = mount(NhsDetails, {
      propsData: {
        text: 'test-text'
      },
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-details__text').text()).toBe('test')
  })
})