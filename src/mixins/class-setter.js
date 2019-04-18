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

      if (this.$attrs.addclass && !this.classSet) {
        
        if (attrs.class) {
          classes.push(attrs.class)
        }
        
        classes.push(this.$attrs.addclass)
        
        attrs["class"] = classes.join(" ")
        this.classSet = true
      }
      return attrs
    }
  }
}