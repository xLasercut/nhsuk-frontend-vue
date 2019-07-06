import { mount } from '@vue/test-utils'
import { NhsInputGroup } from '../../src/components/form'

describe('input group tests', () => {
  it('test individual input props', () => {
    const wrapper = mount(NhsInputGroup, {
      propsData: {
        id: 'inputgroup',
        items: [
          {
            label: 'disabled',
            type: 'number',
            disabled: true,
            width: '10',
            autocomplete: 'postcode'
          },
          {
            label: 'not disabled'
          }
        ],
        value: {}
      }
    })

    const labels = wrapper.findAll('.nhsuk-date-input__label')
    const inputs = wrapper.findAll('.nhsuk-date-input__input')

    expect(labels.at(0).text()).toBe('disabled')
    expect(labels.at(1).text()).toBe('not disabled')

    expect(labels.at(0).attributes().for).toBe('inputgroup-0')
    expect(labels.at(1).attributes().for).toBe('inputgroup-1')

    expect(inputs.at(0).attributes().id).toBe('inputgroup-0')
    expect(inputs.at(1).attributes().id).toBe('inputgroup-1')

    expect(inputs.at(0).attributes().disabled).toBe('disabled')
    expect(inputs.at(1).attributes().disabled).toBe(undefined)

    expect(inputs.at(0).attributes().type).toBe('number')
    expect(inputs.at(1).attributes().type).toBe('text')

    expect(inputs.at(0).attributes().autocomplete).toBe('postcode')
    expect(inputs.at(1).attributes().autocomplete).toBe(undefined)

    expect(wrapper.find('h1').exists()).toBe(false)
    expect(wrapper.find('.nhsuk-fieldset__legend--l').exists()).toBe(false)
  })

  it('test input group props', () => {
    const wrapper = mount(NhsInputGroup, {
      propsData: {
        id: 'inputgroup',
        items: [
          {
            label: 'disabled',
            disabled: true
          },
          {
            label: 'not disabled'
          }
        ],
        disabled: true,
        hint: 'hint',
        label: 'label',
        pageHeading: true,
        headingSize: 'l',
        value: {}
      }
    })

    const inputs = wrapper.findAll('.nhsuk-date-input__input')
    expect(inputs.at(0).attributes().disabled).toBe('disabled')
    expect(inputs.at(1).attributes().disabled).toBe('disabled')

    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('label')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('hint')
    expect(wrapper.find('.nhsuk-fieldset__legend--l').exists()).toBe(true)
  })

  it('test input slots', () => {
    const wrapper = mount(NhsInputGroup, {
      propsData: {
        id: 'inputgroup',
        hint: 'blah',
        items: [
          {
            label: 'disabled'
          }
        ],
        value: {}
      },
      slots: {
        hint: 'hint',
        'item-label': 'label'
      }
    })

    expect(wrapper.find('.nhsuk-date-input__label').text()).toBe('label')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('hint')
  })
})