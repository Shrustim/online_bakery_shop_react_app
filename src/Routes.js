import React, { useState,Suspense,useEffect, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
import { HOME, ABOUTUS, CONTACT } from "./constants/routes";
import { useSelector, useDispatch } from 'react-redux'
import { checkLogin } from './redux_store/features/checkIsLoginSlice';
import { Layout, Menu, Breadcrumb } from 'antd';
import {SearchOutlined, UserOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import logo from "./assets/images/logoo.jpg";
const { Header, Content, Footer } = Layout;
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));

function Routers() {
const dispatch = useDispatch()
const isLogin = useSelector((state) => state.isLogin)
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
             <Link to={ABOUTUS} className="header-titles" >Breads <span class="new"> NEW</span> </Link>
             <Link to={CONTACT} className="header-titles" >Cookies</Link>
             <Link to={CONTACT} className="header-titles" >Biscuits </Link>
             <Link to={CONTACT} className="header-titles" >Snacks  </Link>
             <Link to={CONTACT} className="header-titles" >Sweet goods   </Link>
             <Link to={CONTACT} className="header-titles" ><SearchOutlined className="header-icon" /> </Link>
              <Link to={CONTACT} className="header-titles" ><UserOutlined className="header-icon" /> </Link>
               <Link to={CONTACT} className="header-titles" ><ShoppingCartOutlined className="header-icon "   /> </Link>
            

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

