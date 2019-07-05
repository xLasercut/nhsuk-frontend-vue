<template>
  <nhs-table
    :headers="headers"
    :data="data"
    caption="Skin symptoms and possible causes"
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
        headers: [ 'Skin symptoms', 'Possible cause' ]
      }
    }
  }
</script>
