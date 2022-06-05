import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import {ORDER_LIST} from "../../../constants/routes"
import { Link } from 'react-router-dom';
import { Space, Table, Tag, Avatar, Button  } from 'antd';
import {WithTokenApi } from "../../../helpers/axios"
import "./detail.css";
const columns = [
  {
    title: 'Image',
    key: 'Image',
    render: (_, record) => (
 
        <Avatar src={record.imageone} />

    ),
  },
  {
    title: 'productName',
    dataIndex: 'productName',
    key: 'productName',
    render: (text) => <a href='#'>{text}</a>,
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
    render: (_, record) => (
      <span>
        {record.qty} ({ record.dbQty} {record.unitName})
      </span>
    ),
  }
];



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
        const resultProduct = await WithTokenApi.get('ordersById/'+id);
        if(resultProduct.data){
          setOrderProduct(resultProduct.data)
        }
    }
    console.log("order----",order)
    console.log("pro----",orderProduct)


  return (
    <div className="site-layout-content">
      <h1>Order Detail
     <Link to={ORDER_LIST} > <Button type="primary" className='backButtonOrder'>Back </Button></Link>
      </h1>
      <div>
      
      </div>
      {order && order.length > 0 ? 
      <>
         <h3><span className='orderLabel'>Order Id: </span> #{id}</h3>
         <h3><span className='orderLabel'>Order Date: </span> {order[0].orderDate}</h3>
         <h3><span className='orderLabel'>Qty: </span> {order[0].qty}</h3>
         <h3><span className='orderLabel'>Total Price: </span> {order[0].totalPrice}</h3>
         <h3><span className='orderLabel'>Address: </span> {order[0].address}</h3>
<br/>
         <h4><span className='orderLabel'>Product list: </span></h4>
         <Table columns={columns} dataSource={orderProduct} />

         </>
      :null}
      
    </div>
  )
}
