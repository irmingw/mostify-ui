import { h, createApp } from "vue";
import "./style.scss";
import { animate } from "@/mostify/utils/dom";

function createMessageBox(msg) {
  const div = document.createElement("div");
  div.className = "m-message-box-fade-in m-message-box";

  createApp({
    render() {
      return h("div", { class: "m-message-main" },[
        h("div", { class: "m-message-title" }, "提示"),
        h("div", { class: "m-message-content" }, msg),
        h("div", { class: "m-message-close",onClick:()=>{
          console.log('关闭按钮被点击了');
          
        } }, "关闭"),
        h("div", { class: "m-message-icon" }, "提示图标")
      ]);
    }
  }).mount(div);
  document.body.appendChild(div);
  // setTimeout(async () => {
  //   await animate(
  //     div,
  //     [
  //       { opacity: 1, transform: "translateY(0)" },
  //       { opacity: 0, transform: "translateY(-16px)" }
  //     ],
  //     {
  //       duration: 300,
  //       fill: "forwards"
  //     }
  //   );
  //   div.remove();
  // }, 3000);
}

export default class MessageBox {
  static alert(msg) {
    createMessageBox(msg);
  }
}
