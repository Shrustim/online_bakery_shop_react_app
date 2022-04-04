import React, { useState,Suspense,useEffect, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
import { HOME, ABOUTUS, CONTACT } from "./constants/routes";
import { useSelector, useDispatch } from 'react-redux'
import { checkLogin } from './redux_store/features/checkIsLoginSlice';
import { Layout, Menu, Breadcrumb ,Dropdown} from 'antd';
import {SearchOutlined, UserOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import logo from "./assets/images/logoo.jpg";
import { DownOutlined } from '@ant-design/icons';
import HeaderDropDown from "./components/HeaderDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass ,faUser,faCartShopping} from '@fortawesome/free-solid-svg-icons'


const { Header, Content, Footer } = Layout;
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));


function Routers() {
const dispatch = useDispatch()
const isLogin = useSelector((state) => state.isLogin);
const [categoryId,setCategoryId] = useState("0");
 console.log("isLogin",isLogin);
  return (
    <Router>
     <Layout className="layout">
    <Header>
      <div >
      <img src={logo} className="logo" />
      </div>
      <div style={{float:"right"}}>
      <Link to={HOME} className="header-titles">Home</Link> 
      <Dropdown overlay={<HeaderDropDown categoryId={categoryId}  />}>
      
        <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(1) }} onMouseOver={(e) =>  { setCategoryId(1) }} >
        Breads <span className="header-span"> Best</span>
        </a>
      </Dropdown>
      <Dropdown overlay={<HeaderDropDown categoryId={categoryId} />}>
      
      <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(2) }} onMouseOver={(e) =>  { setCategoryId(2) }} >
      Cookies
      </a>
    </Dropdown>
    <Dropdown overlay={<HeaderDropDown categoryId={categoryId} />}>
      
      <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(2) }} onMouseOver={(e) =>  { setCategoryId(2) }} >
      Biscuits
      </a>
    </Dropdown>
    <Dropdown overlay={<HeaderDropDown categoryId={categoryId} />}>
      
      <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(2) }} onMouseOver={(e) =>  { setCategoryId(2) }} >
      Snacks
      </a>
    </Dropdown>
    <Dropdown overlay={<HeaderDropDown categoryId={categoryId} />}>
      
      <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(2) }} onMouseOver={(e) =>  { setCategoryId(2) }} >
      Sweet goods 
      </a>
    </Dropdown>

    
             {/* <Link to={ABOUTUS} className="header-titles" >Breads <span class="header-span"> Best</span> </Link>
             <Link to={CONTACT} className="header-titles" >Cookies</Link> */}
             {/* <Link to={CONTACT} className="header-titles" >Biscuits </Link>
             <Link to={CONTACT} className="header-titles" >Snacks  </Link>
             <Link to={CONTACT} className="header-titles" >Sweet goods   </Link> */}
             <Link to={CONTACT} className="header-titles" ><FontAwesomeIcon icon={faMagnifyingGlass} />  </Link>
              <Link to={CONTACT} className="header-titles" ><FontAwesomeIcon icon={faUser} />   </Link>
               <Link to={CONTACT} className="header-titles" ><FontAwesomeIcon icon={faCartShopping} /> <span className="header-span"> 0</span> </Link>
            

      </div>
     
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
       </Breadcrumb>
      <div className="site-layout-content">
       <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                        <Route exact path={HOME} element={<Home/>}/>
                       <Route  path={ABOUTUS} element={<AboutUs/>}/>
                        <Route  path={CONTACT} element={<Contact/>}/>
                       
                  </Routes>
            </Suspense>
            </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>


           
       
     </Router>
  );
         
}

export default Routers;

