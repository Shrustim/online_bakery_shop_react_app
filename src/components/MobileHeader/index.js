import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars,faCartShopping, faBell,faUser,faHome, faList, faLock} from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/images/logoo.jpg"
import { Link } from 'react-router-dom';
import { Drawer,Collapse  } from 'antd';
import { useNavigate  } from "react-router-dom";
import { CaretRightOutlined } from '@ant-design/icons';
import "./MobileHeader.css";
import { useSelector ,useDispatch } from "react-redux";
import { HOME,  LOGIN,REGISTER,ORDER_LIST,PROFILE, CART,PRODUCTLIST } from "../../constants/routes";
import { logout } from '../../redux_store/features/checkIsLoginSlice';
import api from "../../helpers/axios";
const { Panel } = Collapse;
export default function MobileHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [category,setCategory] = useState([]);
  const [visible, setVisible] = useState(false);
  const cartData = useSelector((state) => state.cart);
  const isLogin = useSelector((state) => state.isLogin);
  const logoutUser = async() => {
      await dispatch(logout());
      await navigate("/login");
      setVisible(false); 
  }
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
        <Link to={HOME}> <img src={logo} className="logo-mobile-header" /></Link>
        </center>
     
      </div>
      <div>
      <Link to={CART} className="linkColor" > <FontAwesomeIcon icon={faCartShopping} className="menuIcon mobileHeaderIcon"  />
            <span className="mobile-header-span"> {cartData.cart.length}</span></Link>
      </div>
      <div>
            <FontAwesomeIcon icon={faBell} className="menuIcon mobileHeaderIcon" />
            <span className="mobile-header-span"> 0</span>
      </div>
     
      

      <Drawer title={<Link to={HOME}> <img src={logo} className="logo-mobile-header" /></Link>} placement="left" onClose={onClose} visible={visible}>
      <Link to={HOME}> <h4 className='drawerMenulist' onClick={onClose}><b>
      <FontAwesomeIcon icon={faHome} className="small-iconn" style={{marginRight:"5px",fontSize:"14px"}} /> 
      Home</b></h4></Link>
      {isLogin ? 
      <>
      <Link to={PROFILE}> <h4 className='drawerMenulist' onClick={onClose}><b>
      <FontAwesomeIcon icon={faUser} className="small-iconn" style={{marginRight:"5px",fontSize:"14px"}} /> 
      Profile</b></h4></Link> 
      <Link to={ORDER_LIST}><h4 className='drawerMenulist' onClick={onClose}><b>
      <FontAwesomeIcon icon={faList} className="small-iconn" style={{marginRight:"5px",fontSize:"14px"}} /> 
      Orders</b></h4></Link> 
      <h4 className='drawerMenulist' onClick={logoutUser} ><b>
      <FontAwesomeIcon icon={faLock} className="small-iconn" style={{marginRight:"5px",fontSize:"14px"}} /> 
        Logout</b></h4>
      </>
      :
      <>
      <Link to={LOGIN}>  <h4 className='drawerMenulist' onClick={onClose}><b>
      <FontAwesomeIcon icon={faLock} className="small-iconn" style={{marginRight:"5px",fontSize:"14px"}} /> 
      Login</b></h4></Link>
      <Link to={REGISTER}> <h4 className='drawerMenulist' onClick={onClose}><b>
      <FontAwesomeIcon icon={faUser} className="small-iconn" style={{marginRight:"5px",fontSize:"14px"}} /> 
      Register</b></h4></Link>
      </>
    }
      <br/>
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
            <Panel header={<Link to={PRODUCTLIST+"/"+elm.id} onClick={onClose} className="subMenuMobile">{elm.categoryName}</Link>} key={index} className="site-collapse-custom-panel">
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


