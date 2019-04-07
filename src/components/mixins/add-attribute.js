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
  methods: {
    addClass(baseClass) {
      if (this.classes.length > 0) {
        return `${baseClass} ${this.classes.join(" ")}`
      }
      return baseClass
    }
  }
}