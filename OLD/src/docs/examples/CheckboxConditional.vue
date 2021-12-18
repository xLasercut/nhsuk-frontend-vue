<template>
  <nhs-checkboxes
    :items="items" v-model="model"
    label="How would you prefer to be contacted?"
    hint="Select all options that are relevant to you."
    heading-size="l"
  >
    <template #item-conditional="item">
      <nhs-input :label="item.props.conditional.label" class="nhsuk-u-width-two-thirds"></nhs-input>
    </template>
  </nhs-checkboxes>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label: 'Email',
            value: 'email',
            conditional: {
              label: 'Email address'
            }
          },
          {
            label: 'Phone',
            value: 'phone',
            conditional: {
              label: 'Phone number'
            }
          },
          {
            label: 'Text message',
            value: 'text',
            conditional: {
              label: 'Mobile phone number'
            }
          }
        ],
        model: []
      }
    }
  }
</script>
