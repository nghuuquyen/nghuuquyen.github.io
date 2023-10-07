import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'main': resolve(__dirname, 'index.html'),
                'coffee-shop': resolve(__dirname, 'apps/coffee-shop/index.html'),
            },
        },
    },
})