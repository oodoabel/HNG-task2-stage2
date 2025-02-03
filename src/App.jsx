import React, { useState } from 'react'



const App = () => {
  
  const colorArray = ['pink', 'purple', 'green', 'yellow', 'blue', 'red']
  const [displayColor, setDisplayColor] = useState(colorArray[(Math.floor(Math.random() * 6))])
  const [gameScore, setGameScore] = useState(0);
  let score = 0;

  const check = (prop) => {
    if(prop === displayColor){
      setGameScore('Correct 👍');
      score = score + 1;
    }else{
      setGameScore('Incorrect 👎')
    }
  }
  return (
    
    <div className='body'>
      <div id='display' data-testid="colorBox" className={displayColor}>
        
      </div>
      <div>
        <button data-testid="blue" className='blue' onClick={() => {check('blue')}}></button>
        <button data-testid="red" className='red' onClick={() => {check('red')}}></button>
        <button data-testid="green" className='green' onClick={() => {check('green')}}></button> <br />
        <button data-testid="yellow" className='yellow' onClick={() => {check('yellow')}}></button>
        <button data-testid="pink" className='pink' onClick={() => {check('pink')}}></button>
        <button data-testid="purple" className='purple' onClick={() => {check('purple')}}></button>
      </div>
      <p className='welcome' data-testid="gameInstructions">Guess a color</p>
      <p data-testid="gameStatus" className={gameScore === 'Correct' ? 'Correct 👍' : 'Incorrect 👎'}>{gameScore || null}</p>
      <p className='score' data-testid="score">Score: {score}</p>
      <button className='reset' data-testid="newGameButton">Reset</button>

    </div>
  )
}

export default App
