import { createRouter,createWebHashHistory } from "vue-router";
// @ts-ignore
const modules = await import.meta.glob("../pages/**/*.vue");
const children = [];

Object.keys(modules).forEach(path => {
  const name = path
    .split("/")
    .pop()
    .replace(/\.vue$/, "");
  children.push({
    path: `/${name}`,
    component: modules[path]
  });
});


children.unshift({
  path: "/",
  redirect: children[0].path
});

const routes = [
  {
    path: "/",
    component: () => import("../Layout.vue"),
    children
  }
];
console.log(routes, "routes");
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  console.log("路由守卫", to.path);
  next();
});

export default router;
