import { mount } from '@vue/test-utils'
import { NhsLabel } from '../../src/components/typography'

describe('label tests', () => {
  it('test label default props', () => {
    const wrapper = mount(NhsLabel)

    expect(wrapper.contains('.nhsuk-label--xl')).toBe(false)
  })

  it('test label props', () => {
    const wrapper = mount(NhsLabel, {
      propsData: {
        pageHeading: true,
        test: 'test',
        size: 'xl'
      }
    })

    expect(wrapper.contains('.nhsuk-label-wrapper')).toBe(true)
    expect(wrapper.find('.nhsuk-label--xl').attributes().test).toBe('test')
  })

  it('test label slots', () => {
    const wrapper = mount(NhsLabel, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-label').text()).toBe('test')
  })
})