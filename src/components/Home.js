import React from 'react'
import { useState } from 'react';

import Form from './Form'
import Habits from './Habits'
import Days from './Days'
import ToggleBtn from './ToggleBtn'
import Month from './Month'

export default function Home() {

    const [habits, setHabits] = useState([]);


    return (
        <div>
            <Month />
            <Form setHabits={setHabits} habits={habits}/>
            <hr />
            {habits.toString()}
            <Habits habits={habits} />
            <Days />
            <ToggleBtn />
        </div>
    )
}


// main container component