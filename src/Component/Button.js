import React, {useState} from 'react';

function ButtonToggle () {
    const [status, setStatus] = useState(true)
    
    const buttonOnOff = () => {
        setStatus(!status)
    }
        console.log(status)
    return (
    <div>
        <button onClick={buttonOnOff} className="btn btn-info m-4"> {status ? "ON" : "OFF"} </button> 
    </div>
    )
}

export default ButtonToggle;
