import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@processes': path.resolve(__dirname, './src/processes'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Удаляем глобальный импорт, который вызывает циклическую зависимость
        // additionalData: `@use "@/app/styles/variables.scss" as *;`
      }
    }
  },
  define: {
    // Определяем переменную process для vuelidate
    'process.env': {}
  }
}) 