<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    page-heading
    label="How do you want to sign in?"
    heading-size="m"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: [],
      items: [
        {
          label: 'Sign in with Government Gateway',
          hint: 'You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.',
          value: 'gov'
        },
        {
          label: 'Sign in with NHS.UK login',
          hint: 'You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.',
          value: 'login'
        }
      ]
    });

    return { ...toRefs(state) };
  }
});
</script>
