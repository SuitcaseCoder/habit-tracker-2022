import React from 'react';
import { useState } from 'react';
 



export default function Days({days}) {
    // this has to be called in the function, because the createDates is a seperate function
    // const [days, setDays] = useState(currentNumDays);

    return (
        <div>
            <ul>
                {days}
            </ul>
        </div>
    )
}

// maybe change this to spread form an array of dates