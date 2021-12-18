import { mount } from '@vue/test-utils'
import {NhsCard, NhsCardGroup} from '../../src/components/card'


describe('card tests', () => {
  it('card default props', () => {
    const wrapper = mount(NhsCard, {
      propsData: {}
    })

    expect(wrapper.contains('.nhsuk-card__img')).toBe(false)
    expect(wrapper.contains('.nhsuk-card__link')).toBe(false)
    expect(wrapper.contains('.nhsuk-card--clickable')).toBe(false)
    expect(wrapper.contains('.nhsuk-card--feature')).toBe(false)
    expect(wrapper.contains('.nhsuk-card__content--feature')).toBe(false)
    expect(wrapper.contains('.nhsuk-card__heading--feature')).toBe(false)
  })

  it('card group default props', () => {
    const wrapper = mount(NhsCardGroup, {
      propsData: {},
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.contains('.nhsuk-grid-column-one-half')).toBe(true)
  })

  it('test card props', () => {
    const wrapper = mount(NhsCard, {
      propsData: {
        clickable: true,
        feature: true
      }
    })

    expect(wrapper.contains('.nhsuk-card--clickable')).toBe(true)
    expect(wrapper.contains('.nhsuk-card--feature')).toBe(true)
    expect(wrapper.contains('.nhsuk-card__content--feature')).toBe(true)
    expect(wrapper.contains('.nhsuk-card__heading--feature')).toBe(true)
  })

  it('test card img', () => {
    const wrapper = mount(NhsCard, {
      propsData: {
        imgUrl: 'imgUrl',
        imgAlt: 'imgAlt'
      }
    })

    expect(wrapper.find('.nhsuk-card__img').attributes().src).toBe('imgUrl')
    expect(wrapper.find('.nhsuk-card__img').attributes().alt).toBe('imgAlt')
  })

  it('test card link', () => {
    const wrapper = mount(NhsCard, {
      propsData: {
        href: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-card__link').attributes().href).toBe('test')
  })
})
