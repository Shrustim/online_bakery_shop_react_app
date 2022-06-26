import { Menu } from 'antd';
import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import "./HeaderDropDown.css";
import { useNavigate  } from "react-router-dom";
import {LOGIN,REGISTER,CHECKOUT,ORDER_LIST,PROFILE,PRODUCTLIST} from "../../constants/routes";
import { logout } from '../../redux_store/features/checkIsLoginSlice';
import api from "../../helpers/axios";
const HeaderDropDown  = ({categoryId,image}) => { 
    const [subCategory,setSubCategory] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.isLogin);
    console.log("categoryId",categoryId)
    const logoutUser = async() => {
        await dispatch(logout());
        await navigate("/login");
    }
    console.log("categoryId",categoryId);
    useEffect(() => {
        getSubCategory();
    },[categoryId]);
    const getSubCategory = async() => {
     if(categoryId !== "0"){
         const result = await api.get("subcategories?filter=%7B%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%20%22categoryId%22%3A%20%22"+categoryId+"%22%2C%0A%20%20%20%20%20%22is_active%22%3A%20%221%22%0A%20%20%7D%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22subCategoryName%22%3A%20true%2C%0A%20%20%20%20%22categoryId%22%3A%20true%2C%0A%20%20%20%20%22image%22%3A%20true%2C%0A%20%20%20%20%22description%22%3A%20true%0A%20%20%7D%0A%7D");
         setSubCategory(result.data);
         console.log("result",result)
     }
    }
    if(categoryId === "0") {
          return(
            <Menu className='HeaderDropDownAccount'>
                <div >
                    {isLogin ? 
                     <>
                     <Menu.Item>
                         <Link to={PROFILE}>Profile</Link>
                      
                    </Menu.Item> 
        
                    <Menu.Item>
                    <Link to={ORDER_LIST}>Orders </Link>
                      
                    </Menu.Item>
                    <Menu.Item>
                    <Link onClick={logoutUser} to="#">Logout </Link>
                      
                    </Menu.Item>
                    </>
                    : <>
                      <Menu.Item>
                         <Link to={LOGIN}>Login</Link>
                      
                    </Menu.Item> 
        
                    <Menu.Item>
                    <Link to={REGISTER}>Register</Link>
                      
                    </Menu.Item>
                    </>
                    }
               
    
                </div>
               
                </Menu>
        
            )
    }else{
       return(
        <Menu className='HeaderDropDown'>
            <div className='firstdiv'>
            {subCategory.length > 0 ?
               subCategory.map((elm) => {
                  return(
                     <Menu.Item>
                        <Link to={PRODUCTLIST+"/"+elm.categoryId+"/"+elm.id}  rel="noopener noreferrer" >
                        {elm.subCategoryName}
                        </Link>
                    </Menu.Item>
                    )
               }) 
                : null}
            </div>
            <div className='seconddiv'>
            
            <img src={image} />

            </div>
            </Menu>
    
        )
    }
}
    
export default HeaderDropDown;