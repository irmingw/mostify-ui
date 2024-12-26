/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
import vueJsx from "@vitejs/plugin-vue-jsx";
import terser from "@rollup/plugin-terser";

const buildUiLib = (mode: string) => {
  return {
    lib: {
      entry: path.resolve(__dirname, "./packages/mostify/components/index.ts"), // 入口文件
      name: "Mostify",
      fileName: "mostify-ui",
      formats: ["es", "umd"]
    },
    outDir: path.resolve(__dirname, "./lib/mostify-ui/dist")
  };
};
// @ts-ignore
export default defineConfig(({ mode }) => {
  return {
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
        parser: false,
        map: false,
        sourceMap: false,
        postcssOptions: {
          map: false,
          sourceMap: false
        }
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/mostify/styles/index.scss";`
        }
      }
    },
    build: {
      ...buildUiLib(mode),
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
          assetFileNames: "index.css"
        }
      }
    }
  };
});
