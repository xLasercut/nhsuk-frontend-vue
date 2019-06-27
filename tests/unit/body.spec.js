import { mount } from '@vue/test-utils'
import { NhsBody } from '../../src/components/typography'

describe('body tests', () => {
  it('test body props', () => {
    const wrapper = mount(NhsBody, {
      propsData: {
        test: 'test',
        size: 's'
      }
    })

    expect(wrapper.attributes().test).toBe('test')
    expect(wrapper.attributes().class).toBe('nhsuk-body-s')
  })

  it('test body slots', () => {
    const wrapper = mount(NhsBody, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('p').text()).toBe('test')
  })
})