import { useState } from 'react';
// import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './ResetButton';
// import Box from './components/Box';
// import './index.css'

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4,6]
  ];
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [subHeading, setSubHeading] = useState("Let's Play");

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        // console.log(idx)
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
        toggleSubheading(winner, 0);
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
        toggleSubheading(winner, 0);
      }

      // Move the resetBoard call outside of the if (winner) block
    } else {
      const draw = checkDraw(updatedBoard);
      if (draw) {
        toggleSubheading(null, 1);
        // Move the resetBoard call outside of the if (draw) block
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  }

  const checkDraw = (board) => {
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        return 0;
      }
    }
    return 1;
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  const toggleSubheading = (winner, draw) => {
    setSubHeading(draw ? "Match Draw" : winner + " Wins");
    setTimeout(() => {
      setSubHeading("Let's Play");
      resetBoard(); // Move the resetBoard call outside of the setTimeout
    }, 2000);
  }

  return (
    <>
      <div className="h-screen bg-[#0E1927] pt-10 pb-16">
        <div className="mx-auto w-fit text-center">
          <h2 className={`heading ${gameOver ? 'text-xl':'text-6xl' }  text-[#E7E9ED] font-semibold`}>Tic-tac-toe</h2>
          <h4 className={`subHeading ${gameOver ? 'text-6xl text-[#3CC576]':'text-2xl' } mt-2 font-semibold text-[#C6C8D7]`}>{subHeading} </h4>
        </div>
        
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <ResetButton resetBoard={resetBoard} />
      </div>
    </>
  );
}

export default App;
