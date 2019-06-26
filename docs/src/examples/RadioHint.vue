<template>
  <nhs-radios
    label="How do you want to sign in?" page-heading
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
            label: 'Sign in with Government Gateway',
            value: 'gov',
            hint: 'You\'ll have a user ID if you\'ve registered for self assessment or filed a tax return online before.'
          },
          {
            label: 'Sign in with NHS.UK login',
            value: 'login',
            hint: 'You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.'
          }
        ]
      }
    }
  }
</script>