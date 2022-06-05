import React from 'react'
import { Row, Col ,Button  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping} from '@fortawesome/free-solid-svg-icons'
import ProductCart from "../../components/ProductCart";
import { useSelector ,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {CHECKOUT} from "../../constants/routes";
import "./Cart.css";
export default function Cart() {
   
  const cartData = useSelector((state) => state.cart);
  var getTotalMrp = 0;
  if(cartData.cart.length > 0){
    cartData.cart.map((e) => {
      getTotalMrp = (getTotalMrp) + (e.mrp * e.qty)
    })
  }
  console.log("getTotalMrp",getTotalMrp)
  return (
    <div className="site-layout-content">
         <Row>
               
               <Col  lg={{ span: 16 }} md={{span:16}} sm={{span:24}} xs={{span:24}} >
                 <div className='particularBox'>

                       
                      <div className='cart-boxx'>
                      <h2>My Cart ({cartData.cart.length})</h2>
                      {
                        cartData.cart.length > 0 ?
                          cartData.cart.map((curElem)=>{
                           return(
                             <div key={curElem.id}>
                             <ProductCart data={curElem} />
                             <hr className='cart-hr' />  
                             </div>
                           )
                          })
                        : <><h2>Your cart is empty</h2></>
                        }
                          
                           
                      <div>
                      <Link to={CHECKOUT}>
                        <Button type="primary" size="small" className='placeorderButton'> <FontAwesomeIcon style={{marginRight:"10px"}} icon={faCartShopping} /> Place Order</Button>
                        </Link>
                      </div>
                 </div>
                 </div>

               </Col>
               <Col  lg={{ span: 8 }} md={{span:8}} sm={{span:24}} xs={{span:24}} >
               
                <div className='cart-boxx' style={{width: "100%",height: "346px"}}>
                <h2>PRICE DETAILS</h2><br/>
                <h4 className='cart-rs-tag'>Price  <span>₹{getTotalMrp}</span></h4>
                <h4 className='cart-rs-tag'>Qty  <span>{cartData.cart.length}</span></h4>
                <h4 className='cart-rs-tag'>Discount <span style={{color:"green"}}>- ₹{getTotalMrp - cartData.total}</span></h4>
                <h4 className='cart-rs-tag'>Delivery Charges  <span>₹0</span></h4>
                <h2 className='cart-rs-tag' style={{fontSize:"20px"}}>Total Amount <span>₹{cartData.total}</span></h2>
                </div>
               
               </Col>
         </Row>          
    </div>
  )
}
