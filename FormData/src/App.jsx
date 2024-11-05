import React,{Component} from "react";

class App extends Component{
  state={
    name:"",age:"",gender:'',course:'',email:'',address:'',phone:'',gname:'',gphone:'',country:''
  }
  onhandleChane=(e)=>{
    this.setState({[e.target.name]:e.target.value})

  }
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log("hai");
    console.log(this.state.name,this.state.age);
    
    

  }

  render(){
    return <div>
      <form action="">
      <div>Name:</div>
      <input type="text" name="name"/>
      <div>Age:</div>
      <input type="text" name="age"/>
      <div>Gender:</div>
      <input type="text" name="gender"/>
      <div>Course:</div>
      <input type="text" name="course"/>
      <div>Email:</div>
      <input type="text" name="email"/>
      <div>Address:</div>
      <input type="text" name="address"/>
      <div>Phone:</div>
      <input type="text" name="phone"/>
      <div>Guardian Name:</div>
      <input type="text" name="gname"/>
      <div>Guardian phone:</div>
      <input type="text" name="gphone"/>
      <div>Country:</div>
      <input type="text" name="country"/><br /><br />
      <button onClick={this.handleSubmit}>Submit</button>
      </form>
    </div>
  }
}

export default App