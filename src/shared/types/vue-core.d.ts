declare module 'vue' {
  import { Component } from 'vue'
  
  export interface Ref<T = any> {
    value: T
  }
  
  export interface ComputedRef<T = any> {
    readonly value: T
  }
  
  export function ref<T>(value: T): Ref<T>
  
  export function computed<T>(getter: () => T): ComputedRef<T>
  
  export function watch<T>(
    source: Ref<T> | (() => T),
    callback: (newValue: T, oldValue: T) => void,
    options?: {
      deep?: boolean
    }
  ): () => void
  
  export function onMounted(callback: () => void): void
  
  export interface App {
    use(plugin: any): App
    mount(el: string | Element): void
  }
  
  export function createApp(rootComponent: Component): App
  
  export type DefineComponent<Props = {}, Emits = {}, Setup = {}> = Component
} 