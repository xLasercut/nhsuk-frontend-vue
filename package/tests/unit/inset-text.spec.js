import { mount } from '@vue/test-utils'
import { NhsInsetText } from '../../src/components/typography'

describe('inset text tests', () => {
  it('test inset text default props', () => {
    const wrapper = mount(NhsInsetText)

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('Information:')
  })

  it('test inset text props', () => {
    const wrapper = mount(NhsInsetText, {
      propsData: {
        hiddenText: 'test-hidden',
        test: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('test-hidden')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test inset text slots', () => {
    const wrapper = mount(NhsInsetText, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-inset-text').text()).toBe('Information:  test')
  })
})