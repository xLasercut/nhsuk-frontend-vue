import { mount } from '@vue/test-utils'
import NhsActionLink from '../../src/components/action-link'

describe('action link tests', () => {
  it('test action link props', () => {
    const wrapper = mount(NhsActionLink, {
      propsData: {
        href: '/test',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').attributes().class).toBe('nhsuk-action-link__link')
    expect(wrapper.attributes().test).toBe('test')
  })
})