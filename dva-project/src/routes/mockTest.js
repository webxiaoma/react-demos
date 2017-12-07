import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';

import style from './Page.less'
import MainLayout from '../components/MainLayout'


// 表单组件
class FromComponent extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.props.submit(values)
            //   console.log('Received values of form: ', values);
            }
        });
    }
    
    render(){
         const  { getFieldDecorator} = this.props.form;
         return(
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('id', {
                        rules: [{ required: true,  len:1, message: '请输入0-9整数'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="number" placeholder="请输入1-10整数" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                       搜索
                    </Button>                 
                </Form.Item>
            </Form>
        )
    }
   
}

const NewFromComponent = Form.create()(FromComponent);



const Mock = ({mockTest,dispatch}) => {
    const result = mockTest.result;
    // console.log(result)    
    return(
        <MainLayout>
        <div className={style.warp}>
            <h2 className={style.warpa}>数据模拟 <strong>异步</strong>（mock）</h2> 
            <p></p>
            <div>
                <NewFromComponent submit={(value)=>dispatch({type:'mockTest/fetch',payload: value})} />
            </div>
            <h4>获取结果：</h4>         
            <div>
               <p><strong>姓名：</strong>{result.name[Object.keys(result.name)[0]] || ""}</p>
               <p><strong>序列号：</strong>{result.id}</p>
               <p><strong>是否已婚：</strong>{result.isMarried?"是":'否'}</p>
               <p><strong>其他信息：</strong>{result.other.last}</p>
            </div> 
        </div>
        </MainLayout>
    )
}

export default connect(({mockTest})=>({mockTest}))(Mock);
