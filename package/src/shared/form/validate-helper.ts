function validate(value: any, rules: Array<Function>) {
  for (const rule of rules) {
    const result = rule(value)
    if (typeof result === 'string') {
      return {
        errorMsg: result,
        error: true
      }
    }
  }

  return {
    errorMsg: '',
    error: false
  }
}

export {validate}
