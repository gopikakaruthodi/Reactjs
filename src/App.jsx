import React from "react";

class App extends React.Component{
  state={
    name:"",
    age:""
  }
  onHandleChange=(e)=>{
    // console.log(`change1 ${e.target.value}`);
    this.setState({[e.target.name]:e.target.value}) 
  }
  // onHandleChange2=(e)=>{
  //   console.log(`change2 ${e.target.value}`);
  //   this.setState({age:e.target.value})
  // }


  // Note-- The value of name attibute in the html must be same as the varable in the state

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log("hhi");
    console.log(this.state.name,this.state.age);
  }

  render(){
    return <div>
      <h1>Form</h1>
      <form action="">
        <input type="text" name="name" placeholder="Enter Your Name" onChange={this.onHandleChange}/>
        <input type="text" name="age" placeholder="Enter Age" onChange={this.onHandleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>

      </form>
    </div>
  }
}
export default App