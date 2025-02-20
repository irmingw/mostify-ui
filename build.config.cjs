const path = require("path");
const { defineConfig } = require("vite");
const { build } = require("vite");
const fs = require("fs");
const vueJsx = require("@vitejs/plugin-vue-jsx");

async function buildPackage(name, dir) {
  const config = defineConfig({
    plugins: [vueJsx()],
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "./packages")
      }
    },
    css: {
      postcss: {
        plugins: [],
        map: false
      },
    },
    build: {
      lib: {
        entry: path.resolve(dir, "index.ts"), // 假设每个组件库都有一个 index.js 作为入口文件
        name,
        fileName: (format) => `${name}.${format}.js`,
        formats: ["es"]
      },
      outDir: path.resolve(__dirname, "./npm/theme-chalk", name),
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue"
          }
        }
      }
    }
  });

  console.log(`Building ${name}...`);
  await build(config);
  console.log(`${name} build completed.`);
}

async function buildPackages() {
  const componentsDir = path.resolve(__dirname, "packages", "components");
  const components = fs.readdirSync(componentsDir);

  for (const name of components) {
    const dir = path.resolve(componentsDir, name);
    await buildPackage(name, dir);
  }
  // 最后打包全局样式
  await buildPackage("var", path.resolve(__dirname, "packages/var"))
}

buildPackages().catch(console.error);