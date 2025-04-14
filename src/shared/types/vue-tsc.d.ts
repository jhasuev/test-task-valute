declare module 'vue-tsc' {
  export function compile(options: {
    files: string[]
    outDir?: string
  }): Promise<void>
} 