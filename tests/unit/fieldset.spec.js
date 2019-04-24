import { mount } from '@vue/test-utils'
import NhsFieldset from '../../src/components/fieldset'

describe('fieldset tests', () => {
  it('test fieldset heading', () => {
    const wrapper = mount(NhsFieldset, {
      propsData: {
        pageHeading: true,
        legend: 'legend',
        legendAttributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.find('h1').text()).toBe('legend')
    expect(wrapper.find('.nhsuk-fieldset__legend').attributes().test).toBe('test')
  })

  it('test fieldset props', () => {
    const wrapper = mount(NhsFieldset, {
      propsData: {
        describedBy: 'test-describe',
        legend: 'legend',
        attributes: {
          test: 'test'
        },
        legendAttributes: {
          test: 'test-legend'
        }
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.attributes()['aria-describedby']).toBe('test-describe')
    expect(wrapper.contains('h1')).toBe(false)
    expect(wrapper.find('.nhsuk-fieldset__legend').text()).toBe('legend')
    expect(wrapper.find('.nhsuk-fieldset__legend').attributes().test).toBe('test-legend')
  })

  it('test fieldset no legend', () => {
    const wrapper = mount(NhsFieldset)

    expect(wrapper.contains('h1')).toBe(false)
    expect(wrapper.contains('legend')).toBe(false)
  })
})