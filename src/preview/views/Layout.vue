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
    computed: {
      breadcrums() {
        var breadcrums = [
          {
            url: "/",
            label: "Home"
          }
        ]

        if (this.$route.name !== "Layout") {
          breadcrums.push({
            url: "/layout/home",
            label: "Layout"
          })
        }
        
        breadcrums.push({
          url: "",
          label: this.$route.name
        })
        
        return breadcrums
      },
      breadcrumback() {
        if (this.$route.name !== "Layout") {
          return {
            url: "/layout/home",
            label: "Back to Layout"
          }
        }

        return {
          url: "/",
          label: "Back to Home"
        }
      }
    }
  }
</script>