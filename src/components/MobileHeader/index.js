import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars,faCartShopping, faBell} from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/images/logoo.jpg"
import { Drawer,Collapse  } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import "./MobileHeader.css";
import api from "../../helpers/axios";
const { Panel } = Collapse;
export default function MobileHeader() {
  const [category,setCategory] = useState([]);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  

useEffect(()=>{
  fetchCategory();
},[]);
const fetchCategory = async () => {
  const result = await api.get('categories?filter=%7B%22where%22%3A%20%7B%22is_active%22%3A%201%7D%2C%22fields%22%3A%20%7B%22id%22%3A%20true%2C%22categoryName%22%3A%20true%2C%22image%22%3A%20true%2C%22description%22%3A%20true%7D%7D');
  setCategory(result.data);
 }

  return (
    <div className='main-mobile-head-block'>
      <FontAwesomeIcon icon={faBars} className="menuIcon" onClick={showDrawer} />
      <div style={{width: "81%",marginLeft: "13%"}}>
        <center>
        <img src={logo} className="logo-mobile-header" />
        </center>
     
      </div>
      <div>
            <FontAwesomeIcon icon={faCartShopping} className="menuIcon mobileHeaderIcon"  />
            <span className="mobile-header-span"> 0</span>
      </div>
      <div>
            <FontAwesomeIcon icon={faBell} className="menuIcon mobileHeaderIcon" />
            <span className="mobile-header-span"> 0</span>
      </div>
     
      

      <Drawer title="Bakery" placement="left" onClose={onClose} visible={visible}>
        <h4 className='drawerMenulist'><b>Shop by category</b></h4>
        <Collapse
        bordered={false}
        defaultActiveKey={['0']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse collapseMenuMobile"
      >
         {
        category.length > 0 ?
        category.map((elm,index) => {
           return(
            <Panel header={elm.categoryName} key={index} className="site-collapse-custom-panel">
            <p>
              <ul className='subMenuMobile'>
                <li>Crackers</li>
                <li>Hard sweet</li>
                <li>Semi-sweet biscuits</li>
                <li>Short-dough biscuits</li>
              </ul>
            </p>
          </Panel>
            )
          })
          : null
        }  
       
       
      </Collapse>
      </Drawer>
      </div>
  )
}


