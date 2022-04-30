<template>
  <nhs-row>
    <nhs-col>
      <div class="heading-container">
        <span>{{heading}}</span>
      </div>
      <div class="tab-container">
        <doc-tab :id="`${heading}-props`" tab-value="props" v-model="tab" v-if="dataProps.length > 0">
          Props
        </doc-tab>
        <doc-tab :id="`${heading}-slots`" tab-value="slots" v-model="tab" v-if="dataSlots.length > 0">
          Slots
        </doc-tab>
        <doc-tab :id="`${heading}-events`" tab-value="events" v-model="tab" v-if="dataEvents.length > 0">
          Events
        </doc-tab>
        <doc-tab :id="`${heading}-methods`" tab-value="methods" v-model="tab" v-if="dataMethods.length > 0">
          Methods
        </doc-tab>
      </div>
      <div class="table-container">
        <props-table :data="dataProps" v-if="tab === 'props'"></props-table>
        <slots-table :data="dataSlots" v-if="tab === 'slots'"></slots-table>
        <events-table :data="dataEvents"  v-if="tab === 'events'"></events-table>
        <methods-table :data="dataMethods" v-if="tab === 'methods'"></methods-table>
      </div>
    </nhs-col>
  </nhs-row>
</template>

<script lang="ts">
import DocTab from './argument-table/DocTab.vue'
import {defineComponent, reactive, toRefs} from 'vue'
import {getComponentDoc} from '../../assets/component-docs'
import PropsTable from './argument-table/PropsTable.vue'
import SlotsTable from './argument-table/SlotsTable.vue'
import EventsTable from './argument-table/EventsTable.vue'
import MethodsTable from './argument-table/MethodsTable.vue'

export default defineComponent({
  components: {MethodsTable, EventsTable, SlotsTable, PropsTable, DocTab },
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { propsDocs, slotsDocs, eventsDocs } = getComponentDoc(props.heading)

    const defaultTab = (): string => {
      if (propsDocs.length > 0) {
        return 'props'
      }
      else if (slotsDocs.length > 0) {
        return 'slots'
      }
      else if (eventsDocs.length > 0) {
        return 'events'
      }
      else {
        return 'methods'
      }
    }

    const state = reactive({
      dataProps: propsDocs,
      dataSlots: slotsDocs,
      dataEvents: eventsDocs,
      dataMethods: [],
      tab: defaultTab()
    })

    return {...toRefs(state)}
  }
})
</script>

<style scoped>
  .heading-container {
    width: 100%;
    background: #f0f4f5;
    border: 1px solid #d8dde0;
    border-bottom: none;
    float: left;
  }

  .heading-container span {
    font-size: 16pt;
    padding: 10px;
    background: #425563;
    float: left;
    color: white;
  }

  .tab-container {
    width: 100%;
    background: #f0f4f5;
    border: 1px solid #d8dde0;
    border-top: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .table-container {
    width: 100%;
    background: #f0f4f5;
    border: 1px solid #d8dde0;
    border-top: none;
    padding: 10px 20px 0 20px;
    margin-bottom: 40px;
  }
</style>
