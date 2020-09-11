import React, {Component} from 'react';
import {ProductList} from './';
class Home extends Component{
    render(){
        const {products}=this.props;
        console.log("products", products);
        return(
            <div className='home'>
                <ProductList products={products}/>

            </div>
        );
    }
}
export default Home;