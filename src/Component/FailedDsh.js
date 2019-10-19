import React,{Component} from 'react';

class FailedDsh extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
               <h1>Invalid Credentials</h1>{this.props.invalid}
            </div>
        )
    }
}
export default FailedDsh;