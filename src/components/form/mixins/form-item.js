import FormItem from '../shared/FormItem.vue'

export default {
  components: {
    FormItem
  },
  props: {
    attributes: {
      type: Object,
      default() {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {}
  },
  data() {
    return {
      model: this.value,
      idCache: this.id
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
    described() {
      var describedBy = []
      var errorId = `${this.itemId()}-error`
      var hintId = `${this.itemId()}-hint`

      if (this.$slots.hint) {
        describedBy.push(hintId)
      }

      if (this.error()) {
        describedBy.push(errorId)
      }
      return describedBy.join(" ")
    },
    error() {
      if (this.$slots.error) {
        return true
      }
      return false
    },
    itemId() {
      if (!this.idCache) {
        var random = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
        this.idCache = `${this.$options.name}_${random}`
      }

      if (this.$slots.label) {
        for (var i = 0; i < this.$slots.label.length; i++) {
          var label = this.$slots.label[i]
          label.data.attrs["for"] = this.idCache
        }
      }

      if (this.$slots.error) {
        for (var i = 0; i < this.$slots.error.length; i++) {
          var error = this.$slots.error[i]
          error.data.attrs["id"] = `${this.idCache}-error`
        }
      }

      if (this.$slots.hint) {
        for (var i = 0; i < this.$slots.hint.length; i++) {
          var hint = this.$slots.hint[i]
          hint.data.attrs["id"] = `${this.idCache}-hint`
        }
      }

      return this.idCache
    }
  }

}