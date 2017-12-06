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
                        rules: [{ required: true, message: '请输入1-10整数'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入1-10整数" />
                    )}
                </Form.Item>
                <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    搜索
                </Button>
                </Form.Item>
            </Form>
        )
    }
   
}

const NewFromComponent = Form.create()(FromComponent);



const Mock = ({mockTest,dispatch}) => {
    console.log(mockTest)
    return(
        <MainLayout>
        <div className={style.warp}>
            <h2 className={style.warpa}>数据模拟 <strong>异步</strong>（mock）</h2> 
            <p></p>
            <div>
                <NewFromComponent submit={(value)=>dispatch({type:'mockTest/fetch',payload: value})} />
            </div>
            <h4>获取结果：{mockTest.result}</h4>          
        </div>
        </MainLayout>
    )
}

export default connect(({mockTest})=>({mockTest}))(Mock);
