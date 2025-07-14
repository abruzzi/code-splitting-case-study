import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            plugins: [visualizer({ open: true })],
            treeshake: false,
        }
    }
});