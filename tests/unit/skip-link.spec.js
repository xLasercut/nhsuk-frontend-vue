import { mount } from '@vue/test-utils'
import NhsSkipLink from '../../src/components/skip-link'

describe('skip link tests', () => {
  it('test skip link slots', () => {
    const wrapper = mount(NhsSkipLink, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-skip-link').text()).toBe('test')
    expect(wrapper.find('.nhsuk-skip-link').attributes().href).toBe('#maincontent')
  })
})