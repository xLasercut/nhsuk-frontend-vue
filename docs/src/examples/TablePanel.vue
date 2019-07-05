<template>
  <nhs-table
    :headers="headers"
    :data="data"
    heading="Conditions similar to impetigo"
    caption="Other possible causes of your symptoms"
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
        data: [
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
        headers: [ 'Symptoms', 'Possible cause' ]
      }
    }
  }
</script>
