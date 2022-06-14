import { computed, Ref } from 'vue'
import { NhsVueProp } from '../interface'

function hintId(id: string): string {
  return `${id}-hint`
}

function errorId(id: string): string {
  return `${id}-error`
}

function getAriaDescribedBy(props: NhsVueProp, error: Ref) {
  return computed((): string => {
    const describedby = []

    if (props.hint) {
      describedby.push(hintId(props.id))
    }

    if (error.value) {
      describedby.push(errorId(props.id))
    }

    return describedby.join(' ')
  })
}

function getItemGroupAriaDescribedBy(props: NhsVueProp, errorStatus: Function) {
  return computed((): string => {
    const describedby = []

    if (props.hint) {
      describedby.push(hintId(props.id))
    }

    if (errorStatus()) {
      describedby.push(errorId(props.id))
    }

    return describedby.join(' ')
  })
}

export { hintId, errorId, getAriaDescribedBy, getItemGroupAriaDescribedBy }
