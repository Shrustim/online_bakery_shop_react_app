import React,{useState,useEffect} from 'react'
import { Row, Col, Divider, Collapse ,Checkbox, Slider ,List,Select, Button ,Drawer   } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./ProductList.css";
import api from "../../helpers/axios";
import { useParams } from 'react-router';
import ProductCard from "../../components/ProductCard";
import { useMediaQuery } from 'react-responsive'

const { Panel } = Collapse;
const { Option } = Select;
export default function ProductList() {
  const { categoryId, subCategoryId } = useParams();
  console.log("-----------",categoryId,
  "-------------",subCategoryId)
  const [productListData,setproductListData] = useState([]);
  useEffect(()=>{
    if(typeof categoryId === "undefined" && typeof subCategoryId === "undefined"){
      fetchproductListData();
    }
      
  },[]);
  useEffect(()=>{
    if(typeof categoryId !== "undefined" || typeof subCategoryId !== "undefined"){
      fetchproductListData();
    }
      
  },[categoryId,subCategoryId]);
  var filter = {
      "categoryId": 0, 
      "subCategoryId": 0,
      "unitId": 0,
      "startPrice": 0,
      "endPrice": 0,
      "limit": 0,
      "offset": 0
    }
  const fetchproductListData = async () => {
      if(typeof categoryId !== undefined && parseInt(categoryId) > 0) 
      {
        filter.categoryId = parseInt(categoryId)
      }   
      if(typeof subCategoryId !== undefined && parseInt(subCategoryId) > 0) 
      {
        filter.subCategoryId = parseInt(subCategoryId)
      }   
      
      const result = await api.post('products-list',filter);
      setproductListData(result.data);
      // console.log("productListData----",result.data);
  }
      const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    //   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
      const isMiniMobile = useMediaQuery({ query: '(max-width: 500px)' })
      const isSubMobile = useMediaQuery({ query: '(max-width: 517px)' })
    var gridcolumn = 0;
    if(isDesktopOrLaptop)  gridcolumn = 4
    if(isTabletOrMobile)  gridcolumn = 3
    if(isMobile)  gridcolumn = 2
    if(isSubMobile)  gridcolumn = 2
    
    if(isMiniMobile)  gridcolumn = 2
    function callback(key) {
        console.log(key);
      }
      const [visible, setVisible] = useState(false);

      const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };

      
  
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  const options = [
    { label: 'In stock (13)', value: '1' },
    { label: 'Out of stock (4)', value: '2' }
  ];  
  const marks = {
    0: '0rs',
    25: '250rs',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>1000rs</strong>,
    },
  };
  const data = [
    {
      title: 'https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/cookie-biscuit/h/m/m/250-premium-raggi-cookies-250-gm-1-akd-original-imafz73d9mzpn7h9.jpeg?q=70',
    },
    {
      title: 'https://rukminim2.flixcart.com/image/416/416/kmkxbww0/cookie-biscuit/z/x/9/200-handmade-sugar-free-low-fat-khari-biscuit-twistie-pack-of-1-original-imagfghhp7pdbdnp.jpeg?q=70',
    },
    {
      title: 'https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521',
    },
    {
      title: 'https://rukminim2.flixcart.com/image/416/416/km82d8w0/rusk/u/c/f/500-old-delhi-s-famous-fresh-crispy-soft-egg-cake-rusks-cake-original-imagf6knhnx45y9e.jpeg?q=70',
    },  {
        title: 'https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521',
      },
     {
        title: 'https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/cookie-biscuit/h/m/m/250-premium-raggi-cookies-250-gm-1-akd-original-imafz73d9mzpn7h9.jpeg?q=70',
      },
      {
        title: 'https://rukminim2.flixcart.com/image/416/416/kmkxbww0/cookie-biscuit/z/x/9/200-handmade-sugar-free-low-fat-khari-biscuit-twistie-pack-of-1-original-imagfghhp7pdbdnp.jpeg?q=70',
      },
      {
        title: 'https://rukminim2.flixcart.com/image/416/416/km82d8w0/rusk/u/c/f/500-old-delhi-s-famous-fresh-crispy-soft-egg-cake-rusks-cake-original-imagf6knhnx45y9e.jpeg?q=70',
      },
      {
        title: 'https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/cookie-biscuit/h/m/m/250-premium-raggi-cookies-250-gm-1-akd-original-imafz73d9mzpn7h9.jpeg?q=70',
      },
      {
        title: 'https://rukminim2.flixcart.com/image/416/416/kmkxbww0/cookie-biscuit/z/x/9/200-handmade-sugar-free-low-fat-khari-biscuit-twistie-pack-of-1-original-imagfghhp7pdbdnp.jpeg?q=70',
      },
      {
        title: 'https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-5_0ec79749-007d-466c-80b5-70220bc8febe_grande.jpg?v=1524991521',
      },
      {
        title: 'https://rukminim2.flixcart.com/image/416/416/km82d8w0/rusk/u/c/f/500-old-delhi-s-famous-fresh-crispy-soft-egg-cake-rusks-cake-original-imagf6knhnx45y9e.jpeg?q=70',
      },
  ];
  function handleChange(value) {
    console.log(value); 
  }
  return (
    <div className="site-layout-content homePage">
            <Row>
               
                <Col  lg={{ span: 5 }} md={{span:5}} >
                   <div style={{paddingRight:"10px"}} className="hideOnMobile">
                   <h4 className='productlist-cartgory-head' >Filter by</h4>
                    <div className='productlist-filter'> 
                    <h4><b>Availiability</b></h4>
                    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} className="checkBox-productList" />
                    <Divider/>
                    <h4><b>Price</b></h4>
                     <Slider className='rangeInputSlider' range marks={marks} defaultValue={[0, 25]} />
                     </div>
                    
                    <br/>
                       <h4 className='productlist-cartgory-head' >CATEGORIES</h4>
                   <Collapse  onChange={callback} className="productlist-cartgory">
                        <Panel header="Breads " key="1">
                            <p>
                                <ul className='subMenuMobile'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Cookies" key="2">
                              <p>
                                <ul className='subMenuMobile'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Biscuits" key="3">
                            <p>
                                <ul className='productlist-subMenu'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Snacks" key="4">
                            <p>
                                <ul className='productlist-subMenu'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Sweet goods" key="5">
                            <p>
                                <ul className='productlist-subMenu'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                    </Collapse>
                    

                   </div>
                </Col>
                <Col lg={{ span: 19 }} md={{span:19}}>
                    <div className='productlist-head-block hideOnDesktop'>
                       <span>Bakery Products </span> 
                       <div style={{float:"right"}}> 
                       <Button type="primary" className='mobilefilterButton' onClick={showDrawer}><FontAwesomeIcon icon={faBars} style={{marginRight:"10px"}} /> Filter Products</Button>
                       </div>
                       </div>  
                    <div className='productlist-head-block hideOnMobile'>
                       <span>Bakery Products </span> 
                       <div style={{float:"right"}}> 
                            <label>Shop by</label>
                            <Select
                                    labelInValue
                                    defaultValue={{ value: '0' }}
                                    onChange={handleChange}
                                    className="selectTag-proHead"
                                >
                                    <Option value="0">-- Sort --</Option>
                                    <Option value="1">Price, high to low</Option>
                                    <Option value="2">Date, old to new</Option>
                                    <Option value="3">Date, new to old</Option>
                                </Select>
                       </div>
                     
                    </div>
                <List
                className='setGrid-pro'
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    total:80,
                    pageSize: 8,
                  }}
                    grid={{ gutter: 32, column: gridcolumn }}
                    dataSource={productListData}
                    renderItem={item => (
                    <List.Item>
                             <ProductCard productData={item} noPadding={true} discount={false} loading={false} imgg={item.title} />
               
                    </List.Item>
                    )}
                />
                </Col>
               
            </Row>
        

      <Drawer title="Filter Products" placement="right" onClose={onClose} visible={visible}>
      <h4 className='productlist-cartgory-head' >Filter by</h4>
                    <div className='productlist-filter'> 
                    <h4><b>Availiability</b></h4>
                    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} className="checkBox-productList" />
                    <Divider/>
                    <h4><b>Price</b></h4>
                     <Slider className='rangeInputSlider' range marks={marks} defaultValue={[0, 25]} />
                     </div>
        <br/>
      <h4 className='productlist-cartgory-head' >CATEGORIES</h4>
                   <Collapse  onChange={callback} className="productlist-cartgory">
                        <Panel header="Breads " key="1">
                            <p>
                                <ul className='subMenuMobile'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Cookies" key="2">
                              <p>
                                <ul className='subMenuMobile'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Biscuits" key="3">
                            <p>
                                <ul className='productlist-subMenu'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Snacks" key="4">
                            <p>
                                <ul className='productlist-subMenu'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                        <Panel header="Sweet goods" key="5">
                            <p>
                                <ul className='productlist-subMenu'>
                                <li>Crackers</li>
                                <li>Hard sweet</li>
                                <li>Semi-sweet biscuits</li>
                                <li>Short-dough biscuits</li>
                                </ul>
                            </p>
                        </Panel>
                    </Collapse>
                   
                    
      </Drawer>

    </div>
  )
}
