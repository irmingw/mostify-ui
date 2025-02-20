import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import Layout from "./Layout.vue";
import type { RouteRecordRaw } from "vue-router";
const children: RouteRecordRaw[] = [];
// @ts-ignore
const modules = import.meta.glob("@/components/**/*.vue");

Object.keys(modules).forEach(path => {
  const name = (path.split("/").pop() || "").replace(/\.vue$/, "");
  children.push({
    path: `/${name}`,
    component: modules[path],
    name: name,
    meta: {
      title: name
    }
  });
});

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: "首页"
        }
      },
      ...children
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  console.log("路由守卫", to.path);
  next();
});

export default router;

export { routes };
