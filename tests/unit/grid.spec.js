import { mount } from '@vue/test-utils'
import {
  NhsMain,
  NhsRow,
  NhsCol
} from '../../src/components/grid'

describe('grid tests', () => {
  it('test main default props', () => {
    const wrapper = mount(NhsMain)

    expect(wrapper.attributes().class).toBe('nhsuk-width-container')
  })

  it('test main type', () => {
    const wrapper = mount(NhsMain, {
      propsData: {
        type: 'fluid'
      }
    })

    expect(wrapper.attributes().class).toBe('nhsuk-width-container-fluid')
  })

  it('test main slots', () => {
    const wrapper = mount(NhsMain, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-main-wrapper').text()).toBe('test')
  })

  it('test col default props', () => {
    const wrapper = mount(NhsCol)

    expect(wrapper.attributes().class).toBe('nhsuk-grid-column-full')
  })

  it('test col span', () => {
    const spans = {
      100: 'full',
      75: 'three-quarters',
      66: 'two-thirds',
      50: 'one-half',
      33: 'one-third',
      25: 'one-quarter'
    }

    for (var span in spans) {
      const wrapper = mount(NhsCol, {
        propsData: {
          span: parseInt(span)
        }
      })

      expect(wrapper.attributes().class).toBe(`nhsuk-grid-column-${spans[span]}`)
    }
  })

  it('test col slot', () => {
    const wrapper = mount(NhsCol, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.text()).toBe('test')
  })

  it('test row slot', () => {
    const wrapper = mount(NhsRow, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.text()).toBe('test')
  })
})