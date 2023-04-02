/*
 * @Author: @hjj
 * @Data: Do not edit
 * @LastEditTime: 2023-03-09 22:46:23
 * @LastEditors: @hjj
 * @Description: 
 * @FilePath: \vite-project\src\vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
