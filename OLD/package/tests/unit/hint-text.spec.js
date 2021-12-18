import { mount } from '@vue/test-utils'
import { NhsHintText } from '../../src/components/typography'

describe('hint text tests', () => {
  it('test hint text props', () => {
    const wrapper = mount(NhsHintText, {
      propsData: {
        id: 'test-id',
        test: 'test'
      }
    })

    expect(wrapper.attributes().id).toBe('test-id')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test hint text slots', () => {
    const wrapper = mount(NhsHintText, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-hint').text()).toBe('test')
  })
})