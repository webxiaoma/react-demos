import React from 'react'
import {Link} from 'dva/router'

import style from './Nav.less'

export default () => {
    return(
        <div className={style.navBar}>
            <Link to='/one'>同步变化</Link>
            <Link to='/two'>异步变化</Link>
        </div>
    )
}