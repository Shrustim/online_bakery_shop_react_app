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
