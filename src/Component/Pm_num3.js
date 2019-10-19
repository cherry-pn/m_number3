import React, { Component } from 'react'
import Dashboard from './Dashboard';
import FailedDsh from './FailedDsh';

class Pm_num3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed: false,
           username: "cheery",
            password: "pasar",
            invalid: " ",
            inputName: "",
            inputPass: "",
        }
        this.user = null;
    }

    usernameHandler(event) {
        event.preventDefault();
        this.setState({ inputName: (event.target.value) });
    }

    passwordHandler(event) {
        event.preventDefault();
        this.setState({ inputPass: (event.target.value) });
    }
    loginHandler(e) {
        e.preventDefault();
        var input = this.state.inputName;
        var pass = this.state.inputPass;
        this.user = (this.state.username === input && this.state.password === pass)
        if (this.user) {
            this.setState({ confirmed: true });
        }
        else{
            this.setState({ confirmed:false });
        }
    }

    render() {
        let value = '';
        if (this.user) {
            value = <Dashboard username={this.state.username}/>;
        } else if (this.user === false) {
            value = <FailedDsh invalid={this.state.invalid}/>;
        }

        return (
            <center>
                {this.user === true || this.user === false ?
                    value
                    :
                    <div className="body">
                        <h1> {this.state.inputName}</h1>
                        <form>
                            <input type="text" placeholder="username" onChange={(e) => this.usernameHandler(e)}></input>
                            <br></br>
                            <br></br>
                            <input type="password" placeholder="password" onChange={(e) => this.passwordHandler(e)}></input>
                        </form>
                        <br></br>
                        <div>
                            <button onClick={(e) => this.loginHandler(e)}>Login</button>
                        </div>
                    </div>
                }
            </center>

        );
    }
}
export default Pm_num3; 
