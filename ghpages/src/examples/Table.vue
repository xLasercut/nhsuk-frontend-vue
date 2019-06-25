<template>
  <nhs-table
    :headers="headers"
    :rows="rows"
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
            cause: 'cold sores'
          },
          {
            symptoms: 'Itchy, dry, cracked, sore',
            cause: 'eczema'
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