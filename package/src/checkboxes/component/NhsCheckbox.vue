<template>
  <div class="nhsuk-checkboxes__item">
    <input
      class="nhsuk-checkboxes__input"
      :id="id"
      :name="name"
      type="checkbox"
      :value="checkboxValue"
      v-model="internalModel"
      v-bind="attributes"
      ref="checkbox"
      @change="updateChecked"
      @blur="$emit('blur', id)"
      @focus="$emit('focus', id)"
    />
    <nhs-label :for="id" class="nhsuk-checkboxes__label">
      <slot name="item-label">{{ label }}</slot>
    </nhs-label>
    <nhs-hint-text element="div" v-if="hint" :id="hintId()" class="nhsuk-checkboxes__hint">
      <slot name="item-hint">{{ hint }}</slot>
    </nhs-hint-text>
  </div>
  <div class="nhsuk-checkboxes__conditional" :id="`conditional-${id}`" v-if="showConditional()">
    <slot name="item-conditional"></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import NhsHintText from '../../hint-text/NhsHintText.vue';
import NhsLabel from '../../label/NhsLabel.vue';
import { getInternalModel } from '../../shared/form/v-model';

export default defineComponent({
  inheritAttrs: false,
  emits: ['update:model-value', 'blur', 'change', 'focus'],
  props: {
    checkboxValue: {
      type: String
    },
    hint: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false;
      }
    },
    id: {
      type: String,
      required: true
    },
    modelValue: {
      required: true
    },
    conditional: {
      type: Boolean,
      default: (): boolean => {
        return false;
      }
    }
  },
  components: { NhsLabel, NhsHintText },
  setup(props, context) {
    const checkbox = ref(null);
    const state = reactive({
      isChecked: false
    });
    const internalModel = getInternalModel(props, context);
    function showConditional(): boolean {
      return props.conditional && state.isChecked;
    }

    const attributes = computed(() => {
      const attributes: { [key: string]: any } = {};
      if (props.disabled) {
        attributes['disabled'] = true;
      }

      if (props.hint) {
        attributes['aria-describedby'] = hintId();
      }

      return attributes;
    });

    function hintId(): string {
      return `${props.id}-hint`;
    }

    onMounted(() => {
      if (checkbox.value) {
        state.isChecked = checkbox.value['checked'];
      }
    });

    function updateChecked(event: any) {
      if (event.target) {
        state.isChecked = event.target.checked;
      }
      context.emit('change', props.id);
    }

    return {
      hintId,
      internalModel,
      attributes,
      showConditional,
      checkbox,
      updateChecked
    };
  }
});
</script>
