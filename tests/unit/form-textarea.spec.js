import { mount } from '@vue/test-utils'
import { NhsTextarea } from '../../src/components/form'

describe('form textarea tests', () => {
  it('test form textarea default props', () => {
    const wrapper = mount(NhsTextarea)

    expect(wrapper.find('textarea').attributes().class).toBe('nhsuk-textarea')
    expect(wrapper.find('textarea').attributes().id).toContain('NhsTextarea')
    expect(wrapper.find('textarea').attributes().rows).toBe('5')
    expect(wrapper.attributes().class).toBe('nhsuk-form-group')
  })

  it('test form textarea props', () => {
    const wrapper = mount(NhsTextarea, {
      propsData: {
        id: 'textarea',
        name: 'name',
        disabled: true,
        rows: 10,
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('textarea').attributes().id).toBe('textarea')
    expect(wrapper.find('textarea').attributes().name).toBe('name')
    expect(wrapper.find('textarea').attributes().disabled).toBe('disabled')
    expect(wrapper.find('textarea').attributes().test).toBe('test')
    expect(wrapper.find('textarea').attributes()['aria-describedby']).toBe('')
    expect(wrapper.find('textarea').attributes().rows).toBe('10')
  })

  it('test form textarea slots', () => {
    const wrapper = mount(NhsTextarea, {
      slots: {
        label: '<label for="test">label</label>',
        error: '<span id="error">error</span>',
        hint: '<span id="hint">hint</span>'
      },
      propsData: {
        id: 'textarea'
      }
    })

    expect(wrapper.find('label').attributes().for).toBe('textarea')
    expect(wrapper.find('#textarea-error').text()).toBe('error')
    expect(wrapper.find('#textarea-hint').text()).toBe('hint')
    expect(wrapper.find('textarea').attributes()['aria-describedby']).toBe('textarea-error textarea-hint')
    expect(wrapper.find('textarea').attributes().class).toBe('nhsuk-textarea nhsuk-textarea--error')
    expect(wrapper.attributes().class).toBe('nhsuk-form-group nhsuk-form-group--error')
  })
})