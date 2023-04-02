<!--
 * @Author: @huangjunjian
 * @Data: Do not edit
 * @LastEditTime: 2023-03-21 21:32:24
 * @LastEditors: @huangjunjian
 * @Description: 
 * @FilePath: \vite-project\src\views\login\index.vue
-->
<template>
  <div style="background-color: aquamarine;">login</div>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="ts" type="module">
import HelloWorld from '@/components/HelloWorld.vue'
// import * as THREE from 'three'
// import { ref, reactive, onMounted } from 'vue'

// const scene = new THREE.Scene()
// const camera = reactive(
//   new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   )
// )
// const renderer = new THREE.WebGLRenderer()
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(),
//   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// )

// const init = () => {
//   // 设置相机位置和朝向
//   // camera.position.set(0, 0, 5)
//   // camera.lookAt(0, 0, 0)
//   camera.position.z = 3;
//   // 添加渲染器到文档中
//   renderer.setSize(window.innerWidth, window.innerHeight)
//   document.body.appendChild(renderer.domElement)

//   // 添加立方体到场景中
//   scene.add(cube)
// }

// const animate = () => {
//   requestAnimationFrame(animate)
//   // 旋转立方体
//   cube.rotation.x += 0.01
//   cube.rotation.y += 0.01
//   // 更新相机矩阵
//   camera.lookAt(scene.position)
//   // 渲染场景
//   renderer.render(scene, camera)
// }

// onMounted(() => {
//   init()
//   animate()
// })
</script>

<style>
</style>