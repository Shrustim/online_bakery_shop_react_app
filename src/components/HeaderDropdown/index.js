import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./HeaderDropDown.css";
const HeaderDropDown  = ({categoryId}) => { 
    console.log("categoryId",categoryId);
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
    
export default HeaderDropDown;