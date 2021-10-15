<template>
  <nhs-radios
    label="How do you want to sign in?" heading-size="l"
    :items="items" v-model="model"
  ></nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
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
      }
    }
  }
</script>