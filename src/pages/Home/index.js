import React,{useState,useEffect} from 'react'
import ProductCard from "../../components/ProductCard"
import HomeCategory from "../../components/HomeCategory";
import { Carousel,Row, Col, Divider  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFlaskVial,faCheckToSlot,  faHeartCircleCheck,faCaretRight,faStar} from '@fortawesome/free-solid-svg-icons'
import "./Home.css";
import api from "../../helpers/axios";
const elment= {
    "id": 1,
    "productName": "White Bread",
    "categoryId": 1,
    "description": "Start your day on a nourishing and delightful note with this delicious blend of taste and nutrition White Bread is basically made from wheat flour from which the brand and germ",
    "imageone": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNYt2pdTDIAN1Q8PDQUXBLdQPeAEKjAmT5GCE0X-HzfiEBwZAZ4R2TYZHTHBx0z_tSZSWaJktMCBMOy1q_4PhwkmqA6LBoyARpqpTr1ofqOp4vUA5Oh10IpsA&usqp=CAE",
    "imagetwo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNYt2pdTDIAN1Q8PDQUXBLdQPeAEKjAmT5GCE0X-HzfiEBwZAZ4R2TYZHTHBx0z_tSZSWaJktMCBMOy1q_4PhwkmqA6LBoyARpqpTr1ofqOp4vUA5Oh10IpsA&usqp=CAE",
    "imagethree": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNYt2pdTDIAN1Q8PDQUXBLdQPeAEKjAmT5GCE0X-HzfiEBwZAZ4R2TYZHTHBx0z_tSZSWaJktMCBMOy1q_4PhwkmqA6LBoyARpqpTr1ofqOp4vUA5Oh10IpsA&usqp=CAE",
    "imagefour": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNYt2pdTDIAN1Q8PDQUXBLdQPeAEKjAmT5GCE0X-HzfiEBwZAZ4R2TYZHTHBx0z_tSZSWaJktMCBMOy1q_4PhwkmqA6LBoyARpqpTr1ofqOp4vUA5Oh10IpsA&usqp=CAE",
    "pricedata": [
      {
        "id": 1,
        "productId": 1,
        "unitId": 2,
        "qty": 350,
        "price": 25,
        "discount": 0,
        "totalPrice": 25
      },
      {
        "id": 2,
        "productId": 1,
        "unitId": 2,
        "qty": 700,
        "price": 50,
        "discount": 0,
        "totalPrice": 50
      }
    ]
  };
const Home = () => {
    const [productListOne,setProductListOne] = useState([]);
    const [productListTwo,setProductListTwo] = useState([]);
    useEffect(()=>{
        fetchProductListOne();
        fetchProductListtwo();
    },[]);
    var filter = {
        "categoryId": 0,
        "subCategoryId": 0,
        "unitId": 0,
        "startPrice": 0,
        "endPrice": 0,
        "limit": 0,
        "offset": 0
      }
    const fetchProductListOne = async () => {
        
        
        const result = await api.post('products-list',filter);
        setProductListOne(result.data);
        // console.log("productListOne----",result.data);
    }
    const fetchProductListtwo = async () => {
        const result = await api.post('products-list',filter);
        setProductListTwo(result.data);
        // console.log("setProductListTwo----",result.data);
    }
    //   console.log(productListOne)
	return(
        <div className="site-layout-content homePage">
              <div className='section-home' style={{paddingTop:"0px"}}>
          <Carousel autoplay effect="fade">
          <div>
              <img className='sliderimage' src="https://content.jdmagicbox.com/comp/surat/36/0261p261stds000136/catalogue/seewans-tasty-bakes-adajan-dn-surat-bakery-product-manufacturers-vdwzl.jpg?clr=#4d331a?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" />
           </div>
            <div>
            <img className='sliderimage' src="https://jahagirdarfoods.com/wp-content/uploads/2020/11/JS_BakeryProducts_Banner.jpg" />
             </div>
           
            <div>
              <img className='sliderimage' src="https://tossdown.site/assets/media/REGAL_BANNER5.jpg" />
            </div>
            <div>
            <img className='sliderimage' src="https://tossdown.site/assets/media/REgal_web_banner.jpg" />
            </div>
        </Carousel>
        </div>
         <div className='section-home'  style={{paddingBottom: "1px"}}>
            <h1 className='header-home'>Organic Bakery Products from Kolhapur Bakery</h1>
            <Row>
               
                <Col xs={{ span: 12 }} sm={{ span: 24}} md={{ span: 8}} lg={{ span: 8 }}>
                    <center>
                        <div className='smallbox-home'> 
                            <FontAwesomeIcon icon={faHeartCircleCheck} className="small-iconn" />
                            <span  className='small-titlee'> Made with Love</span>
                        </div>  
                    </center>   
                </Col>
                <Col xs={{ span: 12}} sm={{ span: 24}} md={{ span: 8}} lg={{ span: 8 }}>
                    <center>
                        <div className='smallbox-home'>
                            <FontAwesomeIcon icon={faCheckToSlot} className="small-iconn" />
                            <span  className='small-titlee'> Quality Checked</span>
                        </div> 
                    </center>        
                </Col>
                <Col xs={{ span: 12}} sm={{ span: 24}} md={{ span: 8}} lg={{ span: 8 }} className="hideOnMobile">
                    <center>
                        <div className='smallbox-home'>
                            <FontAwesomeIcon icon={faFlaskVial} className="small-iconn" />
                            <span className='small-titlee'> Chemical Free</span>
                        </div>
                    </center>  
                </Col>
               
            </Row>
         </div>
        
   <div className='section-home'>
         <Divider className='heading-home-divider'><h2 className='heading-home'><b><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> Trending Products <FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> </b> </h2></Divider>
           
            <Row>
                {productListOne.length > 0 ?
                  productListOne.map((elm,index)=> {
                   return(  
                     <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }} key={elm.id}>
                        <ProductCard productData={elm} discount={true} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/kmkxbww0/cookie-biscuit/z/x/9/200-handmade-sugar-free-low-fat-khari-biscuit-twistie-pack-of-1-original-imagfghhp7pdbdnp.jpeg?q=70" />
                    </Col>
                   )
                  })               
                 :null}
                
                {/* <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard  discount={false} loading={false} imgg="https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard discount={true} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/cookie-biscuit/h/m/m/250-premium-raggi-cookies-250-gm-1-akd-original-imafz73d9mzpn7h9.jpeg?q=70" />
                </Col> */}
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard  productData={elment} discount={false} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/km82d8w0/rusk/u/c/f/500-old-delhi-s-famous-fresh-crispy-soft-egg-cake-rusks-cake-original-imagf6knhnx45y9e.jpeg?q=70" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard productData={elment}  discount={false} loading={false} imgg="https://m.media-amazon.com/images/I/91aVePdCaDL._SX569_.jpg" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard productData={elment} discount={false} loading={false} imgg="https://www.bigbasket.com/media/uploads/p/l/40106021_10-tasties-biscuits-moon.jpg" /> 
                </Col>
            </Row>
         </div>

         <div className='section-home'>
         <Divider className='heading-home-divider'><h2 className='heading-home'><b><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> Shop by Category <FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> </b> </h2></Divider>
           
            <Row>
                <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                <HomeCategory imagge="https://static.toiimg.com/thumb/57627029.cms?width=1200&height=900" categoryName="Breads" />
                </Col>
                <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                <HomeCategory imagge="https://bakerpedia.com/wp-content/uploads/2017/07/48714766_m-e1501018129557.jpg" categoryName="Cookies" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                <HomeCategory imagge="https://blog.atome.sg/wp-content/uploads/2021/09/Biscuit-web-cover.jpeg" categoryName="Biscuits" />
                  </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                <HomeCategory imagge="https://kandrafoods.com/wp-content/uploads/2021/07/group-indian-traditional-spicy-sweet-namkeen-food_55610-3871.jpg" categoryName="Snacks" />
                 </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                <HomeCategory imagge="https://www.foodbusinessnews.net/ext/resources/2020/8/Muffins_lead1.png?t=1597694316&width=1080" categoryName="Sweet goods" />
                 </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                <HomeCategory imagge="https://static.toiimg.com/thumb/57627029.cms?width=1200&height=900" categoryName="Breads" />
                
                </Col>
            </Row>
         </div>
         <div className='section-home'>
         <Divider className='heading-home-divider'><h2 className='heading-home'><b><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> Featured Products <FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /><FontAwesomeIcon icon={faStar} className="heading-star" /> </b> </h2></Divider>
           
            <Row>
                <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard productData={elment} discount={true} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/kmkxbww0/cookie-biscuit/z/x/9/200-handmade-sugar-free-low-fat-khari-biscuit-twistie-pack-of-1-original-imagfghhp7pdbdnp.jpeg?q=70" />
                </Col>
                <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard  productData={elment} discount={false} loading={false} imgg="https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard productData={elment} discount={true} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/cookie-biscuit/h/m/m/250-premium-raggi-cookies-250-gm-1-akd-original-imafz73d9mzpn7h9.jpeg?q=70" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard productData={elment}  discount={false} loading={false} imgg="https://rukminim2.flixcart.com/image/416/416/km82d8w0/rusk/u/c/f/500-old-delhi-s-famous-fresh-crispy-soft-egg-cake-rusks-cake-original-imagf6knhnx45y9e.jpeg?q=70" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard productData={elment}  discount={false} loading={false} imgg="https://m.media-amazon.com/images/I/91aVePdCaDL._SX569_.jpg" />
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 12}} md={{ span: 8}} lg={{ span: 4 }}>
                       <ProductCard productData={elment} discount={false} loading={false} imgg="https://www.bigbasket.com/media/uploads/p/l/40106021_10-tasties-biscuits-moon.jpg" /> 
                </Col>
            </Row>
         </div>

       
         </div>
		)
}
export default Home;