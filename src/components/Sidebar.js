import React from 'react'
import CreateEventButton from './CreateEventButton'
import control from '../assets/control.png'

const Sidebar = ({isopen, setflag}) => {
  return (
    <aside className={`${isopen ? 'w-50 ' : 'w-20' } pr-7  bg-slate-900`}>
      <img src={control} onClick={() => setflag(!isopen)} className={`${isopen ? 'left-40 ' : 'left-12' } absolute cursor-pointer top-3`} alt='sidebar icon'/>
      <div className=''>
      <CreateEventButton isopen={isopen}/>
      </div>
    </aside>
  )
}

export default Sidebar