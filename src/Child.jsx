import React, { memo } from 'react'

const Child = ({todos,addTodo}) => {
    console.log("child");
    
    
  return (
    <>
    <h3>Todos</h3>
    <button onClick={addTodo}>Display</button>
    {todos.map((todo,ind)=><p key={ind}>{todo}</p>)}
    </>
  )
}

export default memo(Child)