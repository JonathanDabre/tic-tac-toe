import React from 'react'
// import "./Box.css"
import "../"

const Box = ({value, onClick}) =>{

    
  return (
    
    <button className={`${value=== 'X'?'text-[#3CC576]': 'text-[#4e75b4]' } hover:shadow-md bg-[#122232] text-6xl rounded-lg text-center  font-semibold shadow-sm  w-20 h-20 flex justify-center`} onClick={onClick} >{value}</button>
  )
}

export default Box;
