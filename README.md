## 脚手架及编译工具补充课：
1.如何编写脚手架
2.如何基于依赖分析编写自己的编译工具 -- Parcel/webpack -> 依赖关系表 -> 如何转换为资源表
3.如何使用program/chalk等库实现命令行工具
4.如何综合以上实现一个生产级别的项目实践 -> lais -> la Integered System
* lais project [name]
* lais template
* lais build
* lais dev


> 涉及到的面试考点：tree shaking/依赖分析/Module Federation(资源表动态加载)

## 问题：如何进行按需加载Vue组件进行页面渲染
* 在我们常规的项目开发中，如果不进行[手动]的动态import，那么编译工具将会为我们产出一个bundle.js
* 但在性能优化、需要按照组件细粒度加载等情况下，不能够直接使用bundle.js
* 我们希望得到的是：页面可以根据后端的数据进行动态分析，然后加载必要的组件js及css
* 微前端
* Webpack Module Federation(模块联邦)

//  常用目录结构：
//  ---> bin （存放你的工具启动入口）
//  ---> src
//  ---> template （脚手架的模版代码）
//  ---> .babelrc
//  ---> index.js
//  ---> package.json
