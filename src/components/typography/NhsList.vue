<script>
  export default {
    name: "NhsList",
    props: {
      type: {
        type: String,
        default: "bullet"
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      listType() {
        var baseType = "nhsuk-list"
        var secondaryType = " nhsuk-list--bullet"
        switch (this.type) {
          case "number":
            secondaryType = " nhsuk-list--number"
            break
          case "error":
            secondaryType = " nhsuk-error-summary__list"
            break
          default:
            secondaryType = " nhsuk-list--bullet"
            break
        }
        return `${baseType}${secondaryType}${this.extraClasses}`
      }
    },
    render(createElement) {
      var attrs = this.attributes
      attrs["class"] = this.listType
      
      if (this.type === "number") {
        return createElement('ol', { attrs: attrs }, this.$slots.default)
      }
      else {
        return createElement('ul', { attrs: attrs }, this.$slots.default)
      }
    }
  }
</script>