<template>
  <component :is="icon"/>
</template>

<script>
  import icons from './icons/icons.js'

  export default {
    name: "NhsIcon",
    props: {
      icon: {
        type: String,
        required: true
      }
    },
    components: icons
  }
</script>