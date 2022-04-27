<template>
  <nhs-radios
    label="How do you want to sign in?" heading-size="l"
    :items="items" v-model="model"
  ></nhs-radios>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      items: [
        {
          label: 'Use Government Gateway',
          value: 'gov'
        },
        {
          label: 'Use NHS.UK login',
          value: 'login'
        },
        {
          divider: 'or'
        },
        {
          label: 'Create an account',
          value: 'create'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
</script>
