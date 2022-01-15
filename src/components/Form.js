import React from 'react';
// import { useState } from 'react';

export default function Form(props) {

    console.log(props)
    // const [newHabit, setNewHabit] = useState('');

    var handleSubmit = (e) => {
        console.log(" click *clicked* ")
        console.log(e);
        // props.setNewHabit(props.newHabit);
        
    }

    return (
        <div>
            <form>
            <label>
                Habit:
                <input type="text" name="habit" onChange={e=>props.setNewHabit(e.target.value)} />
            </label>
            <button type="submit"  onSubmit={handleSubmit()}>Click</button>
            </form>
        </div>
    )
}
