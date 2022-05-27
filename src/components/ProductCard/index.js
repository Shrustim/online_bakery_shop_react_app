import React,{useState,useEffect} from 'react'
import { Card, Select, Button  ,message} from 'antd';
import Truncate from 'react-truncate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {  useDispatch } from "react-redux"; 
import {addtoCart,gettotalamt} from "../../redux_store/actions/actionss"
import "./ProductCard.css";
const { Meta } = Card;
const { Option } = Select; 
export default function ProductCard({productData,imgg,loading,noPadding}) {
    const dispatch = useDispatch();
    const [mrp,setMrp] = useState(productData.pricedata[0].price);
    const [finalPrice,setFinalPrice] = useState(productData.pricedata[0].totalPrice);
    const [discount,setDiscount] = useState(productData.pricedata[0].discount);
    const [qtyProductShow,setQtyProductShow] = useState(productData.pricedata[0].qty+" "+productData.pricedata[0].unitName);
    const [qtyProduct,setQtyProduct] = useState(1);
    const [productPriceId,setProductPriceId] = useState(productData.pricedata[0].id);
    // console.log("productData------",productData)
    function handleChange(OptionValue) {
        console.log(OptionValue); 
        setProductPriceId(OptionValue.value)
        var pricedata = productData.pricedata.find(item => item.id === OptionValue.value);
        setFinalPrice(pricedata.totalPrice);
        setDiscount(pricedata.discount);
        setMrp(pricedata.price);
        setQtyProductShow(pricedata.qty+" "+pricedata.unitName);
        console.log("pricedata",pricedata);
      }
      console.log(productData)
    //add product  to cart 
    const addToCart = () =>{
        // document.getElementById("modaladdtocartt").style.display = "block";
        var subamout =parseFloat(qtyProduct)*parseFloat(finalPrice);
          let newarray={
              'id':productPriceId,
              'Productid':productData.id,
              'title':productData.productName,
              'image':productData.imageone,
              'price':finalPrice,
              'qty':qtyProduct,
              "mrp":mrp,
              "discount":discount,
              "productQty":qtyProductShow,
              'subamout':subamout.toFixed(2)
            };
         
            dispatch(addtoCart(newarray));
            dispatch(gettotalamt());
            message.success('Product added to cart successfully');
        //  setTimeout(function(){  document.getElementById("modaladdtocartt").style.display = "none";
        //   history.push('/cart');
        // }, 1000);
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
                            -{discount}%
                            </span>
                            </div>
                        </div>
                        : null
                    }
                  
                 <img className='product-card-img' src={productData.imageone} />
                 <div style={{paddingLeft:"12px",paddingRight:"12px",paddingBottom:"10px"}}>
                   <span className='product-card-title'>
                   <Truncate lines={2} ellipsis={<span>...</span>}>
                   {productData.productName}  </Truncate>
                   </span>
                   <Select
                        labelInValue
                        defaultValue={{ value: productPriceId}}
                        style={{ width: "100%",marginBottom:"5px"}}
                        onChange={handleChange}
                    >
                        {
                            productData.pricedata.length > 0 ? 
                            productData.pricedata.map((elm,index)=>{
                                return(
                                    <Option key={elm.id} value={elm.id}>{elm.qty}Gm --- {elm.totalPrice}Rs</Option>
                                )
                            })
                          
                            :null
                        }  
                    </Select>

                    <h4><b>Mrp: ₹ {finalPrice}</b> 
                    {finalPrice !== mrp? <span><strike>{mrp}</strike></span>:null}
                    </h4>
                    <div className='buttonbox'>
                        <Button className='PlusButton' type="primary" icon={<FontAwesomeIcon icon={faPlus}    />}  
                         onClick={() => {
                              ( qtyProduct + 1) <= 10 ? 
                              setQtyProduct(qtyProduct + 1)
                              : setQtyProduct(10)
                       
                        }} />
                        <Button type="text" className='middle-button-pro'>{qtyProduct}</Button>
                        <Button className='MinusButton' type="primary" icon={<FontAwesomeIcon icon={faMinus} />}
                        onClick={() => {
                            (qtyProduct - 1) !== 0 ? 
                            setQtyProduct(qtyProduct - 1)
                            : setQtyProduct(1)
                        }}  />
                        <Button 
                         onClick={addToCart}
                         type="primary"
                         size="small" className='addToCartButton'>Add to Cart</Button>
                 
                    </div>
                    </div>
                    </div>
          </Card>
    </div>
  )
}
