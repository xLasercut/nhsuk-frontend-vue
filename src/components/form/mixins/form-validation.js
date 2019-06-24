export default {
  props: {
    rules: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      error: false,
      errorMsg: ''
    }
  },
  methods: {
    validate() {
      this.error = false
      for (var rule of this.rules) {
        var result = rule(this.model)
        if (result != true) {
          this.error = true
          this.errorMsg = result
        }
      }
      return this.error
    }
  }
}