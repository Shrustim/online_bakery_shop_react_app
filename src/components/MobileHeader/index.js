import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars,faCartShopping, faBell} from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/images/logoo.jpg"
import { Drawer,Collapse  } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import "./MobileHeader.css";
const { Panel } = Collapse;
export default function MobileHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div className='main-mobile-head-block'>
      <FontAwesomeIcon icon={faBars} className="menuIcon" onClick={showDrawer} />
      <div style={{width: "81%",marginLeft: "13%"}}>
        <center>
        <img src={logo} className="logo-mobile-header" />
        </center>
     
      </div>
      <div>
            <FontAwesomeIcon icon={faCartShopping} className="menuIcon mobileHeaderIcon"  />
            <span className="mobile-header-span"> 0</span>
      </div>
      <div>
            <FontAwesomeIcon icon={faBell} className="menuIcon mobileHeaderIcon" />
            <span className="mobile-header-span"> 0</span>
      </div>
     
      

      <Drawer title="Bakery" placement="left" onClose={onClose} visible={visible}>
        <h4 className='drawerMenulist'><b>Shop by category</b></h4>
        <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse collapseMenuMobile"
      >
        <Panel header="Breads" key="1" className="site-collapse-custom-panel">
          <p>
            <ul className='subMenuMobile'>
              <li>Crackers</li>
              <li>Hard sweet</li>
              <li>Semi-sweet biscuits</li>
              <li>Short-dough biscuits</li>
            </ul>
          </p>
        </Panel>
        <Panel header="Cookies" key="2" className="site-collapse-custom-panel">
        <p>
            <ul className='subMenuMobile'>
              <li>Crackers</li>
              <li>Hard sweet</li>
              <li>Semi-sweet biscuits</li>
              <li>Short-dough biscuits</li>
            </ul>
          </p>
        </Panel>
        <Panel header="Biscuits" key="3" className="site-collapse-custom-panel">
        <p>
            <ul className='subMenuMobile'>
              <li>Crackers</li>
              <li>Hard sweet</li>
              <li>Semi-sweet biscuits</li>
              <li>Short-dough biscuits</li>
            </ul>
          </p>
        </Panel>
        <Panel header="Snacks" key="4" className="site-collapse-custom-panel">
          <p>
              <ul className='subMenuMobile'>
                <li>Crackers</li>
                <li>Hard sweet</li>
                <li>Semi-sweet biscuits</li>
                <li>Short-dough biscuits</li>
              </ul>
            </p>
        </Panel>
        <Panel header="Sweet goods" key="5" className="site-collapse-custom-panel">
        <p>
            <ul className='subMenuMobile'>
              <li>Crackers</li>
              <li>Hard sweet</li>
              <li>Semi-sweet biscuits</li>
              <li>Short-dough biscuits</li>
            </ul>
          </p>
        </Panel>
      </Collapse>
      </Drawer>
      </div>
  )
}


