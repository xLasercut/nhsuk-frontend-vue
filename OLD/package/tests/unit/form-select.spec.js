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
        test: 'test',
        label: 'label',
        hint: 'hint'
      }
    })

    expect(wrapper.find('select').attributes().id).toBe('select')
    expect(wrapper.find('select').attributes().name).toBe('name')
    expect(wrapper.find('select').attributes().disabled).toBe('disabled')
    expect(wrapper.find('select').attributes().test).toBe('test')
    expect(wrapper.find('select').attributes()['aria-describedby']).toBe('select-hint')
    expect(wrapper.find('.nhsuk-label').text()).toBe('label')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('hint')
    expect(wrapper.find('label').attributes().for).toBe('select')
  })

  it('test form select slots', () => {
    const wrapper = mount(NhsSelect, {
      slots: {
        label: 'test',
        hint: 'test2'
      },
      propsData: {
        id: 'select',
        label: 'label',
        hint: 'hint'
      }
    })

    expect(wrapper.find('.nhsuk-label').text()).toBe('test')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('test2')
  })
})