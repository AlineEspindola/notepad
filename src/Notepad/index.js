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
            <p>Vou criar um programa</p>
            <hr></hr>
          </div>
          <div className='line'>
            <p>Tomar café</p>
            <hr></hr>
          </div>
          <div className='line'>
            <p>Beber café</p>
            <hr></hr>
          </div>
          <div className='line'>
            <p>Não sei o que fazer</p>
            <hr></hr>
          </div>
          <div className='line'>
            <p>Tomar café</p>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notepad;