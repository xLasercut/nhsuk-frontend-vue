<template>
  <component :is="tableType" :heading="heading" :heading-level="headingLevel" :responsive="responsive">
    <caption v-if="caption" class="nhsuk-table__caption">{{ caption }}</caption>
    <thead role="rowgroup" class="nhsuk-table__head">
      <tr role="row">
        <th class="nhsuk-table__header" scope="col" v-for="(item, index) in headers" :key="index">
          <slot name="header" :props="item">{{item.text}}</slot>
        </th>
      </tr>
    </thead>

    <tbody class="nhsuk-table__body">
      <tr class="nhsuk-table__row" v-for="(item, index) in data" :key="index">
        <td role="cell" class="nhsuk-table__cell" v-for="(headerItem, index) in headers" :key="index" v-if="responsive">
          <span class="nhsuk-table-responsive__heading">{{headerItem.text}} </span><slot :name="`item.${headerItem.value}`" :props="item">{{item[headerItem.value]}}</slot>
        </td>

        <td class="nhsuk-table__cell" v-else><slot :name="`item.${headerItem.value}`" :props="item">{{item[headerItem.value]}}</slot></td>
      </tr>
    </tbody>
  </component>
</template>

<script>
  import PanelTable from './types/PanelTable.vue'
  import SimpleTable from './types/SimpleTable.vue'

  export default {
    name: 'NhsTable',
    props: {
      heading: {
        type: String
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      caption: {
        type: String
      },
      headers: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      responsive: {
        type: Boolean,
        default: true
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
