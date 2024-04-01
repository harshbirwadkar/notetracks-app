import AlertContext from './alertContext'
import { useState } from "react";

const ALertState = (props)=> {
    const [alert, setAlert] = useState({type : "",msg : ""})
    const ProvokeAlert = (type , msg)=>{
        setAlert({type : type,msg : msg})
        setTimeout(() => {
            setAlert({type : "",msg : ""})
        }, 3000);
    }
    return (
        <AlertContext.Provider value = {{ProvokeAlert , alert}} >
           {props.children}
        </AlertContext.Provider>
    );
}
export default ALertState