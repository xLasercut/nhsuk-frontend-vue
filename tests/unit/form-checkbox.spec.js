import { mount } from '@vue/test-utils'
import { NhsCheckbox } from '../../src/components/form'

describe('form checkbox tests', () => {
  it('test checkbox default props', () => {
    const wrapper = mount(NhsCheckbox)

    expect(wrapper.find('input').attributes().id).toContain('NhsCheckbox')
  })

  it('test checkbox props', () => {
    const wrapper = mount(NhsCheckbox, {
      propsData: {
        checkboxValue: 'value',
        name: 'name',
        id: 'checkbox',
        attributes: {
          test: 'test'
        },
        disabled: true
      }
    })

    expect(wrapper.find('input').attributes().id).toBe('checkbox')
    expect(wrapper.find('input').attributes().name).toBe('name')
    expect(wrapper.find('input').attributes().test).toBe('test')
    expect(wrapper.find('input').attributes().value).toBe('value')
    expect(wrapper.find('input').attributes().disabled).toBe('disabled')
  })

  it('test checkbox slots', () => {
    const wrapper = mount(NhsCheckbox, {
      propsData: {
        id: 'checkbox'
      },
      slots: {
        label: '<label for="test">label</label>',
        hint: '<span id="test" add-class="test">hint</span>'
      }
    })

    expect(wrapper.find('label').attributes().for).toBe('checkbox')
    expect(wrapper.find('#checkbox-hint').text()).toBe('hint')
    expect(wrapper.find('span').attributes()['add-class']).toBe('nhsuk-checkboxes__hint')
    expect(wrapper.find('input').attributes()['aria-describedby']).toBe('checkbox-hint')
  })
})