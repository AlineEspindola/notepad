import React, { Component, useState, useCallback } from 'react';
import './Notepad.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Notepad() {

  const [tasks, setTasks] = useState([
    'Dar uma estrela no repositório'
  ])
  const [input, setInput] = useState('');

  const taskAdd = useCallback(() => {
    if(input) {
       setTasks([...tasks, input]);
       setInput('');
     }
  }, [input, tasks]);

  const taskDelete = useCallback((taskToDelete) => {
    const newTasks = tasks.filter(task => task != taskToDelete);
    setTasks(newTasks);
  }, [tasks]);
  
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
              <div className='line__content'>
                <div className='line__text'>
                  <input type="checkbox"></input>
                  <p key={task}>{task}</p>
                </div>
                <div className='line__button'>
                  <button onClick={() => taskDelete(task)} className='fa-solid fa-trash'></button>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
        <div className='sheet__send'>
          <div className='send__input'>
            <i className="fa-solid fa-pen"></i>
            <input type="text" value={input} placeholder="Escreva uma anotação..." maxLength={24} onChange={e => setInput(e.target.value)}></input>
          </div>
          <div className='send__button'>
            <button className='fa-solid fa-arrow-up' onClick={taskAdd}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notepad;