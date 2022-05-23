import 'react-confirm-alert/src/react-confirm-alert.css';
import {useState} from "react";
import {confirmAlert} from "react-confirm-alert"; // Import css
import '../App.css'

const UserProvidesName = (db) => {
    const [name, setName] = useState("");
    let user;

    async function provider() {
        if (await db.user.get(1) === undefined) {
            await db.user.put({
                id: 1,
                name: undefined
            });
        }
        user = await db.user.get(1);

        if (user.name === undefined) {
            confirmAlert({
                customUI: ({onClose}) => {
                    return (
                        <div className='NameProvider'>
                            <form>
                                <label>Enter your name:
                                    <input
                                        placeholder="__________________________"
                                        value={name}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                            </form>
                            <button className="submitButton" onClick={(e) => {
                                handleSubmit(e)
                                onClose();
                            }}>Confirm
                            </button>
                        </div>
                    );
                }
            });
        }
        const handleSubmit = (event) => {
            event.preventDefault();
            db.user.update(1, {name: name})
            alert("Success")
        }
    }
    return provider();
}
export default UserProvidesName