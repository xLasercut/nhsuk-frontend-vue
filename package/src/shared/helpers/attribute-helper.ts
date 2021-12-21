import {computed} from 'vue'

function disableAttributeHelper(disabled: boolean, attrs: any) {
  const attributes = computed(() => {
    const attributes = Object.assign({}, attrs)
    if (disabled) {
      attributes['disabled'] = true
    }

    return attributes
  })

  return {attributes}
}

export {disableAttributeHelper}
