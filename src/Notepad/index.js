import React, { Component, useState } from 'react';
import './Notepad.css';

function Notepad() {

  const [tasks, setTasks] = useState([
    'Dar uma estrela ao repositório',
    'Seguir Aline',
    'Dar beijo no Thiago'
  ])

  return (
    <div className='notepad'> 
      <div className='notepad__sheet'>
        <div className='sheet__holes'>
          <div className='hole'></div>
          <div className='hole'></div>
          <div className='hole'></div>
          <div className='hole'></div>
          <div className='hole'></div>
          <div className='hole'></div>
          <div className='hole'></div>
          <div className='hole'></div>
          <div className='hole'></div>
        </div>
        <div className='sheet__lines'>
          {tasks.map(task => (
            <div className='line'>
            <div className='line__text'>
              <input type="checkbox"></input>
              <p key={task}>{task}</p>
            </div>
            <hr></hr>
          </div>
          ))}
        </div>
        <div className='sheet__send'>
          <FontAwesomeIcon icon="fa-solid fa-pen" />
          <input></input>
        </div>
      </div>
    </div>
  )
}

export default Notepad;