function filterRoutes(item: Array<any>, names: Array<string>): Array<any> {
  return item
    .filter((route) => {
      return !names.includes(route.name)
    })
    .sort((a, b) => {
      if (a.name < b.name)
        return -1
      if (a.name > b.name)
        return 1
      return 0
    })
}

function setPageColor(color: string = ''): void {
  const page = document.querySelector('html')
  if (page) {
    if (color) {
      page.setAttribute('style', `background-color: ${color};`)
    }
    else {
      page.setAttribute('style', '')
    }

  }
}

export {filterRoutes, setPageColor}
