/*
 * @Author: @hjj
 * @Data: Do not edit
 * @LastEditTime: 2023-03-10 16:07:32
 * @LastEditors: @hjj
 * @Description: 
 * @FilePath: \vite-project\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true
  }
})
