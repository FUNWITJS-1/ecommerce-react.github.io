import {INCREMENT_CART, DECREMENT_CART,ADDITEM, REMOVEITEM} from './actionTypes'
export function incrementCart(product){
    
    return {
        type:ADDITEM,
        product
    }
}
export function decrementCart(product){
    return {
        type:REMOVEITEM,
        product
    }
}

export function addToCart(product){
    return(dispatch)=>{
        console.log("add product", product);
    dispatch(incrementCart(product));
    return;
    }
}
export function removeFromCart(product){
    return(dispatch)=>{
        console.log("add product", product);
    dispatch(decrementCart(product));
 //   console.log("this.state remove", this.state);
 
    return;
    }
}