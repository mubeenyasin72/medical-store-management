import React, { Component } from 'react';

class guiFooter extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <nav class="navbar fixed-bottom navbar-light bg-light">
                                      <button className="btn" style={{backgroundColor:"#ffC751",color:"white"}}>
                                          Full Paid
                                      </button>
                                      <button className="btn ml-1" style={{backgroundColor:"#45C203",color:"#fffcf6"}}>
                                          Save Sale
                                      </button>
                                      <button className="btn ml-1" style={{backgroundColor:"#53D4F4"}}>
                                        <i class="fa fa-calculator" style={{fontSize:"15px",color:"white"}}></i>
                                      </button>
                                      <h6 style={{marginLeft:"400px"}}>
                                          Net Total:
                                      </h6>
                                      <h5><span class="badge badge-secondary" style={{backgroundColor:"#EEEEEE",padding:"15px 50px",marginLeft:"5px",color:"black"}}>00.0</span></h5>
                                      <h6 className="ml-2">
                                          Paid Ammount:
                                      </h6>
                                      <input type="number" class="form-control ml-1" placeholder="00.0" style={{width:"10%"}} />
                                      <h6 style={{marginLeft:"20px"}}>
                                        Due:
                                      </h6>
                                      <h5><span class="badge badge-secondary" style={{backgroundColor:"#EEEEEE",padding:"15px 50px",marginLeft:"5px",color:"black"}}>0</span></h5>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default guiFooter;