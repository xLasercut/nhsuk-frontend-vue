<template>
  <nhs-main>
    <nhs-row>
      <nhs-col :span="width()">
        <router-view />
      </nhs-col>
    </nhs-row>
  </nhs-main>
</template>

<script>
  const fullwidth = [
    '/example/list-panel',
    '/example/nav-az',
    '/example/promo',
    '/example/promo-no-description',
    '/example/promo-small',
    '/example/promo-image',
    '/example/promo-group',
    '/example/card-group'
  ]

  export default {
    methods: {
      width() {
        if (fullwidth.includes(this.$route.path)) {
          return 100
        }
        return 66
      }
    }
  }
</script>
