import {defineConfig} from 'vite'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
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
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue'
        },
        assetFileNames: `nhsuk-frontend-vue.[ext]`
      }
    }
  },
  plugins: [
    vue(),
    dts()
  ]
})
