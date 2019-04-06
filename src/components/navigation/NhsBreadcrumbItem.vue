<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsBreadcrumbItem",
    props: {
      type: {
        type: String,
        default: "item"
      },
      to: {
        type: String,
        default: ""
      }
    },
    render(createElement) {
      var linkAttrs = {
        attrs: {
          class: this.itemClass,
          to: this.to
        }
      }

      var link = createElement(LinkSwitcher, linkAttrs, this.$slots.default)

      if (this.type === "back") {
        return link
      }
      else {
        return createElement('li', { attrs: { class: "nhsuk-breadcrumb__item" } }, [link])
      }
    },
    computed: {
      itemClass() {
        switch (this.type) {
          case "back":
            return "nhsuk-breadcrumb__backlink"
          default: 
            return "nhsuk-breadcrumb__link"
        }
      }
    }
  }
</script>