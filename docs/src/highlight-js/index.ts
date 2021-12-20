import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('typescript', typescript)

export default hljsVuePlugin
