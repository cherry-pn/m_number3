import React,{Component} from 'react';

class FailedDsh extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
               {this.props.invalid}
            </div>
        )
    }
}
export default FailedDsh;