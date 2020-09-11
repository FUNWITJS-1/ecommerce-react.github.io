import {connect} from 'react-redux';

import {Home, Cart, Navbar} from './index';
import React, {Component} from 'react';
import {fetchProducts} from '../actions/products';
import PropTypes from 'prop-types';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import '../css/App.css';
import {Redirect} from 'react-router-dom';
import 'mdbreact/dist/css/mdb.css';
class App extends Component{
    componentDidMount(){
        let data=this.props.dispatch(fetchProducts());
      //  this.setState(data);
       
    }
    render(){
        const {products, cart} =this.props;
        console.log("this.props",this.props);
        return (
            <Router>
                <div>
                   
                <Navbar ItemsCount={cart.ItemsCount}/>
                    <Switch>
                        <Route
                           exact={true}
                           path='/'
                           render={(props)=>{
                               return <Home {...props} products={products}/>
                           }}
                           ></Route>
                           <Route path="/cart" render={(props)=>{
                               return <Cart {...props}  addedItems={cart}/>
                           }}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}

function mapStateToProps(state){
    return {
        products:state.products,
        cart:state.cart
    };
}



export default connect(mapStateToProps)(App);
