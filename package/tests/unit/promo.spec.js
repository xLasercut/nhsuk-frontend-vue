import { mount } from '@vue/test-utils'
import { NhsPromo, NhsPromoGroup } from '../../src/components/promo'

describe('promo tests', () => {
  it('test promo default props', () => {
    const wrapper = mount(NhsPromo, {
      propsData: {
        heading: 'heading',
        href: '/test'
      }
    })

    expect(wrapper.contains('h3')).toBe(true)
    expect(wrapper.contains('img')).toBe(false)
  })

  it('test promo props', () => {
    const wrapper = mount(NhsPromo, {
      propsData: {
        heading: 'heading',
        href: '/test',
        headingLevel: 1,
        src: 'test-image',
        alt: 'test-alt',
        test: 'test'
      }
    })

    expect(wrapper.find('a').attributes().href).toBe('/test')
    expect(wrapper.find('.nhsuk-promo__img').attributes().src).toBe('test-image')
    expect(wrapper.find('.nhsuk-promo__img').attributes().alt).toBe('test-alt')
    expect(wrapper.find('h1').text()).toBe('heading')
    expect(wrapper.attributes().test).toBe('test')
  })

  it('test promo slots', () => {
    const wrapper = mount(NhsPromo, {
      propsData: {
        heading: 'heading',
        href: '/test'
      },
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-promo__description').text()).toBe('test')
  })

  it('test promo group', () => {
    const wrapper = mount(NhsPromoGroup, {
      propsData: {
        column: '2'
      },
      slots: {
        default: '<a>test</a>'
      }
    })

    expect(wrapper.find('.nhsuk-grid-column-one-half').exists()).toBe(true)
    expect(wrapper.find('.nhsuk-promo-group__item').text()).toBe('test')
  })
})