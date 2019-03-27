<template>
  <ul class="nhsuk-footer__list">
    <li class="nhsuk-footer__list-item" v-for="(link, index) in links" :key="index"><a class="nhsuk-footer__list-item-link" :href="link.url" >{{link.label}}</a></li>
  </ul>
</template>

<script>
  export default {
    props: ["links"]
  }
</script>

