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
      for (var rule of this.rules) {
        var result = rule(this.model)
        this.errorMsg = result
        this.error = (result != true)
      }
    }
  }
}