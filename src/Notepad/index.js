import React, { Component } from 'react';
import './Notepad.css';

function Notepad() {
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
          <div className='line'>
            <div className='line__text'>
              <input type="checkbox"></input>
              <p>Dar uma estrela no repositório</p>
            </div>
            <hr></hr>
          </div>
          <div className='line'>
            <div className='line__text'>
              <input type="checkbox"></input>
              <p>Seguir Aline Espindola</p>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notepad;