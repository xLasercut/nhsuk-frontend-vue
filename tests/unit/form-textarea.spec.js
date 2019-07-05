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
        test: 'test',
        label: 'label',
        hint: 'hint'
      }
    })

    expect(wrapper.find('textarea').attributes().id).toBe('textarea')
    expect(wrapper.find('textarea').attributes().name).toBe('name')
    expect(wrapper.find('textarea').attributes().disabled).toBe('disabled')
    expect(wrapper.find('textarea').attributes().test).toBe('test')
    expect(wrapper.find('textarea').attributes()['aria-describedby']).toBe('textarea-hint')
    expect(wrapper.find('textarea').attributes().rows).toBe('10')
  })

  it('test form textarea slots', () => {
    const wrapper = mount(NhsTextarea, {
      slots: {
        label: 'test',
        hint: 'test2'
      },
      propsData: {
        id: 'textarea',
        label: 'cheese',
        hint: 'cake'
      }
    })

    expect(wrapper.find('.nhsuk-label').attributes().for).toBe('textarea')
    expect(wrapper.find('.nhsuk-label').text()).toBe('test')
    expect(wrapper.find('.nhsuk-hint').text()).toBe('test2')
    expect(wrapper.find('textarea').attributes()['aria-describedby']).toBe('textarea-hint')
  })
})