var Mock = require('mockjs')

// 这里用的是mock的语法规则： 详细请见：https://github.com/nuysoft/Mock/wiki/Syntax-Specification

const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有10 个元素
    'list|10':[{
        'id|+1': 1,            // 属性 id 是一个自增数，起始值为 1，每次增 1
        'isMarried|1-2': true, // 随机生成一个布尔值，值为true的概率是 1 / (1 + 2)，值为 false 的概率是 2 / (1 + 2)。
        'name|1':{             //从属性值 object 中随机选取 1 个属性。
            'a':'老王',
            'b':'老李',
            'c':'老张',
            'e':'小马',
            'f':'web',
            'g':'小明',
            'h':'小红',
        },
        'other':{              // 占位符
            first:'未知年龄',
            middle:'火星人',
            last:'@first @middle', // one two
        }
    }]
})

// export default data;
export default {
   'POST /api/test'(req,res){ // 处理 post请求
    //   console.log(req.body,req.params)
      let newData = data.list.filter((el)=>{
         if(el.id == req.body.id){
            return el;
         }
      })
      res.json({      //将请求json格式返回
        success: true,
        newData:newData[0],
      });
   },

   'GET /api/test'(req,res){ // 处理get请求
    let id = req.query.id;
    let newData = data.list.filter((el)=>{
       if(el.id == id){
          return el;
       }
    })
    res.json({      //将请求json格式返回
      success: true,
      newData:newData[0],
    });
 }
}
