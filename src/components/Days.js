import React from 'react';
import { useState } from 'react';
 
import styles from '../styles';



export default function Days({days}) {
    // this has to be called in the function, because the createDates is a seperate function
    // const [days, setDays] = useState(currentNumDays);

    return (
        <div>
            <ul style={styles.Ul}>
                {days}
            </ul>
        </div>
    )
}

// maybe change this to spread form an array of dates