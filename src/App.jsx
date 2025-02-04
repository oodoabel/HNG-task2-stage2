import React, { useState } from 'react'



const App = () => {
  
  const colorArray = ['pink', 'purple', 'green', 'yellow', 'blue', 'red']
  const [displayColor, setDisplayColor] = useState(colorArray[(Math.floor(Math.random() * 6))])
  const [gameScore, setGameScore] = useState(0);
  let [ score, setScore ] = useState(0);

  const resetGame = () => {
    setDisplayColor(colorArray[Math.floor(Math.random() * 6)])
    setGameScore(null)
    setScore(0)
  }

  const shuffle = () => {
    setDisplayColor(colorArray[Math.floor(Math.random() * 6)])
  }


  const check = (prop) => {
    if(prop === displayColor){
      setGameScore('Correct');
      setScore(score += 1);
      shuffle()
    }else{
      setGameScore('Incorrect')
    }
  }
  return (
    
    <div className='cont-div'>
      <div className='body'>
      <p className='welcome'>You are welcome to play!</p>
      <p className='welcome' data-testid="gameInstructions">Guess a color</p>


      <div id='display' data-testid="colorBox" className={displayColor}>
        
      </div>
      <div className='colorOption' data-testid="colorOption">
        <button data-testid="blue" className='blue' onClick={() => {check('blue')}}></button>
        <button data-testid="red" className='red' onClick={() => {check('red')}}></button>
        <button data-testid="green" className='green' onClick={() => {check('green')}}></button> 
        <button data-testid="yellow" className='yellow' onClick={() => {check('yellow')}}></button>
        <button data-testid="pink" className='pink' onClick={() => {check('pink')}}></button>
        <button data-testid="purple" className='purple' onClick={() => {check('purple')}}></button>
      </div>
      <p data-testid="gameStatus" className={gameScore === 'Correct'? 'Correct' : 'Incorrect'}>{gameScore || null}</p>
      <p className='score' data-testid="score">Score: {score || null}</p>
      <button className='reset' data-testid="newGameButton" onClick={resetGame}>New Game</button>

    </div>
    </div>
  )
}

export default App
