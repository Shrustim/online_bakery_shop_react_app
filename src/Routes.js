import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { HOME, ABOUTUS, CONTACT, PRODUCTLIST, PRODUCTDETAIL, CART, LOGIN, REGISTER, CHECKOUT } from "./constants/routes";
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
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Checkout = lazy(() => import('./pages/Checkout'));
const CSVData = lazy(() => import('./components/CSVDownload'));

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
                            <Route path={CART} element={<Cart/>} /> 
                            <Route path={LOGIN} element={<Login/>} /> 
                            <Route path={REGISTER} element={<Register/>} /> 
                            <Route path={CHECKOUT} element={<Checkout/>} /> 
                            <Route path={"csv"} element={<CSVData/>} />
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

