import React,{useState,useEffect} from 'react'
import "./checkout.css";
import { useNavigate  } from "react-router-dom";
import { ORDER_DETAIL } from "../../constants/routes";
import { Form, Input, Button,Row, Col,Select,message } from 'antd';
import { useSelector ,useDispatch } from "react-redux";
import { removefromCart,gettotalamt} from "../../redux_store/actions/actionss"

import api from "../../helpers/axios";
import {WithTokenApi } from "../../helpers/axios"
const { Option } = Select;

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const userData = JSON.parse(localStorage.getItem("userData"));
  var getTotalMrp = 0;
  if(cartData.cart.length > 0){
    cartData.cart.map((e) => {
      getTotalMrp = (getTotalMrp) + (e.mrp * e.qty)
    })
  }
  const [form] = Form.useForm();
  const [loading,setLoading] = useState(false);
  const [pincodeList,setPincodeList] = useState([]);
console.log("userData",userData)
  useEffect(()=>{
    getPincode()
  },[]) 
  const getPincode = async() => {
   const result = await api.get('pincodes?filter=%7B%22where%22%3A%20%7B%22is_show%22%3A%20true%2C%22is_active%22%3A%20true%20%7D%2C%22fields%22%3A%20%7B%20%22id%22%3A%20true%2C%20%22pincodeNo%22%3A%20true%20%7D%7D');
   setPincodeList(result.data);
  }
  const  convertDate = (date) => {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }
  const onFinish = async (values) => {
    setLoading(true)
    var todaysDate = new Date();
    if (cartData.cart.length > 0) {  
      // console.log('Received values of form: ', values);
      const orderData = {
          "userId": userData.id,
          "totalPrice": cartData.total,
          "qty": cartData.cart.length,
          "address": values.address,
          "pincodeId": values.pincodeId,
          "orderDate": ""+convertDate(todaysDate)+"",
          "is_active": 1
      }
     
      // console.log("orderdata",orderData)
      const result = await WithTokenApi.post('orders',orderData);
        cartData.cart.map(async(e,index)=>{
          // console.log(e)
          var resultData  = await api.get('productprices/'+e.id+'?filter=%7B%22fields%22%3A%20%7B%22id%22%3A%20true%2C%22productId%22%3A%20true%2C%22unitId%22%3A%20true%2C%22qty%22%3A%20true%2C%22price%22%3A%20true%2C%22discount%22%3A%20true%2C%22totalPrice%22%3A%20true%2C%22is_show%22%3A%20true%2C%22is_active%22%3A%20true%7D%7D');
          // console.log("resultData",resultData);
          var subamout = e.qty * resultData.data.totalPrice;
          var orderProduct = {
            "orderId": result.data.id,
            "userId":userData.id,
            "productId": e.Productid,
            "totalPrice": parseFloat(subamout.toFixed(2)),
            "qty": e.qty,
            "price": resultData.data.totalPrice,
            "unitId": resultData.data.unitId,
            "discount": resultData.data.discount,
            "dbPrice": resultData.data.price,
            "dbQty": resultData.data.qty,
            "is_active": 1
             
          };
          dispatch(removefromCart(resultData.data.id));
          // console.log("orderproducts",orderProduct)
           await WithTokenApi.post('orderproducts',orderProduct);
          if(index === (cartData.cart.length - 1)){
              await localStorage.removeItem("cartData");
              await dispatch(gettotalamt());
              message.success('Order successfully placed');
              setLoading(false)
              navigate(ORDER_DETAIL+"/"+result.data.id);
          }
         })
  }
       
 
        
  };
  
  return (
    <div className="site-layout-content">
        <Row>
               
               <Col  lg={{ span: 7 }} md={{span:4}}  sm={{span:24}} xs={{span:24}}> </Col>
               <Col  lg={{ span: 10 }} md={{span:16}} sm={{span:24}} xs={{span:24}}>
                 <div className='Checkout-Box'>
                   <h2 style={{textAlign: "center"}}>Checkout</h2>
               <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{
        "name": userData.name,
        "mobileNo": userData.mobileNo,
        "address": userData.address,
        "pincodeId": userData.pincodeId
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
        <Input disabled  />
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
      <hr/>
      <h4 >Price  <span className='checkout-rs-tag'>₹{getTotalMrp}</span></h4>
      <h4 >Qty  <span className='checkout-rs-tag'>{cartData.cart.length}</span></h4>
      <h4 >Discount <span className='checkout-rs-tag' style={{color:"green"}}>- ₹{getTotalMrp - cartData.total}</span></h4>
      <h4>Delivery Charges  <span  className='checkout-rs-tag'>₹0</span></h4>
      <h2  style={{fontSize:"20px"}}>Total Amount <span className='checkout-rs-tag'>₹{cartData.total}</span></h2>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} className="login-form-button checkout-btn" style={{marginRight:"5px"}}>
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
