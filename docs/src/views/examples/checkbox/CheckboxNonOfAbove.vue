<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    label="How would you prefer to be contacted?"
    hint="Select all options that are relevant to you."
    heading-size="l"
    id="contact"
    page-heading
  >
    <template #item-conditional="{ item }">
      <nhs-input
        :label="item.conditionalProps.label"
        class="nhsuk-u-width-two-thirds"
        v-model="inputModel[item.conditional.value]"
      ></nhs-input>
    </template>
  </nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
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
        },
        {
          divider: 'or'
        },
        {
          label: 'None of the above',
          value: 'none'
        }
      ],
      model: [],
      inputModel: {
        email: '',
        phone: '',
        text: ''
      }
    });

    return { ...toRefs(state) };
  }
});
</script>
