import React, { Component } from 'react';
import Card from '../../BasicComponents/CardSuperAdmin/cardSuperAdmin';
class cardMainBody extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-sm-8 col-md-5 col-lg-3 col-xl-3">
                                        
                                    <Card>
                                        <div className="row">
                                            <div className="col-sm-6" >
                                                <img src={require("..//..//Assets/pos_invoice.png")} style={{width:"70px"}} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Create POS Invoice</a>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3">
                                    <Card>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("..//..//Assets/invoice (1).png")} style={{width:"50px"}} />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Create New Invoice</a> 
                                        </div>

                                    
                                    </Card>
                                </div>
                                <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3">
                                    <Card>
                                    <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("..//..//Assets/product.png")} style={{width:"50px"}} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Add Medicine</a>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3">
                                    <Card>
                                    <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("..//..//Assets/customer.png")} style={{width:"50px"}} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Add Customer</a>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-8 col-md-5 col-lg-3 col-xl-3">
                                        
                                    <Card>
                                    <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("..//..//Assets/sale.png")} style={{width:"50px"}} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Create Sale Report</a>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3">
                                    <Card>
                                    <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("..//..//Assets/purchase.png")} style={{width:"50px"}} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Purchase Report </a>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3">
                                    <Card>
                                    <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("..//..//Assets/stock.png")} style={{width:"50px"}} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Stock Report</a>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3">
                                    <Card>
                                    <div className="row">
                                            <div className="col-sm-6">
                                                <img src={require("..//..//Assets/account.png")} style={{width:"50px"}} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">

                                            </div>
                                            <a href="/" style={{textAlign:"center",marginTop:"20px",fontSize:"17px",color:"green"}}>Today Report</a>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
export default cardMainBody;