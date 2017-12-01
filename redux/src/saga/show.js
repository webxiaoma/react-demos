import React from 'react'

// children 默认是存在 props 中的
export default ({children,result}) => (
    <div>
       <h4>计算结果：{result}</h4>
        {children}
    </div>
)

