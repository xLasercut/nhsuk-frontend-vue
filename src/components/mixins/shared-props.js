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
      var extraClass = ""
      for (var cl of this.classes) {
        extraClass += ` ${cl}`
      }
      return extraClass
    }
  }
}