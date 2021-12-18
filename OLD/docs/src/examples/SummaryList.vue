<template>
  <nhs-summary-list :data="data">
    <template #item="item">
      <nhs-summary-list-item type="key">{{item.props.key}}</nhs-summary-list-item>
      <nhs-summary-list-item type="value" v-html="item.props.value"></nhs-summary-list-item>
      <nhs-summary-list-item type="actions">
        <router-link :to="item.props.action">Change</router-link>
      </nhs-summary-list-item>
    </template>
  </nhs-summary-list>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            key: 'Name',
            value: 'Sarah Philips',
            action: '#'
          },
          {
            key: 'Date of birth',
            value: '5 January 1978',
            action: '#'
          },
          {
            key: 'Contact information',
            value: '72 Guild Street<br>London<br>SE23 6FH',
            action: '#'
          },
          {
            key: 'Contact details',
            value: '<p>07700 900457</p><p>sarah.philips@example.com</p>',
            action: '#'
          }
        ]
      }
    }
  }
</script>
