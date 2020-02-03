import React, { Component } from 'react'

class addEmployee extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{backgroundColor:"#f1f3f6"}}>
                    <div className="row mt-4">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                                <button className="btn  mt-5 mb-5"  style={{backgroundColor:"#53D4FA",width:"100%", color:"white",fontSize:"15px"}}>
                                    Manage Employee
                                </button>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-10 col-xl-10">

                            </div>
                        </div>
                    </div>
                   <div className="row mt-3 bg-white">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                <h6 style={{fontSize:"25px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                    Add Employee
                                </h6>
                            </div>
                            <hr style={{width:"100%"}} />
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                                <h6 style={{fontSize:"18px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                    Employee Name
                                </h6>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                                <input type="text"  class="form-control" placeholder="Enter Employee Name" style={{width:"100%"}} />
                            </div>
                            <div className="col-lg-7 col-xl-7"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                                <h6 style={{fontSize:"18px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                    Employee Email
                                </h6>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                                <input type="text"  class="form-control" placeholder="Enter Employee Email" style={{width:"100%"}} />
                            </div>
                            <div className="col-lg-6 col-xl-6"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                                <h6 style={{fontSize:"18px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                    Employee Mobile
                                </h6>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                                <input type="number"  class="form-control" placeholder="Enter Employee Mobile Number" style={{width:"100%"}} />
                            </div>
                            <div className="col-lg-6 col-xl-6"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                                <h6 style={{fontSize:"18px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                    Employee Address
                                </h6>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                                <textarea type="text" class="form-control" placeholder="Employee Address" style={{width:"100%"}} />
                            </div>
                            <div className="col-lg-6 col-xl-6"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                                <h6 style={{fontSize:"18px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                    Previous Balance
                                </h6>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
                                <input type="number"  class="form-control" placeholder="Enter Previous Balance" style={{width:"100%"}} />
                            </div>
                            <div className="col-lg-6 col-xl-6"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4 col-lg-3 col-xl-3"></div>
                            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 mt-3">
                                <button className="btn" style={{backgroundColor:"#3A95E4",color:"white",fontSize:"15px"}}>
                                    Save
                                </button>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 mt-3">
                                <button className="btn" style={{backgroundColor:"#45C403",color:"white",fontSize:"15px"}}>
                                    Save And Add Another
                                </button>
                            </div>
                            <div className="col-md-8 col-lg-9 col-xl-9"></div>
                        </div>
                        </div>
                   </div>
                </div>
            </React.Fragment>
        );
    }
}
export default  addEmployee;