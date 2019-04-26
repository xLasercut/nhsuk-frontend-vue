import { mount } from '@vue/test-utils'
import { NhsFormItemgroup } from '../../src/components/form'

describe('form itemgroup tests', () => {
  it('test form itemgroup default props', () => {
    const wrapper = mount(NhsFormItemgroup)

    expect(wrapper.attributes().class).toBe('nhsuk-form-group')
  })

  it('test form itemgroup slots', () => {
    const wrapper = mount(NhsFormItemgroup, {
      slots: {
        error: '<span>error</span>'
      }
    })

    expect(wrapper.attributes().class).toBe('nhsuk-form-group nhsuk-form-group--error')
  })
})