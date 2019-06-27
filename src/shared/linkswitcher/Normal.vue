<template>
  <a :href="href" @click.native="$emit('click')">
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
    }
  }
</script>