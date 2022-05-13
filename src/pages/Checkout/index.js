import React from 'react'
import "./checkout.css";
import { Link } from 'react-router-dom';
import { LOGIN } from "../../constants/routes";
import { Form, Input, Button, Checkbox,Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default function Checkout() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <div>
        <Row>
               
               <Col  lg={{ span: 7 }} md={{span:4}}  sm={{span:24}} xs={{span:24}}> </Col>
               <Col  lg={{ span: 10 }} md={{span:16}} sm={{span:24}} xs={{span:24}}>
                 <div className='Checkout-Box'>
                   <h2 style={{textAlign: "center"}}>Checkout</h2>
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
      <hr/>
      <h4 >Price  <span className='checkout-rs-tag'>₹1598</span></h4>
      <h4 >Qty  <span className='checkout-rs-tag'>2</span></h4>
      <h4 >Discount <span className='checkout-rs-tag' style={{color:"green"}}>- ₹1598</span></h4>
      <h4>Delivery Charges  <span  className='checkout-rs-tag'>₹40</span></h4>
      <h2  style={{fontSize:"20px"}}>Total Amount <span className='checkout-rs-tag'>₹4895</span></h2>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button checkout-btn" style={{marginRight:"5px"}}>
        Place Order
        </Button>
       
      </Form.Item>
    </Form>
    </div> 
                  </Col>
               <Col  lg={{ span: 7 }} md={{span:4}} sm={{span:24}} xs={{span:24}}> </Col>
          </Row>      
    
    
    </div>
  )
}
