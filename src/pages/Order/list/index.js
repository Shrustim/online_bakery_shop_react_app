import React,{useState,useEffect} from 'react'
import "./orderlist.css";
import {ORDER_DETAIL} from "../../../constants/routes"
import { Link } from 'react-router-dom';
import { Space, Table, Tag } from 'antd';
import {WithTokenApi } from "../../../helpers/axios"

const columns = [
    {
      title: 'Id',
      key: 'id',
      render: (_, record) => (
        <Space size="middle">
          <Link to={ORDER_DETAIL+"/"+record.id}>#{record.id}</Link>        
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <>
           <Tag color={text == "pending" ? "red" : "green"} >
                {text}
              </Tag>
        </>
      ),
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (text) => <a>{text}</a>,
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
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Pincode',
      dataIndex: 'pincodeNo',
      key: 'pincodeNo',
    }
  ];
  

export default function OrderList() {
  const userData = JSON.parse(localStorage.getItem("userData"));
    const [orderList,setOrderList] = useState([]);
    useEffect(() => {
        fetchOrderList()
    },[])
    const fetchOrderList = async() => {

        const result = await WithTokenApi.get('ordersList/'+userData.id);
        if(result.data){
            setOrderList(result.data)
        }
    }
    console.log("orderList----",orderList)
  return (
    <div className="site-layout-content">
        <h2>Order List</h2>
        <Table columns={columns} dataSource={orderList} />
    </div>
  )
}
