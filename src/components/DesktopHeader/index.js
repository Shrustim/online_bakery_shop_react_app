import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HOME,  CONTACT, PRODUCTLIST,PRODUCTDETAIL, CART } from "../../constants/routes";
import { Dropdown} from 'antd';
import logo from "../../assets/images/logoo.jpg";
import HeaderDropDown from "../HeaderDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector  } from "react-redux";
import {  faMagnifyingGlass ,faUser,faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'
import "./DesktopHeader.css";
import api from "../../helpers/axios";

export default function DesktopHeader() {
  
  const [category,setCategory] = useState([]);
  const [categoryId,setCategoryId] = useState("0");
  const cartData = useSelector((state) => state.cart);
 useEffect(()=>{
    fetchCategory();
  },[]);
  const fetchCategory = async () => {
    const result = await api.get('/categories?filter=%7B%22limit%22%3A%205%2C%22where%22%3A%20%7B%22is_active%22%3A%201%7D%2C%22fields%22%3A%20%7B%22id%22%3A%20true%2C%22categoryName%22%3A%20true%2C%22image%22%3A%20true%2C%22description%22%3A%20true%7D%7D');
    setCategory(result.data);
   }
  return (
   <>
     <div >
      <img src={logo} className="logo" />
      </div>
      <div style={{float:"right"}}>
      <Link to={HOME} className="header-titles">Home</Link>

      {
        category.length > 0 ?
        category.map((elm,index) => {
           return(
            <Dropdown overlay={<HeaderDropDown categoryId={categoryId}  />} key={elm.id}>
      
            <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(elm.id) }} onMouseOver={(e) =>  { setCategoryId(elm.id) }} >
            {elm.categoryName} 
            {
             index === 0 || index === 2 ?  <span className="header-span"> Best</span> : null
            }
            </a>
          </Dropdown>
           )
        })
        : null
      }  



    
             {/* <Link to={ABOUTUS} className="header-titles" >Breads <span class="header-span"> Best</span> </Link>
             <Link to={CONTACT} className="header-titles" >Cookies</Link> */}
             {/* <Link to={CONTACT} className="header-titles" >Biscuits </Link>
             <Link to={CONTACT} className="header-titles" >Snacks  </Link>
             <Link to={CONTACT} className="header-titles" >Sweet goods   </Link> */}
               <Link to={CONTACT} className="header-titles" ><FontAwesomeIcon icon={faMagnifyingGlass} />  </Link>
               <Link to={CART} className="header-titles" ><FontAwesomeIcon icon={faCartShopping} /> <span className="header-span"> {cartData.cart.length}</span> </Link>
               <Link to={PRODUCTLIST} className="header-titles" > <FontAwesomeIcon icon={faHeart} /> <span className="header-span"> 0</span> </Link>
            
      <Dropdown overlay={<HeaderDropDown categoryId="0" />}>
      
      <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(2) }} onMouseOver={(e) =>  { setCategoryId(2) }} >
      <FontAwesomeIcon icon={faUser} /> 
      </a>
    </Dropdown>  
      </div>
      </>
  )
}
