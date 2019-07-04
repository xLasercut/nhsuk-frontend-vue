import { mount } from '@vue/test-utils'
import { NhsRadios } from '../../src/components/form'

describe('form radio tests', () => {
  it('test individual radio props', () => {
    const wrapper = mount(NhsRadios, {
      propsData: {
        id: 'radio',
        items: [
          {
            label: 'disabled',
            value: 'disabled',
            hint: 'disabled',
            disabled: true
          },
          {
            label: 'not disabled',
            value: 'test'
          }
        ]
      }
    })

    const labels = wrapper.findAll('.nhsuk-radios__label')
    const inputs = wrapper.findAll('.nhsuk-radios__input')
    const hints = wrapper.findAll('.nhsuk-radios__hint')

    expect(labels.at(0).text()).toBe('disabled')
    expect(labels.at(1).text()).toBe('not disabled')

    expect(inputs.at(0).attributes().id).toBe('radio-0')
    expect(inputs.at(1).attributes().id).toBe('radio-1')

    expect(inputs.at(0).attributes().disabled).toBe('disabled')
    expect(inputs.at(1).attributes().disabled).toBe(undefined)

    expect(inputs.at(0).attributes()['aria-describedby']).toBe('radio-0-hint')
    expect(inputs.at(1).attributes()['aria-describedby']).toBe(undefined)

    expect(inputs.at(0).attributes().value).toBe('disabled')
    expect(inputs.at(1).attributes().value).toBe('test')

    expect(hints.at(0).text()).toBe('disabled')
    expect(hints.length).toBe(1)

    expect(wrapper.find('h1').exists()).toBe(false)
    expect(wrapper.find('.nhsuk-fieldset__legend--l').exists()).toBe(false)
  })

  it('test radio group props', () => {
    const wrapper = mount(NhsRadios, {
      propsData: {
        id: 'radio',
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
          }
        ],
        disabled: true,
        hint: 'hint',
        label: 'label',
        pageHeading: true,
        headingSize: 'l'
      }
    })

    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('label')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('hint')
    expect(wrapper.find('.nhsuk-fieldset__legend--l').exists()).toBe(true)
  })

  it('test radio slots', () => {
    const wrapper = mount(NhsRadios, {
      propsData: {
        id: 'radio',
        hint: 'blah',
        items: [
          {
            label: 'disabled',
            value: 'disabled',
            hint: 'disabled'
          }
        ],
        value: true
      },
      slots: {
        hint: 'hint',
        'item-label': 'label',
        'item-hint': 'item-hint',
      }
    })

    expect(wrapper.find('.nhsuk-radios__label').text()).toBe('label')
    expect(wrapper.find('.nhsuk-radios__hint').text()).toBe('item-hint')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('hint')
  })
})