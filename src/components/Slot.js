import React, { useState,useEffect } from 'react'

const Slot = ({houreslot, slotid, rowidx, db}) => {
    const [slots,setSlots] = useState('')
    let id = rowidx.toString() + slotid.toString()

    
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    // get all post at all time 
    useEffect(() => {

        //get all posts from the database
        const getSlot = async() => {
            let slot = await db.slots.where("id").equalsIgnoreCase(id).toArray();
            setSlots(slot);
        }
        getSlot();
  
    }, "")

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
                                    <h1 className='text-center text-xl font-semibold '>{slot.title}</h1>
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