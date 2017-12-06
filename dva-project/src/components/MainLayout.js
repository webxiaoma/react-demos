import React from 'react'
import Header from './Header'
import Nav from './Nav'


// 使用antd的Layout布局
import { Layout } from 'antd'
import style from './MainLayout.less'



export default ({children}) => {
   return(
       <Layout>
          <Header/>
            <Layout.Content>
          <Nav/>
          <div  className={style.MainLayout}>
            {children}          
          </div>
        </Layout.Content>
       </Layout>
   )
}
