declare module 'vuelidate/lib/validators' {
  export const helpers: {
    withMessage: (message: string, validator: (...args: any[]) => boolean) => (...args: any[]) => boolean
    required: (value: any) => boolean
    numeric: (value: any) => boolean
    minValue: (min: number) => (value: number) => boolean
    maxValue: (max: number) => (value: number) => boolean
  }
} 