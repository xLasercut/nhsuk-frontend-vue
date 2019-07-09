import { mount } from '@vue/test-utils'
import NhsActionLink from '../../src/components/action-link'

describe('action link tests', () => {
  it('test action link props', () => {
    const wrapper = mount(NhsActionLink, {
      propsData: {
        href: '/test',
        test: 'test'
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').attributes().class).toBe('nhsuk-action-link__link')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test action link slots', () => {
    const wrapper = mount(NhsActionLink, {
      propsData: {
        href: '/test'
      },
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('a').text()).toBe('test')
  })
})