import React, { useState,Suspense,useEffect, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
import { HOME, ABOUTUS, CONTACT } from "./constants/routes";
import { useSelector, useDispatch } from 'react-redux'
import { changeadminSite, changeuserSite } from './redux_store/features/checksiteSlice';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));

function Routers() {
const dispatch = useDispatch()
const isAdminSite = useSelector((state) => state.isAdminSite)
var splitUrl = window.location.href.split('/');
console.log(splitUrl[3] );
useEffect(() => {
 console.log("isAdminSite",isAdminSite);
   if(splitUrl[3] === "admin") {
          dispatch(changeadminSite())
    }else{
       dispatch(changeuserSite())
    }
},[splitUrl]);
  return (
    <Router>
             <Link to={HOME} style={{padding: '50px'}}>Home</Link> 
             <Link to={ABOUTUS} style={{padding: '50px'}}>About-us</Link>
             <Link to={CONTACT} style={{padding: '50px'}}>Contact</Link>
             <Link to="/admin/aa" style={{padding: '50px'}}>admin</Link>



        <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                        <Route exact path={HOME} element={<Home/>}/>
                       <Route  path={ABOUTUS} element={<AboutUs/>}/>
                        <Route  path={CONTACT} element={<Contact/>}/>
                       
                  </Routes>
            </Suspense>
       

         
       </Router>
  );
         
}

export default Routers;

