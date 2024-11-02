import React ,{PureComponent} from "react";

class App extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      todos:[]
    }
  }
  async componentDidMount(){
    const res=await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(res);
    const datas=await res.json()
    console.log(datas);
    this.setState({todos:[...datas]})
    
    
  }
  render(){
    return <>
   <table>
      <thead>
        <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Status</th>
        </tr>


      </thead>
      {this.state.todos.map((data)=><tbody>
       <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td >{data.completed?<span style={{color:"green"}} >Completed</span>:<span style={{color:"red"}}>Not Completed</span>}</td>
       </tr>


      </tbody>)}

    </table>
    </>
  }
}

export default App