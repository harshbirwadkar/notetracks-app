import React, { useContext } from 'react'
import alertContext from '../context/alert/alertContext'


const Alert = () => {
const context = useContext(alertContext)
  const{alert ,ProvokeAlert} = context 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    return (
        <div style={{height :" 56px"}}>
            <div className={`alert alert-${alert.type}`} role="alert">
                {alert.msg!=="" && `${capitalizeFirstLetter(alert.type === "danger"?"failed" : alert.type)} : ${alert.msg}` }
            </div>
        </div>
    )
}

export default Alert