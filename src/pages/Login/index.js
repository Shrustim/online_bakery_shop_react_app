import React from 'react'
import "./login.css";
import { REGISTER } from "../../constants/routes";
import { Form, Input, Button, Checkbox,Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
export default function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <div>
        <Row>
               
               <Col  lg={{ span: 8 }} md={{span:4}}  sm={{span:2}} xs={{span:24}}> </Col>
               <Col  lg={{ span: 8 }} md={{span:16}} sm={{span:20}} xs={{span:24}}>
                 <div className='login-Box'>
                   <h2 style={{textAlign: "center"}}>Login</h2>
               <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button login-btn" style={{marginRight:"5px"}}>
          Log in
        </Button>
        Or <Link to={REGISTER} style={{marginLeft:"5px"}}>register now!</Link>
      </Form.Item>
    </Form>
    </div> 
                  </Col>
                  <Col  lg={{ span: 8 }} md={{span:4}} sm={{span:2}} xs={{span:24}}> </Col>
          </Row>      
    
    
    </div>
  )
}
