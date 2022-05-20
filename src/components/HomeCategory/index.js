import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretRight} from '@fortawesome/free-solid-svg-icons'
import "./HomeCategory.css";
export default function HomeCategory({imagge,categoryName}) {
  return (
     <>
                <center>
                        <div className='img-category-section'>
                          <img className='image-category-home'  src={imagge} />
                          <h4 className='image-category-title'>{categoryName}</h4>
                        </div>
                 </center>   
                 <div className='category-desktop-home'>
                                
                                    <ul className='home-ul-category'>
                                    <li> <FontAwesomeIcon icon={faCaretRight} /> Crackers</li>
                                    <li> <FontAwesomeIcon icon={faCaretRight} /> Hard sweet</li>
                                    <li> <FontAwesomeIcon icon={faCaretRight} />  Semi-sweet biscuits</li>
                                    <li> <FontAwesomeIcon icon={faCaretRight} />  Short-dough biscuits</li>
                                    </ul>
                                
                            </div> 
    </>
  )
}
