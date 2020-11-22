<template>
  <nhs-table
    :headers="headers"
    :data="data"
    heading="Conditions similar to impetigo"
    :responsive="false"
  >
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
        headers: [
          {
            text: 'Symptoms',
            value: 'symptoms'
          },
          {
            text: 'Possible cause',
            value: 'cause'
          }
        ]
      }
    }
  }
</script>
