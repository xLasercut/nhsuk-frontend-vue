import { mount } from '@vue/test-utils'
import { NhsInput } from '../../src/components/form'

describe('form input tests', () => {
  it('test form input default props', () => {
    const wrapper = mount(NhsInput)

    expect(wrapper.find('input').attributes().type).toBe('text')
    expect(wrapper.find('input').attributes().class).toBe('nhsuk-input')
    expect(wrapper.find('input').attributes().id).toContain('NhsInput')
    expect(wrapper.attributes().class).toBe('nhsuk-form-group')
  })

  it('test form input width', () => {
    const widths = [2, 3, 4, 5, 10, 20]

    for (var width of widths) {
      const wrapper = mount(NhsInput, {
        propsData: {
          width: width
        }
      })

      expect(wrapper.find('input').attributes().class).toBe(`nhsuk-input nhsuk-input--width-${width}`)
    }
  })

  it('test form input props', () => {
    const wrapper = mount(NhsInput, {
      propsData: {
        id: 'input',
        name: 'name',
        disabled: true,
        maxlength: 10,
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('input').attributes().id).toBe('input')
    expect(wrapper.find('input').attributes().name).toBe('name')
    expect(wrapper.find('input').attributes().disabled).toBe('disabled')
    expect(wrapper.find('input').attributes().test).toBe('test')
    expect(wrapper.find('input').attributes().maxlength).toBe('10')
    expect(wrapper.find('input').attributes()['aria-describedby']).toBe('')
  })

  it('test form input slots', () => {
    const wrapper = mount(NhsInput, {
      slots: {
        label: '<label class="label" for="test">label</label>',
        error: '<span id="error">error</span>',
        hint: '<span id="hint">hint</span>'
      },
      propsData: {
        id: 'input'
      }
    })

    expect(wrapper.find('label').attributes().for).toBe('input')
    expect(wrapper.find('#input-error').text()).toBe('error')
    expect(wrapper.find('#input-hint').text()).toBe('hint')
    expect(wrapper.find('input').attributes()['aria-describedby']).toBe('input-error input-hint')
    expect(wrapper.find('input').attributes().class).toBe('nhsuk-input nhsuk-input--error')
    expect(wrapper.attributes().class).toBe('nhsuk-form-group nhsuk-form-group--error')
  })
})