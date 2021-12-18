import { mount } from '@vue/test-utils'
import {
  NhsNavAz,
  NhsNavAzItem
} from '../../src/components/nav-az'

describe('a to z navigation tests', () => {
  it('test nav az default props', () => {
    const wrapper = mount(NhsNavAz)

    expect(wrapper.attributes()['aria-label']).toBe('A to Z Navigation')
  })

  it('test nav az props', () => {
    const wrapper = mount(NhsNavAz, {
      propsData: {
        ariaLabel: 'test-label',
        test: 'test'
      }
    })

    expect(wrapper.attributes()['aria-label']).toBe('test-label')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test nav az slots', () => {
    const wrapper = mount(NhsNavAz, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-nav-a-z__list').text()).toBe('test')
  })

  it('test nav az item default props', () => {
    const wrapper = mount(NhsNavAzItem)

    expect(wrapper.contains('.nhsuk-nav-a-z__link--disabled')).toBe(false)
  })

  it('test nav az item props', () => {
    const wrapper = mount(NhsNavAzItem, {
      propsData: {
        disabled: true,
        test: 'test'
      }
    })

    expect(wrapper.find('span').attributes().test).toBe('test')
    expect(wrapper.contains('.nhsuk-nav-a-z__link')).toBe(false)
  })

  it('test nav az item click event', () => {
    const wrapper = mount(NhsNavAzItem)

    wrapper.find('a').trigger('click')
    expect(wrapper.emitted().click.length).toBe(1)
  })

  it('test nav az item slots', () => {
    const wrapper = mount(NhsNavAzItem, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-nav-a-z__link').text()).toBe('test')
  })
})