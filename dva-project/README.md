# dva的练习

![webxiaoma](https://webxiaoma.github.io/other/manong.jpg)

```javascript
// 文件一般启动步骤

npm install

npm start
```

```javascript
—— src
   -- assets  // 静态资源存放文件（一般放背景图片，svg图片等）
   -- components // 公共模块
   -- models   // models 数据
   -- routes   // 页面模块
   -- services  // 请求后台的方法和API等 （本练习没有用到）
   -- utils    //  请求后台的封装  （本练习没有用到）
   index.js   // dva 的一些配置
   router.js  // router 配置

```

这简单的练习复杂化只是为了熟悉dva脚手架的用法，当你开发时，文件目录可以根据自己项目的要求进行改变。


### 知识点总结

**dva官网：** [传送门](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)

**dva 的 8 个概念需知：** [传送门](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md)

**dva的所有API** [传送门](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)

**roadhog相关配置** [传送门](https://github.com/sorrycc/roadhog)

**dva上手简易教程1** [传送门](https://zhuanlan.zhihu.com/p/24488764)

**dva上手简易教程2** [传送门](https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/getting-started.md)


### 注意点

- dva在使用git 提交是会进行代码检测，如果检测不成功，代码不会被提交，如果你想去掉它，可以这样做：

>在项目中建一个 .eslintignore 里面写上忽略你要检测的文件。(本练习中已经加入了)