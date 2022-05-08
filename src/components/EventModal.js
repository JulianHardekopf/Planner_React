import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import  { useState } from 'react'


const EventModal = ({openform,setopenform}) => {
    const [title, setTitle] = useState('')
  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-start items-center' >
        <form className='bg-white rounded-lg shadow-2xl w-1/4'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400'>
                    Add Task
                </span>
                <span className='material-icons-outlined text-gray-400'>
                    <AiOutlineCloseCircle onClick={() => openform ? setopenform(!openform) : setopenform} />
                </span>   
            </header>
            <div className='p-3'>
                <div className='grid grid-cols-3 items-end gap-y-7 '>
                    <div className= 'text-gray-600 text-xl font-semibold pb-2 w-full'>name</div>
                    <input className='col-span-2 pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-indigo-900	' type="text" name='title' placeholder='Add title' value={title} required onChange={(e) => setTitle(e.target.value)} />
                    <div className='text-gray-600 text-xl font-semibold pb-2 w-full col-span-3'>
                        <select name='day' id="day" className='w-full'>
                            <option value=''>Monday</option>
                            <option value='second'>Monday</option>

                        </select>
                    </div>
                   
                </div>
            </div>
            
                
        </form>
    </div>
  )
}

export default EventModal