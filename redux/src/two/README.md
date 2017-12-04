# redux 异步 redux-thunk 练习

![webxiaoma](https://webxiaoma.github.io/other/manong.jpg)


### 知识库

****

**1.redux中文文档：** [传送门](http://cn.redux.js.org/index.html)

**2.redux GitHub仓库:** [传送门](https://github.com/reactjs/redux)
 
**3.react-redux GitHub仓库:** [传送门](https://github.com/reactjs/react-redux)

**4.阮一峰老师redux系列文章：**

>[基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

>[中间件与异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)

>[react-redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)


**5.redux-thunk中间件**[传送门](https://github.com/gaearon/redux-thunk)

对于 `redux-thunk` 中间件 这里有一些通俗易懂的使用文章：

[http://blog.csdn.net/kuangshp128/article/details/67632683](http://blog.csdn.net/kuangshp128/article/details/67632683)


### 项目介绍


**主要思路：**

这里 two文件件和one文件夹比只不过是多了异步处理，
相对于one文件夹我们做了一些改变是：

`actions` 中我们使用的`action`创建函。用`bindActionCreators`将拆分的创建函数合并，在`action`创建函数中我们因为使用了`reudx-thunk`中间件，所以可以返回一个函数对象，而不是必须返回一个对象了，我们在函数里可以处理异步操作。异步操作完成是，我们可以在通过`dispatch` 来分发一个`action`去通知`reducer`改变`state`。

另外我们是通过`applyMiddleware`方法来将`redux-thunk` 中间件导入到`store`中的（App.js）。

说白了，redux-thunk 主要是处理的 action创建函数, 将action创建函数可以返回函数对象，并且可以处理副作用（异步操作） 