import api from "../../helpers/axios";
import { createAction } from '@reduxjs/toolkit'
export const addStudent_Action = createAction('ADD_STUDENT');
export const editStudent_Action = createAction('EDIT_STUDENT', function prepare(data) {
  return {
    payload: data
  }
})
export const removeStudent_Action = createAction('REMOVE_STUDENT');

export const changeCart = () =>{
  return {
      type:"CLEAR_CART"
  }
} 
export const addtoCart = (proidararay) =>{
  return {
      type:"ADDTOCART",
      payload:proidararay
  }
}
export const removefromCart = (proid) =>{
  return {
      type:"REMOVEFROMCART",
      payload:proid
  }
}
export const increaseCart = (proid) =>{
  return {
      type:"INCREASECART",
      payload:proid
  }
}
export const descreaseCart = (proid) =>{
  return {
      type:"DESCRESECART",
      payload:proid
  }
}
export const gettotalamt = () =>{
  return {
      type:"GETTOTALAMT"
  }
}

//fetch price of products in localstorage when application refresh
export const fetchAllProductsPrices = () => {
  return async (dispatch) => {
      try {
          var Dataa = JSON.parse(localStorage.getItem('cartData'));
          var FinalData = await Promise.all(Dataa.cart.map(async (e, index)=> {
            var resultData  = await api.get('productprices/'+e.id+'?filter=%7B%22fields%22%3A%20%7B%22id%22%3A%20true%2C%22productId%22%3A%20true%2C%22unitId%22%3A%20true%2C%22qty%22%3A%20true%2C%22price%22%3A%20true%2C%22discount%22%3A%20true%2C%22totalPrice%22%3A%20true%2C%22is_show%22%3A%20true%2C%22is_active%22%3A%20true%7D%7D');
            var subamout = e.qty * resultData.data.totalPrice;
            var a = {
              ...e,
               "discount": resultData.data.discount,
               "mrp": resultData.data.price,
               "price": resultData.data.totalPrice,
               "subamout": subamout.toFixed(2)
            };
            return a;
          }));
          dispatch({ type: "SET_FIRST_TIME_CART", payload: FinalData });
      } catch (err) {
          throw err;
      }
  };
};


