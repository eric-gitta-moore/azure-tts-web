import { defineConfig } from 'umi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import * as path from 'path';
import { Resolve } from '@umijs/bundler-webpack/compiled/webpack-5-chain';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/azure-tts-web/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/azure-tts-web/' : '/',
  history: {
    type: 'hash',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  antd: {
    // configProvider
    configProvider: {},
    import: true,
    // less or css, default less
    style: 'less',
  },
  fastRefresh: true,
  chainWebpack: (...args) => {
    const memo = (args as any)[0] as Resolve;
    memo.plugin('monaco-editor-webpack-plugin').use(MonacoWebpackPlugin, [
      {
        languages: ['xml'],
      },
    ]);

    memo.merge({
      module: {
        rule: {
          'monaco-editor-esm-webpack-plugin': {
            enforce: 'pre',
            test: /\.js/,
            include: [/node_modules[\\\/]monaco-editor[\\\/]esm/],
            use: {
              'MonacoWebpackPluginESM.loader': {
                loader: path.resolve(__dirname, './loader.js'),
              },
            },
          },
        },
      },
    });

    memo.merge({
      module: {
        rule: {
          'monaco-editor-nls-webpack-plugin': {
            enforce: 'pre',
            test: /node_modules[\\\/]monaco-editor[\\\/]esm[\\\/]vs[\\\/]nls\.js/,
            use: {
              'monaco-editor-nls-webpack-plugin': {
                loader: path.resolve(
                  __dirname,
                  './monaco-editor-nls-webpack-plugin.js',
                ),
              },
            },
          },
        },
      },
    });

    // console.log(memo.toString())
  },
});
