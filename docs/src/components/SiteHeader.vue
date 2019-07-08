<template>
  <nhs-header show-nav show-search :service="service" :search-config="config">
    <nhs-header-item v-for="(item, index) in headerLinks" :key="index" :href="item.href">
      {{item.text}}
    </nhs-header-item>
  </nhs-header>
</template>

<script>
  import RouteHelper from '../assets/mixins/route-helper.js'

  export default {
    mixins: [ RouteHelper ],
    data() {
      return {
        headerLinks: [
          {
            text: "Layout",
            href: "/layout"
          },
          {
            text: "Information",
            href: "/information"
          },
          {
            text: "Navigation",
            href: "/navigation"
          },
          {
            text: "Form",
            href: "/form"
          },
          {
            text: "Typography",
            href: "/typography"
          }
        ],
        service: {
          name: "Unofficial NHS UK frontend vue component library",
          longName: true
        },
        config: {
          onConfirm: (SelectedContent) => {
            this.$router.push({ name: SelectedContent })
          },
          source: this.searchResults
        }
      }
    },
    methods: {
      searchResults(query, callback) {
        var results = []
        var allRoutes = this.getAllRoutes()
        for (var i = 0; i < allRoutes.length; i++) {
          if (query) {
            if (allRoutes[i].name.toLowerCase().includes(query.toLowerCase())) {
              results.push(allRoutes[i].name)
            }
          }
        }
        callback(results)
      }
    }
  }
</script>