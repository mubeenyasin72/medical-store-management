import React, { Component } from 'react'

class manageEmployee extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row mt-4">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2">
                                <button className="btn  mt-5 mb-5"  style={{backgroundColor:"#53D4FA",width:"100%", color:"white",fontSize:"15px"}}>
                                    + Add Employee
                                </button>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-10 col-xl-10">

                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 bg-white">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-3">
                                    <h6 style={{fontSize:"25px",fontFamily:"Alegreya Sans",color:"#374767",lineHeight:"26px",marginTop:"5px"}}>
                                        Manage Employee
                                    </h6>
                                </div>
                                <hr style={{width:"100%"}} />
                            </div>
                            <div className="row bg-white">
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3" style={{marginTop:"10px"}}>
                                    <p className="mt-2">
                                    Show 
                                    </p>
                                </div>
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3">
                                    <div class="input-group" style={{width:"100%"}}>
                                                <select class="custom-select" id="inputGroupSelect04">
                                                    <option selected>Choose...</option>
                                                    <option value="1">10</option>
                                                    <option value="2">50</option>
                                                    <option value="3">100</option>
                                                </select>
                                    </div>
                                </div>
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3" style={{marginTop:"10px"}}>
                                    <p className="mt-2">
                                        Enteries 
                                    </p>
                                </div>
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3">

                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3">
                                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label class="btn btn-success">
                                            <input type="radio" name="options" id="option1" autocomplete="off" checked /> Copy
                                        </label>
                                        <label class="btn btn-success">
                                            <input type="radio" name="options" id="option2" autocomplete="off" /> Excel
                                        </label>
                                        <label class="btn btn-success">
                                            <input type="radio" name="options" id="option3" autocomplete="off" /> CSV
                                        </label>
                                        <label class="btn btn-success">
                                            <input type="radio" name="options" id="option3" autocomplete="off" /> PDF
                                        </label>
                                        <label class="btn btn-success">
                                            <input type="radio" name="options" id="option3" autocomplete="off" /> Print
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 mt-3" style={{marginTop:"10px"}}>
                                    <p className="mt-2">
                                        Search 
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 mt-3">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                </div>
                            </div>
                            <div className="row bg-white mt-4">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <table className="table table-bordered table-sm table-striped">
                                        <thead>
                                            <tr>
                                                <th>
                                                    SL.
                                                </th>
                                                <th>
                                                    Employee Name
                                                </th>
                                                <th>
                                                    Address
                                                </th>
                                                <th>
                                                    Mobile
                                                </th>
                                                <th>
                                                    Balance
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Umar Hayat
                                                </td>
                                                <td>
                                                    DEMO Address
                                                </td>
                                                <td>
                                                    123456789
                                                </td>
                                                <td>
                                                    120.0
                                                </td>
                                                <td >
                                                    <div class="dropdown" >
                                                        <button class="btn  dropdown-toggle" type="button" 
                                                        id="dropdownMenuButton" data-toggle="dropdown"  
                                                        aria-haspopup="true" aria-expanded="false"
                                                        style={{width:"40%",backgroundColor:"#45C803"}}
                                                        >
                                                            Action
                                                        </button>
                                                        <div class="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="/"><i class="fa fa-pencil mr-2"></i>Edit</a>
                                                            <a class="dropdown-item" href="/"><i class="fa fa-trash mr-2"></i>Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    Ikhlaq Ahmad
                                                </td>
                                                <td>
                                                    DEMO Address
                                                </td>
                                                <td>
                                                    123456789
                                                </td>
                                                <td>
                                                    120.0
                                                </td>
                                                <td >
                                                    <div class="dropdown" >
                                                        <button class="btn  dropdown-toggle" type="button" 
                                                        id="dropdownMenuButton" data-toggle="dropdown"  
                                                        aria-haspopup="true" aria-expanded="false"
                                                        style={{width:"40%",backgroundColor:"#45C803"}}
                                                        >
                                                            Action
                                                        </button>
                                                        <div class="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="/"><i class="fa fa-pencil mr-2"></i>Edit</a>
                                                            <a class="dropdown-item" href="/"><i class="fa fa-trash mr-2"></i>Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    Hafiz Suad
                                                </td>
                                                <td>
                                                    DEMO Address
                                                </td>
                                                <td>
                                                    123456789
                                                </td>
                                                <td>
                                                    120.0
                                                </td>
                                                <td >
                                                    <div class="dropdown" >
                                                        <button class="btn  dropdown-toggle" type="button" 
                                                        id="dropdownMenuButton" data-toggle="dropdown"  
                                                        aria-haspopup="true" aria-expanded="false"
                                                        style={{width:"40%",backgroundColor:"#45C803"}}
                                                        >
                                                            Action
                                                        </button>
                                                        <div class="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="/"><i class="fa fa-pencil mr-2"></i>Edit</a>
                                                            <a class="dropdown-item" href="/"><i class="fa fa-trash mr-2"></i>Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style={{textAlign:"right"}}>
                                                        Total:
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    360.0
                                                </td>
                                                <td>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                    <p>
                                        Showing 1 to 10 of 10 entries
                                    </p>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9"></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-10 col-lg-10 col-xl-10"></div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                    <div class="btn-group" role="group" aria-label="First group ml-5">
                                        <button type="button" class="btn btn-outline-secondary">Previous</button>
                                        <button type="button" class="btn btn-outline-primary">1</button>
                                        <button type="button" class="btn btn-outline-secondary">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default manageEmployee;