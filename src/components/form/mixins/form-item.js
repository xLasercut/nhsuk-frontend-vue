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
      default() {
        var random = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
        return `${this.$options.name}_${random}`
      }
    },
    name: {
      type: String,
      default: ''
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
      this.$emit('input', val)
    }
  },
  methods: {
    described() {
      var describedBy = []
      var errorId = `${this.id}-error`
      var hintId = `${this.id}-hint`

      if (this.$slots.label) {
        for (var i = 0; i < this.$slots.label.length; i++) {
          var label = this.$slots.label[i]
          label.data.attrs['for'] = this.id
        }
      }

      if (this.$slots.error) {
        describedBy.push(errorId)
        this.addId(errorId, this.$slots.error)
      }

      if (this.$slots.hint) {
        describedBy.push(hintId)
        this.addId(hintId, this.$slots.hint)
      }

      return describedBy.join(' ')
    },
    error() {
      if (this.$slots.error) {
        return true
      }
      return false
    },
    addId(id, slot) {
      for (var i = 0; i < slot.length; i++) {
        var slotItem = slot[i]
        slotItem.data.attrs['id'] = id
      }
    }
  }

}