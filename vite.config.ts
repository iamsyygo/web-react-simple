import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 引入 ViteEslintPlugin 以便在开发时检查代码
import ViteEslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteEslintPlugin({
      failOnError: false,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
