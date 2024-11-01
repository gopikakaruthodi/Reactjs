import React,{Component} from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:" ",
      items:[]
    }
  }

  handleInput=(event)=>{
    console.log(event.target.value);
    this.setState({inputVal:event.target.value})
  }
  addItem=()=>{
    this.setState({items:[...this.state.items,this.state.inputVal],inputVal:""})
  }


  render(){
    return <div>
      <h2>Todo Task</h2>
      <input type="text" value={this.state.inputVal} onChange={this.handleInput} />
      <button onClick={this.addItem}>Add</button>
      <div>
        <ul>
          {
          this.state.items.map((item,index)=><li key={index}>{item}</li>)
          }
         
        </ul>
      </div>
    </div>
  }

}
export default App