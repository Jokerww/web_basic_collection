// 引入一个包 webpack的模块解析用的是commonJS
// 模块引入用 require() 导出用 module.exports 
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //引入自动创建html文件的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //引入自动清空旧dist文件的插件

// webpack所有的配置文件都应该写在这里
module.exports={
    
    entry:'./src/index.ts',//指定入口文件 即项目从哪里开始执行

    // 指定打包后文件所在目录
    output:{
        path:path.resolve(__dirname,'dist'), //指定打包文件的目录 文件名由path自己解决 放在dist目录
        filename:'boundle.js', //指定打包后的文件名

        environment:{ //配置webpack 的环境 因为打包的时候一直会有箭头函数 低版本的ie根本无法兼容
            "arrowFunction":false,
        }
    },
    mode:"development",
    // 指定webpack打包时要使用的模块
    module:{
        rules:[ //rules指定要加载的规则 即使用什么loader加载什么类型的文件
            { //首先指定ts文件的加载规则
                test:/\.ts$/, //选中以.ts结尾的文件
                use:[//加载器从后往前执行
                    { //配置babel
                        loader:'babel-loader',//指定加载器 
                        options:{  //设置babel
                            presets:[ //指定预定义的环境
                                [ //环境1的配置
                                    "@babel/preset-env" ,//指定环境插件
                                    { //配置信息
                                        targets:{ //兼容 指定浏览器的版本
                                            "chrome":"59",
                                            "ie":"11", //秒杀一切的老版本 兼容了ie11那可就啥啥都兼容了
                                        },
                                        "corejs":3 ,//指定corejs的版本 这是个数字 不是字符串
                                        "useBuiltIns":"usage" // 只当corejs加载的方式 usage表示按需加载
                                    }
                                ],
                            ],
                        }
                    },
                    'ts-loader' //use列表配置了俩loader 这是第二个 上面那一大坨是第一个 
                ], 
                exclude:/node_modules/, //要排除那些文件 就是哪些文件不加载 路径中有node_modules的都不加载
            },
            { //指定 less文件的加载规则
                test:/\.less$/, //以 .less结尾的文件
                use:[ //loader执行的顺序从下往上 这三个loader可以不需要其他的配置选项 就可以直接写了
                        "style-loader",
                        "css-loader",
                        {
                            loader:"postcss-loader",
                            options:{
                                postcssOptions:{
                                    plugins:[
                                        [
                                            "postcss-preset-env",
                                            {
                                                browsers:"last 2 versions", //兼容所有浏览器的最新2个版本
                                            }

                                        ]
                                    ]
                                }
                            }
                        },
                        "less-loader",
                ]
            }
        ]
    },

    // 配置插件
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({  //创建HtmlWedpackPlugin模块的实例 让它生效
            title:'我的webpack项目',//单独更改标题
            template:'./src/index.html'
        }),
    ],

    // 设置引用模块
    resolve:{
        extensions:['.ts','.js'], //以ts js为扩展名的都可以作为模块引入
    }
}