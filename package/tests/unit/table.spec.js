import { mount } from '@vue/test-utils'
import { NhsTable, NhsTableItem } from '../../src/components/table'

describe('table tests', () => {
  it('test table default props', () => {
    const wrapper = mount(NhsTable, {
      propsData: {
        headers: [],
        data: []
      }
    })

    expect(wrapper.contains('h3')).toBe(false)
    expect(wrapper.find('.nhsuk-table__caption').text()).toBe('')
  })

  it('test table props', () => {
    const wrapper = mount(NhsTable, {
      propsData: {
        headers: [ 'Test' ],
        data: [
          {
            test: 'cheese',
            test2: 'cheese2'
          }
        ],
        heading: 'heading',
        headingLevel: 1,
        caption: 'caption',
      },
      scopedSlots: {
        item(item) {
          return this.$createElement('span', item.props.test)
        }
      }
    })

    expect(wrapper.find('h1').text()).toBe('heading')
    expect(wrapper.find('.nhsuk-table__caption').text()).toBe('caption')
    const heads = wrapper.findAll('.nhsuk-table__header')
    expect(heads.length).toBe(1)
    expect(heads.at(0).text()).toBe('Test')
    const cells = wrapper.findAll('span')
    expect(cells.length).toBe(1)
    expect(cells.at(0).text()).toBe('cheese')
  })

  it('test table item slots', () => {
    const wrapper = mount(NhsTableItem, {
      slots: {
        default: 'test'
      }
    })

    expect(wrapper.find('.nhsuk-table__cell').text()).toBe('test')
  })
})