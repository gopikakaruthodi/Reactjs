import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './pages/Section'
import Tools from './pages/Tools'

const data=[
  {
    title:"Songs",
    para:"asdfghjkl asdfghjkl",
    isActive:true
  },
  {
    title:"Movies",
    para:"ewrwtregfd fbthfdbsh",
    isActive:false
  },
  {
    title:"Series",
    para:"sgtetwte asdfghjkl",
    isActive:true
  },
  {
    title:"Animations",
    para:"dfgejbelwt jkheriwebnkljsdfhj",
    isActive:true
  }
]

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      arr:data
    }
  }
  
  render(){
    const onListChange=(event)=>{
      console.log(event.target.value);
      let newList=data.filter((dt)=>{
        if(event.target.value==="all"){
          return true
        }
        if(event.target.value==="active"){
          return dt.isActive==true
        }
        if(event.target.value==="inactive"){
          return dt.isActive==false
        }
      })
      this.setState({arr:newList})
    }
    return(
      <Tools onAction={onListChange}>
        <div>
            { this.state.arr.map((dt,index)=><Section key={index} title={dt.title} para={dt.para} isActive={dt.isActive}/>)}
        </div>
      </Tools>
    )

  }

  // const fruits=["Apple","Grapes","Blueberry"]
  
  // return (
    // <>
    //   <ul>
    //     {fruits.map((fruit)=>{
    //       return <li>{fruit}</li>
    //     })}
    //   </ul>
    //   <ul>
    //     {fruits.map((fruit)=> <li>{fruit}</li>)}
    //   </ul>
      
    // </>

   
    
  // )
}



export default App
