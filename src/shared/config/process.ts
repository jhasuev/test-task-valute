// Определяем переменную process для vuelidate
if (typeof window !== 'undefined' && !window.process) {
  (window as any).process = {
    env: {}
  };
} 