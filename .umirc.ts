import {defineConfig} from 'umi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import * as path from "path";

export default defineConfig({
  base: './',
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {path: '/', component: '@/pages/index'},
  ],
  fastRefresh: {},
  webpack5: {},
  chainWebpack(memo) {
    memo.plugin('monaco-editor-webpack-plugin').use(MonacoWebpackPlugin, [{
      languages: ['xml']
    }]);

    memo.merge({
      module: {
        rule: {
          'monaco-editor-esm-webpack-plugin': {
            enforce: 'pre',
            test: /\.js/,
            include: [/node_modules[\\\/]monaco-editor[\\\/]esm/],
            use: {
              'MonacoWebpackPluginESM.loader': {
                loader: path.resolve(__dirname, './loader.js')
              }
            }
          }
        }
      }
    })

    memo.merge({
      module: {
        rule: {
          'monaco-editor-nls-webpack-plugin': {
            enforce: 'pre',
            test: /node_modules[\\\/]monaco-editor[\\\/]esm[\\\/]vs[\\\/]nls\.js/,
            use: {
              'monaco-editor-nls-webpack-plugin': {
                loader: path.resolve(__dirname, './monaco-editor-nls-webpack-plugin.js'),
              }
            }
          }
        }
      }
    })

    // console.log(memo.toString())
  }
});
