<template>
  <nhs-main>
    <code-block file="Tag" />

    <argument-table heading="tag" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
export default {
  data() {
    return {
      props: [
        {
          name: 'color',
          type: 'string',
          description: 'Colour of the tags. Default: \'\''
        }
      ],
      slots: [
        {
          name: 'default',
          description: 'default vue slots'
        }
      ]
    }
  }
}
</script>
