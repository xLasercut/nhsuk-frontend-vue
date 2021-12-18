import { mount } from '@vue/test-utils'
import NhsFieldset from '../../src/components/fieldset'

describe('fieldset tests', () => {
  it('test fieldset heading', () => {
    const wrapper = mount(NhsFieldset, {
      propsData: {
        pageHeading: true,
        legend: 'legend'
      }
    })

    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.find('h1').text()).toBe('legend')
  })

  it('test fieldset props', () => {
    const wrapper = mount(NhsFieldset, {
      propsData: {
        legend: 'legend',
        test: 'test',
        size: 'xl'
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.contains('h1')).toBe(false)
    expect(wrapper.find('.nhsuk-fieldset__legend').text()).toBe('legend')
    expect(wrapper.find('.nhsuk-fieldset').attributes().test).toBe('test')
    expect(wrapper.find('.nhsuk-fieldset__legend--xl').exists()).toBe(true)
  })

  it('test fieldset no legend', () => {
    const wrapper = mount(NhsFieldset)

    expect(wrapper.contains('h1')).toBe(false)
    expect(wrapper.contains('legend')).toBe(false)
  })

  it('test fieldset slots', () => {
    const wrapper = mount(NhsFieldset, {
      propsData: {
        legend: 'test'
      },
      slots: {
        legend: 'legend',
        default: '<p>test</p>'
      }
    })

    expect(wrapper.find('.nhsuk-fieldset__legend').text()).toBe('legend')
    expect(wrapper.find('p').text()).toBe('test')
  })
})