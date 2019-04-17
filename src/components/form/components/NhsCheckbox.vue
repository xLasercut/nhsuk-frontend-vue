<template>
  <div class="nhsuk-checkboxes__item">
    <input class="nhsuk-checkboxes__input" :id="itemId()" :name="name" type="checkbox" :value="checkboxValue" v-model="model" :disabled="disabled" :aria-describedby="described()" v-bind="attributes">
    <slot name="label"></slot>
    <slot name="hint"></slot>
    <div class="nhsuk-checkboxes__conditional" :id="`conditional-${itemId()}`" v-if="model && conditional">
      {{conditional}}
    </div>
  </div>
</template>

<script>
  import AddModel from '../../mixins/add-model.js'

  export default {
    name: "NhsCheckbox",
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      checkboxValue: {
        type: String
      },
      name: {
        type: String,
        default: ""
      },
      id: {
        type: String,
        default: ""
      },
      conditional: {
        type: String,
        default: ""
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mixins: [AddModel],
    data() {
      return {
        idCache: this.id
      }
    },
    methods: {
      described() {
        var described = []

        if (this.$slots.hint) {
          described.push(`${this.itemId()}-hint`)
        }

        return described.join(" ")
      },
      itemId() {
        if (!this.idCache) {
          var random = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
          this.idCache = `${this.$options.name}_${random}`
        }
        
        if (this.$slots.label) {
          for (var label of this.$slots.label) {
            label.data.attrs["for"] = this.idCache
            label.data.attrs["class"] = "nhsuk-checkboxes__label"
          }
        }

        if (this.$slots.hint) {
          for (var hint of this.$slots.hint) {
            hint.data.attrs["class"] = "nhsuk-checkboxes__hint"
          }
        }

        return this.idCache
      }
    }
  }
</script>
