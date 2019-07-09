import { mount } from '@vue/test-utils'
import NhsHero from '../../src/components/hero'

describe('hero tests', () => {
  it('test hero default props', () => {
    const wrapper = mount(NhsHero)

    expect(wrapper.attributes().class).toBe('nhsuk-hero')
  })

  it('test hero heading', () => {
    const wrapper = mount(NhsHero, {
      propsData: {
        heading: 'heading',
        text: 'text'
      }
    })

    expect(wrapper.contains('.nhsuk-width-container')).toBe(true)
    expect(wrapper.contains('.nhsuk-hero__wrapper')).toBe(true)
    expect(wrapper.contains('.nhsuk-hero-content')).toBe(false)
    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.find('.nhsuk-u-margin-bottom-3').text()).toBe('heading')
    expect(wrapper.contains('p')).toBe(true)
    expect(wrapper.find('.nhsuk-body-l').text()).toBe('text')
    expect(wrapper.contains('.nhsuk-hero--border')).toBe(true)
  })

  it('test hero image', () => {
    const wrapper = mount(NhsHero, {
      propsData: {
        heading: 'heading',
        imageUrl: 'test-image',
        test: 'test'
      }
    })

    expect(wrapper.contains('.nhsuk-hero__overlay')).toBe(true)
    expect(wrapper.contains('.nhsuk-hero__wrapper')).toBe(false)
    expect(wrapper.contains('.nhsuk-hero-content')).toBe(true)
    expect(wrapper.contains('p')).toBe(false)
    expect(wrapper.find('h1').attributes().class).toBe('')
    expect(wrapper.contains('.nhsuk-hero--border')).toBe(false)
    expect(wrapper.attributes().class).toBe('nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description')
    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.attributes().style).toBe('background-image: url(test-image);')
  })
})