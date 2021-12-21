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

export {filterRoutes}
