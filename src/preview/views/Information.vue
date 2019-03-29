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

        if (this.$route.name !== "Information") {
          breadcrums.push({
            url: "/information/home",
            label: "Information"
          })
        }
        
        breadcrums.push({
          url: "",
          label: this.$route.name
        })
        
        return breadcrums
      },
      breadcrumback() {
        if (this.$route.name !== "Information") {
          return {
            url: "/information/home",
            label: "Back to Information"
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