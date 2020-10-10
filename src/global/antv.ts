import { Button } from "ant-design-vue";
import { App } from "vue";

const componentList = [Button];

export default function globalComp(app: App) {
  componentList.forEach(() => {
    app.component(Button.name, Button);
  });
}
