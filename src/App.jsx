import React,{ useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [data, setData] = useState("Jaz")



//   return (
//     <>
//       <h1>Parent {data}</h1>
//       {/* <Comp1 /> */}
//     </>
//   )
// }

// export default App

// function Comp1({data}){
//   return(
//     <>
//     <h2>Component1 </h2>
//     <Comp2 data={data}/>
//     </>
//   )
// }
// function Comp2(props){
//   return(
//     <>
//     <h3>Component2 </h3>
//     <Comp3 data={props.data}/>
//     </>
//   )
// }
// function Comp3({data}){
//   return(
//     <>
//     <h4>Component3 </h4>
//     <Comp4 data={data}/>
//     </>
//   )
// }
// function Comp4({data}){
//   return(
//     <>
//     <h5>Component4 {data}</h5>
    
//     </>
//   )
// }



// ==============================================================
// Simple way- Using useContext Hook we can pass values as global 




const UserContext=React.createContext()
function App() {
  const [data, setData] = useState("Jaz")




  return (
    <>
      <UserContext.Provider value={data}>
        <h1>Parent {data}</h1>
        <Comp1/>
      </UserContext.Provider>
    </>
  )
}

export default App

function Comp1(){
  return(
    <>
    <h2>Component1 </h2>
    <Comp2 />
    </>
  )
}
function Comp2(){
  return(
    <>
    <h3>Component2 </h3>
    <Comp3/>
    </>
  )
}
function Comp3(){
  return(
    <>
    <h4>Component3 </h4>
    <Comp4 />
    </>
  )
}
function Comp4(){
  const usr=useContext(UserContext)
  return(
    <>

    <h5>Component4 {usr}</h5>
    
    </>
  )
}


