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
      for (var i = 0; i < this.rules.length; i++) {
        var result = this.rules[i](this.model)
        if (result != true) {
          this.error = true
          this.errorMsg = result
        }
      }
      return !this.error
    }
  }
}