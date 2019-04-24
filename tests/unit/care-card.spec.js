import { mount } from '@vue/test-utils'
import NhsCareCard from '../../src/components/care-card'

const types = {
  'non-urgent': 'Non-urgent advice:',
  'urgent': 'Urgent advice:',
  'immediate': 'Immediate action required:'
}

describe('care card tests', () => {
  it('test care card type', () => {

    for (var type in types) {
      const wrapper = mount(NhsCareCard, {
        propsData: {
          heading: 'heading',
          type: type
        }
      })

      expect(wrapper.attributes().class).toBe(`nhsuk-care-card nhsuk-care-card--${type}`)
    }
  })

  it('test care card hidden text', () => {
    for (var type in types) {
      const wrapper = mount(NhsCareCard, {
        propsData: {
          heading: 'heading',
          type: type
        }
      })

      expect(wrapper.find('.nhsuk-u-visually-hidden').text()).toBe(types[type])
    }
  })

  it('test care card props', () => {
    const wrapper = mount(NhsCareCard, {
      propsData: {
        headingLevel: 1,
        attributes: {
          test: 'test'
        },
        heading: 'heading'
      }
    })

    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.attributes().test).toBe('test')
  })
})