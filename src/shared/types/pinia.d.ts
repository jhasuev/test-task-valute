declare module 'pinia' {
  import { Ref } from 'vue'
  
  export interface StoreDefinition<Id extends string, S extends {}, G = {}, A = {}> {
    $id: Id
    $state: S
    $getters: G
    $actions: A
  }
  
  export interface Store<Id extends string, S extends {}, G = {}, A = {}> {
    $id: Id
    $state: S
    $getters: G
    $actions: A
  }
  
  export function defineStore<Id extends string, S extends {}, G = {}, A = {}>(
    id: Id,
    options: {
      state: () => S
      getters?: G
      actions?: A
    }
  ): StoreDefinition<Id, S, G, A>
  
  export function createPinia(): {
    install: (app: any) => void
  }
} 