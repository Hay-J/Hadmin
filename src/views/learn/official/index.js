/*
 * @Author: @huangjunjian
 * @Data: Do not edit
 * @LastEditTime: 2023-03-31 23:29:46
 * @LastEditors: @huangjunjian
 * @Description:
 * @FilePath: \vite-project\src\views\learn\official\index.js
 */
import { nextTick } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export default function () {
  // 渲染器
  const renderer = new THREE.WebGLRenderer();
  nextTick(() => {
    const el = document.getElementById('three');
    renderer.setSize(1000, 1000);
    el.appendChild(renderer.domElement);
  });

  // 相机
  const camera = new THREE.PerspectiveCamera(30, 1000 / 1000, 1, 500);
  camera.position.set(100, 100, 100);
  // camera.lookAt(-200, -200, -200);
  console.log(camera);

  // 场景
  const scene = new THREE.Scene();

  // 材质
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0 });

  const geometry = new THREE.BoxGeometry(10, 10, 10);

  const cube = new THREE.Mesh(geometry, material);
  // mesh.position.set(0, 0, 0);
  scene.add(cube);

  // 坐标轴
  const axesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);

  const controls = new OrbitControls(camera, renderer.domElement);
  // 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
  controls.enableDamping = true;

  const light = new THREE.DirectionalLight(0xff0000, 1);
  light.position.set(20, 20, 20);
  scene.add(light);
  console.log(scene);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update()
  }
  animate();
}
