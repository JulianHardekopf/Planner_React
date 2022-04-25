import React from 'react'
import plusimg from '../assets/plusimg.png'

const CreateEventButton = () => {
  return (
    <button className='p-2 rounded-full outline-4 flex items-center bg-gray-50  hover:bg-gray-300 transition-all duration-500'>
        <img src={plusimg} className='w-7 h-7' />
        <span className='pl-3 pr-7'>Add Task</span>
    </button>
  )
}

export default CreateEventButton