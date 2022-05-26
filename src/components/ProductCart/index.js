import React from 'react'
import { Row, Col ,Button  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faMinus,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { changeCart,increaseCart,descreaseCart,removefromCart,gettotalamt} from "../../redux_store/actions/actionss"
import { useSelector ,useDispatch } from "react-redux";
export default function ProductCart({data}) {
  const dispatch = useDispatch();
  const incrementPro = (id) =>{
    dispatch(increaseCart(id));
    dispatch(gettotalamt());
  } 
  const decrementPro = (id,qty) =>{
      if(qty === 1){
      dispatch(removefromCart(id));
      }else{
      dispatch(descreaseCart(id));
      }
      dispatch(gettotalamt());
  }
  const removePro = (id) =>{
      dispatch(removefromCart(id));
      dispatch(gettotalamt());
  } 
  const emptyCart = () =>{
      dispatch(changeCart());
      dispatch(gettotalamt());
  } 
console.log(data)
  return (
    <Row >
                <Col  lg={{ span: 6 }} md={{span:6}} sm={{span:6}} xs={{span:7}} >
                  <img src={data.image} 
                  className='cart-pro-img'/>
                </Col>
                <Col  lg={{ span: 18 }} md={{span:18}} sm={{span:18}} xs={{span:17}} >
                  <div style={{marginLeft:"10px"}}>
                  <h3>{data.title}</h3>
                  {/* <label>200 g</label><br/>
                  <label>Seller:UNIVERSALPRODUCTSGROUP</label><br/> */}
                  <div style={{marginTop: "4px"}}>
                  <span className='mainruperss-cart'>{data.productQty}: ₹{data.price}</span>
                  {data.price !== data.mrp ? 
                  <>
                   <span className='mrpruperss-cart'>₹{data.mrp}</span>
                   <span className='discountt-cart'>{data.discount}% off</span>
                   </>
                   :null}
                   
                  </div>
                  <Button onClick={ () => incrementPro(data.id)}
                  className='PlusButton-cart' type="primary" icon={<FontAwesomeIcon icon={faPlus}    />}  />
                  <Button type="text" className='middle-button-pro-detail-cart '>{data.qty}</Button>
                  <Button onClick={ () => decrementPro(data.id,data.qty)}
                  className='MinusButton-cart' type="primary" icon={<FontAwesomeIcon icon={faMinus} />}  />
                  <Button onClick={ () => removePro(data.id)}
                  className='delete-cart-pro' type="primary" icon={<FontAwesomeIcon style={{fontSize:"20px"}} icon={faTrashCan} />}  /> 
                </div>
                </Col>
               </Row> 
  )
}
