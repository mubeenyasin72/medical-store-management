import React, { Component } from 'react';

class returnCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="card" style={{width:"100%",height:"100%"}}>
                        <div class="card-body">
                        <h6 style={{fontSize:"15px"}}>{this.props.H1?this.props.H1 :""}</h6>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}
export default returnCard;