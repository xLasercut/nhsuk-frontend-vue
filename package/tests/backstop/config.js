let config = require('./backstop.js')
const urlMap = require('./url-map.js')

for (let item of config.scenarios) {
  for (const key in urlMap) {
    if (item.url.includes(key)) {
      item.url = item.url.replace(key, `#/${urlMap[key]}`).replace(':3000', ':8080')
    }
  }

  if (item.clickSelector) {
    item['postInteractionWait'] = 2000
  }
}

module.exports = config
