import React from 'react'

 const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert-${alert.type}`}>
             <i className="fas fa-exclamation"></i>
            {alert.msg}
             </div>
        )
    )
}

export default Alert;