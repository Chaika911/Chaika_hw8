import React, { useEffect, useState } from  "react";

const Clock = () => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        const timeId = setInterval(() => tick(),1000);
        return () => clearInterval(timeId);
    },[]);


    const tick = () => {
        setDate(new Date())
    }
    return(
        <div>
           <h1>Привіт, світ!</h1>
           <h2>Зараз {date.toLocaleTimeString()}.</h2>
        </div>
    )
}

export default Clock;


