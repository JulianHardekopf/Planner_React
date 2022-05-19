import './App.css';
import Sidebar from './components/Sidebar';
import CalenderHeader from './components/CalenderHeader';
import LayoutC from './components/LayoutC';
import React, { useState } from 'react'
import EventModal from './components/EventModal';
import Dexie from "dexie"
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
function App() {
  //set the database 
  const db = new Dexie("ReactDexie");
  //create the database store
  db.version(1).stores({
      slots: "id, title, location, Category, dayid, slotid",
  })

  const lay = () => {
    return Array(14).fill([]).map(row => new Array(8).fill(null))

  }
  const [siderbarhandler, setSidbarhandler] = useState(true)
  const [eventmodal, setEventmodal] = useState(false)

  //const [layout] = useState(lay())
  const [layouttest,setlayouttest] = useState(lay())

  return (
      <React.Fragment>
        {eventmodal && <EventModal  layoutdisplay2={layouttest} setlayoutdisplay2={setlayouttest}  openform={eventmodal} setopenform = {setEventmodal} db={db} />}
        <div className='flex flex-row'>
          <Sidebar openform={eventmodal} setopenform = {setEventmodal} isopen={siderbarhandler} setflag={setSidbarhandler} />
          <div className='flex flex-col flex-1'>
            <CalenderHeader />
            <LayoutC layoutdisplay={layouttest} db={db} />
          </div>
        </div>
      </React.Fragment>
  );

}

export default App;
