import React, { Component } from 'react'

class stockReport extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                    <div className="row mt-4">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="row">
                                <div className="col-md-9 col-lg-9 col-xl-9">
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 mt-3">
                                    <button className="btn" style={{backgroundColor:"#FFC751",color:"white",fontSize:"15px"}}>
                                        Print
                                    </button>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mt-3">
                                    <button className="btn" style={{backgroundColor:"#43BE03",marginLeft:"0px",width:"50%",color:"white",fontSize:"15px"}}>
                                        Export Csv
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr style={{width:"100%"}}  />
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
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <table className="table table-bordered table-sm">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Medicine Name</th>
                                            <th>Manfacturer Name</th>
                                            <th>Medicine Type</th>
                                            <th>Sell Price</th>
                                            <th>Purchase Price</th>
                                            <th>In Quantity</th>
                                            <th>Sold QTY</th>
                                            <th>Stock</th>
                                            <th>Stock Sell Price</th>
                                            <th>Stock Purchase Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                <a href="/">Ad - All(50 mg + 47 mg + 500 mcg + 10 mg + 1 mg + 2 mg + 2 mg + 22.5 mg)</a>
                                            </td>
                                            <td>
                                                Ad-din Pharmaceuticals Ltd.
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                3.00
                                            </td>
                                            <td>
                                                100.00
                                            </td>
                                            <td>
                                                4
                                            </td>
                                            <td>
                                                96
                                            </td>
                                            <td>
                                                3360
                                            </td>
                                            <td>
                                                2880
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                2
                                            </td>
                                            <td>
                                                <a href="/">Acidex 20(20 mg)</a>
                                            </td>
                                            <td>
                                                Ad-din Pharmaceuticals Ltd.
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                3.00
                                            </td>
                                            <td>
                                                100.00
                                            </td>
                                            <td>
                                                4
                                            </td>
                                            <td>
                                                96
                                            </td>
                                            <td>
                                                3360
                                            </td>
                                            <td>
                                                2880
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                3
                                            </td>
                                            <td>
                                                <a href="/">Adbon(500 mg + 200 IU)</a>
                                            </td>
                                            <td>
                                                Ad-din Pharmaceuticals Ltd.
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                3.00
                                            </td>
                                            <td>
                                                100.00
                                            </td>
                                            <td>
                                                4
                                            </td>
                                            <td>
                                                96
                                            </td>
                                            <td>
                                                3360
                                            </td>
                                            <td>
                                                2880
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                4
                                            </td>
                                            <td>
                                                <a href='/'>Aldaben DS 400(400 mg)</a>
                                            </td>
                                            <td>
                                                Ad-din Pharmaceuticals Ltd.
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                3.00
                                            </td>
                                            <td>
                                                100.00
                                            </td>
                                            <td>
                                                4
                                            </td>
                                            <td>
                                                96
                                            </td>
                                            <td>
                                                3360
                                            </td>
                                            <td>
                                                2880
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row mt-3">
                                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                    <p>
                                        Showing 1 to 10 of 49 entries
                                    </p>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-9 col-lg-9 col-xl-9"></div>
                        </div>
                        <div className="row mt-3">
                                <div className="col-md-9 col-lg-9 col-xl-9"></div>
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                    <div class="btn-group" role="group" aria-label="First group ml-5">
                                        <button type="button" class="btn btn-outline-secondary">Previous</button>
                                        <button type="button" class="btn btn-outline-primary">1</button>
                                        <button type="button" class="btn btn-outline-primary">2</button>
                                        <button type="button" class="btn btn-outline-primary">3</button>
                                        <button type="button" class="btn btn-outline-primary">4</button>
                                        <button type="button" class="btn btn-outline-secondary">Next</button>
                                    </div>
                                </div>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}
export default stockReport;