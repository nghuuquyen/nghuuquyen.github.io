import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'coffee-shop': resolve(__dirname, 'apps/coffee-shop/index.html'),
            },
        },
    },
})