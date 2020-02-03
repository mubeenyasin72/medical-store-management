import React, { Component } from 'react';

class manageInvoice extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="row mt-5">
                                <div className="col-2">
                                    <button className="btn" style={{backgroundColor:"#53D4FA",width:"100%", color:"white",fontSize:"15px"}}>
                                        + New Invoice
                                    </button>
                                </div>
                                <div className="col-2">
                                    <button className="btn" style={{backgroundColor:"#3A95E4",width:"100%", color:"white",fontSize:"15px"}}>
                                        POS Invoice
                                    </button>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-1">
                                            Start Date
                                        </div>
                                        <div className="col-2">
                                            <div class="form-group">
                                                <div class="datepicker" data-date-format="mm/dd/yyyy" style={{width:"100%"}}>
                                                    <input type='text' class="form-control" />
                                                    <span class="input-group-addon">
                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                    </span>
                                                </div>
                                            </div> 
                                              
                                        </div>
                                        <div className="col-1">
                                             End Date
                                        </div>
                                        <div className="col-2">
                                            <div class="form-group">
                                                <div class="datepicker" data-date-format="mm/dd/yyyy" style={{width:"100%"}}>
                                                    <input type='text' class="form-control" />
                                                    <span class="input-group-addon">
                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                    </span>
                                                </div>
                                            </div> 
                                              
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-success">
                                                Find
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <hr style={{width:"100%"}} />
                    </div>
                    <div className="row bg-white">
                        <div className="col-1" style={{textAlign:"right",marginTop:"10px"}}>
                            Show 
                        </div>
                        <div className="col-1">
                            <div class="input-group" style={{width:"100%"}}>
                                        <select class="custom-select" id="inputGroupSelect04">
                                            <option selected>Choose...</option>
                                            <option value="1">10</option>
                                            <option value="2">50</option>
                                            <option value="3">100</option>
                                        </select>
                            </div>
                        </div>
                        <div className="col-1" style={{marginTop:"10px"}}>
                            Entries
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-4">
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
                        <div className="col-1">

                        </div>
                        <div className="col-1" style={{marginTop:"10px",textAlign:"right"}}>
                            Serch
                        </div>
                        <div className="col-2">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                    <div className="row bg-white">
                       <div className="col-12 mt-4">
                        <table  class="table table-bordered table-responsive-md">
                                <thead>
                                    <tr>
                                        <th>
                                            SL.
                                        </th>
                                        <th>
                                            Invoice No
                                        </th>
                                        <th>
                                            Customer Name
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Total Ammount
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
                                            1000
                                        </td>
                                        <td>
                                            Walking Customer
                                        </td>
                                        <td>
                                            2019-11-12
                                        </td>
                                        <td>
                                            23.75
                                        </td>
                                        <td>
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#FFB61E",padding:"5px",border:"1px solid #FFB61E",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-fax" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#62D0F1",padding:"5px",border:"1px solid #62D0F1",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-pencil " style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            1000
                                        </td>
                                        <td>
                                            Walking Customer
                                        </td>
                                        <td>
                                            2019-11-12
                                        </td>
                                        <td>
                                            23.75
                                        </td>
                                        <td>
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#FFB61E",padding:"5px",border:"1px solid #FFB61E",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-fax" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#62D0F1",padding:"5px",border:"1px solid #62D0F1",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-pencil " style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            1000
                                        </td>
                                        <td>
                                            Walking Customer
                                        </td>
                                        <td>
                                            2019-11-12
                                        </td>
                                        <td>
                                            23.75
                                        </td>
                                        <td>
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#FFB61E",padding:"5px",border:"1px solid #FFB61E",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-fax" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#62D0F1",padding:"5px",border:"1px solid #62D0F1",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-pencil " style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        </td>
                                        
                                    </tr> <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            1000
                                        </td>
                                        <td>
                                            Walking Customer
                                        </td>
                                        <td>
                                            2019-11-12
                                        </td>
                                        <td>
                                            23.75
                                        </td>
                                        <td>
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#FFB61E",padding:"5px",border:"1px solid #FFB61E",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-fax" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#62D0F1",padding:"5px",border:"1px solid #62D0F1",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-pencil " style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                        </td>
                                        
                                    </tr> <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            1000
                                        </td>
                                        <td>
                                            Walking Customer
                                        </td>
                                        <td>
                                            2019-11-12
                                        </td>
                                        <td>
                                            23.75
                                        </td>
                                        <td>
                                            <a href="/" style={{backgroundColor:"#37A000",padding:"5px",border:"1px solid #37A000",borderRadius:"5px"}}>
                                                <i class="fa fa-window-restore" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#FFB61E",padding:"5px",border:"1px solid #FFB61E",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-fax" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#62D0F1",padding:"5px",border:"1px solid #62D0F1",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-pencil " style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
                                            <a href="/" style={{backgroundColor:"#E5343D",padding:"5px",border:"1px solid #E5343D",borderRadius:"5px",marginLeft:"10px"}}>
                                                <i class="fa fa-trash" style={{fontSize:"20px",color:"white"}}></i>
                                            </a>
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
export default manageInvoice;