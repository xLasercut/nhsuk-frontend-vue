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
        <nhs-table :headers="headerProps" :data="dataProps" v-if="tab == 'props'">
          <template #item.type="{item}">{{item.value.type}}</template>
          <template #item.required="{item}">{{item.required || '-'}}</template>
          <template #item.default="{item}">{{item.default || '-'}}</template>
        </nhs-table>

        <nhs-table :headers="headerSlots" :data="dataSlots" v-if="tab == 'slots'">
          <template #item.vue-properties="{item}">
            <highlightjs language="typescript" :code="slotPropsDisplay(item['vue-properties'])">
            </highlightjs>
          </template>
        </nhs-table>

        <nhs-table :headers="headerEvents" :data="dataEvents" v-if="tab == 'events'">
          <template #item.value="{item}">{{item.value||'-'}}</template>
        </nhs-table>

        <nhs-table :headers="headerMethods" :data="dataMethods" v-if="tab == 'methods'">
          <template #item.input="item">{{item.props.input||'-'}}</template>
        </nhs-table>
      </div>
    </nhs-col>
  </nhs-row>
</template>

<script lang="ts">
import DocTab from './DocTab.vue'
import {defineComponent, reactive, toRefs} from 'vue'
import {getComponentDoc} from '../../assets/component-docs'
import {SlotsDocProperties} from '../../assets/interfaces'

export default defineComponent({
  components: { DocTab },
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { propsDocs, slotsDocs, eventsDocs } = getComponentDoc(props.heading)

    function slotPropsDisplay(slotProps: Array<SlotsDocProperties>): string {
      let properties = `{\n`
      for (const slotProp of slotProps) {
        properties = properties + `  ${slotProp.name}: ${slotProp.type || 'any'}\n`
      }
      properties = properties + `}\n`

      return properties
    }

    const state = reactive({
      dataProps: propsDocs,
      dataSlots: slotsDocs,
      dataEvents: eventsDocs,
      dataMethods: [],
      headerProps: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Type',
          value: 'type'
        },
        {
          text: 'Required',
          value: 'required'
        },
        {
          text: 'Default',
          value: 'default'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ],
      headerSlots: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Props',
          value: 'vue-properties'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ],
      headerEvents: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Description',
          value: 'description'
        },
        {
          text: 'Event Value',
          value: 'value'
        }
      ],
      headerMethods: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Input',
          value: 'input'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ],
      tab: 'slots'
    })

    return {...toRefs(state), slotPropsDisplay}
  }
  // methods: {
  //   defaultTab() {
  //     if (this.dataProps.length > 0) {
  //       return 'props'
  //     }
  //     else if (this.dataSlots.length > 0) {
  //       return 'slots'
  //     }
  //     else if (this.dataEvents.length > 0) {
  //       return 'events'
  //     }
  //     else {
  //       return 'methods'
  //     }
  //   }
  // }
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
