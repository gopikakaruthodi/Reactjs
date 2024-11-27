import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithLoader from './HOC'
import BaseComponent from './BaseComponent'

const EnhancedWithLoader=WithLoader(BaseComponent)
function App() {
  const [data,setData]=useState([])
  const [isLoading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setData(['item1','item2','item3','item4','item5'])
      setLoading(false)
    },3000)
  },[])

  return <EnhancedWithLoader isLoading={isLoading} data={data} />
}

export default App
