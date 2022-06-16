import React from "react";
import control from "../assets/control.png";
import { BsPlusCircle } from "react-icons/bs";
import planerlogo from "../assets/planerlogo.png";


const Sidebar = ({ isopen, setflag, openform, setopenform }) => {
  return (
    <aside className={`${isopen ? "w-50 " : "w-20"} pr-7  bg-slate-900`}>
      <img
        src={control}
        onClick={() => setflag(!isopen)}
        className={`${
          isopen ? "left-40 " : "left-12"
        } absolute cursor-pointer top-3`}
        alt="sidebar icon"
      />
      <div className="">
        <React.Fragment>
          <img
            alt="logo"
            src={planerlogo}
            className={`${isopen ? "" : "w-7 h-7"} mt-7 ml-4 rounded-full`}
          />
          {isopen ? (
            <button
              id="task"
              onClick={() => (!openform ? setopenform(!openform) : setopenform)}
              className=" ml-4 p-2 rounded-full mt-20 outline-4 flex items-center bg-gray-50  hover:bg-gray-300 transition-all duration-500"
            >
              <BsPlusCircle />
              <span className="pl-3 pr-7">Add Task</span>
            </button>
          ) : (
            <BsPlusCircle className="ml-4 w-7 h-7 bg-gray-50 rounded-full mt-20" />
          )}
        </React.Fragment>
      </div>
    </aside>
  );
};

export default Sidebar;
