import React, { Component, useState, useCallback } from 'react';
import './Notepad.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Notepad() {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Dar uma estrela no repositório'}
  ])
  const [input, setInput] = useState('');
  const [taskIdCounter, setTaskIdCounter] = useState(2); //Começa com 2 pois já possui uma tarefa

  const taskAdd = useCallback(() => {
    if(input.trim()) {
       const newTask = { id: taskIdCounter, text: input}
       setTasks([...tasks, newTask]);
       setInput(''); // Reseta o input
       setTaskIdCounter(taskIdCounter + 1);
     }
  }, [input, tasks]);

  const taskDelete = useCallback((taskIdToDelete) => {
    const newTasks = tasks.filter(task => task.id !== taskIdToDelete);
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
            <div className='line' key={task.id}>
              <div className='line__content'>
                <div className='line__text'>
                  <input type="checkbox"></input>
                  <p>{task.text}</p>
                </div>
                <div className='line__button'>
                  <button onClick={() => taskDelete(task.id)} className='fa-solid fa-trash'></button>
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