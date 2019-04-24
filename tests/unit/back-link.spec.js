import { mount } from '@vue/test-utils'
import NhsBackLink from '../../src/components/back-link'

describe('back link tests', () => {
  it('test back link props', () => {
    const wrapper = mount(NhsBackLink, {
      propsData: {
        href: '/test',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').attributes().class).toBe('nhsuk-back-link__link')
    expect(wrapper.attributes().test).toBe('test')
  })
})