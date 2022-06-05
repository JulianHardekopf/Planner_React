import './App.css';
import Sidebar from './components/Sidebar';
import CalenderHeader from './components/CalenderHeader';
import LayoutC from './components/LayoutC';
import React, { useState } from 'react'
import EventModal from './components/Eventmodal/EventModal';
import Dexie from "dexie"
import UserProvidesName from "./components/UserProvidesName";


function App() {
  //set the database 
  
  const db = new Dexie("ReactDexie");
  //create the database store
  db.version(2).stores({
      slots: "id, title, location, Category, dayid, slotid",
      user: "id, name"
  })

  const lay = () => {
    return Array(14).fill([]).map(row => new Array(8).fill(null))

  }
  const [siderbarhandler, setSidbarhandler] = useState(true)
  const [eventmodal, setEventmodal] = useState(false)

  //const [layout] = useState(lay())
  const [layouttest,setlayouttest] = useState(lay())

  UserProvidesName(db).then()

  return (
      <React.Fragment>
        {eventmodal && <EventModal  layoutdisplay2={layouttest} setlayoutdisplay2={setlayouttest}  openform={eventmodal} setopenform = {setEventmodal} db={db} />}
        <div data-testid="Apptest" className='flex flex-row'>
          <Sidebar openform={eventmodal} setopenform = {setEventmodal} isopen={siderbarhandler} setflag={setSidbarhandler} />
          <div className='flex flex-col flex-1'>
            <CalenderHeader db={db} />
            <LayoutC layoutdisplay={layouttest} db={db} />
          </div>
        </div>
      </React.Fragment>
  );

}


export default App;
