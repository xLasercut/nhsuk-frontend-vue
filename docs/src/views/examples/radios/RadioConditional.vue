<template>
  <nhs-radios
    :items="items" v-model="model"
    label="How would you prefer to be contacted?" heading-size="l"
    hint="Select one option."
    id="contact"
    page-heading
  >
    <template #item-conditional="{item}">
      <nhs-input :label="item.conditionalProps.label" class="nhsuk-u-width-two-thirds" v-model="inputModels[item.value]"></nhs-input>
    </template>
  </nhs-radios>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      model: 'email',
      items: [
        {
          label: 'Email',
          value: 'email',
          conditionalProps: {
            label: 'Email address'
          },
          conditional: true
        },
        {
          label: 'Phone',
          value: 'phone',
          conditionalProps: {
            label: 'Phone number'
          },
          conditional: true
        },
        {
          label: 'Text message',
          value: 'text',
          conditionalProps: {
            label: 'Mobile phone number'
          },
          conditional: true
        }
      ],
      inputModels: {
        email: '',
        phone: '',
        text: ''
      }
    }
  }
})
</script>
