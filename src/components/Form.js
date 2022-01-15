import React from 'react';
import { useState } from 'react';

// destructured props 
export default function Form({setHabits, habits}) {

    const [newHabit, setNewHabit] = useState('');


    // const [newHabit, setNewHabit] = useState('');

    const handleSubmit = () => {
        // e.preventDefault();
    
        console.log(" click *clicked* ");
         // this uses the spread operator to bring in existing habits and 'pushes' new habit to the end of it AND it triggers a re-render; --> "soft copy" of the object, copies the values not the reference
        setHabits([...habits, newHabit]);     
        setNewHabit('');  
    }

    return (
        <div>
            <label>
                Habit:
                <input type="text" name="habit" onChange={e=>setNewHabit(e.target.value)} />
            </label>
            <button type="button"  onClick={handleSubmit}>Click</button>

        </div>
    )
}
