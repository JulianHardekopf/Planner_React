import "./App.css";
import Sidebar from "./components/Sidebar";
import PlannerHeader from "./components/PlannerHeader";
//import CalenderHeader from './components/CalenderHeader';
import PlannerFrame from "./components/PlannerFrame";
import React, { useState } from "react";
import AddAppointmentForm from "./components/AddAppointmentForm";
import Dexie from "dexie";
import UserProvidesName from "./components/UserProvidesName";

function App() {
  //set the database

  const db = new Dexie("ReactDexie");
  //create the database store
  db.version(2).stores({
    slots: "id, title, location, Category, dayid, slotid",
    user: "id, name",
  });

  const lay = () => {
    return Array(14)
      .fill([])
      .map((row) => new Array(8).fill(null));
  };
  const [siderbarhandler, setSidbarhandler] = useState(true);
  const [AddAppointmentFormhandler, setAddAppointmentFormhandler] =
    useState(false);

  //const [layout] = useState(lay())
  const [layout, setlayout] = useState(lay());

  UserProvidesName(db).then();

  return (
    <React.Fragment>
      {AddAppointmentFormhandler && (
        <AddAppointmentForm
          layoutdisplay2={layout}
          setlayoutdisplay2={setlayout}
          openform={AddAppointmentFormhandler}
          setopenform={setAddAppointmentFormhandler}
          db={db}
        />
      )}
      <div data-testid="Apptest" className="flex flex-row">
        <Sidebar
          openform={AddAppointmentFormhandler}
          setopenform={setAddAppointmentFormhandler}
          isopen={siderbarhandler}
          setflag={setSidbarhandler}
        />
        <div className="flex flex-col flex-1">
          <PlannerHeader db={db} />
          <PlannerFrame layoutdisplay={layout} db={db} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
