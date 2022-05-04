import React from 'react'
import { Row, Col ,Button  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faMinus,faTrashCan} from '@fortawesome/free-solid-svg-icons'

export default function ProductCart() {
  return (
    <Row >
                <Col  lg={{ span: 6 }} md={{span:6}} sm={{span:6}} xs={{span:7}} >
                  <img src="https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521" 
                  className='cart-pro-img'/>
                </Col>
                <Col  lg={{ span: 18 }} md={{span:18}} sm={{span:18}} xs={{span:17}} >
                  <h3>BAKERY Milk Strawbery Cupcake Box (200 g)</h3>
                  <label>200 g</label><br/>
                  <label>Seller:UNIVERSALPRODUCTSGROUP</label><br/>
                  <div style={{marginTop: "4px"}}>
                  <span className='mainruperss-cart'>₹439</span>
                    <span className='mrpruperss-cart'>₹1449</span>
                    <span className='discountt-cart'>70% off</span>
                  </div>
                  <Button className='PlusButton-cart' type="primary" icon={<FontAwesomeIcon icon={faPlus}    />}  />
                  <Button type="text" className='middle-button-pro-detail-cart '>1</Button>
                  <Button className='MinusButton-cart' type="primary" icon={<FontAwesomeIcon icon={faMinus} />}  />
                  <Button className='delete-cart-pro' type="primary" icon={<FontAwesomeIcon style={{fontSize:"20px"}} icon={faTrashCan} />}  /> 
                </Col>
               </Row> 
  )
}
