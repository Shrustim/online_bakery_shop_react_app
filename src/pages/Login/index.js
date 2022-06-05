import React,{useState,useEffect} from 'react'
import "./login.css";
import { REGISTER } from "../../constants/routes";
import { Form, Input, Button, Checkbox,Row, Col,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate  } from "react-router-dom";
import { Link } from 'react-router-dom';
import api from "../../helpers/axios";
import { login } from '../../redux_store/features/checkIsLoginSlice';
import {useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading,setLoading] = useState(false);
    const onFinish = async(values) => {
        console.log('Received values of form: ', values);
        var finalValue = {
          "name":values.mobileNo,
          "mobileNo": values.mobileNo,
          "password": values.password
        }
        const result = await api.post('users/login',finalValue);
        if(result.data.token){
          const userData = await api.get('users?filter=%7B%22where%22%3A%20%7B%22mobileNo%22%3A%20%22'+values.mobileNo+'%22%2C%22password%22%3A%20%22'+values.password+'%22%7D%2C%22fields%22%3A%20%7B%22id%22%3A%20true%2C%22name%22%3A%20true%2C%22mobileNo%22%3A%20true%2C%22pincodeId%22%3A%20true%2C%22address%22%3A%20true%2C%22is_active%22%3A%20true%7D%7D');
          localStorage.setItem("token", JSON.stringify(""+result.data.token+""));
          localStorage.setItem("userData", JSON.stringify(userData.data[0]));
          form.resetFields()
          setLoading(false)
          dispatch(login());
          navigate("/checkout");

        }else{
          message.error('Invalid mobile no or password!');
        }
     
        
      };
  return (
    <div className="site-layout-content">
        <Row>
               
               <Col  lg={{ span: 8 }} md={{span:4}}  sm={{span:2}} xs={{span:24}}> </Col>
               <Col  lg={{ span: 8 }} md={{span:16}} sm={{span:20}} xs={{span:24}}>
                 <div className='login-Box'>
                   <h2 style={{textAlign: "center"}}>Login</h2>
      <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="mobileNo"
        rules={[
          {
            required: true,
            message: 'Please input your Mobile no!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Mobile no" />
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
