<script>
  export default {
    name: "HeadingSwitcher",
    props: {
      headingLevel: {
        type: Number,
        required: true
      }
    },
    render(createElement) {
      return createElement('h' + this.headingLevel, this.$slots.default)
    }
  }
</script>