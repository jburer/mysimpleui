import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import {
  applyPolyfills,
  defineCustomElements
} from "@aws-amplify/ui-components/loader";
import "@aws-amplify/ui-vue";

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
