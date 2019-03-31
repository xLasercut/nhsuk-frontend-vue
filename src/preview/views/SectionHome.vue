<template>
  <div>
    <nhs-breadcrum>
      <nhs-breadcrum-item slot="item" v-for="(item, index) in breadcrums" :to="item.url" :key="index">
        {{item.label}}
      </nhs-breadcrum-item>
      <nhs-breadcrum-back slot="back" :to="breadcrumback.url">
        {{breadcrumback.label}}
      </nhs-breadcrum-back>
    </nhs-breadcrum>
    <nhs-main>
      <router-view></router-view>
    </nhs-main>
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
              url: route.path,
              label: route.name
            }
          }
        }
      }
    },
    computed: {
      breadcrums() {
        var breadcrums = []
        var allRoutes = this.getAllRoutes()
        var routes = this.$route.fullPath.split("/")
        for (var i = 0; i < routes.length - 1; i++) {
          var path = `/${routes[i]}`
          breadcrums.push(this.getRouteObject(allRoutes, path))
        }

        breadcrums.push({
          url: "",
          label: this.$route.name
        })
        
        return breadcrums
      },
      breadcrumback() {
        var allRoutes = this.getAllRoutes()
        var routes = this.$route.fullPath.split("/")
        var backPath = `/${routes[routes.length - 2]}`
        var backRouteObj = this.getRouteObject(allRoutes, backPath)
        return {
          url: backRouteObj.url,
          label: `Back to ${backRouteObj.label}`
        }
      }
    }
  }
</script>