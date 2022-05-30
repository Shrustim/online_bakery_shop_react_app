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
      key: 'Status',
      render: (_, { tags }) => (
        <>
           <Tag color={"green"} >
                IN Process
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
      dataIndex: 'pincodeId',
      key: 'pincodeId',
    }
  ];
  

export default function OrderList() {
  const userData = JSON.parse(localStorage.getItem("userData"));
    const [orderList,setOrderList] = useState([]);
    useEffect(() => {
        fetchOrderList()
    },[])
    const fetchOrderList = async() => {

        const result = await WithTokenApi.get('orders?filter=%7B%22where%22%3A%20%7B%22userId%22%3A%20'+userData.id+'%7D%7D');
        if(result.data){
            setOrderList(result.data)
        }
    }
    console.log("orderList----",orderList)
  return (
    <div>
        <h2>Order List</h2>
        <Table columns={columns} dataSource={orderList} />
    </div>
  )
}
