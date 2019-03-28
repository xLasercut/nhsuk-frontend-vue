<template>
  <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <li class="nhsuk-breadcrumb__item" v-for="(link, index) in links" :key="breadcrumkey(index)"><a class="nhsuk-breadcrumb__link" :href="link.url">{{link.label}}</a></li>
      </ol>
      <p class="nhsuk-breadcrumb__back"><a class="nhsuk-breadcrumb__backlink" :href="backurl()">Back to {{backlabel()}}</a></p>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ["links"],
    methods: {
      breadcrumkey(index) {
        return `breadcrum_${index}`
      },
      backurl() {
        return this.links[this.links.length - 1]["url"]
      },
      backlabel() {
        return this.links[this.links.length - 1]["label"]
      }
    }
  }
</script>