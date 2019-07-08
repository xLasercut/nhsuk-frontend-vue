<template>
  <nhs-header show-nav show-search :search-config="searchConfig">
    <nhs-header-item href="https://www.nhs.uk/conditions">
      Health A-Z
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/live-well/">
      Live Well
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/conditions/social-care-and-support/">
      Care and support
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/news/">
      Health news
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/service-search">
      Services near you
    </nhs-header-item>
  </nhs-header>
</template>

<script>
  export default {
    data() {
      return {
        searchConfig: {
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
        var allRoutes = [ 'a', 'b', 'c' ]
        for (var i = 0; i < allRoutes.length; i++) {
          if (allRoutes[i].includes(query)) {
            results.push(allRoutes[i])
          }
        }
        callback(results)
      }
    }
  }
</script>