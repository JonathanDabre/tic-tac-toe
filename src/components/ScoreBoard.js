import React from 'react'
// import "./ScoreBoard.css"

const ScoreBoard = ({scores, xPlaying}) => {

    const {xScore, oScore} = scores;

  return (
    <div className=" mx-auto my-4">
      <div className='scoreboard  w-[260px] rounded-2xl mx-auto bg-[#182947] text-white '>
        <div className="flex flex-row justify-evenly">
          <div className={`score w-[50%] text-center x-score ${!xPlaying && "inactive"} ${xPlaying?"border-b-4 border-[#3CC576]": ""} py-4  text-3xl rounded-bl-2xl font-semibold`}>X : {xScore}</div>
          <div className={`score w-[50%] text-center o-score ${xPlaying && "inactive"} ${!xPlaying?"border-b-4 border-[#3CC576]": ""}  py-4 text-3xl font-semibold rounded-br-2xl`}>O : {oScore}</div> 
        </div>
               
      </div>
    </div>
  )
}

export default ScoreBoard
