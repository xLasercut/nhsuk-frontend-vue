<template>
  <nhs-row>
    <nhs-col>
      <div class="heading-container">
        <span>{{`nhs-${heading}`}}</span>
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
          <template #item="item">
            <nhs-table-item>{{item.props.name}}</nhs-table-item>
            <nhs-table-item>{{item.props.type}}</nhs-table-item>
            <nhs-table-item>{{item.props.required||'-'}}</nhs-table-item>
            <nhs-table-item>{{item.props.description}}</nhs-table-item>
          </template>
        </nhs-table>

        <nhs-table :headers="headerSlots" :data="dataSlots" v-if="tab == 'slots'">
          <template #item="item">
            <nhs-table-item>{{item.props.name}}</nhs-table-item>
            <nhs-table-item>{{item.props.props||'-'}}</nhs-table-item>
            <nhs-table-item>{{item.props.description}}</nhs-table-item>
          </template>
        </nhs-table>

        <nhs-table :headers="headerEvents" :data="dataEvents" v-if="tab == 'events'">
          <template #item="item">
            <nhs-table-item>{{item.props.name}}</nhs-table-item>
            <nhs-table-item>{{item.props.trigger}}</nhs-table-item>
            <nhs-table-item>{{item.props.value||'-'}}</nhs-table-item>
          </template>
        </nhs-table>

        <nhs-table :headers="headerMethods" :data="dataMethods" v-if="tab == 'methods'">
          <template #item="item">
            <nhs-table-item>{{item.props.name}}</nhs-table-item>
            <nhs-table-item>{{item.props.input||'-'}}</nhs-table-item>
            <nhs-table-item>{{item.props.description}}</nhs-table-item>
          </template>
        </nhs-table>
      </div>
    </nhs-col>
  </nhs-row>
</template>

<script>
  import DocTab from './DocTab'

  export default {
    components: { DocTab },
    props: {
      dataProps: {
        type: Array,
        default() {
          return []
        }
      },
      dataSlots: {
        type: Array,
        default() {
          return []
        }
      },
      dataEvents: {
        type: Array,
        default() {
          return []
        }
      },
      dataMethods: {
        type: Array,
        default() {
          return []
        }
      },
      heading: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        tab: this.defaultTab(),
        headerProps: [ 'Name', 'Type', 'Required', 'Description' ],
        headerSlots: [ 'Name', 'Props', 'Description' ],
        headerEvents: [ 'Name', 'Trigger', 'Event Value' ],
        headerMethods: [ 'Name', 'Input', 'Description' ]
      }
    },
    methods: {
      defaultTab() {
        if (this.dataProps.length > 0) {
          return 'props'
        }
        else if (this.dataSlots.length > 0) {
          return 'slots'
        }
        else if (this.dataEvents.length > 0) {
          return 'events'
        }
        else {
          return 'methods'
        }
      }
    }
  }
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