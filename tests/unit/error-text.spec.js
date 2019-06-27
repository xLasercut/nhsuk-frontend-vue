import { mount } from '@vue/test-utils'
import { NhsErrorText } from '../../src/components/typography'

describe('error text tests', () => {
  it('test error text default props', () => {
    const wrapper = mount(NhsErrorText)

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('Error:')
  })

  it('test error text props', () => {
    const wrapper = mount(NhsErrorText, {
      propsData: {
        hiddenText: 'test-error',
        id: 'test-id',
        test: 'test'
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('test-error')
    expect(wrapper.attributes().id).toBe('test-id')
  })

  it('test error text slots', () => {
    const wrapper = mount(NhsErrorText, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-error-message').text()).toBe('Error:  test')
  })
})