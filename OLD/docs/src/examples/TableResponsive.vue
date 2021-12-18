<template>
  <nhs-table
    :headers="headers"
    :data="data"
    caption="Ibuprofen syrup dosages for children"
  >
  </nhs-table>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          age: '3 to 5 months (weighing more than 5kg)',
          howMuch: '2.5ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '6 to 11 months',
          howMuch: '2.5l',
          howOften: 'Max 3 to 4 times in 24 hours'
        },
        {
          age: '1 to 3 years',
          howMuch: '5ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '4 to 6 years',
          howMuch: '7.5ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '7 to 9 years',
          howMuch: '10ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '10 to 11 years',
          howMuch: '15ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '12 to 17 years',
          howMuch: '15ml to 20ml',
          howOften: 'Max 3 to 4 times in 24 hours'
        }
      ],
      headers: [
        {
          text: 'Age',
          value: 'age'
        },
        {
          text: 'How much?',
          value: 'howMuch'
        },
        {
          text: 'How often?',
          value: 'howOften'
        }
      ]
    }
  }
}
</script>
