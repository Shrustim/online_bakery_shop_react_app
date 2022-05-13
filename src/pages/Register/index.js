import React from 'react'
import "./register.css";
import { Link } from 'react-router-dom';
import { LOGIN } from "../../constants/routes";
import { Form, Input, Button, Checkbox,Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default function Register() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <div>
        <Row>
               
               <Col  lg={{ span: 7 }} md={{span:4}}  sm={{span:24}} xs={{span:24}}> </Col>
               <Col  lg={{ span: 10 }} md={{span:16}} sm={{span:24}} xs={{span:24}}>
                 <div className='register-Box'>
                   <h2 style={{textAlign: "center"}}>Register</h2>
               <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
       <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
        <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please input Address',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="pincode"
        label="Pincode"
        rules={[
          {
            required: true,
            message: 'Please input your pincode!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button register-btn" style={{marginRight:"5px"}}>
        Register
        </Button>
        Or <Link to={LOGIN} style={{marginLeft:"5px"}}>Login now!</Link>
      </Form.Item>
    </Form>
    </div> 
                  </Col>
               <Col  lg={{ span: 7 }} md={{span:4}} sm={{span:24}} xs={{span:24}}> </Col>
          </Row>      
    
    
    </div>
  )
}
