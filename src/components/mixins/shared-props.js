export default {
  props: {
    classes: {
      type: Array,
      default() {
        return []
      }
    },
    attributes: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    extraClasses() {
      if (this.classes.length > 0) {
        return ` ${this.classes.join(" ")}`
      }
      return ""
    }
  }
}