export default {
  props: {
    id: {
      type: String,
      default() {
        var random = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
        return `${this.$options.name}-${random}`
      }
    }
  },
  computed: {
    hintId() {
      return `${this.id}-hint`
    },
    errorId() {
      return `${this.id}-error`
    },
    ariaDescribedby() {
      if (this.hint || this.error) {
        var describedby = []

        if (this.hint) {
          describedby.push(this.hintId)
        }

        if (this.error) {
          describedby.push(this.errorId)
        }

        return describedby.join(' ')
      }

      return null
    }
  }
}