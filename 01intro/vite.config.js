import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [

    ],
    server: {
        host: '0.0.0.0',
        port: 5173
    },
    build: {
        outDir: 'dist'
    },
    base: '/'
});
