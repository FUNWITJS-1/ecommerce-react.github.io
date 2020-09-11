import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {addToCart} from '../actions/cart';
import {sort} from '../actions/products';
import {connect} from 'react-redux';
import 'react-notifications/lib/notifications.css';
import{Notifications} from './index';

import {NotificationConatiner, NotificationManager} from 'react-notifications';
class ProductList extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
            added:false
        }
        
    }
 
    handleAddToCartClick=(product)=>{
        
        console.log("product click", this.state);
        
        this.props.dispatch(addToCart(product));
        this.setState({
            added:true
        });
        console.log("this.state", this.state);
        //addToCart(product);
    
    }
    sortProducts(products){
        this.props.dispatch(sort(products));
        this.forceUpdate();
        console.log("this.state", this.state);
       
    }
    render(){
        const {products}=this.props;
       console.log("products", products)
        return (
            <div className="ProductContainer">
                <div>
                <p className="ProductsHeader">
                     BRANDS
                 </p>
              <button className="right" onClick={()=>this.sortProducts(products)}>Sort</button>
                 {this.state.added ? <Notifications/> :null}
                </div>
                <div>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Brand <span className="text-indigo-600">Shirts</span>
              </h3>
              </div>
              {
                products.map(product=>(
                    <div className="product-list">
             <ul >

            <li>  <img  src={product.imageUrl} alt='t-shirt-pic'/></li>
            <li>Title :{product.title}</li>
            <li>Price :{product.price}</li>
            <li><button  className="addtocart" onClick={()=>this.handleAddToCartClick(product)}>ADD TO CART</button></li>
          
            </ul>
            </div>
            
       
                ))}
                </div>
                    
              
                
        )}
            
            
                }
function mapStateToProps(state){
    return {
        products:state.products
    };
}



export default connect(mapStateToProps)(ProductList);

//export default ProductList;