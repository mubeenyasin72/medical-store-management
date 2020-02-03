import React, { Component } from 'react';

class dashboardBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-light bg-white">
                    <form class="form-inline">
                    <i class="fa fa-globe" style={{fontSize:"3em",color:"green"}}></i>
                    <h4 style={{marginLeft:"30px"}}>
                        DashBoard<br/>
                        <small style={{fontSize:"15px"}}>
                            Home
                        </small>
                    </h4>
                   <ol style={{listStyle:"none",display:"flex",border:"1px solid #e1e6ef",padding:"10px",marginLeft:"1080px"}}>
                       <li>
                           <a href="/">
                            <i class="fa fa-home" style={{marginRight:"4px",color:"gray"}}></i>
                            &ensp; Home&ensp;
                           </a>
                       </li>
                       <li>
                           /
                       </li>
                       <li style={{color:"green"}}>
                           
                           &ensp;<b>DashBoard</b>
                       </li>
                   </ol>
                    </form>
                
                </nav>
                <div>
                <hr style={{width:"100%",marginTop:"0px"}} />
                </div>
            </React.Fragment>
        );
    }
}
export default dashboardBar;