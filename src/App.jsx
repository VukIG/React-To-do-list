import { useState, useRef } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks,setTasks] = useState([]);
  const inputJebeni = useRef();
  function clearTasks() {
    setTasks([]);
  }

  function removeTask(key) {
    const newTasks = tasks.filter( task => task.key != key )
    setTasks(newTasks);
  }
  
  function addTask() {
    const newTask = {
      key:uuidv4(),
      task:inputJebeni.current.value,
    };
    setTasks([...tasks,newTask])
  }

  return (
    <div >
      <div className='bg-black absolute top-[50%] left-[50%] flex justify-center translate-x-[-50%] translate-y-[-50%]'>
        <input className='w-[400px] align-middle 
        m-5 p-2 rounded' placeholder='Enter task name:' type="text" ref={inputJebeni} />
        <button className='m-5 bg-green-700 text-white p-5'  onClick={addTask}>Add tasks</button>
        <button className='m-5 bg-red-700 text-white p-5'  onClick={clearTasks}>Clear all tasks</button>
      </div>
      <div className="">
        <ul>
          {
            tasks.map( task => 
              <div className="flex justify-between">
                <li key={task.key} className=" w-[400px] absolute top-[70%] left-[50%] 
                translate-x-[-50%] translate-y-[-50%] border-b-2 border-black  "> {task.task} </li>)
                <button className='p-5 m-2 bg-red-800 text-white' 
                onClick={ () => removeTask(task.key)}>Remove task</button>
              </div>
          }
        </ul>
      </div>
    </div>
)
}

export default App