<template>
  <nhs-row>
    <nhs-col>
      <div class="example_container">
        <example-loader :file="file"/>
      </div>
      <div class="expand_container" :style="expandContainerStyle">
        <code-block-tab :id="`${file}-template`" v-model="showTemplate" v-show="template">
          Template
        </code-block-tab>
        <code-block-tab :id="`${file}-script`" v-model="showScript" v-show="script">
          Script
        </code-block-tab>
      </div>
      <div class="code_container" :style="codeContainerStyle">
        <highlight-code :code="template" lang="html" v-show="showTemplate">
        </highlight-code>
        <highlight-code :code="script" lang="js" v-show="showScript">
        </highlight-code>
      </div>
    </nhs-col>
  </nhs-row>
</template>

<script>
  import axios from 'axios'
  import ExampleLoader from './ExampleLoader.vue'
  import CodeBlockTab from './CodeBlockTab.vue'

  const template = new RegExp('(?:\\<template\\>)([^]+)(?:\\<\\/template\\>)', 'i')
  const script = new RegExp('(?:\\<script\\>)([^]+)(?:\\<\\/script\\>)', 'i')

  export default {
    components: { ExampleLoader, CodeBlockTab },
    props: {
      file: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        template: '',
        script: '',
        showTemplate: false,
        showScript: false
      }
    },
    watch: {
      showTemplate(val) {
        if (val && this.showScript) {
          this.showScript = false
        }
      },
      showScript(val) {
        if (val && this.showTemplate) {
          this.showTemplate = false
        }
      }
    },
    computed: {
      codeContainerStyle() {
        if (!this.showTemplate && !this.showScript) {
          return {
            'display': 'none',
            'margin-bottom': '0px'
          }
        }
        return {}
      },
      expandContainerStyle() {
        if (!this.showTemplate && !this.showScript) {
          return {
            'border-bottom': '1px solid #d8dde0',
            'margin-bottom': '40px'
          }
        }
        return {}
      }
    },
    mounted() {
      axios.get(`./examples/${this.file}.vue`)
      .then((response) => {
        var match = template.exec(response.data)
        if (match) {
          this.template = match[1].replace('<div>', '').replace('</div>', '')
        }

        match = script.exec(response.data)
        if (match) {
          this.script = match[1]
        }
      })
    }
  }
</script>

<style scoped>
  .example_container {
    width: 100%;
    background: #f0f4f5;
    border: 1px solid #d8dde0;
    border-bottom: none;
    margin: 0;
    padding: 20px;
  }

  .code_container {
    border: 1px solid #d8dde0;
    background: #f0f4f5;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
  }

  .expand_container {
    width: 100%;
    border-left: 1px solid #d8dde0;
    border-right: 1px solid #d8dde0;
    border-top: 1px solid #d8dde0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  pre {
    padding: 0;
    margin: 0;
  }
</style>
