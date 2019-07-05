import { mount } from '@vue/test-utils'
import NhsWarningCallout from '../../src/components/warning-callout'

describe('warning callout tests', () => {
  it('test warning callout default props', () => {
    const wrapper = mount(NhsWarningCallout, {
      propsData: {
        heading: 'heading'
      }
    })

    expect(wrapper.contains('h3')).toBe(true)
  })

  it('test warning callout props', () => {
    const wrapper = mount(NhsWarningCallout, {
      propsData: {
        heading: 'heading',
        headingLevel: 1,
        test: 'test'
      }
    })

    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.find('.nhsuk-warning-callout__label').text()).toBe('heading')
  })

  it('test warning callout slots', () => {
    const wrapper = mount(NhsWarningCallout, {
      propsData:{
        heading: 'heading'
      },
      slots: {
        default: '<p>test</p>',
        heading: 'heading override'
      }
    })

    expect(wrapper.find('h3').text()).toBe('heading override')
    expect(wrapper.find('p').text()).toBe('test')
  })
})