import React,{useState,useEffect} from 'react';
import "./profile.css";
import { Row, Col  ,Tabs ,Form, Input, Button, Checkbox,Select ,message } from 'antd';
import api from "../../helpers/axios";
const { Option } = Select;

const { TabPane } = Tabs;
export default function Profile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [tabNo,settabNo] = useState("1");
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
       var finalValue = {
            "id":userData.id,
          "name": values.name,
          "pincodeId": values.pincodeId,
          "address": values.address,
        }
        const result = await api.patch('users',finalValue);
        message.success('Details updated successfully');
        settabNo("1")
        localStorage.setItem("userData", JSON.stringify({...userData,
            "name":values.name,
            "pincodeId": values.pincodeId,
            "address": values.address,}));
        setLoading(false)
        
  };
  console.log(tabNo,"--------")
  return (
    <div>
        <h1>Profile</h1>
       <Tabs defaultActiveKey={tabNo} onChange={(key)=>{
           settabNo(key)
       }}>
            <TabPane tab="Info" key="1">
                
         <h3><span className='profileLabel'>Name: </span> {userData.name}</h3>
         <h3><span className='profileLabel'>mobileNo: </span> {userData.mobileNo}</h3>
         <h3><span className='profileLabel'>Address: </span> {userData.address}</h3>

            </TabPane>
            <TabPane tab="Edit" key="2">
            <div>
            <Col  lg={{ span: 10 }} md={{span:16}} sm={{span:24}} xs={{span:24}}>
            <Form
                form={form}
      name="normal_login"
      className="login-form"
      initialValues={userData}
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
          disabled
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

      <Form.Item>
        <Button type="primary" loading={loading} htmlType="submit" className="login-form-button register-btn" style={{marginRight:"5px"}}>
        Update
        </Button>
      </Form.Item>
    </Form>
    </Col>
    
            </div>
            </TabPane>
            
        </Tabs>
    </div>
  )
}
