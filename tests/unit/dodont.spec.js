import { mount } from '@vue/test-utils'
import NhsDodont from '../../src/components/dodont'

describe('dodont tests', () => {
  it('test dodont default props', () => {
    const wrapper = mount(NhsDodont, {
      propsData: {
        title: 'title',
        items: []
      }
    })

    expect(wrapper.find('ul').attributes().class).toBe('nhsuk-list nhsuk-list--tick')
  })

  it('test dodont type', () => {
    const types = ['tick', 'cross']

    for (var type of types) {
      const wrapper = mount(NhsDodont, {
        propsData: {
          type: type,
          items: [],
          title: 'title'
        }
      })

      expect(wrapper.find('ul').attributes().class).toBe(`nhsuk-list nhsuk-list--${type}`)
    }
  })

  it('test dodont props', () => {
    const wrapper = mount(NhsDodont, {
      propsData: {
        title: 'test-title',
        attributes: {
          test: 'test'
        },
        headingLevel: 1,
        items: []
      }
    })

    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.find('.nhsuk-do-dont-list__label').text()).toBe('test-title')
    expect(wrapper.attributes().test).toBe('test')
  })
})