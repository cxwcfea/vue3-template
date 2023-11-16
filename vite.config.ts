import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import path from 'path';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    viteEslint(),
    vueJsx(),
    UnoCSS({
      presets: [presetUno(), presetAttributify()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/style/variables.less";
        `,
      },
    },
  },
});
