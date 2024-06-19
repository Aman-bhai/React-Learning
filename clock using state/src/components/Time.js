import React, { useState } from 'react'

const time = new Date().toLocaleTimeString('en-US');


const Time = () => {

    const [clock, setclock] = useState(time);

    setInterval(() => {
        setclock(new Date().toLocaleTimeString('en-US'))
    }, 1000);


    return (
        <div className='Time'>
            <div className="clock">
                <h1>{clock}</h1>

            </div>
        </div>
    )
}

export default Time
