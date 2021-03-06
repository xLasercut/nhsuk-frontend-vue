import { mount } from '@vue/test-utils'
import NhsButton from '../../src/components/button'

describe('button tests', () => {
  it('test button color', () => {
    const colors = {
      primary: 'nhsuk-button',
      secondary: 'nhsuk-button nhsuk-button--secondary',
      reverse: 'nhsuk-button nhsuk-button--reverse'
    }

    for (var color in colors) {
      const wrapper = mount(NhsButton, {
        propsData: {
          color: color
        }
      })

      expect(wrapper.classes().join(' ')).toBe(colors[color])
    }
  })

  it('test button props', () => {
    const wrapper = mount(NhsButton, {
      propsData: {
        name: 'test-button',
        disabled: true,
        element: 'a',
        test: 'test'
      }
    })

    expect(wrapper.attributes().name).toBe('test-button')
    expect(wrapper.attributes().disabled).toBe('disabled')
    expect(wrapper.contains('a')).toBe(true)
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test button link', () => {
    const wrapper = mount(NhsButton, {
      propsData: {
        href: '/test'
      }
    })

    expect(wrapper.contains('a')).toBe(true)
  })

  it('test button slots', () => {
    const wrapper = mount(NhsButton, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('button').text()).toBe('test')
  })

  it('test button click', () => {
    const wrapper = mount(NhsButton)
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted().click.length).toBe(1)
  })
})