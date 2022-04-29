import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import CalenderHeader from './components/CalenderHeader';
import LayoutC from './components/LayoutC';
import React, { useState } from 'react'
function App() {
  const lay = () => {
    return Array(14).fill([]).map(row => new Array(8).fill(null))

  }
  const [siderbarhandler, setSidbarhandler] = useState(true)
  let sidebarflag = true
  const showsidebar = () => {
    sidebarflag = !sidebarflag
    console.log(sidebarflag);

  }
  
  const [layout, setLayout] = useState(lay())
  return (
      <React.Fragment>
        <div className='flex flex-row'>
          <Sidebar isopen={siderbarhandler} setflag={setSidbarhandler} />
          <div className='flex flex-col flex-1'>
            <CalenderHeader />
            <LayoutC layoutdisplay={layout} />
          </div>
        </div>
      </React.Fragment>
  );
}

export default App;
