<template>
  <component :is="tableType" :heading="heading" :heading-level="headingLevel">
    <table class="nhsuk-table">
      <caption class="nhsuk-table__caption">{{caption}}</caption>
      <thead class="nhsuk-table__head">
        <tr class="nhsuk-table__row">
          <th class="nhsuk-table__header" scope="col" v-for="(item, index) in headers" :key="index">
            <slot name="header" :props="item">{{item}}</slot>
          </th>
        </tr>
      </thead>
      <tbody class="nhsuk-table__body">
        <tr class="nhsuk-table__row" v-for="(item, index) in data" :key="index">
          <slot name="item" :props="item"></slot>
        </tr>
      </tbody>
    </table>
  </component>
</template>

<script>
  import PanelTable from './types/PanelTable.vue'
  import SimpleTable from './types/SimpleTable.vue'

  export default {
    name: 'NhsTable',
    props: {
      heading: {
        type: String,
        default: ''
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      caption: {
        type: String,
        default: ''
      },
      headers: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    },
    computed: {
      tableType() {
        if (this.heading) {
          return PanelTable
        }
        return SimpleTable
      }
    }
  }
</script>
