# redux 同步练习

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

```javascript

- one
  —— actions.js  // action 页面  
  —— count.js  //  展示组件（包含生成的容器组件）
  —— reducer.js  // reducer
  —— show.js    //  展示组件
```


**主要思路：**

1. 组件的编写(count.js 和 show.js)，这一块应该没什么难度，如果你感觉有难度，建议你继续去学习一下react

2. 编写`action`(action.js),这里没有用`action`创建函数，并且所有的`type`值，我们建在了一个统一的地方(actions_type.js)，这样有利于维护(当然项目简单就没必要了，我这里只是为了做演示)

注释：action中type是必须要写的，另外其的键名不是必须的，你可以任意起，不过社区给了一个标准，

```javascript

{
    type:""，       // 必写，必须是字符串
    payload: {},    // 属性可以是任何类型的值。它代表了行动的有效载荷（例如交互时传递的一些数据）
    error: true,    // 错误信息true则可以将可选属性设置为。
    meta:"",        //属性可以是任何类型的值。它旨在用于任何不属于有效负载的额外信息。
}
```

3. 有了action 我们来编写reducer(一个纯函数)， 因为redux中store的state数据总是通过dispatch 来分发一个action来通知reducer来返回新的state，从而改变数据更新view。改变view的更新，我们不用考虑怎么实现的，我们只要把我们的reducer传入store中（App.js）, 需要注意的是我们这里的reducer和 two文件件中的reducer 在 App.js文件中使用const reducer = combineReducers({oneReducer,twoReducer})
方法进行了合并（reudx中store和reducer最终只能有一个）


4. 现在我们有了组件，有了action，并且处理state的reducer也编写好了。接下来我们要做的就是通过createStore创建store,并将reducer传递给store（App.js文件）。


5. 有了数据store后我们将展示组件通过connect 变成风容器组件（count.js 文件）。