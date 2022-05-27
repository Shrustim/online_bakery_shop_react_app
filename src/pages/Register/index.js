import React,{useState,useEffect} from 'react'
import "./register.css";
import { Link } from 'react-router-dom';
import { LOGIN } from "../../constants/routes";
import { Form, Input, Button, Checkbox,Row, Col,Select ,message } from 'antd';
import { useNavigate  } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from "../../helpers/axios";
const { Option } = Select;

export default function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading,setLoading] = useState(false);
  const [pincodeList,setPincodeList] = useState([]);
  useEffect(()=>{
    getPincode()
  },[])
  const getPincode = async() => {
   const result = await api.get('pincodes?filter=%7B%22where%22%3A%20%7B%22is_show%22%3A%20true%2C%22is_active%22%3A%20true%20%7D%2C%22fields%22%3A%20%7B%20%22id%22%3A%20true%2C%20%22pincodeNo%22%3A%20true%20%7D%7D');
   setPincodeList(result.data);
  }
  const onFinish = async (values) => {
    setLoading(true)
        console.log('Received values of form: ', values);
        const checkresult = await api.get("users?filter=%7B%22where%22%3A%7B%22mobileNo%22%3A%20%22"+values.mobileNo+"%22%7D%7D")
       if(checkresult.data.length > 0){
        message.error('Mobile number already exits!');
        setLoading(false)
       }else{
        var finalValue = {
          "name": values.name,
          "mobileNo": values.mobileNo,
          "pincodeId": values.pincodeId,
          "address": values.address,
          "password": values.password,
          "is_active": 1
        }
        const result = await api.post('users',finalValue);
        form.resetFields()
        setLoading(false)
        navigate("/login");
       }
        
  };
  console.log(pincodeList) 
  return (
    <div>
        <Row>
               
               <Col  lg={{ span: 7 }} md={{span:4}}  sm={{span:24}} xs={{span:24}}> </Col>
               <Col  lg={{ span: 10 }} md={{span:16}} sm={{span:24}} xs={{span:24}}>
                 <div className='register-Box'>
                   <h2 style={{textAlign: "center"}}>Register</h2>
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
        {/* <Form.Item
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
      </Form.Item> */}
      
      <Form.Item
        name="mobileNo"
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
        name="pincodeId"
        label="Pincode"
        rules={[
          {
            required: true,
            message: 'Please select your pincode!',
          },
        ]}
      >
        {/* <Input
          style={{
            width: '100%',
          }}
        /> */}
         <Select
          defaultValue="disabled"
          style={{
            width: "100%",
          }}
        > <Option value="disabled" disabled>
        select pincode
      </Option>
      {
        pincodeList.length > 0 ? 
        pincodeList.map((e) =>{
          return(
             <Option key={e.id} value={e.id}>{e.pincodeNo}</Option>
          )
        })
        : null
      }
          
         
        </Select>

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
        <Button type="primary" loading={loading} htmlType="submit" className="login-form-button register-btn" style={{marginRight:"5px"}}>
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
