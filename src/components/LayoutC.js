import React from 'react'
import Slot from './Slot'

const LayoutC = ({layoutdisplay}) => {
  return (
    <div className='grid grid-cols-8 grid-rows-14'>
        {layoutdisplay.map((row,i) => (
            <React.Fragment key={i}>
                {row.map((houreslot, idx) => (
                  <div className={`${(i === 0) ? 'bg-neutral-300' : ''}`}>
                    <Slot houreslot={houreslot} key={idx} slotid={idx} rowidx={i}/>
                  </div>
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}

export default LayoutC