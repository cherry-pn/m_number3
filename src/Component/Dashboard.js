import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <center>
                <div>
                    
            
                    <div style= { {fontSize:"35px"}}> <b>Hello</b> <br></br>  {this.props.username} ,{this.props.middlename}, {this.props.lastname}</div>
                </div>
            </center>


        )
    }
}
export default Dashboard;