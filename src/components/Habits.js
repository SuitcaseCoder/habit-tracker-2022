import React from 'react';
import Habit from './Habit';

export default function Habits(props) {
    console.log("props in Habits... ", props)
    return (
        <div>
            <Habit newHabit={props.newHabit}/>
        </div>
    )
}


// contains the ul that holds all the habits