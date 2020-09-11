import {GET_PRODUCTS, SORT_BY_PRICE} from './actionTypes';
import {APIUrls} from '../Helper/urls';
export function fetchProducts(){

    return (dispatch)=>{
        const url=APIUrls.getProducts();
        console.log("url", url);
        fetch(url)
        .then(response=>{
            console.log("response", response.body);
            return response.json();
        }).then(data=>{
            console.log("data", data);
            dispatch(updateProducts(data));
        })
    }
}
export function sort(products)
{
    return(dispatch)=>{
   const newProducts=products.sort((a,b)=>{
       if(a.price<b.price) return -1;
       if(a.price>b.price) return 1;
       return 0;
     
   })
   dispatch(sortByPrice(newProducts));
}
}
export function updateProducts(products){
    return {
        type:GET_PRODUCTS,
        products
    }
}
export function sortByPrice(products)
{
    return {
        type:SORT_BY_PRICE,
        products
    }
}