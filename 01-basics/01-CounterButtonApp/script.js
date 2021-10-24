import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  el: `#app`,

  name: 'App',

  data() {
    return {
      value: 0,
    };
  },

  methods: {
    addOne() {
      this.value = this.value + 1;
    }
  }
});

const app = createApp(Root);

const vm = app.mount('#app');

window.vm = vm;
