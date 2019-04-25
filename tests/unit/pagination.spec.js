import { mount } from '@vue/test-utils'
import NhsPagination from '../../src/components/pagination'

describe('pagination tests', () => {
  it('test pagination default props', () => {
    const wrapper = mount(NhsPagination)

    expect(wrapper.attributes()['aria-label']).toBe('Pagination')
    expect(wrapper.contains('.nhsuk-pagination-item--previous')).toBe(false)
    expect(wrapper.contains('.nhsuk-pagination-item--next')).toBe(false)
  })

  it('test pagination props', () => {
    const wrapper = mount(NhsPagination, {
      propsData: {
        attributes: {
          test: 'test'
        },
        ariaLabel: 'test-label',
        previousHref: '/test/previous',
        previousPage: 'previous-page',
        nextHref: '/test/next',
        nextPage: 'next-page'
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.attributes()['aria-label']).toBe('test-label')
    expect(wrapper.find('.nhsuk-pagination__link--prev').attributes().href).toBe('/test/previous')
    expect(wrapper.find('.nhsuk-pagination-item--previous').find('.nhsuk-pagination__page').text()).toBe('previous-page')
    expect(wrapper.find('.nhsuk-pagination__link--next').attributes().href).toBe('/test/next')
    expect(wrapper.find('.nhsuk-pagination-item--next').find('.nhsuk-pagination__page').text()).toBe('next-page')
  })
})