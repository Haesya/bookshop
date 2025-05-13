import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
    plugins: [pugPlugin()],
    css: {
        postcss: './postcss.config.js',
    },
});