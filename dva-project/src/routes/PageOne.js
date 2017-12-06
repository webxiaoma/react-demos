import React from 'react';
import { connect } from 'dva';

import style from './Page.less'

import MainLayout from '../components/MainLayout'

function Pageone(prop){
  console.log(prop)
  const {dispatch,PageOne} = prop;
  return (
    <MainLayout>
       <div className={style.warp}>
          <h2 className={style.warpa}>简易计算器 <strong>同步</strong>（dav脚手架）</h2> 
          <h4>计算结果：{PageOne.result}</h4>
          <div>
            <button onClick={()=>dispatch({type:'PageOne/updateState', payload:{result:PageOne.result+1}})}>增加</button>
            <button onClick={()=>dispatch({type:'PageOne/updateState',payload:{result:PageOne.result - 1}})}>减少</button>
          </div>
       </div>
    </MainLayout>
  );
}

Pageone.propTypes = {

};

export default connect(({PageOne})=>({PageOne}))(Pageone);
