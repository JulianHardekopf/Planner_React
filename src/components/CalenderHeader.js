import React from 'react'
import { useLiveQuery } from "dexie-react-hooks";

const CalenderHeader = ({db}) => {
    const users = useLiveQuery(
        () => db.user.toArray());

        return <header className='pl-20 h-20 px-4 py-2 flex items-center bg-slate-900'>
            <p style={{color: "white"}}> User: {users?.map(user => user.name)}</p>
        </header>
}
export default CalenderHeader