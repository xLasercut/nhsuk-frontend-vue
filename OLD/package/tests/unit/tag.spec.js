import { mount } from '@vue/test-utils'
import { NhsTag } from '../../src/components/tag'

describe('tag tests', () => {
  it('test tag default props', () => {
    const wrapper = mount(NhsTag, {
      propsData: {}
    })

    expect(wrapper.contains('.nhsuk-tag')).toBe(true)
    expect(wrapper.contains('.nhsuk-tag--white')).toBe(false)
  })

  it('test tag props', () => {
    const colors = ['white', 'grey', 'green', 'aqua-green', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow']

    for (let color of colors) {
      const wrapper = mount(NhsTag, {
        propsData: {
          color: color
        }
      })

      expect(wrapper.contains('.nhsuk-tag')).toBe(true)
      expect(wrapper.contains(`.nhsuk-tag--${color}`)).toBe(true)
    }
  })
})
