<template>
  <nhs-main>
    <code-block file="CardBasic" />
    <code-block file="CardClickable" />
    <code-block file="CardImage" />
    <code-block file="CardFeature" />
    <code-block file="CardGroup" />

    <argument-table heading="card" :data-props="props" :data-slots="slots" />
    <argument-table heading="card-group" :data-props="props" :data-slots="slots" />
  </nhs-main>
</template>

<script>
export default {
  data() {
    return {
      props: [],
      slots: []
    }
  }
}
</script>
