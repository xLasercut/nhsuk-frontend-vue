<template>
  <div>
    <nhs-breadcrumb>
      <nhs-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :href="item.href">
        {{item.text}}
      </nhs-breadcrumb-item>
      <nhs-breadcrumb-backlink slot="backlink" :href="breadcrumbback.href">
        {{breadcrumbback.text}}
      </nhs-breadcrumb-backlink>
    </nhs-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      getAllRoutes() {
        var mainRoutes = this.$router.options.routes
        for (var mainRoute of mainRoutes) {
          if (mainRoute.path === "/section") {
            var childRoutes = mainRoute.children
          }
        }
        return mainRoutes.concat(childRoutes)
      },
      getRouteObject(routes, path) {
        for (var route of routes) {
          if (route.path === path) {
            return {
              href: route.path,
              text: route.name
            }
          }
        }
      }
    },
    computed: {
      breadcrumbs() {
        var breadcrums = []
        var allRoutes = this.getAllRoutes()
        var routes = this.$route.fullPath.split("/")
        for (var i = 0; i < routes.length - 1; i++) {
          var path = `/${routes[i]}`
          breadcrums.push(this.getRouteObject(allRoutes, path))
        }

        breadcrums.push({
          href: "",
          text: this.$route.name
        })

        return breadcrums
      },
      breadcrumbback() {
        var allRoutes = this.getAllRoutes()
        var routes = this.$route.fullPath.split("/")
        var backPath = `/${routes[routes.length - 2]}`
        var backRouteObj = this.getRouteObject(allRoutes, backPath)
        return {
          href: backRouteObj.href,
          text: `Back to ${backRouteObj.text}`
        }
      }
    }
  }
</script>