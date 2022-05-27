import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import "./HeaderDropDown.css";
import {LOGIN,REGISTER,CHECKOUT} from "../../constants/routes";
import { logout } from '../../redux_store/features/checkIsLoginSlice';
const HeaderDropDown  = ({categoryId}) => { 
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.isLogin);
    const logoutUser = () => {
        dispatch(logout());
    }
    console.log("categoryId",categoryId);
    if(categoryId === "0") {
          return(
            <Menu className='HeaderDropDownAccount'>
                <div >
                    {isLogin ? 
                     <>
                     <Menu.Item>
                         <Link to={CHECKOUT}>Profile</Link>
                      
                    </Menu.Item> 
        
                    <Menu.Item>
                    <Link to={REGISTER}>Orders </Link>
                      
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
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Crackers
                </a>
            </Menu.Item>

            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Hard sweet 
                </a>
            </Menu.Item>

            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Semi-sweet biscuits
                </a>
            </Menu.Item>

            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Short-dough biscuits
                </a>
            </Menu.Item>
        
            </div>
            <div className='seconddiv'>
            
            <img src="https://cdn.shopify.com/s/files/1/0024/1152/8253/products/img-cake-13_300x300_crop_center.jpg?v=1524321891" />

            </div>
            </Menu>
    
        )
    }
}
    
export default HeaderDropDown;