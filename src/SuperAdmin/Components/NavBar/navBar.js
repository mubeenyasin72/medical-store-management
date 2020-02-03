import React, { Component } from 'react';
import './navBarAdmin.css';
class navBar extends Component {
    render() {
        return (
            <React.Fragment>
               <nav class="navbar fixed-top navbar-expand-md navbar-light bg-white">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto mr-auto" style={{}}>
                        <li class="nav-item active first-btn" >
                        <button class="btn btn-outline-success mr-3" type="button" >
                            <i class="fa fa-paper-plane" style={{marginRight:"5px"}}></i>
                            Invoice
                        </button>
                        </li>
                        <li class="nav-item">
                        <button class="btn btn-outline-success mr-3" type="button">
                            <i class="fa fa-money" style={{marginRight:"5px"}}></i>
                            Customer Receive
                        </button>
                        </li>
                        <li class="nav-item">
                        <button class="btn btn-outline-success  mr-3" type="button">
                        <i class="fa fa-paypal" style={{marginRight:"5px"}}></i>
                            Manfacture Payment
                        </button>
                        </li>
                        <li class="nav-item last-btn" >
                        <button class="btn btn-outline-success  mr-3" type="button">
                        <i class="fa fa-shopping-cart" style={{marginRight:"5px"}}></i>
                            Purchase
                        </button>
                        </li>
                        <li class="nav-item nav-item-icon">
                            <a href="/" > <i class="fa fa-bell mr-4" style={{fontSize:"25px",background:"#f5f5f5",padding:"10px",color:"black"}} ></i></a>
                        </li>
                        <li class="nav-item nav-item-icon">
                            <a href="/"> <i class="fa fa-exclamation-triangle mr-4" style={{fontSize:"25px",background:"#f5f5f5",padding:"10px",color:"black"}} ></i></a>
                        </li>
                        <li class="nav-item nav-item-icon">
                            <a href="/"> <i class="fa fa-cog mr-4" style={{fontSize:"25px",background:"#f5f5f5",padding:"10px",color:"black"}} ></i></a>
                        </li>
                        </ul>
                    </div>
                </nav>
                <div>
                <hr style={{width:"100%",marginTop:"0px"}} />
                </div>
            </React.Fragment>
        );
    }
}
export default  navBar;