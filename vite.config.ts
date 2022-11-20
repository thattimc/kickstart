import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    exclude: [...configDefaults.exclude, 'src/test/e2e'],
    environment: 'happy-dom',
  },
})
