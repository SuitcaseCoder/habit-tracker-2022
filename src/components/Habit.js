import React from 'react';

export default function Habit(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.newHabit}</h2>
        </div>
    )
}
