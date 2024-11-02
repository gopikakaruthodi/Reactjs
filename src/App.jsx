import React ,{PureComponent} from "react";

class App extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      users:[],
      inputVal:" "
    }
  }
  async componentDidMount(){
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(res);
    const datas=await res.json()
    console.log(datas);
    this.setState({users:[...datas]})
  }

  handleChange=(event)=>{
    console.log(event.target.value);
    
    const filterData=this.state.users.filter((dt)=>
      dt.name.toLowerCase().startsWith(event.target.value))
    this.setState({users:[...filterData],inputVal:""})
  }

  render(){
    return <>
    <input type="search" onChange={this.handleChange} />
   <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>

      </thead>
      {this.state.users.map((data,index)=><tbody key={index}>
       < tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>

       </tr>

      </tbody>)}

    </table>
    </>
  }
}

export default App