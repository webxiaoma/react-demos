import React from 'react';

import style from './Header.less'


export default () => {
    return (
      <header className={style.appHeader}>
        <img src={require('../../public/react.png')}  className={style.appLogo} alt="logo" />
        <h1 className={style.appTitle}>Welcome to dva</h1>
      </header>
    )
}


// 注意点，所有样式都存在对象style中了，图片引入方式使用require











