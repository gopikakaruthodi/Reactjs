import React,{Component} from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  increment=()=>{
    this.setState({count:this.state.count+=1})
  }
 
  decrement=()=>{
    if(this.state.count>0){
      this.setState({count:this.state.count-=1})
    }
  }
  render(){

    return <div>
        <button onClick={this.decrement}>-</button>
        <span>Count {this.state.count}</span>
        <button onClick={this.increment}>+</button>
    </div>
  }

}
export default App