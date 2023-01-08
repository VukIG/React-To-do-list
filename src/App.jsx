import { useState, useRef } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react';

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
    if (inputJebeni.current.value) {
      const newTask = {
        key:uuidv4(),
        task:inputJebeni.current.value,
      };
      setTasks([...tasks,newTask])  
    }
    else{
      return;
    }
  }

  return (
    <div className='bg-gray-900 w-full h-full'>
      <div className='bg-black absolute top-[20%] left-[50%] flex justify-center translate-x-[-50%] translate-y-[-50%]'>
        <input className='w-[400px] align-middle 
        m-5 p-2 rounded' placeholder='Enter task name:' type="text" ref={inputJebeni} />
        <button className='m-5 bg-green-700 text-white p-5'  onClick={addTask}>Add tasks</button>
        <button className='m-5 bg-red-700 text-white p-5'  onClick={clearTasks}>Clear all tasks</button>
      </div>
      <ul className="absolute top-[70%] left-[50%] 
      translate-x-[-50%] translate-y-[-50%] border-b-2 border-black m-4 max-h-full overflow-y-scroll h-[70%]
      ">
          {
            tasks.map( task => (
              <Fragment>
                <div className="grid grid-cols-2 ">
                  <li key={task.key} className=" text-2xl font-bold
                  w-[400px]  "> {task.task} </li>
                  <div className="">
                    <button className='p-5 m-2 bg-green-800 text-white' 
                    onClick={ () => removeTask(task.key)}>Edit task</button>
                    <button className='p-5 m-2 bg-red-800 text-white' 
                    onClick={ () => removeTask(task.key)}>Remove task</button>
                  </div>
                   
                </div>
              </Fragment>)
            )
          }  
        </ul>
    </div>
  )
}
export default App