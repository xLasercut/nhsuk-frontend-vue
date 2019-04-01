export default {
  props: {
    id: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      itemId: this.id
    }
  },
  mounted() {
    if (!this.itemId) {
      var random = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
      this.itemId = `${this.$options.name}_${random}`
    }
  }
}