declare module 'vite' {
  export interface UserConfig {
    plugins?: any[]
    resolve?: {
      alias?: Record<string, string>
    }
    css?: {
      preprocessorOptions?: {
        scss?: {
          additionalData?: string
        }
      }
    }
  }
  
  export function defineConfig(config: UserConfig): UserConfig
} 