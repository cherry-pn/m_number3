import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <center>
                <div>
                    <div style={{fontSize: "50px"}}> <b>Welcome To React Midterm Number3</b></div>
                    <br></br><br></br>
                    <div style= { {fontSize:"35px"}}> <b>Hello</b> <br></br>  {this.props.name} ,{this.props.middlename}, {this.props.lastname}</div>
                </div>
            </center>


        )
    }
}
export default Dashboard;