<template>
  <router-link :to="href" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        required: true
      }
    },
    inheritAttrs: false
  }
</script>
