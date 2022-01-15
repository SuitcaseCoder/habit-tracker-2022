import React from 'react'
import { useState } from 'react';

import Form from './Form'
import Habits from './Habits'
import Days from './Days'
import ToggleBtn from './ToggleBtn'
import Month from './Month'

export default function Home() {

    const [newHabit, setNewHabit] = useState('');


    return (
        <div>
            <Month />
            <Form setNewHabit={setNewHabit} newHabit={newHabit}/>
            <hr />
            <Habits newHabit={newHabit} />
            <Days />
            <ToggleBtn />
        </div>
    )
}


// main container component