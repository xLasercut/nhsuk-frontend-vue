<template>
  <section :style="sectionStyle">
    <nhs-main>
      <nhs-row>
        <nhs-col :span="66">
          <router-view />
        </nhs-col>
      </nhs-row>
    </nhs-main>
  </section>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: true
      }
    },
    computed: {
      sectionStyle() {
        return {
          'background-color': this.color
        }
      }
    }
  }
</script>