import React, { useState,useEffect,Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function deleteFromDB(db, id) {
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    try{
        db.slots.where("id").equalsIgnoreCase(id).delete();
    }catch(error) {
        console.log(error);
    }
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Dropdown(db, id) {
    return (
      <Menu as="div" className="relative text-left w-auto">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            🖋️
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
   
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
   

                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      Edit 🖋️
                    </button>
                  )}
                </Menu.Item>



                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      onClick={() => deleteFromDB(db, id)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      Delete 🗑️
                    </button>
                  )}
                </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  };

const Slot = ({houreslot, slotid, rowidx, db}) => {
    const [slots,setSlots] = useState('')
    let id = rowidx.toString() + slotid.toString()

    
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    // get all post at all time 
    useEffect(() => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        //get all posts from the database
        const getSlot = async() => { // delete the try catch block if it doesnt work
            try {
            let slot = await db.slots.where("id").equalsIgnoreCase(id).toArray();
            setSlots(slot);
            } catch(error) {
                alert(error);
            }
        }
        getSlot();
  
    }, [])

  const timeLabel = (id) => {
      if (id === 1) {
          return '08:00 - 09:00'
      }
      if (id === 2) {
        return '09:00 - 10:00'
    }
    if (id === 3) {
        return '10:00 - 11:00'
    }
    if (id === 4) {
        return '11:00 - 12:00'
    }
    if (id === 5) {
        return '12:00 - 13:00'
    }
    if (id === 6) {
        return '13:00 - 14:00'
    }
    if (id === 7) {
        return '14:00 - 15:00'
    }
    if (id === 8) {
        return '15:00 - 16:00'
    }
    if (id === 9) {
        return '16:00 - 17:00'
    }
    if (id === 10) {
        return '17:00 - 18:00'
    }
    if (id === 11) {
        return '18:00 - 19:00'
    }
    if (id === 12) {
        return '19:00 - 20:00'
    }
    if (id === 13) {
        return '20:00 - 21:00'
    }
    return ''
  }
  const day = (id) => {
    if (id === 1) {
        return 'Monday'
    }
    if (id === 2) {
      return 'Tuesday'
  }
  if (id === 3) {
      return 'Wednesday'
  }
  if (id === 4) {
      return 'Thursday'
  }
  if (id === 5) {
      return 'Friday'
  }
  if (id === 6) {
      return 'Saturday'
  }
  if (id === 7) {
      return 'Sunday'
  }
  return ''
}


let postData
if(slots.length > 0) {
      
    postData = <div className="h-20">
                {
                    slots.map(slot => {
                        
                            return <div className={`${(slot.selectedCategory !== 'bg-amber-200' && slot.selectedCategory !== 'bg-cyan-200' ) ? 'text-white ' : '' } ${slot.selectedCategory} italic h-full rounded-md`}  key={slot.id}>
                                    <h1 data-testid={`${slot.id}`} className='text-center text-xl font-semibold '>{slot.title}</h1>
                                    <p className='pl-1 '>{slot.location}</p> 
                                    </div>  
                        
                     
                              
                    })
                }
               </div>
}


    return (
    <div className={`${(rowidx > 0) ? 'border border-gray-300 h-20 ' : 'h-5'}`}>
        {postData}
        {rowidx === 0 && <p className='text-sm font-bold text-center'>{day(slotid)}</p> }
       {slotid === 0 && <p className='text-sm pt-5 my-1 text-center '>{timeLabel(rowidx)}</p> }
       {rowidx > 0 && <p className='text-sm p-1 my-1 text-center'>{houreslot}</p> }
    </div>
  )
}

export default Slot