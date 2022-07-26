const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    //進入點,
    mode: "development",
    entry: "./src/index.ts",
    //輸出設定
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

        // 告訴webpack不使用箭頭函數
        environment: {
            arrowFunction: false,
            const: false,
        }
    },

    //load配置
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    // 配置babel
                    {
                        // 指定加載器
                        loader: 'babel-loader',
                        // 設置babel
                        options: {
                            // 設置定義的環境
                            presets: [
                                [
                                    // 指定環境的插件
                                    '@babel/preset-env',
                                    // 配置信息
                                    {
                                        // 要兼容的目標瀏覽器
                                        targets: {
                                            'chrome': '88',
                                            'ie': '11',
                                        },
                                        // 指定corejs的版本
                                        'corejs': '3',
                                        // 使用core.js的方式 "usage" 表示按需加載
                                        'useBuiltIns': 'usage'


                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader', //ts先轉js
                ],
                exclude: /node_modules/
            },
            // 設置less文件處裡
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 version'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //title: '這是自定義titile',
            template: './src/index.html'
        }),
    ],

    // 用來設置引用模塊
    resolve: {
        extensions: ['.ts', '.js']
    }

    // //配置webpack-dev-server webpack5 自帶熱更新
    // devServer: {
    //     static: path.join(__dirname, 'dist'),
    //     port: 9000,
    //     compress: false,
    //     open: true,
    //     historyApiFallback: true, //单页应用(SPA)一般只有一个index.html, 导航的跳转都是基于HTML5 History API，当用户在越过index.html 页面直接访问这个地址或是通过浏览器的刷新按钮重新获取时，就会出现404问题；配置此選項解決
    // },
    // resolve: {
    //     fallback: {
    //         "fs": false
    //     },
    // }
}