export default {
  props: {
    id: {
      type: String,
      default() {
        var random = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
        return `${this.$options.name}_${random}`
      }
    },
    attributes: {
      type: Object,
      default() {
        return {}
      }
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {}
  },
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
      this.$emit("input", val)
    }
  },
  methods: {
    described(type) {
      var described = []
      var hintId = `${this.id}-hint`

      if (this.$slots.hint) {
        described.push(hintId)
        this.addAttrs(hintId, `${type}__hint`, this.$slots.hint)
      }

      if (this.$slots.label) {
        for (var i = 0; i < this.$slots.label.length; i++) {
          var label = this.$slots.label[i]
          label.data.attrs['for'] = this.id
          label.data.attrs['add-class'] = `${type}__label`
        }
      }

      return described.join(' ')
    },
    addAttrs(id, addClass, slots) {
      for (var i = 0; i < slots.length; i++) {
        var slotItem = slots[i]
        slotItem.data.attrs['id'] = id
        slotItem.data.attrs['add-class'] = addClass
      }
    }
  }
}