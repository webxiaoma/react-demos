import React from 'react';
import { connect } from 'dva';
import { Spin } from 'antd'; // 加载动画

import style from './Page.less'

import MainLayout from '../components/MainLayout'

function Pageone( {dispatch,PageTwo,loading} ){
  console.log(loading)
  return (
    <MainLayout>
       <div className={style.warp}>
          <h2 className={style.warpa}>简易计算器 <strong>异步操作（延迟一秒）</strong>（dav脚手架）</h2> 
          <h4>计算结果：<span>{PageTwo.result}</span> <Spin size="large" spinning={loading.effects['PageTwo/asyncAdd']}/></h4>
          <div>
            <button onClick={()=>dispatch({type:'PageTwo/asyncAdd'})}>增加</button>
            <button onClick={()=>dispatch({type:'PageTwo/asyncDecrease'})}>减少</button>
          </div>
          <p>这里使用了 subscriptions 订阅，每次路径变为/two时，自动加2（有延迟）</p>
          <p>这里我们也订阅了键盘事件，当我们按up（↑）键时，会延迟一秒加2，当我们按down（↓）键时，会延迟一秒减2，</p>
       </div>
    </MainLayout>
  );
}

Pageone.propTypes = {

};

// PageOne 是module中对应的数据， loading是一个dva-loading插件，在index页面中引入的
export default connect(({PageTwo,loading})=>({PageTwo,loading}))(Pageone);
