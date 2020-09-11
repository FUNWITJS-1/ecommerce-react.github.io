import React, { Component } from 'react';
import { incrementCart, decrementCart , removeFromCart} from '../actions/cart';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import products from '../reducers/products';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            addedItems:[],
            ItemsCount:0
            
        }
        //this.addedItems=[];
        
     //   this.addedItems=this.props.bind(this)
    }
       
        handleRemoveFromCartClick=(product)=>{
              this.props.dispatch(removeFromCart(product));
        }
    
        componentDidMount()
        {
            const Items=this.props.cart.state.state.addedItems;
            if(Items!=undefined){
            this.setState({addedItems:Items});
             }
        }
    render(){
        const {cart}=this.props;
        console.log("props", this.props);
        console.log("cart", cart.state.state);
        
    //    const {cartItems}=cart;
        //console.log("cartItems", cartItems);
        
        //setTimeout(1000);
        let addedItems=cart.state.state.addedItems;

        console.log("addItems", addedItems);    
        return (
            <div className="ProductContainer">
                <div>
                <p className='ProductHeader'>
                     Cart Items
                 </p>
                 </div>

                
                 
                  {
                      addedItems!=undefined &&
                addedItems.map(product=>(
             <div className="product-list">
            <ul>
              <li>  <img  src={product.imageUrl} alt='t-shirt-pic'/></li>
             <li>Title :{product.title}</li>
             <li>Price :{product.price}</li>
             <li><button  className="addtocart" onClick={()=>this.handleRemoveFromCartClick(product)}>Remove</button></li>
           </ul>
           </div>
        
            
            
           
                ))}
                {
                    cart.length==0 &&
                    <p>
                        Please Add Items to cart!
                    </p>
                }
                
                </div>
                
        )}
            
            
                }
function mapStateToProps(state){
    return {
        cart:state.cart
    };
}



export default connect(mapStateToProps)(Cart);
