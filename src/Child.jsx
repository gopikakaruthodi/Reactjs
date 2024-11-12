import React, { useState,memo } from 'react'

const Child = () => {
    let[count,setCount]=useState(0)
    console.log("Child Count");
  
    return (
      <>
       <button onClick={()=>setCount(count+=1)}>Child count {count}</button>
      </>
    ) 
}
// Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings in cases where the props passed to the child component are the same.
export default memo(Child)

