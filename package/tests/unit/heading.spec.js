import { mount } from '@vue/test-utils'
import { NhsHeading } from '../../src/components/typography'


describe('heading tests', () => {
  it('test heading default props', () => {
    const wrapper = mount(NhsHeading)

    expect(wrapper.contains('h2')).toBe(true)
    expect(wrapper.attributes().class).toBe('nhsuk-heading-l')
  })

  it('test heading props', () => {
    const sizes = {
      xl: 1,
      l: 2,
      m: 3,
      s: 4,
      xs: 5
    }

    for (var size in sizes) {
      const wrapper = mount(NhsHeading, {
        propsData: {
          test: 'test',
          size: size
        }
      })

      expect(wrapper.attributes().test).toBe('test')
      expect(wrapper.attributes().class).toBe(`nhsuk-heading-${size}`)
      expect(wrapper.contains(`h${sizes[size]}`)).toBe(true)
    }
  })

  it('test heading slots', () => {
    const wrapper = mount(NhsHeading, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-heading-l').text()).toBe('test')
  })
})