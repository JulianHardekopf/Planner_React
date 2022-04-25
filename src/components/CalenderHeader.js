import React from 'react'
import logoplanner from '../assets/logoplanner.png'

const CalenderHeader = ({onAdd}) => {
  return (
    <header className='px-4 py-2 flex items-center bg-slate-900'>
      <img src={logoplanner} className='mr-2 w-12 h-12 ' onClick={onAdd}/>
    </header>
  )
}

export default CalenderHeader