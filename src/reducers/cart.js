import {ADDITEM, REMOVEITEM, INCREMENT_CART, DECREMENT_CART} from '../actions/actionTypes'
import { incrementCart } from '../actions/cart';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 const intialState={
   
    addedItems:[],
    ItemsCount:0
};
 
function remove(products){
    this.state.addedIems=this.state.addedIems.filter(function(product){
        return product.title!==products.title
    });
}

export default function cart(state=intialState, action){
    console.log("action cart", action, state);
   //state=state.state.state;
    switch(action.type){
        case ADDITEM:{
            console.log("this.state", state);
            //NotificationManager.info('Info message');
            const index=state.state.state.addedItems.findIndex(item=>item.title===action.product.title);
            if(index==-1)
            {
                state.state.state.addedItems.push(action.product);
            }
            let obj={
               ...state,
           //   addedItems:[...state.state.state.addedItems,state.state.state.addedItems.push(action.product)],
                ItemsCount:state.state.state.addedItems.length
            };
            console.log("obj", obj);
            return obj
        }
            case REMOVEITEM:{
                const index=state.state.state.addedItems.findIndex(item=>item.title===action.product.title);
                console.log("index", index, state);
                if(index!=-1)
                {
                    state.state.state.addedItems.splice(index,1); 
                }
               let obj={
                    ...state,
                   //   addedItems:[...state.state.state.addedItems.slice(0,index), ...state.state.state.addedItems.slice(index+1)],
                      ItemsCount:state.ItemsCount-1

                    };
                    console.log("obj", obj);
                    return obj;
                }
               
                
                default: 
                return {state
                }
    }
}