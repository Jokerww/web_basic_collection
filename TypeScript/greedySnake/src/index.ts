import 'babel-polyfill'
// 引入样式
import "./style/index.less";

// 引入模块
import GameControl from './module/GameControl'

const gc = new GameControl()
gc.init()