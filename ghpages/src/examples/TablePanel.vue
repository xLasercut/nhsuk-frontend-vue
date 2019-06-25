<template>
  <nhs-table
    :headers="headers"
    :rows="rows"
    heading="Conditions similar to impetigo"
  >
    <template #item="item">
      <nhs-table-item>{{item.props.symptoms}}</nhs-table-item>
      <nhs-table-item>{{item.props.cause}}</nhs-table-item>
    </template>
  </nhs-table>
</template>

<script>
  export default {
    data() {
      return {
        rows: [
          {
            symptoms: 'Blisters on lips or around the mouth',
            cause: 'eczema'
          },
          {
            symptoms: 'Itchy, dry, cracked, sore',
            cause: 'cold sores'
          },
          {
            symptoms: 'Itchy blisters',
            cause: 'shingles, chickenpox'
          }
        ],
        headers: [
          {
            text: 'Skin symptoms'
          },
          {
            text: 'Possible cause'
          }
        ]
      }
    }
  }
</script>