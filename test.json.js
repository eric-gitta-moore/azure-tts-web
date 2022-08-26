export default {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: [
    'web',
    'es5'
  ],
  output: {
    path: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\dist',
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
    pathinfo: true
  },
  resolve: {
    symlinks: true,
    alias: {
      'react-router': 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\react-router',
      'react-router-dom': 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\react-router-dom',
      history: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\history-with-query',
      'regenerator-runtime': 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\umi\\node_modules\\regenerator-runtime',
      react: 'D:/Programing/WebstormProjects/temporaryWorkspace/test/node_modules/react',
      'react-dom': 'D:/Programing/WebstormProjects/temporaryWorkspace/test/node_modules/react-dom',
      antd: 'D:/Programing/WebstormProjects/temporaryWorkspace/test/node_modules/antd',
      'antd-mobile': 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\antd-mobile',
      dva: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\dva',
      '@': 'D:/Programing/WebstormProjects/temporaryWorkspace/test/src',
      '@@': 'D:/Programing/WebstormProjects/temporaryWorkspace/test/src/.umi',
      '@umijs/plugin-request/lib/ui': 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\plugin-request\\lib\\ui\\index.js',
      umi: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\umi'
    },
    extensions: [
      '.web.js',
      '.wasm',
      '.mjs',
      '.js',
      '.web.jsx',
      '.jsx',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.json'
    ],
    modules: [
      'node_modules',
      'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\bundler-webpack\\node_modules'
    ]
  },
  module: {
    rules: [
      /* config.module.rule('js') */
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: [
          [
            'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test'
          ]
        ],
        exclude: [
          /node_modules/,
          /\.mfsu/
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\babel-loader\\index.js',
            options: {
              sourceType: 'unambiguous',
              babelrc: false,
              cacheDirectory: false,
              presets: [
                [
                  'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\babel-preset-umi\\app.js',
                  {
                    nodeEnv: 'development',
                    dynamicImportNode: true,
                    autoCSSModules: true,
                    svgr: true,
                    env: {
                      targets: {
                        chrome: 49,
                        firefox: 64,
                        safari: 10,
                        edge: 13,
                        ios: 10
                      }
                    },
                    'import': [
                      {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: true
                      },
                      {
                        libraryName: 'antd-mobile',
                        libraryDirectory: 'es',
                        style: true
                      }
                    ],
                    noAnonymousDefaultExport: true,
                    reactRequire: false,
                    react: {
                      runtime: 'automatic'
                    }
                  }
                ]
              ],
              plugins: [
                [
                  'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\react-refresh\\babel.js'
                ]
              ]
            }
          }
        ]
      },
      /* config.module.rule('ts-in-node_modules') */
      {
        test: /\.(jsx|ts|tsx)$/,
        include: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('ts-in-node_modules').use('babel-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\babel-loader\\index.js',
            options: {
              sourceType: 'unambiguous',
              babelrc: false,
              cacheDirectory: false,
              presets: [
                [
                  'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\babel-preset-umi\\app.js',
                  {
                    nodeEnv: 'development',
                    dynamicImportNode: true,
                    autoCSSModules: true,
                    svgr: true,
                    env: {
                      targets: {
                        chrome: 49,
                        firefox: 64,
                        safari: 10,
                        edge: 13,
                        ios: 10
                      }
                    },
                    'import': [
                      {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: true
                      },
                      {
                        libraryName: 'antd-mobile',
                        libraryDirectory: 'es',
                        style: true
                      }
                    ],
                    noAnonymousDefaultExport: true,
                    reactRequire: false,
                    react: {
                      runtime: 'automatic'
                    }
                  }
                ]
              ],
              plugins: [
                [
                  'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\react-refresh\\babel.js'
                ]
              ]
            }
          }
        ]
      },
      /* config.module.rule('js-in-node_modules') */
      {
        test: /\.(js|mjs)$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js-in-node_modules').use('babel-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\babel-loader\\index.js',
            options: {
              sourceType: 'unambiguous',
              babelrc: false,
              cacheDirectory: false,
              presets: [
                [
                  'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\babel-preset-umi\\dependency.js',
                  {
                    nodeEnv: 'development',
                    dynamicImportNode: true
                  }
                ]
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\url-loader\\cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]',
              esModule: false,
              fallback: {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\file-loader\\cjs.js',
                options: {
                  name: 'static/[name].[hash:8].[ext]',
                  esModule: false
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('avif') */
      {
        test: /\.(avif)(\?.*)?$/,
        use: [
          /* config.module.rule('avif').use('file-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\file-loader\\cjs.js',
            options: {
              name: 'static/[name].[hash:8].[ext]',
              esModule: false
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\file-loader\\cjs.js',
            options: {
              name: 'static/[name].[hash:8].[ext]',
              esModule: false
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(eot|woff|woff2|ttf)(\?.*)?$/,
        use: [
          /* config.module.rule('fonts').use('file-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\file-loader\\cjs.js',
            options: {
              name: 'static/[name].[hash:8].[ext]',
              esModule: false
            }
          }
        ]
      },
      /* config.module.rule('plaintext') */
      {
        test: /\.(txt|text|md)$/,
        use: [
          /* config.module.rule('plaintext').use('raw-loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\raw-loader\\cjs.js'
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.(css)(\?.*)?$/,
        oneOf: [
          /* config.module.rule('css').oneOf('css-modules') */
          {
            resourceQuery: /modules/,
            use: [
              /* config.module.rule('css').oneOf('css-modules').use('extract-css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\bundler-webpack\\lib\\webpack\\plugins\\mini-css-extract-plugin\\src\\loader.js',
                options: {
                  publicPath: './',
                  hmr: true
                }
              },
              /* config.module.rule('css').oneOf('css-modules').use('css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\css-loader\\cjs.js',
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: '[local]___[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('css-modules').use('postcss-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () { /* omitted long function */ }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('css') */
          {
            use: [
              /* config.module.rule('css').oneOf('css').use('extract-css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\bundler-webpack\\lib\\webpack\\plugins\\mini-css-extract-plugin\\src\\loader.js',
                options: {
                  publicPath: './',
                  hmr: true
                }
              },
              /* config.module.rule('css').oneOf('css').use('css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\css-loader\\cjs.js',
                options: {
                  importLoaders: 1
                }
              },
              /* config.module.rule('css').oneOf('css').use('postcss-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () { /* omitted long function */ }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.(less)(\?.*)?$/,
        oneOf: [
          /* config.module.rule('less').oneOf('css-modules') */
          {
            resourceQuery: /modules/,
            use: [
              /* config.module.rule('less').oneOf('css-modules').use('extract-css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\bundler-webpack\\lib\\webpack\\plugins\\mini-css-extract-plugin\\src\\loader.js',
                options: {
                  publicPath: './',
                  hmr: true
                }
              },
              /* config.module.rule('less').oneOf('css-modules').use('css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\css-loader\\cjs.js',
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: '[local]___[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('css-modules').use('postcss-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () { /* omitted long function */ }
                }
              },
              /* config.module.rule('less').oneOf('css-modules').use('D:\Programing\WebstormProjects\temporaryWorkspace\test\node_modules\@umijs\deps\compiled\less-loader\cjs.js') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\less-loader\\cjs.js',
                options: {
                  modifyVars: {
                    'root-entry-name': 'default'
                  },
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('css') */
          {
            use: [
              /* config.module.rule('less').oneOf('css').use('extract-css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\bundler-webpack\\lib\\webpack\\plugins\\mini-css-extract-plugin\\src\\loader.js',
                options: {
                  publicPath: './',
                  hmr: true
                }
              },
              /* config.module.rule('less').oneOf('css').use('css-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\css-loader\\cjs.js',
                options: {
                  importLoaders: 1
                }
              },
              /* config.module.rule('less').oneOf('css').use('postcss-loader') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () { /* omitted long function */ }
                }
              },
              /* config.module.rule('less').oneOf('css').use('D:\Programing\WebstormProjects\temporaryWorkspace\test\node_modules\@umijs\deps\compiled\less-loader\cjs.js') */
              {
                loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\less-loader\\cjs.js',
                options: {
                  modifyVars: {
                    'root-entry-name': 'default'
                  },
                  javascriptEnabled: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('monaco-editor-esm-webpack-plugin') */
      {
        test: /\.js/,
        enforce: 'pre',
        include: [
          /node_modules[\\\/]monaco-editor[\\\/]esm/
        ],
        use: [
          /* config.module.rule('monaco-editor-esm-webpack-plugin').use('MonacoWebpackPluginESM.loader') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\monaco-editor-esm-webpack-plugin\\src\\loader.js'
          }
        ]
      },
      /* config.module.rule('monaco-editor-nls-webpack-plugin') */
      {
        test: /nls\.js/,
        enforce: 'pre',
        include: [
          /node_modules[\\\/]monaco-editor[\\\/]vs/
        ],
        use: [
          /* config.module.rule('monaco-editor-nls-webpack-plugin').use('monaco-editor-nls-webpack-plugin') */
          {
            loader: 'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\monaco-editor-nls-webpack-plugin.js'
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('extract-css') */
    new (require('D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\bundler-webpack\\lib\\webpack\\plugins\\mini-css-extract-plugin.js'))(
      {
        filename: '[name].css',
        chunkFilename: '[name].chunk.css',
        ignoreOrder: true
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"'
        }
      }
    ),
    /* config.plugin('progress') */
    new (require('D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\webpackbar\\webpackbar.js'))(
      {}
    ),
    /* config.plugin('friendly-error') */
    new (require('D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\node_modules\\@umijs\\deps\\compiled\\friendly-errors-webpack-plugin\\index.js'))(
      {
        clearConsole: false
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    {},
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('fastRefresh') */
    new ReactRefreshPlugin(
      {
        overlay: false,
        exclude: /node_modules/i,
        include: /\.([cm]js|[jt]sx?|flow)$/i
      }
    ),
    /* config.plugin('monaco-editor-webpack-plugin') */
    new MonacoEditorWebpackPlugin(
      {
        languages: [
          'xml'
        ]
      }
    )
  ],
  entry: {
    umi: [
      'D:\\Programing\\WebstormProjects\\temporaryWorkspace\\test\\src\\.umi\\umi.ts'
    ]
  }
}
