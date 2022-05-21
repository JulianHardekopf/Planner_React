import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import  { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css








const EventModal = ({openform,setopenform,layoutdisplay,layoutdisplay2,setlayoutdisplay2,db}) => {
    
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    
    //set the state and property
  
    
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [selectedDay, setSelectedDay] = useState('')
    const [selectedSlot, setSelectedSlot] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('bg-indigo-500')
    const [slots, setSlots] = useState("");

    
  
   
    


    //submit 
    const saveSlot = (title,location,selectedCategory,selectedDay,selectedSlot,event) => {
        event.preventDefault()
        if(title !== "" && selectedDay !== "" && selectedSlot !== "" && selectedCategory !== ""){
            let slot = {
                id:  selectedSlot + selectedDay,
                title: title,
                location: location,
                selectedCategory: selectedCategory,
                selectedDay: selectedDay,
                selectedSlot: selectedSlot  
            }
           
    
            db.slots.add(slot).then(async() => {
                //retrieve all posts inside the database
                let allSlots = await db.slots.toArray();
                //set the posts
                setSlots(allSlots);
            });
            
        }
        
        
    }


    


    const submit = (title,location,selectedDay,selectedSlot,selectedCategory,event) => {
      
        setlayoutdisplay2(layoutdisplay2.map((row,rowIdx) => {
             return row.map((slot,slotIdx) => {
               if (parseInt(selectedDay) === slotIdx && parseInt(selectedSlot) === rowIdx) {
                   //alert("Success")
                   saveSlot(title,location,selectedCategory,selectedDay,selectedSlot,event)
                   window.location = { reload: jest.fn() }                   
                   return slot
                 
                    
               } 
           })
       }))
        
      

    }

  return (
    <div className='h-screen w-full fixed left-10 top-4 flex justify-start items-center' >
        <form data-testid="taskForm" className='bg-white rounded-lg shadow-2xl w-1/4'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400'>
                    Add Task
                </span>
                <span className='material-icons-outlined text-gray-400'>
                    <AiOutlineCloseCircle data-testid="taskclose" onClick={() => openform ? setopenform(!openform) : setopenform} />
                </span>
            </header>
            <div className='p-3'>
                <div className='grid grid-cols-3 items-end gap-y-8 '>
                    <div className= 'text-gray-600 text-xl font-semibold pb-2 w-full'>name</div>
                    <input data-testid="taskName" className='col-span-2 pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-indigo-900' type="text" name='title' placeholder='Add title' value={title}  onChange={(e) => setTitle(e.target.value)} />
                    <div className= 'text-gray-600 text-xl font-semibold pb-2 w-full'>Location</div>
                    <input className='col-span-2 pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-indigo-900' type="text" name='title'  placeholder='Add location' value={location}  onChange={(e) => setLocation(e.target.value)} />
                    <div className='text-gray-600 text-xl font-semibold pb-2 w-full col-span-3'>
                        <select data-testid="taskSelectDay" onChange={(e) => setSelectedDay(e.target.value)}  name='day' id="day" className='text-gray-600 text-xl font-semibold pb-2 w-full'>
                            <option  value=''>please select Day</option>
                            <option  value='1'>Monday</option>
                            <option value='2'>Tuesday</option>
                            <option value='3'>Wednesday</option>
                            <option value='4'>Thursday</option>
                            <option value='5'>Friday</option>
                            <option value='6'>Saturday</option>
                            <option value='7'>Sunday</option>

                        </select>
                    </div>
           
                    <div className='text-gray-600 text-xl font-semibold pb-2 w-full col-span-3 mb-5'>
                        <select data-testid="taskSelectSlot" onChange={(e) => setSelectedSlot(e.target.value)}  name='slots' id="slots" className='text-gray-600 text-xl font-semibold pb-2 w-full'>
                            <option  value=''>please select a Slot</option>
                            <option  value='1'>08:00 - 09:00</option>
                            <option value='2'>09:00 - 10:00</option>
                            <option value='3'>10:00 - 11:00</option>
                            <option value='4'>11:00 - 12:00</option>
                            <option value='5'>12:00 - 13:00</option>
                            <option value='6'>13:00 - 14:00</option>
                            <option value='7'>14:00 - 15:00</option>
                            <option  value='8'>15:00 - 16:00</option>
                            <option value='9'>16:00 - 17:00</option>
                            <option value='10'>17:00 - 18:00</option>
                            <option value='11'>18:00 - 19:00</option>
                            <option value='12'>19:00 - 20:00</option>
                            <option value='13'>20:00 - 21:00</option>
                        </select>
                    </div>
                    <div className= 'text-gray-600 text-xl font-semibold pb-2 w-full'>Category</div>
                    <div className='text-gray-600 text-xl font-semibold pb-2 w-full col-span-2'>
                        <select onChange={(e) => setSelectedCategory(e.target.value)}  name='day' id="day" className={`${selectedCategory.length > 0 ? selectedCategory : 'bg-indigo-400' } text-gray-600 text-xl font-semibold pb-2 w-full`}>
                            <option  className='bg-white text-xl font-semibold ' value='bg-indigo-500'>indigo</option>
                            <option  className='bg-white text-xl font-semibold ' value='bg-cyan-200'>lightblue</option>
                            <option className='bg-white text-xl font-semibold ' value='bg-amber-200'>yellow</option>
                            <option className='bg-white text-xl font-semibold ' value='bg-rose-500'>red</option>
                            <option className='bg-white text-xl font-semibold ' value='bg-green-400'>green</option>
                            
                        </select>
                    </div>
                    <div></div>
                    <button data-testid="taskSubmitButton" id='submit' onClick={(e) => submit(title,location,selectedDay,selectedSlot,selectedCategory, e)} className='rounded-full mb-4 h-12 w-full outline-4 content-center bg-slate-900 text-slate-50	  hover:bg-gray-300 transition-all duration-500 hover:text-black'>Submit</button>


                </div>

            </div>


        </form>
    </div>
  )
}

export default EventModal