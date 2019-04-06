<script>
  export default {
    name: "LinkSwitcher",
    props: {
      to: {
        type: String,
        default: ""
      }
    },
    render(createElement){
      if (this.to === "") {
        return createElement('div', this.$slots.default)
      }
      else if (this.isRouter) {
        return createElement('router-link', { attrs: { to: this.to } }, this.$slots.default)
      }
      else {
        return createElement('a', { attrs: { href: this.to } }, this.$slots.default)
      }
    },
    computed: {
      isRouter() {
        var urlPattern = /^((http|https|ftp):\/\/)/
        if (this.$router && !urlPattern.test(this.to)) {
          return true
        }
        return false
      }
    }
  }
</script>