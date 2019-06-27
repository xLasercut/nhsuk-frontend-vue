import { mount } from '@vue/test-utils'
import NhsErrorSummary from '../../src/components/error-summary'

describe('error summary tests', () => {
  it('test error summary props', () => {
    const wrapper = mount(NhsErrorSummary, {
      propsData: {
        title: 'title',
        test: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-error-summary__title').text()).toBe('title')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test error summary slots', () => {
    const wrapper = mount(NhsErrorSummary, {
      propsData: {
        title: 'title'
      },
      slots: {
        title: 'test-title',
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-error-summary__title').text()).toBe('test-title')
    expect(wrapper.find('.nhsuk-error-summary__body').text()).toBe('test')
  })
})