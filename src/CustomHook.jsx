import React, { useState } from 'react'

const CustomHook = (inputValue) => {
    const [value,setValue]=useState(inputValue)
    const increment=()=>{
        setValue(value+1)
    }
    const decrement=()=>{
        setValue(value-1)
    }
  return {value,increment,decrement}
}

export default CustomHook