import React from 'react'


const colorArray = ['white', 'green', 'black', 'yellow', 'red', 'blue'];

const colorDisplay = (color) => {
  let random = colorArray[Math.floor(Math.random() * 6)] ;
  console.log(random, color)
  if (color === random){
    console.log('u win')
  }else{
    console.log('try again');
  }
  
}

const App = () => {

  const colorArray = ['red', 'pink', 'green', 'yellow', 'purple', 'blue'];

  return (
    <div className='body'>
      <p className='welcome'>Welcome to the Game</p>
      <p data-testid="colorBox">Guess the correct color</p>
      <div>
        correct color box
      </div>
      <div color>
        <button className='red' data-testid="red" onClick={() => {colorDisplay('red')}}>Red</button>
        <button className='blue' data-testid="blue" onClick={() => {colorDisplay('blue')}}>Red</button>
        <button className='green' data-testid="green" onClick={() => {colorDisplay('green')}}>Red</button>
        <button className='purple' data-testid="purple" onClick={() => {colorDisplay('purple')}}>Red</button>
        <button className='pink' data-testid="pink" onClick={() => {colorDisplay('pink')}}>Red</button>
        <button className='yellow' data-testid="yellow" onClick={() => {colorDisplay('yellow')}}>Red</button>
      </div>
      <div>
        <p>Score</p>
        <h3>'Correct gueses ${} : ${} Wrong gueses'</h3>
      </div>
    </div>
  )
}

export default App
