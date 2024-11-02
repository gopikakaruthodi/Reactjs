import React ,{PureComponent} from "react";

class App extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
  async componentDidMount(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    // console.log(res);
    const datas=await res.json()
    console.log(datas);
    this.setState({posts:[...datas]})
    
    
  }
  render(){
    return <>
   <table>
      <thead>
       <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
       </tr>


      </thead>
      {this.state.posts.map((data)=><tbody>
       <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>

       </tr>

      </tbody>)}

    </table>
    </>
  }
}

export default App