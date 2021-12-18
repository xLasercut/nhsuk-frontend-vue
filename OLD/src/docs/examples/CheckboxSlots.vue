<template>
  <div>
    <nhs-checkboxes
      :items="items" v-model="model"
      label="What is your nationality?"
      hint="If you have more than 1 nationality, select all options that are relevant to you."
      ref="checkbox" :rules="rules"
    >

      <template #hint="hint">
        <a>{{hint.props}}</a>
      </template>

      <template #item-label="item">
        <h3>{{item.props.label}}</h3>
      </template>

    </nhs-checkboxes>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button @click="validate()">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button @click="reset()">Reset</nhs-button>
      </nhs-col>
    </nhs-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label: 'British',
            value: 'british'
          },
          {
            label: 'Irish',
            value: 'irish'
          },
          {
            label: 'citizen of another country',
            value: 'other'
          }
        ],
        model: [],
        rules: [
          (v) => v.length > 0 || 'Please select an option'
        ]
      }
    },
    methods: {
      validate() {
        var valid = this.$refs.checkbox.validate()
        alert(`Valid value: ${valid}`)
      },
      reset() {
        this.model = [
          'british'
        ]
        this.$refs.checkbox.resetError()
      }
    },
    mounted() {
      this.$refs.checkbox.validate()
    }
  }
</script>