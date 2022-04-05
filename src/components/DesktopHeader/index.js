import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { HOME,  CONTACT } from "../../constants/routes";
import { Dropdown} from 'antd';
import logo from "../../assets/images/logoo.jpg";
import HeaderDropDown from "../HeaderDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass ,faUser,faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'
import "./DesktopHeader.css";

export default function DesktopHeader() {
    const [categoryId,setCategoryId] = useState("0");
  return (
   <>
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
               <Link to={CONTACT} className="header-titles" ><FontAwesomeIcon icon={faCartShopping} /> <span className="header-span"> 0</span> </Link>
               <Link to={CONTACT} className="header-titles" > <FontAwesomeIcon icon={faHeart} /> <span className="header-span"> 0</span> </Link>
            
      <Dropdown overlay={<HeaderDropDown categoryId="0" />}>
      
      <a className="ant-dropdown-link header-titles" onClick={(e) =>  { e.preventDefault();setCategoryId(2) }} onMouseOver={(e) =>  { setCategoryId(2) }} >
      <FontAwesomeIcon icon={faUser} /> 
      </a>
    </Dropdown>  
      </div>
      </>
  )
}
