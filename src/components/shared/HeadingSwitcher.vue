<script>
  const levels = [1, 2, 3, 4, 5]

  export default {
    name: "HeadingSwitcher",
    props: {
      headingLevel: {
        type: Number,
        required: true,
        validator(val) {
          return levels.includes(val)
        }
      }
    },
    render(createElement) {
      return createElement('h' + this.headingLevel, this.$slots.default)
    }
  }
</script>