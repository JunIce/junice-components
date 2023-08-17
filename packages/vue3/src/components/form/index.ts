import type { App } from "vue";
import type { SFCWithInstall } from "../types";
import CommonForm from "./form";

export type { ColumnOption, FormOption } from "./form";

//增加类型
const ElCommonFormItem: SFCWithInstall<typeof CommonForm> =
CommonForm as SFCWithInstall<typeof CommonForm>;

// 为组件提供 install 安装方法，供按需引入
ElCommonFormItem.install = (app: App) => {
  app.component("ElCommonFormItem", ElCommonFormItem);
};

export { ElCommonFormItem };
