import React from 'react'
// import "./ResetButton.css"

const ResetButton = ({resetBoard}) => {
  return (
    <div className="mx-auto w-fit mt-8 ">
      <button className="reset-btn py-2 px-5 text-white rounded-lg text-lg font-semibold bg-[#3CC576] hover:bg-[##3CC579]" onClick={resetBoard}>Reset</button>
    </div>
    

  )
}

export default ResetButton
