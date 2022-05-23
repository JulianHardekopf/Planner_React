import React from 'react'
import {BsPlusCircle} from 'react-icons/bs';
import planerlogo from '../assets/planerlogo.png'


const CreateEventButton = ({isopen, openform, setopenform}) => {
  return (
    <React.Fragment>
       <img src={planerlogo} className={`${isopen ? '' : 'w-7 h-7' } mt-7 ml-4 rounded-full`}/>
      {isopen ? <button id='task' onClick={() => !openform ? setopenform(!openform) : setopenform } className=' ml-4 p-2 rounded-full mt-20 outline-4 flex items-center bg-gray-50  hover:bg-gray-300 transition-all duration-500'>
        <BsPlusCircle />
        <span className='pl-3 pr-7'>Add Task</span>
      </button> :
      <BsPlusCircle className='ml-4 w-7 h-7 bg-gray-50 rounded-full mt-20'/>}
    </React.Fragment>
    
  )
}

export default CreateEventButton