<template>
  <nhs-table
    :headers="headers"
    :data="data"
    caption="Skin symptoms and possible causes"
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
            text: 'Skin symptoms',
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
