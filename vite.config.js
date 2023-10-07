import { resolve } from 'path'
import { defineConfig } from 'vite'
import { glob } from 'glob'

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