### 使用 webpack 打包项目  安装——>配置两步走

- 运行命令 npm init -y 初始化项目 用于生成初始化配置文件 package.json
- 安装webpack相关的开发依赖 `npm i -D webpack webpack-cli typescript ts-loader`  会自动给package.json添加信息
- 添加webpack 配置文件 webpack.config.js 编写webpack的配置规则
- 添加ts的编译文件 tsconfig.json
- 在package.json中的调试script选项里加入build属性 通过build命令执行webpack  即`npm run build`
- 尝试运行 `npm run build` 生成了dist目录和该目录下的boundle.js文件 配置webpack成功

### 使用webpack自动生成和引入文件
    项目要执行需要有html文件 手动的添加html文件并引入其他的模块会很麻烦 尤其是项目太大的时候
- 首先安装webpack插件  `npm i -D html-webpack-plugin` 他会自动创建html文件并引入模块
- 在webpack.config.js文件中引入这个插件模块
- 在webpack.config.js文件中的plugins属性中添加这个插件的实例 让它生效
- 再次运行`npm run build`会发现dist目录里多了一个html文件 插件运行成功
- 生成的index.html文件的标题不对 可以在webpack.config.js中生成插件实例的时候传入option对象参数 利用title更改标题 
- 或者利用template直接为自动生成的html文件指定模板 模板可以自己编写 传入模板路径即可
- 再次运行`npm run build`会发现dist/index.html中有了模板src/index.html里的内容

### 使用webpack在网页运行项目是关联项目自动更新
- 首先安装插件 `npm i -D webpack-dev-server` 安装webpack内置开发服务器
- 在package.json文件的调试script选项里加入start属性 通过start启动webpack服务器并打开网页浏览项目 `"start": "webpack serve --open chrome.exe"`
- 运行 `npm start` 跳转至chrome并展示项目内容 插件配置成功

### 使用webpack清空旧的dist目录 使得每次打包的文件最新
- 首先安装插件 `npm i -D clean-webpack-plugin` 使用同`html-webpack-plugin`插件 
- 在webpack.config.js中引入 并创建实例即可  非默认导出因此用解构赋值应用
- 运行`npm run build`之前打开的dist/index.html会在窗口提示已删除 配置成功
- 然后运行`npm start`重新启动项目

### 配置webpack的应用模块
    webpack是不知道哪些文件是可以作为模块被引入的 比如在index.ts中引入另一个ts文件 编译运行时会报错 因为他不知道ts文件可以被当作模块引入
- 在webpack.config.js文件中添加resolve属性 在其中设置哪些文件可以当成引用模块

### Babel的使用 将ES的新语法转换成浏览器认识的旧的语法
    ts也有语法转换的功能 在tsconfig.json文件中可以设置target属性 指定编译的目标版本 但他只能编译语法 一些新的比如Promise无法转换
    class类等新语法 ts编译后是没有 不支持 但是babel可以轻松的完成这些功能 使代码有更好的兼容性
- 首先安装插件 `npm i -D @babel/core @babel/preset-env babel-loader core-js` 
    - @core/babel：babel核心代码; @babel/preset-env：自动预设环境; babel-loader：加载器，与webpack结合用的;  core-js：原生JS环境
- 然后配置加载器 之前只用了ts-loader 现在可以加上babel-loader  配置过程相当的繁琐
- 为了保证webpack不适用箭头函数编译 就需要加一个enviroment的属性
- 运行`npm run build`查看运行结果
