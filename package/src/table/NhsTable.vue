<template>
  <component
    :is="tableType"
    :heading="heading"
    :heading-level="headingLevel"
    :responsive="responsive"
    v-bind="$attrs"
  >
    <caption v-if="caption" class="nhsuk-table__caption">
      {{
        caption
      }}
    </caption>
    <thead role="rowgroup" class="nhsuk-table__head">
      <tr role="row">
        <th
          class="nhsuk-table__header"
          scope="col"
          v-for="(item, index) in headers"
          :key="index"
          :style="item.style"
        >
          <slot name="header" :props="item">{{ item.text }}</slot>
        </th>
      </tr>
    </thead>

    <tbody class="nhsuk-table__body">
      <tr class="nhsuk-table__row" v-for="(item, index) in data" :key="index">
        <td
          :role="tableCellRole"
          class="nhsuk-table__cell"
          v-for="(headerItem, index) in headers"
          :key="index"
        >
          <span class="nhsuk-table-responsive__heading" v-if="responsive">
            {{ headerItem.text }}
          </span>
          <slot :name="`item.${headerItem.value}`" :item="item">{{ item[headerItem.value] }}</slot>
        </td>
      </tr>
    </tbody>
  </component>
</template>

<script lang="ts">
import PanelTable from './types/PanelTable.vue'
import SimpleTable from './types/SimpleTable.vue'
import { computed, defineComponent, PropType } from 'vue'
import { NhsHeadingType } from '../shared/heading-switcher/types'
import { NhsTableHeader, NhsTableItem } from './interfaces'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-table',
  emits: [],
  props: {
    heading: {
      type: String
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 3
      }
    },
    caption: {
      type: String
    },
    headers: {
      type: Array as PropType<Array<NhsTableHeader>>,
      required: true
    },
    data: {
      type: Array as PropType<Array<NhsTableItem>>,
      required: true
    },
    responsive: {
      type: Boolean,
      default: (): boolean => {
        return true
      }
    }
  },
  setup(props) {
    const tableType = computed(() => {
      if (props.heading) {
        return PanelTable
      }
      return SimpleTable
    })

    const tableCellRole = computed((): string => {
      if (props.responsive) {
        return 'cell'
      }
      return ''
    })

    return { tableType, tableCellRole }
  }
})
</script>
