<template>
  <nhs-row>
    <nhs-col>
      <div class="example_container">
        <example-loader :file="file"/>
      </div>
      <div class="expand_container" :style="expandContainerStyle">
        <button class="expand_button" @click="toggleCode('template')" v-show="template">Template</button>
        <button class="expand_button" @click="toggleCode('script')" v-show="script">Script</button>
      </div>
      <div class="code_container" :style="codeContainerStyle">
        <highlight-code :code="template" lang="html" v-show="display == 'template'">
        </highlight-code>
        <highlight-code :code="script" lang="js" v-show="display == 'script'">
        </highlight-code>
      </div>
    </nhs-col>
  </nhs-row>
</template>

<script>
  import axios from 'axios'
  import ExampleLoader from './ExampleLoader.vue'

  const template = new RegExp('(?:\\<template\\>)([^]+)(?:\\<\\/template\\>)', 'i')
  const script = new RegExp('(?:\\<script\\>)([^]+)(?:\\<\\/script\\>)', 'i')

  export default {
    components: { ExampleLoader },
    props: {
      file: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        display: '',
        template: '',
        script: ''
      }
    },
    methods: {
      toggleCode(type) {
        if (this.display === type) {
          this.display = ''
        }
        else {
          this.display = type
        }
      }
    },
    computed: {
      codeContainerStyle() {
        if (!this.display) {
          return {
            'display': 'none',
            'margin-bottom': '0px'
          }
        }
      },
      expandContainerStyle() {
        if (!this.display) {
          return {
            'border-bottom': '1px solid #d8dde0',
            'margin-bottom': '40px'
          }
        }
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
  }

  .expand_button {
    border: none;
    border-bottom: 5px solid #005eb8;
    background: #f0f4f5;
    cursor: pointer;
    outline: none;
    padding: 10px;
    margin-right: 3px;
  }

  .expand_button:hover {
    outline: 3px solid #ffb81c;
  }

  .expand_button:focus {
    outline: 3px solid #ffb81c;
  }

  .code_tab {
    background: none;
    border: none;
    padding: 10px;
  }

  pre {
    padding: 0;
    margin: 0;
  }

  input {
    display: none;
  }

  input:checked+label {
    background: gray;
  }
</style>