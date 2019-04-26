import { mount } from '@vue/test-utils'
import { NhsRadio } from '../../src/components/form'

describe('form radio tests', () => {
  it('test radio default props', () => {
    const wrapper = mount(NhsRadio, {
      propsData: {
        radioValue: 'value'
      }
    })

    expect(wrapper.find('input').attributes().id).toContain('NhsRadio')
  })

  it('test radio props', () => {
    const wrapper = mount(NhsRadio, {
      propsData: {
        radioValue: 'value',
        name: 'name',
        id: 'radio',
        attributes: {
          test: 'test'
        },
        disabled: true
      }
    })

    expect(wrapper.find('input').attributes().id).toBe('radio')
    expect(wrapper.find('input').attributes().name).toBe('name')
    expect(wrapper.find('input').attributes().test).toBe('test')
    expect(wrapper.find('input').attributes().value).toBe('value')
    expect(wrapper.find('input').attributes().disabled).toBe('disabled')
  })

  it('test radio slots', () => {
    const wrapper = mount(NhsRadio, {
      propsData: {
        id: 'radio',
        radioValue: 'value'
      },
      slots: {
        label: '<label for="test">label</label>',
        hint: '<span id="test" add-class="test">hint</span>'
      }
    })

    expect(wrapper.find('label').attributes().for).toBe('radio')
    expect(wrapper.find('#radio-hint').text()).toBe('hint')
    expect(wrapper.find('span').attributes()['add-class']).toBe('nhsuk-radios__hint')
    expect(wrapper.find('input').attributes()['aria-describedby']).toBe('radio-hint')
  })
})