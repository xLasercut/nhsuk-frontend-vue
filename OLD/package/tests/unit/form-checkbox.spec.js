import { mount } from '@vue/test-utils'
import { NhsCheckboxes } from '../../src/components/form'

describe('form checkbox tests', () => {
  it('test individual checkbox props', () => {
    const wrapper = mount(NhsCheckboxes, {
      propsData: {
        id: 'checkbox',
        items: [
          {
            label: 'disabled',
            value: 'disabled',
            hint: 'disabled',
            disabled: true
          },
          {
            label: 'not disabled',
            value: 'test',
            conditional: 'conditional'
          }
        ],
        value: true
      }
    })

    const labels = wrapper.findAll('.nhsuk-checkboxes__label')
    const inputs = wrapper.findAll('.nhsuk-checkboxes__input')
    const hints = wrapper.findAll('.nhsuk-checkboxes__hint')
    const conditionals = wrapper.findAll('.nhsuk-checkboxes__conditional')

    expect(labels.at(0).text()).toBe('disabled')
    expect(labels.at(1).text()).toBe('not disabled')

    expect(labels.at(0).attributes().for).toBe('checkbox-1')
    expect(labels.at(1).attributes().for).toBe('checkbox-2')

    expect(inputs.at(0).attributes().id).toBe('checkbox-1')
    expect(inputs.at(1).attributes().id).toBe('checkbox-2')

    expect(inputs.at(0).attributes().disabled).toBe('disabled')
    expect(inputs.at(1).attributes().disabled).toBe(undefined)

    expect(inputs.at(0).attributes()['aria-describedby']).toBe('checkbox-1-hint')
    expect(inputs.at(1).attributes()['aria-describedby']).toBe(undefined)

    expect(inputs.at(0).attributes().value).toBe('disabled')
    expect(inputs.at(1).attributes().value).toBe('test')

    expect(hints.at(0).text()).toBe('disabled')
    expect(hints.length).toBe(1)

    expect(conditionals.at(0).text()).toBe('conditional')
    expect(conditionals.length).toBe(1)

    expect(wrapper.find('h1').exists()).toBe(false)
    expect(wrapper.find('.nhsuk-fieldset__legend--l').exists()).toBe(false)
  })

  it('test checkbox group props', () => {
    const wrapper = mount(NhsCheckboxes, {
      propsData: {
        id: 'checkbox',
        items: [
          {
            label: 'disabled',
            value: 'disabled',
            hint: 'disabled',
            disabled: true
          },
          {
            label: 'not disabled',
            value: 'test',
            conditional: 'conditional'
          }
        ],
        disabled: true,
        hint: 'hint',
        label: 'label',
        pageHeading: true,
        headingSize: 'l'
      }
    })

    const inputs = wrapper.findAll('.nhsuk-checkboxes__input')

    expect(inputs.at(0).attributes().disabled).toBe('disabled')
    expect(inputs.at(1).attributes().disabled).toBe('disabled')

    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('label')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('hint')
    expect(wrapper.find('.nhsuk-fieldset__legend--l').exists()).toBe(true)
  })

  it('test checkbox slots', () => {
    const wrapper = mount(NhsCheckboxes, {
      propsData: {
        id: 'checkbox',
        hint: 'blah',
        items: [
          {
            label: 'disabled',
            value: 'disabled',
            hint: 'disabled',
            conditional: 'test'
          }
        ],
        value: true
      },
      slots: {
        hint: 'hint',
        'item-label': 'label',
        'item-hint': 'item-hint',
        'item-conditional': 'conditional'
      }
    })

    expect(wrapper.find('.nhsuk-checkboxes__label').text()).toBe('label')
    expect(wrapper.find('.nhsuk-checkboxes__hint').text()).toBe('item-hint')
    expect(wrapper.find('.nhsuk-checkboxes__conditional').text()).toBe('conditional')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('hint')
  })
})
