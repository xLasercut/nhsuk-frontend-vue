import { mount } from '@vue/test-utils'
import NhsReviewDate from '../../src/components/review-date'

describe('review date tests', () => {
  it('test review date props', () => {
    const wrapper = mount(NhsReviewDate, {
      propsData: {
        lastReview: 'test',
        nextReview: 'test2',
        test: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-body-s').text()).toBe('Page last reviewed: test\n    Next review due: test2')
    expect(wrapper.find('.nhsuk-review-date').attributes().test).toBe('test')
  })
})