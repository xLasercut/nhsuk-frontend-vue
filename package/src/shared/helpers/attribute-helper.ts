function getAttributes(disabled: boolean, attrs: any) {
  const attributes = Object.assign({}, attrs)
  if (disabled) {
    attributes['disabled'] = true
  }

  return attributes
}

export {getAttributes}
