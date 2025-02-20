import { type PluginOptionTypes } from "@/typings/global.ts";
import { providerKey } from "@/utils/constants";

// 引入组件文件，按需引入组件文件
import MButton from "./components/MButton";
import MSpace from "./components/MSpace";
import MDivider from "./components/MDivider";
import { MBreadcrumb, MBreadcrumbItem } from "./components/MBreadcrumb";
import MButtonGroup from "./components/MButtonGroup";
import MDialog from "./components/MDialog";
import MInput from "./components/MInput";
import MInputNumber from "./components/MInputNumber";
import MTextarea from "./components/MTextarea";
import MIcon from "./components/MIcon";
import MAlert from "./components/MAlert";
import MCheckbox from "./components/MCheckbox";
import MAvatar from "./components/MAvatar";
import MessageBox from "./components/MessageBox";
import MOverlay from "./components/MOverlay";

const components = [
  MButton,
  MSpace,
  MDivider,
  MBreadcrumb,
  MBreadcrumbItem,
  MButtonGroup,
  MDialog,
  MInput,
  MIcon,
  MAlert,
  MCheckbox,
  MAvatar,
  MInputNumber,
  MTextarea,
  MOverlay
];
export default {
  install(app, options?: PluginOptionTypes | undefined) {
    // 全局注入配置信息
    app.provide(
      providerKey,
      options ? options : { size: "medium", zIndex: 1000 }
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
  MBreadcrumb,
  MBreadcrumbItem,
  MButtonGroup,
  MDialog,
  MessageBox,
  MInput,
  MIcon,
  MAlert,
  MCheckbox,
  MAvatar,
  MInputNumber,
  MTextarea,
  MOverlay
};
