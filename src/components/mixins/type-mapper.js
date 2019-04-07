export default {
  computed: {
    componentType() {
      if (this.type.toLowerCase() in this.typeMap) {
        return this.typeMap[this.type.toLowerCase()]
      }
      return this.defaultType
    }
  }
}