<template>
  <nhs-checkboxes
    :items="items" v-model="model"
    label="What is your nationality?"
    hint="If you have more than 1 nationality, select all options that are relevant to you."
  >

    <template #hint="hint">
      <a>{{hint.props}}</a>
    </template>

    <template #item-label="item">
      <h3>{{item.props.label}}</h3>
    </template>

  </nhs-checkboxes>
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
        model: []
      }
    }
  }
</script>