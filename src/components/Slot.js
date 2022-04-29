import React from 'react'

const Slot = ({houreslot, slotid, rowidx}) => {
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
    return (
    <div className={`${(rowidx > 0) ? 'border border-gray-300 h-20 ' : 'h-5'}`}>
        {(rowidx === 1 && slotid ===1) && <p className='text-sm font-bold '>hey wir haben es geschafft</p> }
        {rowidx === 0 && <p className='text-sm font-bold text-center'>{day(slotid)}</p> }
       {slotid === 0 && <p className='text-sm pt-5 my-1 text-center '>{timeLabel(rowidx)}</p> }
       {rowidx > 0 && <p className='text-sm p-1 my-1 text-center'>{houreslot}</p> }
    </div>
  )
}

export default Slot