import { mount } from '@vue/test-utils'
import NhsEmergencyAlert from '../../src/components/emergency-alert'

describe('emergency alert tests', () => {
  it('test emergency alert default props', () => {
    const wrapper = mount(NhsEmergencyAlert, {
      propsData: {
        title: 'title'
      }
    })

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('Alert:')
  })

  it('test emergency alert props', () => {
    const wrapper = mount(NhsEmergencyAlert, {
      propsData: {
        title: 'title',
        hiddenText: 'hidden-text',
        lastUpdated: 'last-updated',
        test: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('hidden-text')
    expect(wrapper.find('.nhsuk-global-alert__updated').text()).toBe('last-updated')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test emergency alert slots', () => {
    const wrapper = mount(NhsEmergencyAlert, {
      propsData: {
        title: 'title'
      },
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-global-alert__message').text()).toBe('test')
  })
})