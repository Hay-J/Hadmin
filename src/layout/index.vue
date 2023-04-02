<!--
 * @Author: @hjj
 * @Data: Do not edit
 * @LastEditTime: 2023-03-10 10:48:58
 * @LastEditors: @hjj
 * @Description: 
 * @FilePath: \vite-project\src\layout\index.vue
-->
<template>
  <el-container>
    <!-- 侧边栏 -->
    <sidebar></sidebar>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import sidebar from '@/layout/sidebar.vue'
</script>