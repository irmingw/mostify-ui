export const vueInstall = (component: any) => {
  if (component) {
    component.install = (app: any) => {
      app.component(component.name, component);
    };
    return component;
  }

  return component;
};
