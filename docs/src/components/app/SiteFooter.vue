<template>
  <nhs-footer v-if="showFooter" @click="onSubmit">
    <nhs-footer-item v-for="(item, index) in footerLinks" :key="index" :href="item.href">
      {{item.text}}
    </nhs-footer-item>
  </nhs-footer>
  <nhs-form @submit="onSubmit()" v-model:valid="valid">
    <nhs-input v-model="inputText" :rules="rules"></nhs-input>
    <nhs-input hint="test" v-model="inputText2" :error="error"></nhs-input>
    <button type="submit">submit</button>
  </nhs-form>
  {{inputText}}
  <br>
  {{ valid }}
</template>

<script lang="ts">
import {computed, defineComponent, provide, reactive, toRefs} from 'vue'
import router from '../../router'

export default defineComponent({
  setup() {

    const state = reactive({
      footerLinks: [
        {
          text: "Github",
          href: "https://github.com/xLasercut/nhsuk-frontend-vue"
        }
      ],
      validate: () => {
        console.log('validate')
      },
      valid: true,
      inputText: '',
      inputText2: '',
      error: false,
      rules: [
        (v: string) => !!v || 'required field'
      ]
    })


    function onSubmit() {
      console.log('test')
    }

    const showFooter = computed((): boolean => {
      return !router.currentRoute.value.fullPath.includes('/examples/')
    })

    return {...toRefs(state), showFooter, onSubmit}
  }
})
</script>
