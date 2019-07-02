import { mount } from '@vue/test-utils'
import {
  NhsErrorText,
  NhsHintText,
  NhsInsetText,
  NhsHeading,
  NhsLabel,
  NhsList
} from '../../src/components/typography'

describe('typography tests', () => {












  it('test list props', () => {
    const types = {
      bullet: 'nhsuk-list--bullet',
      number: 'nhsuk-list--number',
      error: 'nhsuk-error-summary__list'
    }

    for (var type in types) {
      const wrapper = mount(NhsList, {
        propsData: {
          type: type,
          attributes: {
            test: 'test'
          }
        }
      })

      expect(wrapper.attributes().test).toBe('test')
      expect(wrapper.attributes().class).toBe(`nhsuk-list ${types[type]}`)
      if (type === 'number') {
        expect(wrapper.contains('ol')).toBe(true)
      }
      else {
        expect(wrapper.contains('ul')).toBe(true)
      }
    }
  })
})