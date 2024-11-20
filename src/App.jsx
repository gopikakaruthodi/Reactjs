import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import CustomHook from './CustomHook'

function App() {
  const {value,increment,decrement} = CustomHook(0)

  return (
    <>
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>

    </div>
       </>
  )
}

export default App
