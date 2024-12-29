import { type PluginOptionTypes } from "@/mostify/types/types";
import { providerKey } from "@/mostify/utils/constants";

import MButton from "./MButton";
import MSpace from "./MSpace";
import MDivider from "./MDivider";
import MAnchor from "./MAnchor";
import MConfigProvider from "./MConfigProvider";
import { MBreadcrumb, MBreadcrumbItem } from "./MBreadcrumb";
import MDropdown from "./MDropdown";
import MButtonGroup from "./MButtonGroup";
import MMenuItem from "./MMenuItem";
import MDialog from "./MDialog";
import { MInput, MInputNumber, MMTextarea } from "./MInput";
import MIcon from "./MIcon";
import MAlert from "./MAlert/MAlert";
import MCheckbox from "./MCheckbox";
import MAvatar from "./MAvatar";
import MessageBox from "./MessageBox";

const components = [
  MButton,
  MSpace,
  MDivider,
  MAnchor,
  MConfigProvider,
  MBreadcrumb,
  MBreadcrumbItem,
  MDropdown,
  MButtonGroup,
  MMenuItem,
  MDialog,
  MInput,
  MIcon,
  MAlert,
  MCheckbox,
  MAvatar,
  MInputNumber,
  MMTextarea
].map(item => {
  item.install = function (app) {
    app.component(item.name, item);
  };
  return item;
});

export default {
  install(app, options?: PluginOptionTypes | undefined) {
    // 全局注入配置信息
    app.provide(
      providerKey,
      options ? options : { size: "small", zIndex: 1000 }
    );
    // 注册所有组件
    components.forEach(component => {
      app.component(component.name, component);
    });
  }
};

export {
  MButton,
  MSpace,
  MDivider,
  MAnchor,
  MConfigProvider,
  MBreadcrumb,
  MBreadcrumbItem,
  MDropdown,
  MButtonGroup,
  MMenuItem,
  MDialog,
  MessageBox,
  MInput,
  MIcon,
  MAlert,
  MCheckbox,
  MAvatar,
  MInputNumber,
  MMTextarea
};
