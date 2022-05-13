import React from 'react'
import { Row, Col, Select ,Button ,Divider } from 'antd';
import Truncate from 'react-truncate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faMinus,faCartShopping,faStar} from '@fortawesome/free-solid-svg-icons'
import ProductCard from "../../components/ProductCard"
import "./ProductDetail.css";
const { Option } = Select;
export default function ProductDetail() {
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }
  return (
    <>

    <Row>
               
                <Col  lg={{ span: 11 }} md={{span:11}} sm={{span:24}} xs={{span:24}} >
                   <Row>
                      <Col  lg={{ span: 5 }} md={{span:5}} >
                      <img className='sideImage-detail' src="https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521" /> <br/>
                       <img className='sideImage-detail' src="https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/cookie-biscuit/h/m/m/250-premium-raggi-cookies-250-gm-1-akd-original-imafz73d9mzpn7h9.jpeg?q=70" /> <br/>
                        <img className='sideImage-detail' src="https://rukminim2.flixcart.com/image/416/416/kmkxbww0/cookie-biscuit/z/x/9/200-handmade-sugar-free-low-fat-khari-biscuit-twistie-pack-of-1-original-imagfghhp7pdbdnp.jpeg?q=70" /> <br/>
                        <img className='sideImage-detail' src="https://rukminim2.flixcart.com/image/416/416/km82d8w0/rusk/u/c/f/500-old-delhi-s-famous-fresh-crispy-soft-egg-cake-rusks-cake-original-imagf6knhnx45y9e.jpeg?q=70" /> <br/>
                      </Col>
                      <Col  lg={{ span: 19 }} md={{span:19}} >
                      <img className='mainImage-detail' src="https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521" /> <br/>
                      </Col>
                   </Row>
                </Col>
                <Col lg={{ span: 13 }} md={{span:13}} sm={{span:24}} xs={{span:24}} >
                 <div style={{padding:"10px",paddingTop:"0px"}}>
                    <h2> 
                    <Truncate lines={1} ellipsis={<span>...</span>}>
                    BAKERY Milk Strawbery Cupcake Box  (200 g)  </Truncate>
                   </h2>
                    <span className='mainruperss'>₹439</span>
                    <span className='mrpruperss'>₹1449</span>
                    <span className='discountt'>70% off</span>
<br/><br/>
                    <Select
                        labelInValue
                        defaultValue={{ value: '1' }}
                        style={{ width: "197px",marginBottom:"5px"}}
                        onChange={handleChange}
                    >
                        <Option value="1">200gm --- 20.00Rs</Option>
                        <Option value="2">500gm --- 45.00Rs</Option>
                    </Select>
                    <br/> <br/>
                    <div className='buttonbox-detail'>
                        <Button className='PlusButton' type="primary" icon={<FontAwesomeIcon icon={faPlus}    />}  />
                        <Button type="text" className='middle-button-pro-detail '>1</Button>
                        <Button className='MinusButton' type="primary" icon={<FontAwesomeIcon icon={faMinus} />}  />
                        <br/>  <br/>   <Button type="primary" size="small" className='addToCartButton-detail'> <FontAwesomeIcon icon={faCartShopping} /> Add to Cart</Button>
                 
                    </div>

                    <div style={{marginTop:"10px"}}>
                   
                    <Truncate lines={3} ellipsis={<span>...</span>}>
                    Cupcakes are small, tasty snack cakes that are favored for their portability and portion-control. They are batter cakes baked in a cup-shaped foil or temperature resistant paper. A cupcake can be prepared from a variety of formulations and can be decorated with cream and icings.
                    Cupcakes are small, tasty snack cakes that are favored for their portability and portion-control. They are batter cakes baked in a cup-shaped foil or temperature resistant paper. A cupcake can be prepared from a variety of formulations and can be decorated with cream and icings.
                    </Truncate>
                    </div>
                    <br/>
                   
                 </div>


                </Col>
    </Row>   
    <div className='section-home'>
         <Divider className='heading-home-divider'><h2 className='heading-home'><b><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> Similar Products <FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> </b> </h2></Divider>
           
            <Row>
                <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard discount={true} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/kmkxbww0/cookie-biscuit/z/x/9/200-handmade-sugar-free-low-fat-khari-biscuit-twistie-pack-of-1-original-imagfghhp7pdbdnp.jpeg?q=70" />
                </Col>
                <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard  discount={false} loading={false} imgg="https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard discount={true} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/cookie-biscuit/h/m/m/250-premium-raggi-cookies-250-gm-1-akd-original-imafz73d9mzpn7h9.jpeg?q=70" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard  discount={false} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/km82d8w0/rusk/u/c/f/500-old-delhi-s-famous-fresh-crispy-soft-egg-cake-rusks-cake-original-imagf6knhnx45y9e.jpeg?q=70" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard   discount={false} loading={false} imgg="https://m.media-amazon.com/images/I/91aVePdCaDL._SX569_.jpg" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard discount={false} loading={false} imgg="https://www.bigbasket.com/media/uploads/p/l/40106021_10-tasties-biscuits-moon.jpg" /> 
                </Col>
            </Row>
         </div>
    </>         
  )
}
 