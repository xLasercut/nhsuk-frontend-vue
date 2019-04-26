export default {
  data() {
    return {
      classSet: false
    }
  },
  methods: {
    attrs() {
      var attrs = this.attributes
      var classes = []

      if (this.$attrs['add-class'] && !this.classSet) {

        if (attrs.class) {
          classes.push(attrs.class)
        }

        classes.push(this.$attrs['add-class'])

        attrs['class'] = classes.join(' ')
        this.classSet = true
      }
      return attrs
    }
  }
}