import React, { Component } from 'react';

class loginPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{backgroundColor:"#f1f3f6"}} >
                    <div className="row mt-4">
                        <div className="col-md-4 col-lg-4 col-xl-4"></div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 bg-white">
                            <div class="card" style={{width:"100%",border:"1px solid #45C203"}}>
                                <div class="card-body">
                                    <div className="row mt-3">
                                        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                                            <i class="fa fa-unlock-alt" style={{fontSize:"80px",color:"#45C203"}}></i>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                            <h5 class="card-title" style={{textAlign:"left",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"24px",lineHeight:"26px",fontWeight:"500px"}}>Login Page</h5>
                                            <p style={{textAlign:"left",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"15px",lineHeight:"26px"}}>Please enter your login information.</p>
                                        </div>
                                        <hr style={{width:"100%",backgroundColor:"#45C203"}} />
                                    </div>
                                   <div className="row mt-3">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <label style={{textAlign:"left",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"20px",lineHeight:"26px",fontWeight:"300px"}}>
                                                Email
                                            </label>
                                        </div>
                                   </div>
                                   <div className="row mt-3">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <input type="email" class="form-control" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1" />
                                            <small style={{textAlign:"left",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"15px",lineHeight:"26px"}}>Your unique email</small>
                                        </div>
                                   </div>
                                   <div className="row mt-3">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <label style={{textAlign:"left",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"20px",lineHeight:"26px"}}>
                                                Password
                                            </label>
                                        </div>
                                   </div>
                                   <div className="row mt-3">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <input type="password" class="form-control" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1" />
                                            <small style={{textAlign:"left",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"15px",lineHeight:"26px"}}>Your strong password</small> 
                                        </div>
                                   </div>
                                   <div className="row mt-3">
                                       <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div class="form-check">
                                                <label class="form-check-label" for="check1">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input login-checkbox-input"
                                                        id="check1"
                                                        name="option1"
                                                        value="something"
                                                    />
                                                    <div class="login-checkbox-label-text">
                                                       <small style={{textAlign:"left",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"15px",lineHeight:"26px"}}>Keep me Login in</small> 
                                                    </div>
                                                </label>
                                            </div>
                                       </div>
                                       <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                           <a href='/' style={{textAlign:"right",fontFamily:"Alegreya Sans",color:"#374767",fontSize:"15px",lineHeight:"26px"}}>Forgot password?</a>
                                       </div>
                                   </div>
                                   <div className="row mt-3">
                                       <div className="col-md-3 col-lg-3 col-xl-3"></div>
                                       <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                           <button className="btn" style={{fontFamily:"Alegreya Sans", width:"100%",color:"white",backgroundColor:"#45C203"}}>
                                               Login In
                                           </button>
                                       </div>
                                       <div className="col-md-3 col-lg-3 col-xl-3"></div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default loginPage;