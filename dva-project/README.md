# dva的练习

![webxiaoma](https://webxiaoma.github.io/other/manong.jpg)


### 关于项目

```javascript
// 文件一般启动步骤

npm install

npm start
```

```javascript
—— mock // 模拟假数据
—— src
   -- assets  // 静态资源存放文件（一般放背景图片，svg图片等）
   -- components // 公共模块
   -- models   // models 数据
   -- routes   // 页面模块
   -- services  // 请求后台的方法和API等 
   -- utils    //  请求后台的封装（如理由fetch 对post和get方法进行封装） 
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

 
 **mock.js数据模拟的使用** [传送门1](https://github.com/nuysoft/Mock/wiki/Getting-Started)  [传送门2](http://mockjs.com/)

 **fetch交互的使用** [传送门](https://github.com/github/fetch#html)
 
### 关于项目我想说的

1. 项目中我们用到了蚂蚁金服的[antd](https://ant.design/docs/react/getting-started-cn),具体使用方法，官网已经写的很详细。

2. 关于项目的配置信息，建议看看上边列出的 `roadhog` 相关配置, 

3. 这里使用了[dav-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading) 进行加载动画状态的控制。我们在项目  PageTwo文件 中使用了loading的效果，每次增减加是都会出现加载动画效。
果。loading通过connect链接到组件后，会存储在prop中。我们可以看到loading的结构如下：

```javascript

loading:{
    effect:{
        // 存储的是每个effects的状态
    }
    global:true, // 存储的是全局的状态
    models:{ //存储的是每个models的状态

    }
}
```

4. `.roadhogrc` 配置文件，因为个人不喜欢`json`格式，在编辑器上没有样式，所以改成了`js`文件`.roadhogrc.js`

5. 关于代理的测试，我在`.roadhogrc.js` 注释了，你尝试可以打开注释，重新运行，然后在访问 [http://localhost:8000/api/users](http://localhost:8000/api/users) **注意端口可能有变化**，根据你实际运行的端口


### mock模拟数据

我们在mock文件夹下写了test假数据，并写了一些相应get和post的方法，数据的书写规范请看：[传送门](https://github.com/nuysoft/Mock/wiki/Getting-Started)，另外我们在.roadhogrc.mock.js 文件中导入了我们要写的数据，这里的相关知识可以看看 [roadhog相关配置](https://github.com/sorrycc/roadhog#mock)



### 注意点

- `dva`在使用`git` 提交是会进行代码检测，如果检测不成功，代码不会被提交，如果你想去掉它，可以这样做：

>在项目中建一个 `.eslintignore` 里面写上忽略你要检测的文件。(本练习中已经加入了)