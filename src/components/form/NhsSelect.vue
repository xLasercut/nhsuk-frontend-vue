<template>
  <select class="nhsuk-select" :id="id" v-model="model">
    <slot></slot>
  </select>
</template>

<script>
  import AddModel from '@/components/mixins/add-model.js'

  export default {
    name: "NhsSelect",
    props: ["id"],
    mixins: [AddModel]
  }
</script>