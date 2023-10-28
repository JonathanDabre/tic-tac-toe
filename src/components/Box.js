import React from 'react'
// import "./Box.css"
import "../"

const Box = ({value, onClick}) =>{

    
  return (
    
    <button className={`${value=== 'X'?'text-[#15C28B]': 'text-[#316F87]' } hover:shadow-md bg-white text-6xl rounded-lg text-center  font-semibold shadow-sm border w-20 h-20 flex justify-center`} onClick={onClick} >{value}</button>
  )
}

export default Box;
