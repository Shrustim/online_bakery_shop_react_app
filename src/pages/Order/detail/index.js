import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import {ORDER_LIST} from "../../../constants/routes"
import { Link } from 'react-router-dom';
import { Space, Table, Tag } from 'antd';
import {WithTokenApi } from "../../../helpers/axios"
export default function OrderDetail() {
  const { id } = useParams();
  console.log("-----------",id)
  const userData = JSON.parse(localStorage.getItem("userData"));
    const [order,setOrder] = useState([]);
    const [orderProduct , setOrderProduct] = useState([]);
    useEffect(() => {
        fetchOrderList()
    },[])
    const fetchOrderList = async() => {
        const result = await WithTokenApi.get('orders?filter=%7B%22where%22%3A%20%7B%22id%22%3A%20'+id+'%7D%7D');
        if(result.data){
            setOrder(result.data)
        }
        const resultProduct = await WithTokenApi.get('orderproducts?filter=%7B%22where%22%3A%7B%22orderId%22%3A%20'+id+'%7D%7D');
        if(resultProduct.data){
          setOrderProduct(resultProduct.data)
        }
    }
    console.log("order----",order)
    console.log("pro----",orderProduct)


  return (
    <div>
      <h1>Order Detail</h1>
      {order ? 
         <h3>Order Id: #{id}</h3>
      :null}
      
    </div>
  )
}
