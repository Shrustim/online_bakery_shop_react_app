import React from 'react'
import { Card, Select, Button  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import "./ProductCard.css";
const { Meta } = Card;
const { Option } = Select;
export default function ProductCard({imgg,loading,discount,noPadding}) {
    function handleChange(value) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      }
  return (
    <div className='main-box-product' style={typeof noPadding != "undefined" ? {padding:"0px"} :null}>
          <Card
                loading={loading}
                hoverable
                style={{ width: "100%"  }}
             >
                 <div>
                     {discount ? 
                      <div className="wrap-label">
                            <div className="label-product new-label"><span>New</span></div>
                            <div className="label-product sale-label"><span>
                            -68%
                            </span>
                            </div>
                        </div>
                        : null
                    }
                  
                 <img className='product-card-img' src={imgg} />
                 <div style={{paddingLeft:"12px",paddingRight:"12px",paddingBottom:"10px"}}>
                   <span className='product-card-title'>hello span abc hell hello span abc hell</span>
                   <Select
                        labelInValue
                        defaultValue={{ value: '1' }}
                        style={{ width: "100%",marginBottom:"5px"}}
                        onChange={handleChange}
                    >
                        <Option value="1">200gm --- 20.00Rs</Option>
                        <Option value="2">500gm --- 45.00Rs</Option>
                    </Select>

                    <h4><b>Mrp: ₹ 20.00</b></h4>
                    <div className='buttonbox'>
                        <Button className='PlusButton' type="primary" icon={<FontAwesomeIcon icon={faPlus}    />}  />
                        <Button type="text" className='middle-button-pro'>1</Button>
                        <Button className='MinusButton' type="primary" icon={<FontAwesomeIcon icon={faMinus} />}  />
                        <Button type="primary" size="small" className='addToCartButton'>Add to Cart</Button>
                 
                    </div>
                    </div>
                    </div>
          </Card>
    </div>
  )
}
