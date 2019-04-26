import { mount } from '@vue/test-utils'
import { NhsSelect } from '../../src/components/form'

describe('form select tests', () => {
  it('test form select default props', () => {
    const wrapper = mount(NhsSelect)

    expect(wrapper.find('select').attributes().class).toBe('nhsuk-select')
    expect(wrapper.find('select').attributes().id).toContain('NhsSelect')
    expect(wrapper.attributes().class).toBe('nhsuk-form-group')
  })

  it('test form select props', () => {
    const wrapper = mount(NhsSelect, {
      propsData: {
        id: 'select',
        name: 'name',
        disabled: true,
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('select').attributes().id).toBe('select')
    expect(wrapper.find('select').attributes().name).toBe('name')
    expect(wrapper.find('select').attributes().disabled).toBe('disabled')
    expect(wrapper.find('select').attributes().test).toBe('test')
    expect(wrapper.find('select').attributes()['aria-describedby']).toBe('')
  })

  it('test form select slots', () => {
    const wrapper = mount(NhsSelect, {
      slots: {
        label: '<label for="test">label</label>',
        error: '<span id="error">error</span>',
        hint: '<span id="hint">hint</span>'
      },
      propsData: {
        id: 'select'
      }
    })

    expect(wrapper.find('label').attributes().for).toBe('select')
    expect(wrapper.find('#select-error').text()).toBe('error')
    expect(wrapper.find('#select-hint').text()).toBe('hint')
    expect(wrapper.find('select').attributes()['aria-describedby']).toBe('select-error select-hint')
    expect(wrapper.find('select').attributes().class).toBe('nhsuk-select nhsuk-select--error')
    expect(wrapper.attributes().class).toBe('nhsuk-form-group nhsuk-form-group--error')
  })
})