import { mount } from '@vue/test-utils'
import {
  NhsFooter,
  NhsFooterItem
} from '../../src/components/footer'

describe('footer tests', () => {
  it('test footer default props', () => {
    const wrapper = mount(NhsFooter, {
      slots: {
        default: '<p>link</p>'
      }
    })

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('Support links')
    expect(wrapper.find('.nhsuk-footer__copyright').text()).toBe('© Crown copyright')
  })

  it('test footer props', () => {
    const wrapper = mount(NhsFooter, {
      slots: {
        default: '<p>link</p>'
      },
      propsData: {
        hiddenText: 'hidden-text',
        copyright: 'copyright',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('hidden-text')
    expect(wrapper.find('.nhsuk-footer__copyright').text()).toBe('© copyright')
    expect(wrapper.find('.nhsuk-footer').attributes().test).toBe('test')
  })

  it('test footer item props', () => {
    const wrapper = mount(NhsFooterItem, {
      propsData: {
        href: '/test',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').attributes().test).toBe('test')
  })
})