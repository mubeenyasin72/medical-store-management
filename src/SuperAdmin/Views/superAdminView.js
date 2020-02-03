import React, { Component } from 'react';
// import DashBoard from '../Components/DashBoard/dashboardBar';
// import NavBar from '../Components/NavBar/navBar';
// import Card from '../Components/MainBody/MainBodyCards/cardMainBody';
// import Chart from "../Components/Charts/customerChart";
// import TableData from '../Components/MainBody/tableNewCardData';
//Invoice
// import NewInvoice from '../Components/Invoices/NewInvoice/newInvoice';
// import ManageInvoice from '..//Components/Invoices/ManageInvoice/manageInvoice';
// import POSInvoice from '..//Components//Invoices//POSInvoice/posInvoice';
import GUIPOS from '../Components/Invoices/GUIPOS/guiPos';
// import BottomNav from '../Components/Invoices/GUIPOS/FooterGuiPos/guiFooter';
//Employee
// import AddEmployee from "..//Components//Employee//AddEmployee//addEmployee";
// import ManageEmployee from '..//Components/Employee/ManageEmployee/manageEmployee';
//Stock
// import StockReport from '../Components/Stock/StockReport/stockReport';
// import StockReportBW from '../Components/Stock/StockReport(BatchWise)/stockReportBW';
//Return File
// import ReturnFile from '../Components/Return/return/returnFile';
// import StockReturn from '../Components/Return/ReturnStock/returnStock';
//Authtication
// import LoginPage from '../Components/Auth/Login/loginPage';
// import SignUpPage from '../Components/Auth/Signup/signUpPage';
class superAdminView extends Component {
    render() {
        return (
            <React.Fragment>
                    <div>
                        {/* <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <NavBar/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <DashBoard/>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Card/>
                            </div>
                        </div>

                        <div className="row mt-5" style={{backgroundColor:"#fffff"}}>
                            <div className="col-sm-12 col-md-12 col-lg-9 col-xl-6 ml-4">
                                <Chart/>
                                <hr/>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                                <TableData/>            
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-12">
                                <GUIPOS/>
                            </div>                            
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}
export default superAdminView;