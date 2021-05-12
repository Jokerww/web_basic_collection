### 项目初始化
- 项目就不重新配置了 直接把之前webpackConf里的配置文件粘贴过来 然后`npm i `安装所有的依赖就可以了
- 然后改一下配置文件里的项目名称 等

### 引入CSS插件以处理css文件
- 先安装插件 `npm i -D less less-loader css-loader sty-loader` 以处理各种样式文件
- 然后再webpack配置文件中进行配置 之前只配置了ts的处理器ts-loader babel等 现在要添加css文件的处理器
- css样式文件需要在 scr/index.ts中引入才能生效 因为html是webpack自己创建的 会自动引入ts文件 所以就在ts文件中引入
- 安装postcss来解析浏览器不兼容的css样式 类似于babel对于js的作用 `npm i -D postcss postcss-loader postcss-preset-env`
- 然后在webpack配置文件里配置loader 由于是在less转化成css之后就会处理 所以放在倒数第二个的位置