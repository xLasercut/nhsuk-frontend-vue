import { mount } from '@vue/test-utils'
import NhsActionLink from '../../src/components/action-link'

describe('Action link tests', () => {
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
    expect(wrapper.attributes().test).toBe('test')
  })
})