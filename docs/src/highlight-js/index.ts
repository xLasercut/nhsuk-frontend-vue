import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)

export default hljsVuePlugin
