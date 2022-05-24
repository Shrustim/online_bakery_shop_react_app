
  const initialStorecart = {
    cart: [],
    total: 0,
    amount: 0
  };

 const cartReducer = (state = initialStorecart, action) =>{
      switch(action.type){
            case "CLEAR_CART" : { 
              localStorage.setItem("cartData", JSON.stringify({ ...state, cart: [] }));
               return{ ...state, cart: [] };
             }
             case "SET_FIRST_TIME_CART": {
              localStorage.setItem("cartData", JSON.stringify({ ...state, cart: action.payload }));
                return { ...state, cart: action.payload };
             }
            case "ADDTOCART" : {
                  let tempCart = state.cart;
                  if(tempCart.length === 0){
                    tempCart = [ ...tempCart , action.payload ];
                    console.log("length <0");
                    console.log(tempCart);
                    localStorage.setItem("cartData", JSON.stringify({ ...state, cart: tempCart }));
                    return { ...state, cart: tempCart };
                  }else{
                    var check=0;
                     tempCart = state.cart.map(cartItem => {
                      if (cartItem.id === action.payload.id) {
                        cartItem = { ...cartItem, qty: cartItem.qty + 1,subamout: cartItem.price * (cartItem.qty + 1) };
                        console.log("exits");check=1;
                      }
                      return cartItem;
                    });
                  
                     if(check === 0){
                      console.log("not exits");
                      tempCart = [ ...tempCart , action.payload ];
                    }
                    localStorage.setItem("cartData", JSON.stringify({ ...state, cart: tempCart }));
                    return { ...state, cart: tempCart };
                   
                  }
              }

          case "INCREASECART" : {
            let tempCart = state.cart.map(cartItem => {
              if (cartItem.id === action.payload) {
                cartItem = { ...cartItem, qty: cartItem.qty + 1,subamout: cartItem.price * (cartItem.qty + 1) };
                }
              return cartItem;
            });
            localStorage.setItem("cartData", JSON.stringify({ ...state, cart: tempCart }));
            return { ...state, cart: tempCart };
          }


          case "DESCRESECART" : {
            let tempCart = state.cart.map(cartItem => {
              if (cartItem.id === action.payload) {
                cartItem = { ...cartItem, qty: cartItem.qty - 1 ,subamout: cartItem.price * (cartItem.qty - 1)};
                }
              return cartItem;
            });
            localStorage.setItem("cartData", JSON.stringify({ ...state, cart: tempCart }));
            return { ...state, cart: tempCart };
          }


          case "REMOVEFROMCART" : {
            localStorage.setItem("cartData", JSON.stringify({
              ...state,
              cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
            }));

            return {
              ...state,
              cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
            };
          }
        
            case "GETTOTALAMT" : {
              let { total, qty } = state.cart.reduce(
                (cartTotal, cartItem) => {
                  const { price, qty } = cartItem;
                  const itemTotal = price * qty;
          
                  cartTotal.total += itemTotal;
               
                  return cartTotal;
                },
                {
                  total: 0,
                }
              );
              total = parseFloat(total.toFixed(2));
              console.log(total);
              localStorage.setItem("cartData", JSON.stringify({ ...state, total }));
              return { ...state, total };
            }

           default : return state;
      }
}

export default cartReducer;