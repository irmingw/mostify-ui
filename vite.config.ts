/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
import vueJsx from "@vitejs/plugin-vue-jsx";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  plugins: [vue(), dts({ rollupTypes: true }), vueJsx()],
  server: {
    host: true,
    port: 8088
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./packages")
    }
  },
  css: {
    postcss: {
      plugins: [],
      map: false,
    },
    preprocessorOptions: {
      scss: {
      }
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./packages/main.ts"), // 入口文件
      name: "Mostify",
      fileName: "mostify-ui",
      formats: ["es", "umd"]
    },
    outDir: path.resolve(__dirname, "./npm/dist"),
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      external: ["vue"],
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        })
      ],
      output: {
        exports: "named",
        banner: "/* @license Mostify UI By <Irming>*/",
        globals: {
          vue: "Vue"
        },
        assetFileNames: "index.css",
      }
    }
  }
});
