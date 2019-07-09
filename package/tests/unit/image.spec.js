import { mount } from '@vue/test-utils'
import NhsImage from '../../src/components/image'

describe('image tests', () => {
  it('test image props', () => {
    const wrapper = mount(NhsImage, {
      propsData: {
        src: 'test-image',
        alt: 'test-alt',
        test: 'test'
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.find('img').attributes().src).toBe('test-image')
    expect(wrapper.find('.nhsuk-image__img').attributes().alt).toBe('test-alt')
    expect(wrapper.contains('figcaption')).toBe(false)
  })

  it('test image slots', () => {
    const wrapper = mount(NhsImage, {
      slots: {
        default: 'test'
      },
      propsData: {
        src: 'test-image',
        alt: 'test-alt'
      }
    })

    expect(wrapper.find('.nhsuk-image__caption').text()).toBe('test')
  })
})