import { SetupContext } from 'vue'

function itemGroupItemId(id: string, index: number): string {
  return `${id}-${index}`
}

function getItemGroupFormEvents(context: SetupContext<any>) {
  function onBlur(id: string, index: number): void {
    context.emit('blur', itemGroupItemId(id, index))
  }

  function onFocus(id: string, index: number): void {
    context.emit('focus', itemGroupItemId(id, index))
  }

  function onChange(id: string, index: number): void {
    context.emit('change', itemGroupItemId(id, index))
  }

  return { onBlur, onFocus, onChange }
}

export { itemGroupItemId, getItemGroupFormEvents }
