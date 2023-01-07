import { useState, useEffect } from 'react'
import React from 'react'

function App() {
  const [tasks,setTasks] = useState('');
  function clearTasks() {
    setTasks('');
  }

  useEffect((
    tasks.map( task => <li key={uui4()}>{task}</li>)
  ),[])

  return (
    <div >
      <div className='bg-black absolute top-[50%] left-[50%] flex justify-center translate-x-[-50%] translate-y-[-50%]'>
        <input className='w-[400px] align-middle 
        m-5 p-2 rounded' placeholder='Enter task name:' type="text" />
        <button className='m-5 bg-red-700 text-white p-5' onClick={(e)=>{setTasks(...tasks, e.target.value)}}>Add tasks</button>
        <button className='m-5 bg-green-700 text-white p-5' onClick={clearTasks}>Clear all tasks</button>
      </div>
      <div className="">{allTasks}</div>
    </div>
  )
}

export default App  