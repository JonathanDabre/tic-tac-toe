import React from 'react'
// import "./Board.css"
import Box from './Box'


const Board = ({board, onClick}) => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className='board mx-auto grid grid-cols-3 gap-x-1 justify-center items-center gap-y-2 text-center w-[260px]'>
        {board.map((value, idx)=>{
            return <Box key={idx} value={value} onClick={()=>value === null && onClick(idx)} />
        })}
                
      </div>
    </div>
    
  )
}

export default Board

