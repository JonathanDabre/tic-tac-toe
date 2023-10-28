import React from 'react'
// import "./ScoreBoard.css"

const ScoreBoard = ({scores, xPlaying}) => {

    const {xScore, oScore} = scores;

  return (
    <div className=" mx-auto my-4">
      <div className='scoreboard mx-auto px-4 py-2 w-[2] bg-[#E6F9F7] text-center'>
          <span className={`score x-score ${!xPlaying && "inactive"} text-2xl font-semibold`}>X : {xScore}</span>
          <span className={`score o-score ${xPlaying && "inactive"} text-2xl font-semibold`}>O : {oScore}</span>      
      </div>
    </div>
  )
}

export default ScoreBoard
