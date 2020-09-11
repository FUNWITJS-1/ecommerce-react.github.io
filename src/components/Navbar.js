
import { Link } from 'react-router-dom'
import React, {Component} from 'react';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.ItemsCount=0
        
    }
     componentDidMount()
    {
        this.setState({
            ItemsCount:this.props
        })
    }  
    render(){
 
     let {ItemsCount}=this.props;
   
     console.log("props in navbar", this.props);
    return(
            <nav className="nav-wrapper">
                <div id="brand">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    </div>
                <div >  
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                       
                    <li><Link to="/cart"><i class="fa fa-shopping-cart">{ItemsCount}</i></Link></li>
                    </ul>
                    </div>
            </nav>  
    )
}
}

export default Navbar;