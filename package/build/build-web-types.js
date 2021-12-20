const fs = require('fs')
const path = require('path')

const PROJECT_ROOT = path.join(__dirname, '..')
const SRC = path.join(PROJECT_ROOT, 'src')
const DIST = path.join(PROJECT_ROOT, 'dist')
const PACKAGE = require(path.join(PROJECT_ROOT, 'package.json'))

function getComponentJson() {
  const componentJsons = []

  const componentFolders = fs.readdirSync(SRC)
    .filter((item) => {
      return !item.includes('.ts')
    })
    .map((item) => {
      return path.join(SRC, item)
    })

  for (const folder of componentFolders) {
    for (const file of fs.readdirSync(folder)) {
      if (file.includes('.json')) {
        componentJsons.push(require(path.join(folder, file)))
      }
    }
  }

  return componentJsons
}

const webTypes = {
  '$schema': 'http://json.schemastore.org/web-types',
  name: 'nhsuk-frontend-vue',
  framework: 'vue',
  version: PACKAGE.version,
  contributions: {
    html: {
      'types-syntax': 'typescript',
      tags: getComponentJson()
    }
  }
}

fs.writeFileSync(path.join(DIST, 'web-types.json'), JSON.stringify(webTypes, null, 2))
