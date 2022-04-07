import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { HOME, ABOUTUS, CONTACT, PRODUCTLIST, PRODUCTDETAIL } from "./constants/routes";
import { useSelector, useDispatch } from 'react-redux'
import { checkLogin } from './redux_store/features/checkIsLoginSlice';
import { Layout } from 'antd';
import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";

const { Header, Content, Footer } = Layout;
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

function Routers() {
const dispatch = useDispatch()
const isLogin = useSelector((state) => state.isLogin);

 console.log("isLogin",isLogin);
  return (
    <Router>
     <Layout className="layout">
        <Header className='StyleHeader'>
          <div className='DesktopHeader'>
            <DesktopHeader/>
          </div>

          <div className='MobileHeader'>
            <MobileHeader/>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ margin: '16px 0' }}>
          </div>
               <div className="site-layout-content">
                 <Suspense fallback={<div>Loading...</div>}>
                      <Routes>
                            <Route exact path={HOME} element={<Home/>}/>
                            <Route  path={ABOUTUS} element={<AboutUs/>}/>
                            <Route  path={CONTACT} element={<Contact/>}/>
                            <Route path={PRODUCTLIST} element={<ProductList/>} /> 
                            <Route path={PRODUCTDETAIL} element={<ProductDetail/>} /> 
                          
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

