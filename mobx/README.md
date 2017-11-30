# mobx 练习

![webxiaoma](https://webxiaoma.github.io/other/manong.jpg)

### 使用方式

```
yarn install

yarn start
```
说明：这里我们使用的是feackbook官方提供的 `create-react-app` 脚手架 [github仓库](https://github.com/facebookincubator/create-react-app)

了解mobx的用法，建议你只关注 src文件夹下的mobx文件和 `app.js文件`


### 知识点 

- mobx中文文档: [http://cn.mobx.js.org/](http://cn.mobx.js.org/)

- mobx GitHub仓库: [https://github.com/mobxjs/mobx](https://github.com/mobxjs/mobx)

- mobx-react GitHub仓库: [https://github.com/mobxjs/mobx-react](https://github.com/mobxjs/mobx-react)





### 其他注意点

**1. creact-react-app 支持ES7 修饰符步骤**

（1）使用`creact-react-app`创建项目后执行以下

```
yarn eject
```
（2）安装 loader

```
yarn add babel-plugin-transform-decorators-legacy --save
yarn add babel-preset-react-native-stage-0 --save

```

（3）新建`.babelrc` 文件 内容如下

```
{
  "presets": ["react-native-stage-0/decorator-support"]
}

```

当然还有其他方法，[传送门](https://juejin.im/post/59faf3975188254eaf27ea71)



**2.让Vscode编辑器支持ES7修饰器语法**

新建`jsconfig.json`文件，下如以下内容（如果使用typeScript，请建tsconfig.json）

```
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```
当然官网也有说明[http://cn.mobx.js.org/best/decorators.html](http://cn.mobx.js.org/best/decorators.html)