import {useContext} from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
    const {alert} = useContext(AlertContext);
    const alertMsg = alert !== null && alert.type === "error" ?
        <p className="flex items-start mb-4 space-x-2">
            <p className="flex-1 text-base font-semibold leading-7">{alert.message}</p>
        </p> :
        null;
    return (
        <>
            {alertMsg}
        </>
    )
}

export default Alert