import React from 'react';
import { DateTime } from 'luxon';
import { useState } from 'react';
 

 function createDates(){
    const dateList = [];
    for(let i = 0; i < DateTime.local().daysInMonth; i++ ){
        dateList.push(<li>{i + 1}</li>);
    }   
    return dateList;
}

export default function Days() {
    // this has to be called in the function, because the createDates is a seperate function
    const [days, setDays] = useState(createDates());

    return (
        <div>
            <ul>
                {days}
            </ul>
        </div>
    )
}

// maybe change this to spread form an array of dates