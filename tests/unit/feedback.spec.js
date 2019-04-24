import { mount } from '@vue/test-utils'
import NhsFeedback from '../../src/components/feedback'

describe('feedback banner tests', () => {
  it('test feedback default props', () => {
    const wrapper = mount(NhsFeedback, {
      propsData: {
        title: 'title'
      }
    })

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('feedback invite')
  })

  it('test feedback props', () => {
    const wrapper = mount(NhsFeedback, {
      propsData: {
        title: 'title',
        label: 'test-label',
        href: '/test',
        hiddenText: 'hidden-text',
        attributes: {
          test: 'test'
        }
      }
    })

    expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe('hidden-text')
    expect(wrapper.find('h2').text()).toBe('title')
    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('a').text()).toBe('test-label')
    expect(wrapper.attributes().test).toBe('test')
  })
})