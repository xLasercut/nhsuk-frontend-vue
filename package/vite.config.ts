import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    cssCodeSplit: false,
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'nhsuk-frontend-vue'
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'vue',
          'vue-router': 'vue-router'
        },
        assetFileNames: `nhsuk-frontend-vue.[ext]`
      }
    }
  },
  plugins: [
    vue()
  ]
})
