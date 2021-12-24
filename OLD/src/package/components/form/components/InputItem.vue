<template>
  <div class="nhsuk-date-input__item">
    <form-item :error="false">
      <nhs-label class="nhsuk-date-input__label" :for="id" v-if="label">
        <slot name="item-label">{{label}}</slot>
      </nhs-label>
      <input
        :class="classes"
        :id="id"
        :name="name"
        :type="type"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        v-model="model"
      >
    </form-item>
  </div>
</template>

<script>
  import { NhsLabel } from '../../typography'
  import FormItem from 'nhsuk-frontend-vue/src/shared/form/FormItem.vue'
  import VModel from '../mixins/v-model.js'

  const widths = ['2', '3', '4', '5', '10', '20']

  export default {
    components: { NhsLabel, FormItem },
    mixins: [ VModel ],
    props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      width: {
        type: String,
        validator(val) {
          return widths.includes(val)
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String
      },
      autocomplete: {
        type: String
      },
      rules: {
        type: Array,
        default() {
          return []
        }
      },
      inputmode: {
        type: String
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-input nhsuk-date-input__input' ]

        if (this.width) {
          classes.push(`nhsuk-input--width-${this.width}`)
        }

        if (this.error) {
          classes.push('nhsuk-input--error')
        }

        return classes.join(' ')
      }
    },
    watch: {
      model() {
        this.$emit('validate')
      }
    },
    data() {
      return {
        error: false
      }
    },
    methods: {
      validate() {
        this.error = false
        for (var i = 0; i < this.rules.length; i++) {
          var result = this.rules[i](this.model)
          if (result != true) {
            this.error = true
            this.$emit('update:error', result)
            return false
          }
        }
        return true
      },
      resetError() {
        this.error = false
      }
    }
  }
</script>
