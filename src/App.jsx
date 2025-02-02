import React from 'react'
import { useState } from 'react';


const colorArray = ['purple', 'green', 'pink', 'yellow', 'red', 'blue'];

const random = colorArray[Math.floor(Math.random() * 6)]
console.log(random)


const colorDisplay = (color, random) => {

  console.log(color, random)

  if (color === random){
    console.log('u win')
  }else{
    console.log('try again');
  }
}


const App = () => {
  
  const [color, setColor] = useState(false);

  return (
    <div className='body'>
      <p className='welcome'>Welcome to the Game</p>
      <p>Guess the correct color</p>
      <div data-testid="colorBox">
        {random}
      </div>
      <div>
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
