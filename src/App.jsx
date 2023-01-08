import { useState } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks,setTasks] = useState([]);
  function clearTasks() {
    setTasks([]);
  }

  function removeTask(key) {
    const newTasks = tasks.filter( task => task.key != key )
    setTasks(newTasks);
  }
  
  function addTask(task) {
    const newTask = {
      key:uuidv4(),
      task:task,
    };
    setTasks([...tasks,newTask])
  }

  return (
    <div >
      <div className='bg-black absolute top-[50%] left-[50%] flex justify-center translate-x-[-50%] translate-y-[-50%]'>
        <input className='w-[400px] align-middle 
        m-5 p-2 rounded' placeholder='Enter task name:' type="text" />
        <button className='m-5 bg-green-700 text-white p-5' onClick={(e)=>{addTask(e.target.value)}}>Add tasks</button>
        <button className='m-5 bg-red-700 text-white p-5' onClick={clearTasks}>Clear all tasks</button>
      </div>
      <div className="">
        <ul>
          {tasks.map( task => <li key={task.key} onClick={ () => removeTask(task.key) }> {task.task} </li>)}
        </ul>
      </div>
    </div>
  )
}

export default App  