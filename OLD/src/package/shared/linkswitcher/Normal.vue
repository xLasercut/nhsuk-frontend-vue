<template>
  <a :href="href" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </a>
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
