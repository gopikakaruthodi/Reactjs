import React, { memo } from 'react'

const Child = ({addData}) => {
    console.log("Child");
    
  return (
    <button onClick={addData}>Add List</button>
  )
}

export default memo(Child)