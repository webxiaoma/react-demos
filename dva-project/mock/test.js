var Mock = require('mockjs')

// 这里用的是mock的语法规则： 详细请见：https://github.com/nuysoft/Mock/wiki/Syntax-Specification

const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有10 个元素
    'list|10':[{
        'id|+1': 1,            // 属性 id 是一个自增数，起始值为 1，每次增 1
        'isMarried|1-2': true, // 随机生成一个布尔值，值为true的概率是 1 / (1 + 2)，值为 false 的概率是 2 / (1 + 2)。
        'name|1':{             //从属性值 object 中随机选取 1 个属性。
            'king':'king',
            'wang':'wang',
            'Jhon':'Jhon',
            'Tom':'Tom',
        },
        'other':{              // 占位符
            first:'one',
            middle:'two',
            last:'@first @middle', // one two
        }
    }]
})

// Mock.setup({
//     timeout: 2000
// })

// export default data;
export default {
   'GET /api/test'(req,res){
      console.log(req)
      res.json({      //将请求json格式返回
        success: true,
        data,
      });
   }
}
