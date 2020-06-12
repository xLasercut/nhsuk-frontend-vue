<template>
  <nhs-radios
    :items="items" v-model="model"
    label="How would you prefer to be contacted?" heading-size="l"
    hint="Select one option."
    id="contact"
    page-heading
  >
    <template #item-conditional="item">
      <nhs-input :label="item.props.conditional.label" class="nhsuk-u-width-two-thirds"></nhs-input>
    </template>
  </nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: 'email',
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
        ]
      }
    }
  }
</script>
