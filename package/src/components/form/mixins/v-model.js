export default {
  props: [ 'value' ],
  data() {
    return {
      model: this.value
    }
  },
  watch: {
    value(val) {
      this.model = val
    },
    model(val) {
      this.$emit('input', val)
    }
  }
}