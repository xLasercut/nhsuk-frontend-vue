<template>
  <form-item-group :error="error" :fieldset="fieldset" :hint="hint" type="input" id="NhsDateInput" :attributes="{}">
    <div class="nhsuk-date-input" v-bind="attributes" :id="id">
      <div class="nhsuk-date-input__item" v-for="(item, index) in items" :key="index">
        <nhs-label
          :attributes="item.label.attributes"
          :page-heading="item.label.pageHeading"
          :for="inputId(item)" v-if="item.label && item.label.text"
        >
          <slot name="label" :props="item.label">{{item.label.text}}</slot>
        </nhs-label>
        <input 
          :class="inputClass(item)" :id="inputId(item)" :name="item.name" type="number"
          v-bind="item.attributes" v-model.number="date[item.name]" 
          :disabled="item.disabled" 
          @blur="$emit('blur', item.name)" @focus="$emit('focus', item.name)"
        >
      </div>
    </div>
  </form-item-group>
</template>

<script>
  import FormItemGroup from './shared/FormItemGroup.vue'
  import NhsLabel from '../typography/NhsLabel.vue'

  export default { 
    name: "NhsDateInput",
    components: {
      FormItemGroup,
      NhsLabel
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      id: {
        type: String,
        default: ""
      },
      error: {
        typs: Object,
        default() {
          return {}
        }
      },
      fieldset: {
        type: Object
      },
      hint: {
        type: Object,
        default() {
          return {}
        }
      },
      items: {
        type: Array,
        default() {
          return [
            {
              name: "day",
              width: 2,
              label: {
                text: "Day"
              },
              attributes: {}
            },
            {
              name: "month",
              width: 2,
              label: {
                text: "Month"
              },
              attributes: {}
            },
            {
              name: "year",
              width: 4,
              label: {
                text: "Year"
              },
              attributes: {}
            }
          ]
        }
      },
      value: {}
    },
    data() {
      return {
        date: this.value
      }
    },
    watch: {
      date(val) {
        this.$emit("input", val)
      },
      value(val) {
        this.date = val
      }
    },
    methods: {
      inputId(item) {
        if (!item.id) {
          return `${this.id}-${item.name}`
        }
        return item.id
      },
      inputClass(item) {
        var baseClass = "nhsuk-input"

        if (item.width) {
          baseClass += ` nhsuk-input--width-${item.width}`
        }

        if (item.error) {
          baseClass += " nhsuk-input--error"
        }

        return baseClass
      }
    }
  }
</script>