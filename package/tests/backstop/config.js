var config = require('./backstop.js')
const urlMap = require('./url-map.js')

for (var item of config.scenarios) {
  for (var key in urlMap) {
    if (item.url.includes(key)) {
      item.url = item.url.replace(key, `#/${urlMap[key]}`)
    }
  }

  if (item.clickSelector) {
    item['postInteractionWait'] = 2000
  }
}

module.exports = config