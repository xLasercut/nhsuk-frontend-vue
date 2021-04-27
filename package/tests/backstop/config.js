var config = require('./backstop.js')
const urlMap = require('./url-map.js')

for (var item of config.scenarios) {
  for (var key in urlMap) {
    if (item.url.includes(key)) {
      item.url = item.url.replace(key, `#/${urlMap[key]}`).replace(':3000', ':8080')
      if (item.url.includes('footer')) {
        console.log(item.url)
      }
    }
  }

  if (item.clickSelector) {
    item['postInteractionWait'] = 2000
  }
}

module.exports = config
