<template>
  <nhs-row>
    <nhs-col>
      <div class="example_container">
        <component :is="getExampleModule(name)"></component>
      </div>
      <div class="expand_container" :style="expandContainerStyle">
        <code-block-tab :id="`${name}-template`" v-model="showTemplate" v-if="template">
          Template
        </code-block-tab>
        <code-block-tab :id="`${name}-script`" v-model="showScript" v-if="script">
          Script
        </code-block-tab>
      </div>
      <div class="code_container" :style="codeContainerStyle">
        <highlightjs language="xml" :code="template" v-if="showTemplate">
        </highlightjs>
        <highlightjs language="typescript" :code="script" v-if="showScript">
        </highlightjs>
      </div>
    </nhs-col>
  </nhs-row>
</template>

<script lang="ts">
import CodeBlockTab from './code-block/CodeBlockTab.vue'
import {computed, defineComponent, reactive, toRefs, watch} from 'vue'
import {getExampleCode} from '../../assets/example-strings'
import {getExampleModule} from '../../assets/example-modules'


export default defineComponent({
  components: { CodeBlockTab },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {templateCode, scriptCode} = getExampleCode(props.name)

    const state = reactive({
      template: templateCode,
      script: scriptCode,
      showTemplate: false,
      showScript: false
    })

    const codeContainerStyle = computed(() => {
      if (!state.showTemplate && !state.showScript) {
        return {
          'display': 'none',
          'margin-bottom': '0px'
        }
      }
      return {}
    })

    const expandContainerStyle = computed(() => {
      if (!state.showTemplate && !state.showScript) {
        return {
          'border-bottom': '1px solid #d8dde0',
          'margin-bottom': '40px'
        }
      }
      return {}
    })

    watch(() => state.showTemplate, (val) => {
      if (val && state.showScript) {
        state.showScript = false
      }
    })

    watch(() => state.showScript, (val) => {
      if (val && state.showTemplate) {
        state.showTemplate = false
      }
    })

    return {getExampleModule, ...toRefs(state), codeContainerStyle, expandContainerStyle}
  }
})
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
