<template>
  <dl class="nhsuk-summary-list" v-bind="attributes">
    <div class="nhsuk-summary-list__row" v-for="(row, index) in rows" :key="index">
      <dt class="nhsuk-summary-list__key" v-bind="row.key.attributes">
        <slot name="key" :props="row.key">{{row.key.text}}</slot>
      </dt>
      <dd class="nhsuk-summary-list__value" v-bind="row.value.attributes">
        <slot name="value" :props="row.value">{{row.value.text}}</slot>
      </dd>
      <dd class="nhsuk-summary-list__actions" v-bind="row.action.attributes" v-if="row.action && row.action.items">
        <summary-list-action :item="row.action.items[0]" v-if="row.action.items.length === 1">
          <template #action="action">
            <slot name="action" :props="action.props"></slot>
          </template>
        </summary-list-action>
        
        <ul class="nhsuk-summary-list__actions-list" v-if="row.action.items.length !== 1">
            <li class="nhsuk-summary-list__actions-list-item" v-for="(item, index) in row.action.items" :key="index">
              <summary-list-action :item="item">
                <template #action="action">
                  <slot name="action" :props="action.props"></slot>
                </template>
              </summary-list-action>
            </li>
        </ul>
      </dd>
    </div>
  </dl>
</template>

<script>
  import SummaryListAction from './summarylist/SummaryListAction.vue'

  export default {
    name: "NhsSummaryList",
    components: {
      SummaryListAction
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      rows: {
        type: Array,
        required: true
      }
    }
  }
</script>