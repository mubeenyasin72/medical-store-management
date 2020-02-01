import React, { Component } from 'react';

class navBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="fixed navbar navbar-light bg-white">
                    <form class="form-inline">
                        <button class="btn btn-outline-success mr-3" type="button" style={{marginLeft:"400px"}}>
                            {/* <img src={require('../Assets/bill1.png')} style={{height:"15px"}} /> */}
                            <i class="fa fa-paper-plane" style={{marginRight:"5px"}}></i>
                            Invoice
                        </button>
                        <button class="btn btn-outline-success mr-3" type="button">
                            <i class="fa fa-money" style={{marginRight:"5px"}}></i>
                            Customer Receive
                        </button>
                        <button class="btn btn-outline-success mr-3" type="button">
                        <i class="fa fa-paypal" style={{marginRight:"5px"}}></i>
                            Manfacture Payment
                        </button>
                        <button class="btn btn-outline-success mr-3" type="button">
                        <i class="fa fa-shopping-cart" style={{marginRight:"5px"}}></i>
                            Purchase
                        </button>
                        <ul style={{listStyle:"none",display:"flex",marginLeft:"100px"}}>
                            <li>
                               <a href="/"> <i class="fa fa-bell mr-4" style={{fontSize:"2em",background:"#f5f5f5",padding:"10px",color:"black"}} ></i></a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="fa fa-exclamation-triangle mr-4" style={{fontSize:"2em",background:"#f5f5f5",padding:"10px",color:"black"}}></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="fa fa-cog mr-4" style={{fontSize:"2em",background:"#f5f5f5",padding:"10px",color:"black"}}> </i>
                                </a>
                            </li>
                        </ul>
                    </form>
                </nav>
                <div>
                <hr style={{width:"100%",marginTop:"0px"}} />
                </div>
            </React.Fragment>
        );
    }
}
export default  navBar;