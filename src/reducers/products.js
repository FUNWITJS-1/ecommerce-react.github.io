import {GET_PRODUCTS, SORT_BY_PRICE} from '../actions/actionTypes';
import {NotificationContainer, NotificationManager} from 'react-notifications';
export default function products(state=[],action)
{
    switch (action.type) {
        case GET_PRODUCTS:{
          
            return action.products
        }
           
        case SORT_BY_PRICE:{
          return action.products
        }
    
        default:
            return state;
    }
}