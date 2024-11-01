import React,{Component} from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:" ",
      items:[]
    }
  }
  handleInput=(event)=>{
    this.setState({inputVal:event.target.value})
  }
  addItem=()=>{
    this.setState({items:[...this.state.items,this.state.inputVal],inputVal:""})
  }
  deleteItem=(data)=>{
    this.setState({items:this.state.items.filter((item)=>item!=data)})
  }
  render(){
    return <div>
      <div>
        <input type="text" value={this.state.inputVal} onChange={this.handleInput}/>
        <button onClick={this.addItem}>Add</button>
        <ul>
          {this.state.items.map((item,index)=><li key={index}>{item} <button onClick={()=>this.deleteItem(item)}>Delete</button></li>)}  
      </ul>
      </div>
    </div>
  }

}
export default App

