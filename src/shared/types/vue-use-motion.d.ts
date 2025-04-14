declare module '@vueuse/motion' {
  export function useMotion(options?: {
    initial?: Record<string, any>
    enter?: Record<string, any>
    leave?: Record<string, any>
  }): {
    target: any
    style: Record<string, any>
  }
} 