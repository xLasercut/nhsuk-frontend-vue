<script>
  export default {
    name: "LinkSwitcher",
    props: {
      href: {
        type: String,
        default: ""
      }
    },
    render(createElement){
      if (this.href === "") {
        return createElement('div', this.$slots.default)
      }
      else if (this.isRouter) {
        return createElement('router-link', { attrs: { to: this.href } }, this.$slots.default)
      }
      else {
        return createElement('a', { attrs: { href: this.href } }, this.$slots.default)
      }
    },
    computed: {
      isRouter() {
        var urlPattern = /^((http|https|ftp):\/\/)/
        if (this.$router && !urlPattern.test(this.href)) {
          return true
        }
        return false
      }
    }
  }
</script>