<template>
  <component :is="tableType" :attributes="panelAttributes" :heading="heading" :heading-level="headingLevel">
    <table class="nhsuk-table" v-bind="tableAttributes">
      <caption class="nhsuk-table__caption" v-bind="captionAttributes">{{caption}}</caption>
      <thead class="nhsuk-table__head">
        <tr class="nhsuk-table__row">
          <th class="nhsuk-table__header" scope="col" v-for="(item, index) in head" :key="index">
            <slot name="header" :props="item">{{item.text}}</slot>  
          </th>
        </tr>
      </thead>
      <tbody class="nhsuk-table__body">
        <tr class="nhsuk-table__row" v-for="(row, index) in rows" :key="index">
          <td class="nhsuk-table__cell" v-for="(item, index) in head" :key="index">
            <slot :name="item.key" :props="row[item.key]">
              {{row[item.key]}}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </component>
</template>

<script>
  import PanelTable from './table/PanelTable.vue'
  import SimpleTable from './table/SimpleTable.vue'

  export default {
    name: "NhsTable",
    props: {
      panel: {
        type: Boolean,
        default: false
      },
      panelAttributes: {
        type: Object,
        default() {
          return {}
        }
      },
      heading: {
        type: String,
        default: ""
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      tableAttributes: {
        type: Object,
        default() {
          return {}
        }
      },
      caption: {
        type: String,
        default: ""
      },
      captionAttributes: {
        type: Object,
        default() {
          return {}
        }
      },
      head: {
        type: Array,
        required: true
      },
      rows: {
        type: Array,
        required: true
      }
    },
    computed: {
      tableType() {
        if (this.panel) {
          return PanelTable
        }
        return SimpleTable
      }
    }
  }
</script>