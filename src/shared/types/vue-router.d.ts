declare module 'vue-router' {
  import { Component } from 'vue'
  
  export interface RouteMeta {
    title?: string
    [key: string]: any
  }
  
  export interface RouteRecordRaw {
    path: string
    name?: string
    component?: Component | (() => Promise<Component>)
    meta?: RouteMeta
  }
  
  export interface RouterOptions {
    history: any
    routes: RouteRecordRaw[]
  }
  
  export interface Router {
    install: (app: any) => void
  }
  
  export function createRouter(options: RouterOptions): Router
  
  export function createWebHistory(base?: string): any
} 