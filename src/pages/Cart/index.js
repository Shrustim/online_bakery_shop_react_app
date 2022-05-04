import React from 'react'
import { Row, Col ,Button  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping} from '@fortawesome/free-solid-svg-icons'
import ProductCart from "../../components/ProductCart";
import "./Cart.css";
export default function Cart() {
  return (
    <div>
         <Row>
               
               <Col  lg={{ span: 16 }} md={{span:16}} sm={{span:24}} xs={{span:24}} >
                 <div style={{margin: "20px",marginTop: "0px"}}>

                       
                      <div className='cart-boxx'>
                      <h2>My Cart (1)</h2>
                            <ProductCart/>
                            <hr className='cart-hr' />  
                            <ProductCart/>
                          
                            <hr className='cart-hr' />  
                      <div>

                        <Button type="primary" size="small" className='placeorderButton'> <FontAwesomeIcon style={{marginRight:"10px"}} icon={faCartShopping} /> Place Order</Button>
                      </div>
                 </div>
                 </div>

               </Col>
               <Col  lg={{ span: 8 }} md={{span:8}} sm={{span:24}} xs={{span:24}} >
               
                <div className='cart-boxx' style={{width: "100%",height: "346px"}}>
                <h2>PRICE DETAILS</h2><br/>
                <h3 className='cart-rs-tag'>Price  <span>₹1598</span></h3>
                <h3 className='cart-rs-tag'>Qty  <span>2</span></h3>
                <h3 className='cart-rs-tag'>Discount <span style={{color:"green"}}>- ₹1598</span></h3>
                <h3 className='cart-rs-tag'>Delivery Charges  <span>₹40</span></h3>
                <h2 className='cart-rs-tag'>Total Amount <span>₹4895</span></h2>
                </div>
               
               </Col>
         </Row>          
    </div>
  )
}
