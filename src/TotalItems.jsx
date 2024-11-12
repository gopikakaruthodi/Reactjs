import React, { useMemo, useState } from 'react'

const TotalItems = () => {
    let [items,setItem]=useState([
        {name:"1",price:10},
        {name:"2",price:30},
        {name:"3",price:20},
        {name:"4",price:40}
    ])
    const total=useMemo(()=>{
        return items.reduce((total,itm)=>total+=itm.price,0)
    },[])
    console.log(Date.now());
    
  return (
   <>
    <ul>
        {items.map((item,ind)=>(<li key={ind}>{item.name}-{item.price}</li>))}
    </ul>
    <h4>Total Price:{total}</h4>
   </>
    
  )
}

export default TotalItems