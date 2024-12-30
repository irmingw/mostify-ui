import { h, createApp } from "vue";
import Content from "./Content.tsx";
import { useLockScroll } from "@/mostify/hooks/useLockScroll.ts";
import { MessageBoxTypes } from "./types.ts";

function createMessageBox(option: MessageBoxTypes, callback: Function) {
  const div = document.createElement("div");
  const { setLockScroll } = useLockScroll();

  div.role = "message-box";
  document.body.appendChild(div);
  
  let updateOption = function () {};
  let destroyed = function () {};
  
  createApp({
    data: () => {
      return {
        show: true,
        option: {
          title: option.title,
          type: option.type,
          message: option.message,
          cancelText: option.cancelText,
          customClass: option.customClass,
          showClose: option.showClose,
          cancelButtonProp: option.cancelButtonProp,
          icon: option.icon,
          iconColor: option.iconColor,
          iconSize: option.iconSize,
          confirmText: option.confirmText,
          confirmButtonProp: option.confirmButtonProp,
          duration: option.duration,
          zIndex: option.zIndex,
          width: option.width,
          showIcon: option.showIcon
        }
      };
    },
    methods: {
      close(type) {
        // 关闭弹窗，执行回调函数，传入类型参数，
        try {
          if (callback) callback(type);

          this.destroyed();
        } catch (error) {
          console.log(error);
        }
      },
      update(option: MessageBoxTypes) {
        // 更新字段显示
        Object.keys(this.option).forEach(key => {
          if (option[key] !== undefined) {
            this.option[key] = option[key];
          }
        });
      },
      destroyed() {
        console.log("destroyed");
        this.show = false;
        setTimeout(() => {
          div.remove();
          setLockScroll(false);
        }, option.duration || 300);
      }
    },
    mounted() {
      console.log("mounted");
      updateOption = this.updateOption;
      destroyed = this.destroyed;
    },
    render() {
      return h(
        Content,
        {
          ...this.option,
          // 内部api
          onClose: this.close,
          show: this.show
        },
        null
      );
    }
  }).mount(div);
  setLockScroll(true);
  return {
    update: updateOption,
    destroyed: destroyed
  };
}

export default class MessageBox {
  static alert(
    message = "",
    title = "",
    option?: {
      callback: Function;
      confirmText: string;
      confirmButtonProp: Object;
    }
  ) {
    if (!title && !message) return console.warn("title is required");
    const obj = option || {
      callback: () => {},
      confirmText: "",
      confirmButtonProp: { type: "primary" }
    };
    return createMessageBox(
      {
        type: "primary",
        title,
        message,
        showIcon: false,
        showClose: false,
        confirmText: obj?.confirmText || "确定",
        confirmButtonProp: obj.confirmButtonProp || {
          type: "primary"
        }
      },
      obj?.callback
    );
  }
  static confirm(option={}) {
    createMessageBox(option,()=>{});
  }
  static success(msg) {
    createMessageBox(msg);
  }
  static error(msg) {
    createMessageBox(msg);
  }
  static primary(msg) {
    createMessageBox(msg);
  }
  static warning(msg) {
    createMessageBox(msg);
  }

  // 自定义配置
  static open(option) {
    return createMessageBox(option);
  }
}
