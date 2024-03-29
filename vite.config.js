import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'main': resolve(__dirname, 'index.html'),
                'coffee-shop': resolve(__dirname, 'apps/coffee-shop/index.html'),
                'todo-list': resolve(__dirname, 'apps/todo-list/index.html'),
                'sample-web-components': resolve(__dirname, 'apps/sample-web-components/index.html'),
            },
        },
    },
})