import React,{useState,useRef} from 'react'
import axios from "axios";
// export default function Checkout() {
//   return (
//     <div>Checkout</div>
//   )
// }

import { CSVLink } from "react-csv";


 const Abc = () => {
  const elementRef = useRef();

  const [loading,setloading] = useState(false);
  const [listOfUsers , setlistOfUsers] = useState([
  ])
  const getUsers =async () => {
     console.log(elementRef)
    // console.log(elementRef.current.link)
    // console.log(elementRef.current.link.href)
    
        if(!loading) {
          setloading(true)
        await  axios.get("https://jsonplaceholder.typicode.com/posts").then((userListJson) => {
            console.log(userListJson.data)
            setlistOfUsers(userListJson.data)
            setloading(false)
           
            //  done(true); // Proceed and get data from dataFromListOfUsersState function
          }).catch(() => {
            setloading(false)
            // done(false);
          });
          // window.location.href=elementRef.current.link.href
          elementRef.current.link.click();
        }
      }

  return(
    <>
    <h1>hii</h1>
    <button  onClick={getUsers}>data</button>


   <CSVLink data={listOfUsers} filename= "abctest"  ref={elementRef} style={{display:"none"}}
     
    >
  Download me
</CSVLink>
    </>
  )
}
export default Abc;
