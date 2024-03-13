import { createApp } from 'vue';
import App from './App.vue';
import { useStore } from './store';
import { useRouter } from './router';

import '@/style/reset.css';
import '@/style/index.less';
import 'uno.css';
import 'element-plus/dist/index.css';

const app = createApp(App);

useStore(app);
useRouter(app);

app.mount('#app');
