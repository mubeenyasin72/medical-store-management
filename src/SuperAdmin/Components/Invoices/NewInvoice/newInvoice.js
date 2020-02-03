import React, { Component } from 'react'

class newInvoice extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                <div className="row bg-white">
                        <div className="col-12 mt-5">
                           <div className="row">
                                <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1">
                                        <button className="btn" style={{backgroundColor:"#53D4FA",width:"100%"}}>
                                            Manage Invoice
                                        </button>
                                </div>
                                <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1 ">
                                        <button className="btn" style={{backgroundColor:"#3A95E4",width:"100%"}}>
                                            POS Invoice
                                        </button>
                                </div>
                                <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1">
                                        <button className="btn" style={{backgroundColor:"#53D4FA",width:"100%"}}>
                                            Manage Invoice
                                        </button>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className="row mt-4 bg-white">
                        <div className="col-12">
                            <h6  style={{fontFamily:"Alegreys Sans",fontSize:"18px",lineHeight:"26px",color:"#374767"}}>
                                New Invoice
                            </h6>
                            <hr style={{width:"100%"}} />
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                <h6 style={{textAlign:"center"}}>
                                    Customer Name
                                </h6>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2">
                               <button className="btn btn-success w-100">
                                New Customer 
                               </button>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                <h6 style={{textAlign:"center"}}>
                                    Payment Type
                                </h6>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                <div class="input-group">
                                        <select class="custom-select" id="inputGroupSelect04">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                </div>
                            </div>
                         

                    </div>
                    <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                    <h6 style={{textAlign:"center"}}>
                                        Date
                                    </h6>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                    <div class="input-group mb-3">
                                    <input class="datepicker form-control hasDatepicker" type="text" size="50" name="invoice_date" id="date" required="" value="2020-01-31" tabindex="6" autocomplete="off" />
                                    </div>
                                </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th>
                                            Item Information
                                        </th>
                                        <th>
                                            Batch
                                        </th>
                                        <th>
                                            Ava.Qty
                                        </th>
                                        <th>
                                            Expiry
                                        </th>
                                        <th>
                                            Unit
                                        </th>
                                        <th>
                                            QTY
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Discount%
                                        </th>
                                        <th>
                                            Total
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" class="form-control" placeholder="Medicine Name" aria-label="Username" aria-describedby="basic-addon1"  />
                                        </td>
                                        <td>
                                            <div class="input-group">
                                                <select class="custom-select" id="inputGroupSelect04">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <p style={{border:"1px solid #EAEAEA",padding:"10px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0</p>
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <p style={{border:"1px solid #EAEAEA",padding:"10px",backgroundColor:"#EAEAEA",textAlign:"right"}}>None</p>
                                        </td>
                                        <td>
                                            <p style={{border:"1px solid #EAEAEA",padding:"10px",textAlign:"right"}}>0.00</p>
                                        </td>
                                        <td>
                                            <p style={{border:"1px solid #EAEAEA",padding:"10px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                        <td>
                                            <p style={{border:"1px solid #EAEAEA",padding:"10px",textAlign:"right"}}>0.00</p>
                                        </td>
                                        <td>
                                            <p style={{border:"1px solid #EAEAEA",padding:"10px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                        <td>
                                            <button className="btn" style={{backgroundColor:"#53D4FA",color:"white",fontSize:"20px"}}>
                                                +
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7">
                                            <h6 style={{textAlign:"center"}}>
                                                Invoice Detail
                                            </h6>
                                            <textarea class="form-control" placeholder="Invoice Details" autocomplete="off"></textarea>
                                        </td>
                                        <td>
                                          <tr>
                                              <td style={{border:"none"}}>
                                                    Invoice Discount
                                              </td>
                                          </tr>
                                          <hr style= {{width:"113%",marginLeft:"-12px"}} />
                                          <tr>
                                              <td style={{border:"none"}}>
                                                    Total Discount
                                              </td>
                                          </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <td style={{border:"none",marginTop:"0px"}}>
                                                    <p style={{border:"1px solid #EAEAEA",padding:"4px 70px 10px 10px",textAlign:"right"}}>0.00</p>
                                                </td>
                                            </tr>
                                            <hr style= {{width:"113%",marginLeft:"-12px",marginTop:"-16px"}} />
                                            <tr>
                                                <td style={{border:"none",marginTop:"0px"}}>
                                                    <p style={{border:"1px solid #EAEAEA",padding:"4px 70px 10px 10px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colSpan="8" style={{textAlign:"right",height:"30px"}}>
                                            <b>Tax</b>
                                        </td>
                                        <td>
                                        <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colSpan="8" style={{textAlign:"right",height:"30px"}}>
                                            <b>Vat</b>
                                        </td>
                                        <td>
                                        <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="8" style={{textAlign:"right",height:"30px"}}>
                                                <b>Total Tax</b>
                                        </td>
                                        <td>
                                            <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning">
                                                <i class="fa fa-arrow-down" style={{fontSize:"15px"}}></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colSpan="8" style={{textAlign:"right",height:"30px"}}>
                                            <b>Grand Total</b>
                                        </td>
                                        <td>
                                        <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colSpan="8" style={{textAlign:"right",height:"30px"}}>
                                            <b>Previous</b>
                                        </td>
                                        <td>
                                        <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colSpan="8" style={{textAlign:"right",height:"30px"}}>
                                            <b>Net Total</b>
                                        </td>
                                        <td>
                                        <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-warning">
                                                Full Paid
                                            </button>
                                            <button className="btn btn-success ml-3">
                                                Submit
                                            </button>
                                        </td>
                                        <td colSpan="7" style={{textAlign:"right",height:"30px"}}>
                                            <b>Due</b>
                                        </td>
                                        <td>
                                        <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td colSpan="8" style={{textAlign:"right",height:"30px"}}>
                                            <b>Change</b>
                                        </td>
                                        <td>
                                        <p style={{border:"1px solid #EAEAEA",padding:"4px",backgroundColor:"#EAEAEA",textAlign:"right"}}>0.00</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default newInvoice;