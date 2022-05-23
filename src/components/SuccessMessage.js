import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const SuccessMessage = () => {
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Task was successful.',
        buttons: [
            {
                label: 'Confirm',
                onClick: () => window.location.reload()
            },
        ]
    });
    return (
        <div className='container'>
            <button onClick={this.submit}>Confirm dialog</button>
        </div>
    );
};
export default SuccessMessage

