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
  let sidebarflag = true
  const showsidebar = () => {
    sidebarflag = !sidebarflag
    console.log(sidebarflag);

  }
  
  const [layout, setLayout] = useState(lay())
  return (
      <React.Fragment>
        <div className='flex flex-col'>
          <CalenderHeader onAdd={showsidebar} />
          <div className={`${sidebarflag === true ? 'flex flex-1' : ''}`}>
            {sidebarflag === true && <Sidebar />}
            <LayoutC layoutdisplay={layout} />
          </div>

        </div>
      </React.Fragment>
  );
}

export default App;
